````md
# README AI Website — Full Execution Plan

## Project Vision

Build a premium personal website where visitors can chat with an AI trained on Abdelrahman Nassar’s background, projects, experience, skills, and story.

The site should feel like:

> Reading my README through conversation.

---

# Core Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Neon PostgreSQL
- pgvector
- Drizzle ORM
- OpenAI API
- Vercel Deploy

---

# Development Rules

- Complete one phase fully before moving to next.
- Each phase must pass tests.
- No overengineering.
- Ship MVP first.
- Keep code clean and modular.
- Mobile-first responsive UI.
- Fast load times.

---

# Folder Target Architecture

```txt
/app
  /(marketing)
  /api/chat
  /chat

/components
/lib
/scripts
/data
/agents
/drizzle
/public
````

---

# PHASE 0 — Foundation Setup

## Goal

Create the project and install all dependencies.

## Tasks

* Initialize Next.js app
* Configure TypeScript
* Setup Tailwind
* Install shadcn/ui
* Install OpenAI SDK
* Install Drizzle ORM
* Install Neon driver
* Setup environment variables
* Setup linting / formatting

## AI Agent Prompt

```txt
Create a production-ready Next.js TypeScript project using App Router.

Install and configure:

- TailwindCSS
- shadcn/ui
- OpenAI SDK
- Drizzle ORM
- Neon PostgreSQL driver

Create clean folder structure.

Add .env.example file.

Use scalable architecture.
```

## Success Factors

* Project runs locally
* No TypeScript errors
* Tailwind works
* Imports clean
* Env variables load properly

## Tests

```bash
npm run dev
npm run lint
npm run build
```

---

# PHASE 1 — Content Architecture

## Goal

Transform markdown knowledge into structured AI-ready data.

## Tasks

* Audit all markdown files
* Add frontmatter metadata
* Standardize formatting
* Categorize all content
* Remove duplicates
* Improve readability

## Metadata Example

```md
---
title: Modawim
category: project
priority: high
tech:
 - Next.js
 - PostgreSQL
---
```

## AI Agent Prompt

```txt
Review all markdown files inside /data.

Standardize every file with frontmatter metadata:

- title
- category
- tags
- priority

Improve formatting while preserving meaning.

Prepare files for AI retrieval.
```

## Success Factors

* Every file has metadata
* No malformed markdown
* Content easy to parse
* Categories consistent

## Tests

* Parse all files successfully
* No empty titles
* No duplicate categories

---

# PHASE 2 — Database Setup

## Goal

Create Neon PostgreSQL + pgvector schema.

## Tasks

* Connect Neon DB
* Enable pgvector
* Setup Drizzle
* Create documents table
* Create migrations

## Schema

```sql
documents
- id
- title
- category
- source
- content
- metadata
- embedding
- created_at
```

## AI Agent Prompt

```txt
Setup Neon PostgreSQL with Drizzle ORM.

Enable pgvector.

Create documents table optimized for semantic search.

Generate migrations and typed schema.
```

## Success Factors

* DB connected
* Migration runs
* Table exists
* Vector column works

## Tests

* Insert row manually
* Select row
* Migration repeatable

---

# PHASE 3 — Ingestion Pipeline

## Goal

Convert markdown files into embeddings stored in DB.

## Tasks

* Read markdown files recursively
* Parse frontmatter
* Chunk content
* Generate embeddings
* Insert chunks into DB
* Avoid duplicates

## AI Agent Prompt

```txt
Build /scripts/embed.ts

Requirements:

- Scan /data recursively
- Parse markdown frontmatter
- Split content into 300-500 token chunks
- Generate OpenAI embeddings
- Store in Neon documents table
- Upsert by source path + chunk index
```

## Success Factors

* All files indexed
* No duplicate chunks
* Embeddings generated
* Script rerunnable safely

## Tests

```bash
npm run embed
```

Verify:

* row count > 0
* multiple sources indexed

---

# PHASE 4 — Semantic Search Engine

## Goal

Retrieve best content chunks for any user query.

## Tasks

* Embed user question
* Vector similarity search
* Return top relevant chunks
* Add score threshold

## AI Agent Prompt

```txt
Create lib/search.ts

Function:

searchKnowledge(query: string)

Steps:

- Generate embedding
- Search top 5 relevant chunks from Neon pgvector
- Return ranked chunks with metadata
```

## Success Factors

* Relevant results returned
* Fast response time
* Correct source attribution

## Tests

Queries:

* What is Modawim?
* Does Abdelrahman know React?
* What startups did he build?

Results must match relevant files.

---

# PHASE 5 — AI Chat API

## Goal

Create backend chatbot endpoint.

## Tasks

* Build /api/chat route
* Use system prompt
* Inject retrieved chunks
* Stream response
* Error handling

## AI Agent Prompt

```txt
Build /app/api/chat/route.ts

Flow:

