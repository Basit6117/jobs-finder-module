# Jobs Finder Module

**Author:** `Abdul Basit`  
**Project:** Design & Implement the Jobs & Internships Module (Frontend)  
**Tech:** React + Vite, plain CSS, Fetch API

---

## What this is
A small React frontend module that lets students explore, search, and apply for jobs/internships.  
It integrates with the Remotive public API and includes search, filters (job type, location, time posted), and an “Apply Now” button that opens the original posting.

---

## Demo / Screenshots
See `/demo` folder for:
- `screenshot-desktop.png`
- `screenshot-mobile.png`
- `screenshot-filter.png`
- `screenshot-no-results.png`
- `demo.mp4` (30–60s showing: search → filter → apply)

---

## Prerequisites
- Node.js (v16+ recommended) and npm installed
- Internet connection (uses Remotive API)

---

## Setup — Run locally
1. Clone or unzip the project and `cd` into it:
   ```bash
   git clone <your-repo-url> 
   cd jobs-finder-module

---
## Component Overview

- **App.jsx** → Root component, renders `JobsPage`.
- **JobsPage.jsx** → Main page with search, filters, job listing, and loader.
- **Searchbar.jsx** → Input field for searching jobs by title and other keywords.
- **Filters.jsx** → Dropdowns for job type, location, and date posted.
- **JobsGrid.jsx** → Grid layout that maps over jobs and renders `JobCard` components.
- **JobCard.jsx** → Displays individual job details (title, company, salary, date, apply link).
- **Error.jsx** → Simple error message component (e.g., "Failed to fetch jobs").
- **Loader (FadeLoader)** → Spinner shown while fetching jobs or applying filters.

