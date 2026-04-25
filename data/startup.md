# Learn Shift — Startup

**Website:** https://www.learn-shift.org/
**Facebook:** https://www.facebook.com/profile.php?id=61578916379830
**LinkedIn:** https://www.linkedin.com/company/learn-shift-org/
**Demo (Student):** https://demo.learn-shift.org/
**Demo (Dashboard):** https://dashboard-demo.learn-shift.org/

---

## What Is Learn Shift?

Learn Shift is a startup founded by Abdelrahman Nassar that empowers teachers and online academies to deliver professional e-learning through white-label LMS platforms.

The name reflects the mission: making a _shift_ in how people learn using software solutions.

---

## Origin Story

After his internship at Shift Up Solutions, Abdelrahman looked back at his LMS system (built for teacher Heba El-Sayed) and saw a business opportunity. He did:

- Business and market analysis
- Comprehensive product and market documentation
- Competitive landscape study

He then decided to convert the project into a product, hired 2 developers (paid per hour via Trello-managed tasks), and started building Learn Shift as a proper startup.

---

## The Product

A white-label LMS SaaS platform. Each client gets their own branded platform (student-facing website + admin dashboard + backend) deployed in under a day, thanks to a **monorepo architecture**.

### Architecture

- 3 repositories: `client`, `admin`, `server`
- Shared packages in a `/packages` folder for reusable code
- Each teacher/academy gets their own `.env` and `docker-compose` file
- No new codebase per client — the product scales instantly

### Demo

- Student view: https://demo.learn-shift.org/
- Admin dashboard: https://dashboard-demo.learn-shift.org/

---

## Clients & Products

### 1. Heba El-Sayed — Private Teacher Platform

**URL:** https://heba-elsayed.com/
A full LMS for a private teacher transitioning from offline to online. The original project that launched the startup.

### 2. Mohammed Hekal — Teacher Platform

**URL:** https://mohammed-hekal.com/

### 3. Abulilah — Teacher Platform

**URL:** https://abulilah.com/

### 4. Muslim House — Islamic Academy (Sessions-Based LMS)

**URL:** https://muslim-house.com/
An Islamic academy teaching Quran, Arabic, and Islamic Studies via 1-on-1 online sessions and recorded courses. Extended the core product to support session-based learning with teacher/student scheduling, session reports, and subscription management.

### 5. Way to Islam — Islamic Academy

**URL:** https://waytoislam.academy/
Sold the same sessions-based system to a second Islamic academy. Deployed rapidly using the monorepo architecture.

### 6. Al-Mostafa Kindergarten — ERP System

**URL:** https://almostafa.academy/
A comprehensive ERP for a nursery managing 100+ employees and 1,000+ children. Treated as a new vertical (education institutions), built with the same tech stack but as a separate product.
→ Full details in `projects.md`

---

## Impact

| Metric                | Number                                                                       |
| --------------------- | ---------------------------------------------------------------------------- |
| Students served       | 20,000+                                                                      |
| Teachers/clients      | 5+ active teachers                                                           |
| Manual effort reduced | 70%+ (grading, management)                                                   |
| Outcome               | Teachers fully transitioned from offline to professional e-learning delivery |

---

## Operations & Management

During the startup phase, Abdelrahman:

- Managed 2 part-time developers via Trello (paid per hour)
- Handled all marketing (Facebook ads, content, LinkedIn posts)
- Built brand identity and brand design
- Handled product management and roadmap
- Handled UI/UX design decisions
- Handled all DevOps (VPS, Docker, CI/CD, Nginx, Cloudflare)
- Handled all backend and frontend development
- Later returned to solo operation (currently sole developer + business owner)

---

## Future Plans for the Product

- Multi-tenant SaaS version with separate environments per institution
- AI-powered content recommendations and automated grading
- Advanced analytics with predictive insights on student performance
- Integration with external LMS APIs and identity providers (Google Classroom, Zoom)

---

## Abdelrahman's View on Learn Shift

> "I don't treat Learn Shift as my dream or a million-dollar idea. It's been an incredibly useful experience, and I've learned a lot — but it's a side project that generates income while I prepare for my real career goal: joining a top tech company."

He runs it on the side while studying and preparing his CV for the job market.
