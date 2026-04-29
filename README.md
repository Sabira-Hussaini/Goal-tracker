# 📊 Goal Tracker Dashboard

A modern **multi-page React application** for creating goals, tracking progress, building habits, and improving productivity with XP, streaks, and analytics.

Built with:

* React + Vite ⚡
* Material UI (MUI) 🎨
* React Router 🌐
* React Hook Form 📋
* LocalStorage (data persistence) 💾
* Multi-language (RTL / LTR support) 🌍

---

# 🚀 Features

## 🎯 Goal Management (CRUD)

* Create new goals
* Edit goals
* Delete goals (with confirmation)
* View goal details
* Pause / Resume goals
* Mark goals as completed automatically or manually

---

## 📈 Progress Tracking

* Daily progress logging
* Automatic progress percentage calculation
* Progress bars per goal
* History tracking (logs per day)
* Auto-complete when target is reached

---

## 🔥 Streak System

* Tracks consecutive daily progress
* Increases streak when user logs activity daily
* Resets if a day is missed (based on logic rules)

---

## ⚡ XP System (Gamification)

* Each progress action gives XP
* Total XP displayed in dashboard
* Motivates consistent usage

---

## 🌍 Multi-Language Support

* English + Persian (or Arabic)
* Full RTL ↔ LTR layout switching
* UI adapts automatically based on language

---

## 📊 Dashboard

* Overall progress percentage
* Total completed goals
* Active goals overview
* Quick actions:

  * ➕ New Goal
  * 📋 View All Goals
* Motivational section (quotes/messages)
* Date & time widget

---

## 🧩 Categories System

* Categorized goals:

  * Health
  * Study
  * Work
  * Personal
* Category statistics:

  * Active goals per category
  * Completed goals per category

---

## 🎨 UI / UX

* Built with Material UI (MUI)
* Responsive design (mobile + desktop)
* Clean modern dashboard style
* Cards for goals & activities
* Progress bars and badges
* Empty states for better UX
* Dark / Light theme support

---

## 📅 Extra Features

* Motivational messages section 💡
* Live date & time widget ⏰
* Daily activity cards 🧠
* Clean dashboard layout inspired by modern SaaS apps

---

# 🗂️ Pages / Routes

| Route         | Description                           |
| ------------- | ------------------------------------- |
| `/dashboard`  | Main dashboard (overview + stats)     |
| `/goals`      | All goals list (filter, search, sort) |
| `/goals/new`  | Create new goal form                  |
| `/goals/:id`  | Goal details + progress history       |
| `/categories` | Category analytics                    |
| `/settings`   | Language + theme settings             |
| `*`           | 404 Not Found page                    |

---



# 🛠️ Tech Stack

* React (Vite)
* React Router DOM
* Material UI (MUI)
* React Hook Form
* LocalStorage API
* Context API (state management)

---

# 🌐 RTL / LTR System

The app supports full direction switching:

* English → LTR layout
* Persian/Arabic → RTL layout

Implemented using:

* MUI Theme direction
* Dynamic UI rendering
* Responsive layout adjustments

---

# 💾 Data Persistence

* All goals stored in LocalStorage
* Stats automatically updated
* No backend required (can be extended)

---

# 💡 Project Highlights

* Clean modular architecture
* Reusable components
* Dashboard-style UI
* Gamification system (XP + streak)
* Motivation system included

---

# 📱 Responsive Design

Works on:

* Mobile 📱
* Tablet 📟
* Desktop 💻

---

# ▶️ How to Run

```bash
npm install
npm run dev
```

---
👥 Team Contributions

This project was collaboratively developed by:

👩‍💻 Maryam Mirzada
👩‍💻 Sabira Hussaini
🤝 Collaboration Approach

All features in this project were developed jointly. Both team members actively participated in:

Designing the UI/UX
Implementing React components
Building the goal management system (CRUD)
Developing progress tracking & XP system
Implementing multi-language (RTL / LTR) support
Testing, debugging, and improving performance
🧾 Git Contribution Evidence

Both team members contributed through multiple commits in the repository.
The Git history reflects shared responsibility across all parts of the project.

🧩 Feature Ownership
Feature	Ownership
Goal Management	Shared
Progress Tracking	Shared
Dashboard UI	Shared
Categories	Shared
Forms & Validation	Shared
UI Components	Shared
Testing & Fixes	Shared


# 👨‍💻 Authors Notes

This project is designed for productivity, habit building, and real-world React practice with modern UI/UX principles.
