# Project: Muslim House & Way to Islam (Sessions-Based LMS)

**Type:** Extended LMS with Live Session Management
**Category:** EdTech — Islamic Academies
**Status:** ✅ Production — Serving active users
**Muslim House:** https://muslim-house.com/
**Way to Islam:** https://waytoislam.academy/
**Built:** Late 2025 – Early 2026 (solo)

---

## The Context

After building the core LMS platform and growing Learn Shift, a new client came in with different needs: an Islamic academy (Muslim House) that teaches Quran, Arabic language, and Islamic Studies through **1-on-1 live sessions** as well as recorded courses.

Rather than building a new product from scratch, Abdelrahman extended the existing LMS monorepo to support a new vertical: **session-based learning**.

This was also an opportunity to expand market targeting from individual teachers to **online academies** with multi-teacher structures.

---

## What Was New / Extended

### Multi-Teacher Architecture

- One admin account managing multiple teachers
- Admin assigns specific students to specific teachers
- Each teacher has their own dashboard view

### Session Management System

**Admin/Team Capabilities:**

- Manage the full sessions calendar
- Schedule and adjust meeting times for any student-teacher pair
- Track teacher and student join/leave timestamps per session

**Session Reports:**

- Each completed session requires a teacher-written report
- Report is saved to the platform AND automatically sent to the student's parent

**Student Dashboard:**

- Personal sessions calendar view
- Session history and records
- Session reports archive
- Sessions analytics dashboard

### Subscription & Plan Management

- Admin manages student subscription plans
- System tracks subscription status based on session outcomes:
  - Completed, Missed, Cancelled
- Admin can filter students by subscription status (e.g., "show all students with active subscription")

### Teacher Salary Management

- Monthly salary calculated based on:
  - Total session hours completed
  - On-time join/leave commitment tracking
- Admin can apply bonuses and deductions
- Full salary history and reports

### Admin Analytics

- Complete analytics across sessions, students, and subscriptions
- Filterable by subscription status, teacher, date range

---

## Frontend & UX

- Full custom UI designed to match the Islamic brand identity of each client
- Muslim House landing page built in **Arabic and English** (bilingual) to target both Arabic and English-speaking Muslim audiences
- Same monorepo architecture as the core LMS — new client deployed rapidly

---

## Second Client: Way to Islam

After deploying Muslim House, the same sessions-based system was sold and deployed for a second Islamic academy: **Way to Islam** (https://waytoislam.academy/).

The monorepo architecture made this a fast deployment — minimal configuration changes, same core product.

---

## Built Solo

By this phase, Abdelrahman was no longer working with the two part-time developers. He handled everything alone:

- Product management and feature planning
- Frontend development
- Backend development
- UI/UX design decisions
- DevOps (deployment, Docker, Nginx, CI/CD)
- Marketing and client communication
- Business operations

---

## Key Technical Skills Gained

- Refactoring and extending a large production system to support new requirements
- Designing for multi-tenant, multi-role architectures
- Calendar and scheduling systems
- Real-time session tracking
- Salary calculation and financial logic
- Bilingual UI/UX (Arabic RTL + English LTR)
