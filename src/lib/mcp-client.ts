import { spawn, ChildProcess } from "child_process";
import path from "path";

interface JsonRpcRequest {
  jsonrpc: "2.0";
  id: number;
  method: string;
  params?: Record<string, unknown>;
}

interface JsonRpcResponse {
  jsonrpc: "2.0";
  id: number;
  result?: unknown;
  error?: { code: number; message: string };
}

/**
 * Spawn the MCP server, send a series of JSON-RPC calls, and collect responses.
 * The server is short-lived: one spawn per API request.
 */
export async function callMcpTools(
  toolCalls: { name: string; arguments: Record<string, unknown> }[]
): Promise<Record<string, unknown>[]> {
  const mcpServerPath = path.resolve(process.cwd(), "mcp-server", "dist", "index.js");

  return new Promise((resolve, reject) => {
    const proc: ChildProcess = spawn("node", [mcpServerPath], {
      stdio: ["pipe", "pipe", "pipe"],
    });

    let outputBuffer = "";
    const results: Record<string, unknown>[] = [];
    let currentId = 0;
    const totalExpected = toolCalls.length + 1; // +1 for initialize
    let responsesReceived = 0;

    const timeout = setTimeout(() => {
      proc.kill();
      reject(new Error("MCP server timed out after 15s"));
    }, 15000);

    proc.stdout!.on("data", (chunk: Buffer) => {
      outputBuffer += chunk.toString();

      // Split cleanly on newlines (MCP stdio protocol uses line-delimited JSON)
      const lines = outputBuffer.split("\n");
      // The last element is either empty (perfect split) or an incomplete line. Keep it in the buffer.
      outputBuffer = lines.pop() ?? "";

      for (const line of lines) {
        if (!line.trim()) continue;
        try {
          const response: JsonRpcResponse = JSON.parse(line);
          
          // Only count actual responses (must have an id) — ignore notifications
          if (response.id !== undefined) {
             responsesReceived++;

             if (response.id > 1) {
               // Tool call response (id > 1 because id=1 is initialize)
               if (response.error) {
                 results.push({ error: response.error.message });
               } else {
                 const resultObj = response.result as { content?: { type: string; text: string }[] };
                 if (resultObj?.content?.[0]?.text) {
                   try {
                     results.push(JSON.parse(resultObj.content[0].text));
                   } catch {
                     results.push({ text: resultObj.content[0].text });
                   }
                 } else {
                   results.push(response.result as Record<string, unknown>);
                 }
               }
             }

             // If we've gotten all responses, clean up
             if (responsesReceived >= totalExpected) {
               clearTimeout(timeout);
               proc.kill();
               resolve(results);
             }
          }
        } catch (e) {
          // Log parsing errors if needed, but continue
          console.error("[MCP Client] Failed to parse line:", line.substring(0, 50));
        }
      }
    });

    proc.stderr!.on("data", (chunk: Buffer) => {
      // Log errors but don't fail — MCP server may emit debug info
      console.error("[MCP stderr]", chunk.toString());
    });

    proc.on("error", (err) => {
      clearTimeout(timeout);
      reject(new Error(`Failed to spawn MCP server: ${err.message}`));
    });

    proc.on("close", (code) => {
      clearTimeout(timeout);
      if (results.length > 0) {
        resolve(results);
      } else if (code !== 0) {
        reject(new Error(`MCP server exited with code ${code}`));
      } else {
        resolve([]);
      }
    });

    // Send initialize first
    const initMessage: JsonRpcRequest = {
      jsonrpc: "2.0",
      id: ++currentId,
      method: "initialize",
      params: {
        protocolVersion: "2025-03-26",
        capabilities: {},
        clientInfo: { name: "careerforge-api", version: "1.0.0" },
      },
    };
    proc.stdin!.write(JSON.stringify(initMessage) + "\n");

    // Required by MCP protocol after initialize
    proc.stdin!.write(JSON.stringify({ jsonrpc: "2.0", method: "notifications/initialized" }) + "\n");

    // Then send all tool calls
    for (const call of toolCalls) {
      const toolMessage: JsonRpcRequest = {
        jsonrpc: "2.0",
        id: ++currentId,
        method: "tools/call",
        params: {
          name: call.name,
          arguments: call.arguments,
        },
      };
      proc.stdin!.write(JSON.stringify(toolMessage) + "\n");
    }
  });
}

/**
 * Convenience: call a single MCP tool and return its result.
 */
export async function callMcpTool(
  name: string,
  args: Record<string, unknown>
): Promise<Record<string, unknown>> {
  const results = await callMcpTools([{ name, arguments: args }]);
  return results[0] ?? {};
}