1. Receive user message
2. Search knowledge base
3. Build context prompt
4. Generate streamed answer using OpenAI
5. Return sources used

Rules:

- Only answer from context
- If unknown, say so
- Professional tone
```

## Success Factors

* Endpoint stable
* Streaming works
* Uses knowledge retrieval
* No hallucinations

## Tests

POST:

```json
{
  "message": "What projects did he build?"
}
```

Must answer from real files.

---

# PHASE 6 — Premium Frontend UI

## Goal

Build beautiful landing page + chatbot.

## Tasks

* Hero section
* Chat interface
* Streaming messages
* Mobile responsive
* Suggested prompts
* Loading states

## AI Agent Prompt

```txt
Create premium modern homepage for README AI.

Sections:

- Hero
- Value proposition
- Chatbot interface
- Suggested questions
- CTA footer

Style:

- Clean
- Developer aesthetic
- Premium SaaS feel
```

## Success Factors

* Beautiful UI
* Responsive
* Fast
* Smooth chat experience

## Tests

* Mobile works
* Desktop works
* Chat usable

---

# PHASE 7 — Memory & Conversation Quality

## Goal

Improve multi-turn chat quality.

## Tasks

* Preserve previous messages
* Better context windows
* Avoid repetition
* Maintain tone

## AI Agent Prompt

```txt
Upgrade chatbot to support conversation memory.

Use previous messages intelligently.

Keep answers concise, helpful, natural.
```

## Success Factors

* Follow-up questions understood
* Context preserved
* Better continuity

## Tests

Ask:

1. Tell me about Modawim
2. What stack did he use there?

Second answer should understand "there".

---

# PHASE 8 — Trust & Sources

## Goal

Show evidence behind answers.

## Tasks

* Show source files used
* Confidence labels
* Expandable references

## AI Agent Prompt

```txt
Enhance chat UI to display sources used for each answer.

Show clickable source chips such as:

- modawim.md
- experience.md
```

## Success Factors

* Transparent answers
* Higher trust
* Easy exploration

## Tests

Every factual answer shows sources.

---

# PHASE 9 — Conversion Optimization

## Goal

Turn visitors into opportunities.

## Tasks

* Resume download
* Contact CTA
* Hire me button
* Social links
* Email capture optional

## AI Agent Prompt

```txt
Add conversion-focused CTA blocks.

Goal:

Turn recruiters / founders into leads.

Include:

- Hire Abdelrahman
- Download Resume
- LinkedIn
- GitHub
```

## Success Factors

* Clear CTA visible
* Easy contact path
* Strong credibility

## Tests

Can user reach contact in <2 clicks?

---

# PHASE 10 — Analytics & Monitoring

## Goal

Measure usage and improve product.

## Tasks

* PostHog
* Vercel Analytics
* Error logging
* Popular questions tracking

## AI Agent Prompt

```txt
Integrate analytics.

Track:

- chat started
- message sent
- source clicks
- CTA clicks
- conversion events
```

## Success Factors

* Events visible
* Funnel measurable
* Errors logged

## Tests

Send test events successfully.

---

# PHASE 11 — SEO & Performance

## Goal

Make site discoverable and fast.

## Tasks

* Metadata
* OpenGraph
* Sitemap
* robots.txt
* image optimization
* lazy loading

## AI Agent Prompt

```txt
Optimize project for SEO and performance.

Target Lighthouse 90+.
```

## Success Factors

* Fast load
* Search indexable
* Great previews

## Tests

Run Lighthouse.

---

# PHASE 12 — Deployment

## Goal

Launch production version.

## Tasks

* Deploy to Vercel
* Add env vars
* Connect Neon prod DB
* Domain setup

## AI Agent Prompt

```txt
Prepare project for production deployment on Vercel.

Ensure secure env handling and zero build errors.
```

## Success Factors

* Live site works
* Chat works
* SSL enabled
* Domain connected

## Tests

* Visit production URL
* Ask chatbot question
* Validate analytics

---

# PHASE 13 — Post Launch Improvements

## Future Ideas

* Voice chat
* Arabic + English modes
* Theme switcher
* Recruiter mode
* Timeline mode
* Project demos
* AI resume tailoring
* Auto lead qualification

---

# Definition of Done (Final)

Project is complete when:

* Visitors can ask about Abdelrahman naturally
* AI answers accurately using real data
* UI feels premium
* Site converts visitors into leads
* Fast + stable + deployable
* Easily maintainable

---

# Daily Workflow

For each phase:

1. Copy prompt to coding AI agent
2. Implement phase
3. Run tests
4. Fix issues
5. Commit changes
6. Move next phase

---

# Recommended Git Commits

```txt
feat: initialize project foundation
feat: add markdown ingestion pipeline
feat: implement vector search
feat: build ai chat api
feat: create premium landing page
feat: add analytics and seo
feat: deploy production release
```

---

# Immediate Next Move

Start with:

> PHASE 0 — Foundation Setup

```
```
