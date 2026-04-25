# Project: Al-Mostafa Kindergarten ERP System

**Type:** Full ERP System for Nursery / Kindergarten Management
**Category:** EdTech / Institutional ERP
**Status:** ✅ Production — Used daily
**URL:** https://almostafa.academy/
**Scale:** 100+ employees, 1,000+ children
**Built:** 2026 (solo)

---

## Overview

A client running a large nursery/kindergarten requested a comprehensive ERP system to manage all daily operations. Abdelrahman treated educational institutions as a natural extension of the Learn Shift product line and built the system from scratch (new codebase, same tech stack).

This was the most complex system he had built to date in terms of breadth — covering HR, finance, academic evaluation, transportation, admissions, and a parent-facing portal.

---

## System Modules

### A. Public Website

- Nursery introduction and program pages
- Class and activity information
- Admission requirements
- Photo gallery
- Contact forms
- Online registration
- Parent login portal
- Appointment booking for admission interviews

---

### B. Role-Based Access Control (RBAC)

**8 user roles with distinct permissions:**

- Super Admin
- Management
- HR Staff
- Teachers
- Accountants
- Receptionists
- Transport Supervisors
- Parents

**Features:** Permission groups, role assignment, activity logs, secure login

---

### C. Employee Management

**Staff types managed:** Administrators, Teachers, Accountants, General Workers, Supervisors, Drivers

**Features:**

- Full employee profiles
- Attendance records
- Contracts
- Salary configuration
- Leave requests
- Document storage

---

### D. Student Management

- Full student profiles
- Medical information
- Emergency contacts
- Parent information linkage
- Enrollment history
- Status tracking: active / inactive / graduated
- Document uploads

---

### E. Parent Portal

- View child profile and status
- Submit applications for a new child
- Renewal requests
- View and download invoices
- Payment history
- In-app notifications
- Appointment booking
- Download student reports

---

### F. Class & Seating Management

- Create and manage classrooms
- Assign children to classes
- Assign teachers to classes
- Capacity management
- Transfer students between classes
- Daily class reports

---

### G. Transportation / Bus Management

- Bus profiles
- Driver management
- Route management
- Assign students to buses
- Pickup and drop lists
- Daily PDF delivery sheets
- Parent notifications for bus events

---

### H. Admissions & Renewals

- Online application submission
- Required document uploads
- Application review workflow
- Interview scheduling
- Approval / rejection with status tracking
- Renewal request management
- Waiting list management

---

### I. Academic Evaluation System

- Record student assessments
- Skill tracking across subject areas
- Teacher notes and observations
- Grades and scores
- Progress analytics over time
- Printable evaluation reports
- Parent visibility into child's academic progress

---

### J. Billing & Finance System

- Product/fee item creation (tuition, registration, bus fees, etc.)
- Invoice generation
- Discounts and installment payment plans
- Payment receipt generation
- Outstanding balance tracking
- Parent-facing invoice portal

---

### K. Accounting & Reports

- Income and expense tracking
- Budget management
- Cash flow reports
- Profit and loss reports
- Financial data exports
- Daily, monthly, and annual report views

---

### L. Payroll System

- Staff salary configuration
- Bonuses and deductions
- Payslip PDF generation
- Payroll history
- Monthly payroll reports

---

### M. Notifications System

**Channels:** Email · SMS (optional) · In-app notifications · Push notifications

**Use cases:** Payment reminders, interview reminders, bus alerts, attendance alerts, general announcements

---

### N. PDF & Document Generation

Automated PDF creation for:

- Student reports
- Invoice PDFs
- Payroll slips
- Bus pickup/drop lists
- Attendance sheets
- Class lists
- Admission forms

---

## Tech Stack

Same architecture as Learn Shift core product:

- **Frontend (public website + parent portal):** Next.js · TypeScript · Tailwind CSS
- **Admin Dashboard:** React.js · React Query · Ant Design · Tailwind · TypeScript
- **Backend:** Node.js · NestJS · MongoDB · Redis
- **DevOps:** Docker · Nginx · GitHub Actions CI/CD · Digital Ocean VPS

---

## What Made This Project Different

- Most complex system Abdelrahman built in terms of module count and business logic breadth
- First time designing for institutional HR, payroll, and accounting workflows
- New domain knowledge: nursery operations, admissions workflows, transportation logistics
- Required designing for 8 different user roles with distinct permission sets
- Built entirely solo while simultaneously managing Learn Shift's other clients and college coursework
