# Projects — Abdelrahman Nassar

---

## 1. Al-Azhar Electronics Showcase Platform

**Type:** Full-Stack Web Application (Official University Platform)
**Status:** Production — Live & Active
**URL:** https://al-azhar-electronics.netlify.app/
**Impact:** 59+ student projects, 75+ research teams

### Overview

As a first-year Computer Engineering student, instead of submitting a hardware project for his electronics course, Abdelrahman proposed and built a software solution that addressed a real institutional gap: no centralized archive existed for student hardware projects.

He designed and developed an official platform where students create accounts, form teams, and upload their engineering projects (documentation, videos, tech stack used). The platform was officially adopted by the faculty and became a permanent part of the department's academic ecosystem.

### Tech Stack

Next.js · TypeScript · Tailwind CSS · Supabase · PostgreSQL · Cloudinary

### Key Features

- Project browsing & search (by team, student name, or project)
- Team profiles with specialties, members, and projects
- Full project pages with goals, tech, videos, documents, and contributors
- Auto-generated student portfolio pages
- Student dashboard with login, CRUD operations, team creation, and project submission
- Futuristic UI inspired by electronics and circuit design

### Official Recognition

- ✅ Approved and adopted by the department as the official student project repository
- 👨‍🏫 Used by faculty to review and evaluate student projects
- 🏆 Presented at AZ-SENCS (official annual engineering exhibition)
- 🎓 Demonstrated to the Dean of Faculty, Head of Department, and University President — received high praise
- ☁️ Hosted on university servers as a centralized submission system

---

## 2. LMS Platform (Heba El-Sayed & Learn Shift Clients)

**Type:** Full-Stack Learning Management System
**Status:** Production — Multiple live deployments
**Client Demo:** https://heba-elsayed.com/
**Startup:** https://learn-shift.org/ (see `startup.md` for the business story)

### Overview

Built for a private teacher to transition from offline to online teaching. This evolved into the core product of the Learn Shift startup, now serving 5+ teachers and 20,000+ students.

### Platform Architecture: Two Parts

#### Part 1 — Student-Facing Website (Next.js)

- Landing page + student dashboard
- Account creation, login, personal dashboard
- Course browsing and video watching
- File downloads, quizzes, exams
- Group links, summaries/notes
- Trial video previews for unpurchased courses
- Notifications system
- Balance top-up via **Fawry payment gateway** (automatic) or manual support team verification + code system
- Analytics dashboard for the student
- Exam submissions with wrong-answer explanations
- **WhatsApp integration** — exam results auto-sent to parents via Twilio
- Lesson schedule viewer
- Monthly subscription system for mixed online/offline students
- SEO-optimized (appeared in first Google Search results), Google Analytics, Google Search Console
- Light + dark mode, fully responsive, accessible

#### Part 2 — Admin Dashboard (React)

- **Course Builder:** Create courses, organize into units, upload videos (Bunny.net for security or YouTube unlisted), files (S3 or VPS), links, notes, exams
- Video protection: script preventing dev tools, page source, and link extraction
- **One-device enforcement:** System to prevent account sharing
- **Advanced Data Tables:**
  - Searching, sorting, filtering
  - Quick create/edit/delete modals
  - React Query caching
  - Pagination, Excel export, skeleton loading, URL syncing
- **Bank Exam System:** Create question banks by sections/ideas; add answers, images, difficulty, explanations; auto-generate exams
- Track exam answers and question analytics
- Fawry payment tracking + manual code system
- Financial analytics dashboard
- Platform analytics (visits, students, courses)
- Role management, announcements, notifications
- Arabic + English (i18n), dark + light mode
- **Tech:** React.js + React Query + Ant Design + Tailwind + TypeScript

### Backend (NestJS)

- **Framework:** NestJS (clean modular architecture, 40+ modules)
- **Database:** MongoDB (NoSQL)
- JWT authentication + role-based access control
- Single-device enforcement to prevent account sharing
- Email verification via Google SMTP
- WhatsApp integration via Twilio
- Fawry payment gateway + webhooks
- Upload system: Cloudinary or VPS
- Caching layer: Redis
- Worker/queue system: BullMQ + Redis (for notifications and emails)
- Monitoring: Pino logger + Grafana + Loki + Promtail
- Full Swagger API documentation
- Security: rate limiting, XSS, CSRF, injection protection
- Fully Dockerized (4 services: Node.js API, MongoDB, Redis, monitoring)

### DevOps (First Full VPS Setup)

- Learned Linux basics, SSH, VPS setup on Digital Ocean
- Dockerized all services (5 containers: Next.js, NestJS, MongoDB replica set, Redis, monitoring dashboard + static React app)
- Nginx as reverse proxy + static file serving
- SSL certificates + domain setup + Cloudflare DNS protection
- Backup strategy (provider backups + manual strategy)
- Pressure tested VPS for multi-user capacity
- **GitHub Actions CI/CD pipeline** — push-to-deploy with zero downtime

