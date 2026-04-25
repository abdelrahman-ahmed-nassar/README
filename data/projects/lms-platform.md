# Project: LMS Platform (Learn Shift Core Product)

**Type:** Full-Stack Learning Management System
**Category:** EdTech SaaS Product
**Status:** ✅ Production — Multiple live deployments
**Original Client:** Teacher Heba El-Sayed → https://heba-elsayed.com/
**Other Clients:** https://mohammed-hekal.com/ | https://abulilah.com/
**Startup:** Learn Shift → https://learn-shift.org/
**Demo (Student):** https://demo.learn-shift.org/
**Demo (Admin):** https://dashboard-demo.learn-shift.org/
**Built:** First year of Computer Engineering (then evolved into a startup product)

---

## The Goal

Enable a private teacher to transition from offline-only teaching to a full online e-learning business, with a platform that handles courses, students, exams, payments, and analytics.

This project later became the core product of the **Learn Shift** startup.

---

## Architecture: Two Parts

The platform consists of two separate applications:

---

### Part 1 — Student-Facing Website

**Tech:** Next.js · TypeScript · Tailwind CSS · Dockerized on VPS

**Features:**
- Landing page (teacher intro, courses, testimonials)
- Student account creation and login
- Personal student dashboard
- Course browsing and video watching (Bunny.net or YouTube protected)
- File downloads (PDFs, materials)
- Quizzes and exams with wrong-answer explanations
- Group chat links and course summaries/notes
- Trial video previews for unpurchased courses
- In-app notifications system
- Lesson schedule viewer
- Student progress and analytics dashboard
- Exam submission history with detailed error breakdowns

**Payments:**
- Automatic **Fawry payment gateway** integration (Egyptian market)
- Manual support team flow: student pays → support verifies → issues a code → student redeems for account balance → buys courses
- **Monthly subscription system** for hybrid online/offline students

**Parent Integration:**
- Exam results automatically sent to parents via **WhatsApp (Twilio)**

**SEO & Analytics:**
- Appeared in first-page Google Search results
- Google Search Console and Google Analytics integrated
- Next.js SEO best practices applied throughout

**UX & Accessibility:**
- Light and dark mode
- Fully responsive (mobile, tablet, desktop)
- Accessibility-conscious design

---

### Part 2 — Admin Dashboard

**Tech:** React.js · React Query · Ant Design · Tailwind CSS · TypeScript · Hosted as static on VPS

**Course Builder:**
- Create and organize courses into units
- Each unit can contain: videos, files, exams, links, notes/summaries
- Upload images to S3 or VPS (based on teacher budget)
- Upload videos to **Bunny.net** (high security) or YouTube (unlisted + protected)

**Video Protection:**
- Script preventing dev tools access, page source viewing, and video link extraction
- Students on YouTube-hosted videos cannot share or extract the video URL

**One-Device Enforcement:**
- System forces each student account to be logged in from only one device at a time — prevents account sharing

**Advanced Data Tables:**
All major data displayed in feature-rich tables:
- Searching, sorting, filtering
- Quick create / edit / delete modals
- React Query caching
- Pagination
- Excel export
- Skeleton loading states
- URL-synced filters (shareable, refresh-safe)

**Bank Exam System:**
Not just simple exams — a full question bank system:
- Create banks organized by sections and topics/ideas
- Add questions with: answers, images, explanations, explanation images, difficulty levels
- Auto-generate exams from the bank in seconds
- Track exam submissions and per-question analytics

**Financial Management:**
- Fawry payment tracking and transaction history
- Manual balance and subscription code management
- Advanced financial analytics dashboard (revenue, growth, trends)

**Platform Analytics:**
- Visit stats, student counts, course performance

**Other Admin Features:**
- Role management for dashboard users
- Announcements and notifications system
- Lesson schedule management
- Account management
- Arabic + English language support (i18n)
- Dark + light mode

---

### Backend — NestJS REST API

**Tech:** Node.js · NestJS · MongoDB · Redis · BullMQ · Docker

**Architecture:**
- 40+ feature modules (auth, students, courses, videos, files, exams, transactions, codes, notifications, analytics, etc.)
- Clean NestJS modular architecture
- Feature-based folder structure

**Authentication & Security:**
- JWT authentication
- Role-based access control (RBAC) with granular permissions
- Single-device enforcement (prevents account sharing at API level)
- Email verification via Google SMTP
- Rate limiting, XSS protection, CSRF protection, injection attack prevention

**Integrations:**
- WhatsApp via Twilio (exam results → parents)
- Fawry payment gateway + webhooks
- Cloudinary or VPS for file uploads

**Performance:**
- Redis caching layer for fast API responses
- BullMQ + Redis worker/queue system for async tasks (notifications, emails)
- API designed to send only the data the frontend needs

**Reliability:**
- MongoDB with replica set
- Unified API response format and error handling
- Monitoring: Pino logger + Grafana + Loki + Promtail
- Full Swagger API documentation
- Fully Dockerized (4 services: Node.js API, MongoDB, Redis, monitoring)

---

### DevOps (First Full Production VPS Setup)

This was Abdelrahman's first time deploying a full production system. He learned everything from scratch:

**What he set up:**
- Linux basics + SSH management
- VPS on **Digital Ocean**
- Docker + Docker Compose for all services
- **5 containers:** Next.js app, NestJS API, MongoDB (replica set), Redis, monitoring dashboard + static React admin
- **Nginx** as reverse proxy + static file server + image/file serving
- SSL certificates + domain configuration
- **Cloudflare DNS** protection
- Backup strategy: provider-level backups + additional manual backup system
- **GitHub Actions CI/CD pipeline** — push to deploy with zero downtime
- VPS security hardening and firewall configuration
- Pressure testing for multi-user load capacity

---

## Monorepo Architecture (After Evolving into Learn Shift)

When the project became a startup product, the architecture was restructured into a **monorepo**:
- 3 repos: `client`, `admin`, `server`
- `/packages` folder with shared, reusable code
- Each new teacher client gets their own `.env` and `docker-compose.yml`
- **New client can be deployed in under 1 day**

---

## What He Learned

- How to build a production-grade, scalable full-stack application integrating frontend performance, backend reliability, and DevOps automation
- Designing for real-world education workflows: course hierarchy, exam logic, access control, notifications
- Balancing developer experience with end-user simplicity
- Applying software engineering principles: modular design, caching strategies, CI/CD automation, in a real live deployment
- The Egyptian EdTech market and teacher business needs

---

## Future Plans (Product Roadmap)

- Multi-tenant SaaS version with isolated environments per institution
- AI-powered content recommendations and automated grading
- Advanced analytics with predictive insights on student performance
- Integration with Google Classroom, Zoom, and other LMS identity providers