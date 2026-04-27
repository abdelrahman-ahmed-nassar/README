# Project: Modawim (مداوم) — Productivity SaaS App

**Type:** Full-Stack SaaS Web Application
**Category:** Productivity Tools
**Status:** ✅ Production — Serving thousands of users
**URL:** https://modawim.com/
**Built:** 2025–2026

---

## The Name

"مداوم" (Modawim) comes from the Islamic hadith:

> أَحَبُّ الأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ
> _"The most beloved deeds to Allah are those done consistently, even if small."_

The app's mission: help users stay productive **consistently**.

---

## The Problem

Productivity tools like Notion and Obsidian are powerful — but they have a critical failure:

- The app opens to a blank page
- Users need to take courses to learn complex database concepts to build systems
- Building systems takes so long that users focus on learning the tool instead of being productive
- High setup friction kills consistency

---

## The Solution

Modawim provides all productivity tools **pre-built, ready to use immediately**, with a clean and intuitive UI that requires zero learning curve.

**The philosophy:** Simple UI does NOT mean simple features. Every tool is both easy to use AND deeply feature-rich.

---

## Tools Provided

- ✅ Task Manager
- ✅ Projects Manager
- ✅ Goal Manager
- ✅ Notes Manager
- ✅ Habits Tracker
- ✅ Journaling System
- ✅ Communities
- ✅ Educational Content
- ✅ Calendar Management
- ✅ Goals and Planning
- ✅ Archive Manager
- ✅ Global Tags System
- ✅ Analytics Dashboard
- ✅ UI Customization
- (More planned)

All tools are backed by psychological research and books on productivity and habit formation (e.g., _Atomic Habits_).

---

## Feature Deep-Dive: Task Manager

- 4 views: List, Kanban, Eisenhower Matrix, Calendar
- Add tags to tasks
- Link tasks to projects
- Set due dates and reminders
- Task priority levels
- Inbox view, Today view, Overdue view, Future tasks view
- Integrated **Pomodoro timer** for task focus sessions
- Sorters and filters

---

## Feature Deep-Dive: Habits Tracker

Despite the simple UI, this is a complete habits system:

- Group habits by topic
- Boolean habits (done / not done) and counter habits (e.g., "drink 8 glasses of water")
- Streak tracking (daily and total)
- Grid view and list view in daily tracker
- "Complete All" quick action button
- Weekly view
- Daily, weekly, monthly, and yearly analytics views
- Custom repetition modes (daily, specific days of week, intervals)
- Motivation notes per habit
- Habit archiving
- Progress bar in daily view
- Global tags system integration
- Analytics graphs and trend charts

Inspired by and backed by: _Atomic Habits_ by James Clear.

---

## Tech Stack

**Full-stack Next.js monorepo — single repository.**

| Layer              | Technology                                      |
| ------------------ | ----------------------------------------------- |
| Frontend           | Next.js · TypeScript · Shadcn UI · Tailwind CSS |
| State Management   | Zustand                                         |
| Data Fetching      | useSWR                                          |
| Backend            | Next.js API Routes                              |
| Database           | PostgreSQL (Neon) · Drizzle ORM                 |
| Caching            | Redis (Upstash)                                 |
| Queue              | UpstashQ                                        |
| Storage            | Cloudinary                                      |
| Email              | Resend                                          |
| Push Notifications | Firebase FCM                                    |
| Monitoring         | Sentry                                          |

---

## SaaS Infrastructure (Phase 1 — Reusable Template)

Before building product features, Abdelrahman spent Phase 1 building everything a SaaS app needs. This phase is now his **personal SaaS starter template** — forkable for any future idea.

**What was built:**

| Feature              | Details                                                                        |
| -------------------- | ------------------------------------------------------------------------------ |
| Landing page         | SEO-optimized, Google Analytics, Google Search Console, Microsoft Clarity      |
| Theming              | Light and dark mode                                                            |
| Localization         | Full translation/i18n system                                                   |
| Auth                 | Email + email verification + forgot password                                   |
| OAuth                | Google and GitHub sign-in                                                      |
| Authorization        | 4 roles: user, admin, content manager, support                                 |
| Announcement system  | Admin-controlled platform announcements                                        |
| In-app notifications | Real-time notification center                                                  |
| Push notifications   | Firebase FCM (installable on any device)                                       |
| Admin dashboard      | Analytics, user management, user segmentation, actions                         |
| Payment system       | Gateway integration, manual activation, coupon codes system, payment dashboard |
| Support tickets      | User-facing ticket system + support team dashboard                             |
| User feedback        | Feedback widget + admin review dashboard                                       |
| Blog system          | Full blog with S3 asset uploads and comments                                   |
| Newsletter           | Resend integration with subscriber management                                  |
| Testing              | Playwright smoke tests + E2E tests                                             |
| Security             | Rate limiting, input sanitization                                              |
| Deployment           | Dockerized full application                                                    |
| Error tracking       | Sentry                                                                         |
| Backups              | Automated backup strategy                                                      |
| PWA                  | Installable on phones and desktops, offline mode support                       |
| CI/CD                | Full GitHub Actions pipeline                                                   |
| App settings         | Configuration management via DB                                                |
| Caching              | Redis caching layer                                                            |
| Queue                | UpstashQ for async tasks (newsletters, etc.)                                   |

---

## Why This Project Is Significant

1. **It's his most technically complete project** — a full SaaS from auth to payments to monitoring to PWA
2. **It reflects personal passion** — he is a genuine productivity geek (Notion, Obsidian power user; 490-day journaling streak; built Notion systems for institutions)
3. **It's serving real users** — thousands of users in production
4. **It created a reusable SaaS template** he can fork for any future startup idea
5. **It bridges his two worlds** — software engineering + productivity/psychology
