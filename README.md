# Resume JD Match Tool

> **Summary:** A privacy-first, browser-based tool that compares a job description with a resume and delivers structured feedback tailored to AI Product Manager and Global GTM roles.

---

## Problem Statement

Candidates targeting AI PM and Global GTM roles need more than a keyword count. Generic resume checkers return noisy terms, generic bullet suggestions, and little guidance on positioning or interview prep. This project solves that with a focused prototype that converts a JD–resume pair into actionable, role-specific insights—without accounts, backends, or paid APIs.

## Target Users


| User                                    | Need                                                                      |
| --------------------------------------- | ------------------------------------------------------------------------- |
| AI Product Manager candidates           | Align resume language with AI, LLM, and product-led requirements          |
| Global GTM / localization professionals | Highlight international launch, market entry, and cross-market experience |
| Career switchers & early-career PMs     | Get structured feedback before investing in paid coaching                 |
| Product builders                        | Validate a lightweight job-search workflow before scaling                 |


## Key Features

- **Match Score** — 0–100 alignment based on curated PM/GTM keyword overlap  
- **Missing Keywords** — Role-specific terms (GTM strategy, user research, prompt engineering, localization) with generic noise filtered out  
- **Positioning Advice** — How to frame your background for AI Product / Global GTM interviews  
- **Recommended Resume Bullets** — Professional, natural-language bullets ready to customize  
- **Next Skill Gap** — Three prioritized skills to learn next, tied to the job description  
- **Interview Questions** — Scenario-based prompts for GTM, AI product, and cross-functional topics

All analysis runs client-side. No data leaves the browser.

## Product Value


| Dimension     | Benefit                                                              |
| ------------- | -------------------------------------------------------------------- |
| Speed         | Instant JD → structured output feedback loop                         |
| Focus         | Built for AI PM / Global GTM language, not generic engineering lists |
| Privacy       | Zero data collection—safe for sensitive resume content               |
| Accessibility | No install, login, or API key required                               |
| Validation    | Low-cost MVP to test UX before LLM or backend investment             |


## Tech Stack


| Layer        | Tools                                  |
| ------------ | -------------------------------------- |
| Frontend     | HTML5, CSS3, Vanilla JavaScript        |
| Architecture | Static, client-side only               |
| Dependencies | None                                   |
| APIs         | None (no paid or third-party services) |


This is a **beginner-friendly AI product prototype** built with **HTML, CSS, and JavaScript**, developed through an **AI-assisted coding workflow**. No React or complex frameworks—designed to show product thinking, rapid prototyping, and hands-on execution for portfolio and interview settings.

## How to Run Locally

**Quick start:** Open `index.html` in any modern browser.

**macOS**

1. Download or clone the repository.
2. Open the project folder in Finder.
3. Double-click `index.html` (or right-click → Open With → Chrome / Safari / Firefox).
4. Paste a job description and resume → click **Analyze Match**.

**Windows**

1. Download or clone the repository.
2. Open the folder in File Explorer.
3. Double-click `index.html`.
4. Paste both inputs → click **Analyze Match**.

**Optional — local server**

```bash
cd resume-jd-match-tool
python3 -m http.server 8000
# Visit http://localhost:8000
```

## Future Improvements

- Optional LLM integration for semantic matching and personalized rewrites  
- Role templates (Growth PM, Technical PM, Localization PM)  
- Export analysis as PDF or copy-ready snippets  
- Local storage for saved JD/resume pairs  
- Match-score tracking across multiple applications  
- WCAG accessibility pass (keyboard nav, screen readers)

## What I Learned

- **Narrow ICP wins.** Scoping for AI PM / Global GTM produced sharper output than a generic resume tool.  
- **Keyword quality > quantity.** Filtering generic terms and prioritizing multi-word phrases improved result credibility.  
- **Structured outputs > raw scores.** Positioning advice, skill gaps, and interview prep drive more user value than a match percentage alone.  
- **Privacy is a product decision.** Client-side architecture builds trust for resume tooling.  
- **AI-assisted development accelerates learning.** Cursor and AI coding tools helped a beginner ship a working prototype quickly while keeping the stack simple.  
- **Prototype before platform.** A no-API MVP validates workflow and UX before committing to backend or LLM costs.

---

**Resume JD Match Tool** — AI product thinking, GTM-aware design, and rapid prototyping with HTML, CSS, and JavaScript.