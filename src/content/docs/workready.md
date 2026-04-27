---
title: WorkReady
description: A full internship simulation — students apply, get hired, complete workplace tasks across six fictional Western Australian organisations.
---

## Overview

WorkReady is a semester-long internship simulation. Students apply for a role at one of six fictional Western Australian organisations, complete a structured hiring process, and — if successful — spend the semester completing authentic workplace tasks inside a simulated work environment.

Unlike single-scenario chatbots, WorkReady is a full arc: from reading a job ad to submitting a final reflection. The portal, the companies, and the AI colleagues all change depending on where the student lands.

**Live at:** [workready.eduserver.au](https://workready.eduserver.au)

## The Simulation

Students move through four states. Each transition is triggered by what they actually do, not by a timer.

| State | Trigger | What's visible |
|-------|---------|----------------|
| `NOT_APPLIED` | Starting point | Ink primer + job board |
| `APPLIED` | Resume submitted | Personal inbox, application history |
| `HIRED` | Resume assessed and passed | Company-themed workspace, tasks, work inbox, intranet, AI colleagues |
| `COMPLETED` | All six stages finished | Final reflection + replay option |

The Ink primer is an interactive fiction piece that teaches students how the simulation works before they encounter any assessment task. Students who skip the primer tend to struggle; students who read it do not.

## The Six Companies

Each company has a distinct identity, aesthetic, and internship experience. Students apply to one and spend the semester there.

| Company | Tagline | Industry |
|---------|---------|----------|
| **Horizon Foundation** | Strengthening Communities Across Western Australia | Not-for-profit / Community services |
| **IronVale Resources** | Building Western Australia's Future Underground | Mining & resources |
| **Meridian Advisory** | Clarity in Complexity | Management consulting |
| **Metro Council WA** | Serving Our Community, Shaping Our Future | Local government |
| **NexusPoint Systems** | Connecting Business to What's Next | Technology & IT services |
| **Southern Cross Financial** | Your Wealth, Our Commitment | Financial services |

Each company site has AI colleagues with unique roles and personalities. Information is distributed across people — students have to talk to the right people and ask the right questions.

## Architecture

WorkReady is built from five components that work together.

| Component | What it does |
|-----------|-------------|
| **Portal** | The student workstation. Single-page app that transforms as the student progresses. Pre-hire: primer and job board. Post-hire: company-themed workspace with tasks, work inbox, team, and intranet. |
| **Job Board** | A Seek-style listing site. Students discover roles, read position descriptions, and apply from here or directly via the portal. |
| **Ink Primer** | Interactive fiction that onboards students to the simulation. Written in Ink (Inkle Studios). Covers how the portal works and what to expect in each stage. |
| **API** | Backend tracking student progress across six stages. Handles resume submission and LLM-based assessment. Exposes a REST API — Swagger docs at `/docs`. |
| **Company Sites** | Six static sites, one per company. Each has `site.yaml` configuration defining the company identity, AI employees, and role-specific knowledge. |

## Use Cases

### Professional Communication

Students draft cover letters, respond to workplace emails, write status reports, and prepare deliverables — all in a context that mimics a real internship. The AI colleagues they interact with respond the way a real workplace contact would: sometimes clearly, sometimes not.

### Employability Skills

The structured hiring arc (application → interview → onboarding → tasks) exposes students to workplace norms before they encounter them for real. Students who struggle with professional tone or task prioritisation discover this in a low-stakes environment.

### AI Literacy

WorkReady runs on Ollama — all AI characters run locally with no cloud dependency. Students interact with AI colleagues without knowing which responses are AI-generated. Post-simulation reflection can include discussion of where AI was plausible, where it fell short, and what that means for AI-assisted work.

### Research

The simulation generates structured interaction data: application outcomes, stage completion rates, AI conversation logs, and reflection submissions. This dataset is available for research on professional skill development and AI interaction patterns.

## Technology

- **Portal and company sites** — static HTML/JS, deployed on GitHub Pages or a local server
- **Ink primer** — compiled to JavaScript via Inkle's Ink runtime
- **API** — FastAPI (Python), runs locally via Ollama for resume assessment; stub mode available without LLM
- **AI colleagues** — Ollama-served models with character-specific system prompts and conversation memory
- **Local inference** — no student data sent to external APIs

## Getting Started

Visit [workready.eduserver.au](https://workready.eduserver.au) and begin the Ink primer. Your educator will provide your application instructions and any company-specific briefing materials.

Educators: see the [For Educators](/docs/for-educators/) page for deployment and configuration guidance.
