import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { registerPersonalityTools } from "./tools/personality.js";
import { registerCareerTools } from "./tools/career.js";
import { registerLearningTools } from "./tools/learning.js";
import { registerProgressTools } from "./tools/progress.js";

const server = new McpServer({
  name: "careerforge-mcp",
  version: "1.0.0",
});

registerPersonalityTools(server);
registerCareerTools(server);
registerLearningTools(server);
registerProgressTools(server);

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  // MCP servers communicate via stdio — no console.log here to avoid polluting the stream
}

main().catch((err) => {
  process.stderr.write(`Fatal error: ${err}\n`);
  process.exit(1);
});
