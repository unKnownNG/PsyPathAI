<div align="center">

# 🧭 CareerForge

**AI-powered, psychology-aware career guidance for engineering college students**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3ECF8E?logo=supabase)](https://supabase.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://typescriptlang.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

[Live Demo](#) · [Report a Bug](issues) · [Request a Feature](issues)

</div>

---

## ✨ What is CareerForge?

CareerForge helps engineering students figure out **what career path actually fits them** — not just based on generic advice, but by combining psychological profiling (MBTI + Holland code) with AI-driven, personalized chat guidance.

Students take a quick quiz, get a personality + career analysis, and can then chat with **CareerBot** — an AI advisor that knows their profile and gives advice that resonates with *how they think*.

---

## 🚀 Features

- **🧠 Psychology-Aware Quiz** — MBTI personality type, Holland code (RIASEC), interests & hobbies, career goals, and learning style
- **🤖 CareerBot** — AI chat powered by GPT-5 Mini (via Pollinations), with context injected from a custom MCP server containing 6 psychology tools
- **🔐 Google & GitHub OAuth** — Sign in with one click, no passwords
- **💾 Persistent Profiles & Chat History** — All data stored in Supabase PostgreSQL with Row Level Security
- **🗺️ Career Roadmaps** — Curated roadmap data for 50+ career paths across engineering, design, and non-engineering domains
- **📡 MCP Server** — A local Model Context Protocol server that provides real-time personality profiling, Holland code analysis, career alignment scoring, and learning curve advice to the AI

---

## 🏗️ Architecture

```
careerforge/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Landing page
│   │   ├── onboarding/           # Multi-step quiz (MBTI, Holland, interests, goals)
│   │   ├── bot/                  # CareerBot chat interface
│   │   ├── roadmaps/             # Career roadmaps explorer
│   │   └── api/
│   │       ├── chat/             # POST /api/chat (streaming), GET /api/chat/sessions, GET /api/chat/messages
│   │       └── profile/          # GET & PUT /api/profile
│   ├── lib/
│   │   ├── supabase/             # Supabase client (browser, server, middleware)
│   │   ├── mcp-client.ts         # Spawns MCP server as child process, sends JSON-RPC tool calls
│   │   └── llm.ts                # Pollinations API integration (streaming + non-streaming)
│   └── components/
│       ├── Navbar.tsx            # Navigation with Auth button
│       └── AuthButton.tsx        # Google / GitHub OAuth button
├── mcp-server/
│   └── src/
│       ├── index.ts              # MCP server entry (stdio transport)
│       ├── tools/                # 4 tool modules: personality, career, learning, progress
│       └── data/                 # Static data: mbti-profiles, career-matrix, holland-map, roadmaps
├── supabase/
│   └── schema.sql                # Full DB schema with RLS policies
└── middleware.ts                 # Next.js middleware (Supabase session refresh)
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Language** | TypeScript |
| **Auth** | Supabase Auth (Google & GitHub OAuth) |
| **Database** | Supabase PostgreSQL (with RLS) |
| **AI / LLM** | Pollinations AI (OpenAI GPT-5 Mini — free, no key required) |
| **AI Context** | Custom MCP (Model Context Protocol) server over stdio |
| **Styling** | Vanilla CSS with custom design system |

---

## ⚙️ Setup & Installation

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/careerforge.git
cd careerforge
```

### 2. Install Dependencies

```bash
# Install Next.js app dependencies
npm install

# Install MCP server dependencies
cd mcp-server && npm install && npm run build && cd ..
```

### 3. Set Up Supabase

1. Create a new project at [database.new](https://database.new)
2. Go to **SQL Editor** and run the contents of `supabase/schema.sql`
3. Go to **Authentication → Providers** and enable **Google** and/or **GitHub** OAuth
4. Set your OAuth callback URL to: `https://<YOUR_PROJECT_REF>.supabase.co/auth/v1/callback`

### 4. Configure Environment Variables

Create a `.env.local` file in the root of the project:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Pollinations AI (get your key at enter.pollinations.ai)
POLLINATIONS_API_KEY=your_pollinations_key
```

> **Note:** `.env.local` is already in `.gitignore` and will never be committed to version control.

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## 🗄️ Database Schema

The Supabase database includes the following tables:

| Table | Description |
|---|---|
| `profiles` | User profile: MBTI type, Holland code, goal, year, interests, learning style |
| `chat_sessions` | Chat session metadata (title, timestamps) |
| `chat_messages` | Individual messages (role: user/bot, content, session link) |

All tables have **Row Level Security (RLS)** enabled — users can only read and write their own data. A database trigger automatically creates a profile row when a new user signs up.

---

## 🤖 How CareerBot Works

When you send a message to CareerBot:

1. **Auth Check** — Verifies you're logged in via Supabase
2. **Profile Fetch** — Loads your MBTI type, Holland code, and interests
3. **MCP Tools** — Spawns the local MCP server and calls 3 tools:
   - `get_personality_profile` → Deep MBTI analysis & cognitive stack
   - `get_nudge_advice` → How to frame advice for your personality type
   - `get_career_alignment` → Top career paths ranked for your profile
4. **System Prompt** — Injects all the above context into the AI's instructions
5. **Stream Response** — Sends the chat to Pollinations AI and streams the reply token-by-token
6. **Save to DB** — Saves the bot's response to your chat history in Supabase

---

## 🔑 Getting a Pollinations API Key

1. Visit [enter.pollinations.ai](https://enter.pollinations.ai)
2. Sign in and generate a **secret key** (for server/backend use)
3. Add it to your `.env.local` as `POLLINATIONS_API_KEY`

The free tier model used is `openai` (GPT-5 Mini), which is fast, capable, and available on the free plan.

---

## 📝 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