---

## 3. Muslim House & Way to Islam (Sessions-Based LMS Extension)

**Type:** Extended LMS with Live Session Management
**Status:** Production
**Muslim House:** https://muslim-house.com/
**Way to Islam:** https://waytoislam.academy/

### Overview

A new client — an Islamic academy teaching Quran, Arabic, and Islamic Studies via 1-on-1 sessions and recorded courses — needed a platform. Instead of building from scratch, Abdelrahman extended the existing LMS product to support session-based learning.

### New Features Added

- Multi-teacher architecture (one admin, many teachers)
- Admin assigns teachers to students
- **Session Calendar:** Admin/team manages meeting times for students and teachers
- Session join/leave time tracking for teachers and students
- **Teacher Reports:** Auto-saved and auto-sent to parents after each session
- Student dashboard: session calendar, session records, reports, analytics
- **Subscription & Plans Management:** Admin tracks subscription status based on session completion/missed/cancelled
- **Teacher Salary Management:** Based on session hours, commitment (on-time join/leave), with bonus and deduction support
- Admin analytics: sessions, students, subscriptions, filtering by subscription status
- Full custom UI matching the Islamic brand identity
- Landing page in **Arabic and English** (bilingual) for broader audience
- Monorepo architecture reused from existing product — new client deployed in under one day

---

## 4. Al-Mostafa Kindergarten ERP System

**Type:** Full ERP System for Nursery/Kindergarten Management
**Status:** Production — Used daily
**URL:** https://almostafa.academy/

### Overview

A comprehensive ERP system for a large nursery managing 100+ employees and 1,000+ children, built as a new product (same tech stack, not reusing LMS codebase).

### Modules Built

| Module                        | Key Features                                                                                                              |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **Public Website**            | Intro, programs, admissions, gallery, contact, online registration, parent login, appointment booking                     |
| **Role-Based Access Control** | 8 roles: Super Admin, Management, HR, Teachers, Accountants, Receptionists, Transport Supervisors, Parents                |
| **Employee Management**       | Profiles, attendance, contracts, salary setup, leave requests, document storage                                           |
| **Student Management**        | Full profiles, medical info, emergency contacts, enrollment history, document upload                                      |
| **Parent Portal**             | Child profile, new applications, renewal requests, invoices, payment history, notifications, appointment booking, reports |
| **Class & Seating**           | Classrooms, student/teacher assignment, capacity, transfers, daily class reports                                          |
| **Transportation / Bus**      | Bus profiles, drivers, routes, student assignment, pickup/drop lists, daily PDF sheets, parent notifications              |
| **Admissions & Renewals**     | Online applications, document upload, review workflow, interview scheduling, approval/rejection, waitlist                 |
| **Academic Evaluation**       | Assessments, skill tracking, teacher notes, grades, progress analytics, printable reports                                 |
| **Billing & Finance**         | Fee creation, tuition invoices, registration/bus fees, discounts, installment payments, receipts, parent portal           |
| **Accounting & Reports**      | Income/expense tracking, budget, cash flow, P&L, exports, daily/monthly/annual reports                                    |
| **Payroll System**            | Staff salaries, bonuses, deductions, payslip PDFs, payroll history, monthly reports                                       |
| **Notifications**             | Email, SMS (optional), in-app, push notifications — payments, interviews, bus alerts, announcements                       |
| **PDF Generation**            | Student reports, invoices, payslips, bus lists, attendance sheets, class lists, admission forms                           |

---

## 5. Modawim (مداوم) — Productivity SaaS App

**Type:** Full SaaS Application (Next.js full-stack)
**Status:** Production — Serving thousands of users
**URL:** https://modawim.com/

### The Problem

Productivity tools like Notion and Obsidian have high learning curves. Users spend more time setting up systems than actually being productive.

### The Solution

Modawim (from the Islamic hadith — "The most beloved deeds to Allah are those done consistently") provides all productivity tools pre-built, with a simple UI, optimal UX, and everything ready to use immediately.

### Tools Provided

- Task Manager (4 views: list, kanban, Eisenhower matrix, calendar)
- Projects Manager
- Goal Manager
- Habits Tracker
- Journaling System
- Archive Manager
- Global Tags System
- Analytics Dashboard
- UI Customization

### Habits Tracker (Example of Feature Depth)

Despite the simple UI, features are rich:

- Group habits by topic
- Boolean and counter-based habits (e.g., "drink 8 glasses of water")
- Streak tracking, grid and list views, weekly/monthly/yearly views
- Progress bar in daily view, custom repetition modes, motivation notes
- Analytics and graphs, archive support
- Backed by psychology (inspired by _Atomic Habits_)

### Tech Stack

- **Frontend/Backend:** Next.js (full-stack, single monorepo) + TypeScript + Shadcn UI + Tailwind + Zustand + useSWR
- **Database:** PostgreSQL (Neon) + Drizzle ORM
- **Caching:** Redis (Upstash)
- **Queue:** UpstashQ
- **Storage:** Cloudinary (images)
- **Email:** Resend
- **Push Notifications:** Firebase FCM
- **Monitoring:** Sentry

### SaaS Infrastructure Built (Phase 1 — reusable template)

- Landing page, SEO, Google Analytics, Search Console, Microsoft Clarity
- Light/dark mode, translation system
- Auth: email + email verification + forgot password + OAuth (Google, GitHub)
- Authorization: 4 roles (user, admin, content manager, support)
- Announcement system, in-app notifications, push notifications (FCM)
- Admin dashboard: analytics, user management, user segmentation
- **Payment system:** gateway integration, dashboard, manual activation, coupon codes
- Customer support ticket system
- User feedback system
- Blog system with S3 asset uploads + comments
- Newsletter system (Resend)
- Smoke testing with Playwright + E2E tests
- Rate limiting, Dockerized, Sentry monitoring, backups
- PWA support (installable on phones and desktops, offline mode)
- Full GitHub Actions CI/CD pipeline
- App settings configuration DB, Redis caching layer

---

## 6. NASA Space Apps Challenge — Curiosity X

**Type:** 3D Web Simulator
**Event:** NASA Space Apps Challenge 2025 — Cairo Hackathon at Zewail University (Oct 2025)
**Team:** Curiosity X
**Challenge:** Meteor Madness
**URL:** https://curiosity-x.netlify.app/

### What They Built

An interactive web tool combining NASA asteroid data and USGS geological data to simulate the impact of a fictional asteroid "Impactor-2025" on Earth.

**Features:**

- Physics-based trajectory calculation
- Crater size and collision energy estimation
- Environmental effects simulation (tsunamis, earthquakes, atmospheric changes)
- Interactive maps for impact locations
- 3D asteroid trajectory visualization using **Three.js**
- Protection strategy simulator (deflection methods, timing comparisons)
- Gamification mode: "Defend the Earth"
- Educational tooltips and storytelling

**Learned Three.js specifically for this project.** Did not win but received a participation certificate.

---

## 7. QuickTube — YouTube Downloader

**Type:** Python Desktop Application (.exe)
**Status:** Published
**Website:** https://abdelrahman-ahmed-nassar.github.io/QuickTube-Youtube-Downloader/
**GitHub:** https://github.com/abdelrahman-ahmed-nassar/QuickTube-Youtube-Downloader
**GitHub Stars:** 100+

### What It Does

A user-friendly Python desktop app for downloading YouTube videos and playlists. Under the hood it wraps `yt-dlp` and `ffmpeg`, but packages everything into a single `.exe` so users can start immediately without any configuration, library installations, or command-line knowledge.

---

## 8. Chrome Extensions

Small utility extensions built to solve personal problems:

| Extension                   | Repo                                                                                   |
| --------------------------- | -------------------------------------------------------------------------------------- |
| Facebook Feed Eradicator    | https://github.com/abdelrahman-ahmed-nassar/facebook-feed-eradicator-chrome-extensions |
| Unlike YouTube Videos       | https://github.com/abdelrahman-ahmed-nassar/unlike-youtube-videos-chrome-extensions    |
| LinkedIn Accept Connections | https://github.com/abdelrahman-ahmed-nassar/LinkedIn-accept-connections-extensions     |

---

## 9. Learning Projects (Smaller / Course Projects)

| Project          | Description                                               | URL                                                  |
| ---------------- | --------------------------------------------------------- | ---------------------------------------------------- |
| Forkify          | Recipe finder app with 1M+ recipes, ingredient scaling    | https://abdelrahman-forkify.netlify.app/             |
| Omnifood         | Modern restaurant landing page, fully responsive          | https://abdelrahman-ahmed-nassar.github.io/omnifood/ |
| Bankist App      | Banking simulation with transfers and transaction history | https://abdelrahman-ahmed-nassar.github.io/bankist/  |
| Mapty            | Workout tracker with map integration (running, cycling)   | https://abdelrahman-ahmed-nassar.github.io/mapty/    |
| Pig Game         | Dice game built in JavaScript                             | —                                                    |
| Bankist Website  | Marketing landing page for Bankist                        | —                                                    |
| Notes App        | Node.js CLI notes application                             | —                                                    |
| Weather App      | Node.js weather CLI app                                   | —                                                    |
| Chat App         | Real-time chat application                                | —                                                    |
| Serverless Stack | AWS serverless project                                    | —                                                    |

**Total Projects:** 20+

---

## Competitive Programming

- Platform: Codeforces
- Profile: https://codeforces.com/profile/Abdelrahman_Ahmed_Nassar
- Problems solved: **200+**
- Language used: C++
- Currently paused due to project workload — planning to resume and participate in **ECPC** in his 3rd year of college
