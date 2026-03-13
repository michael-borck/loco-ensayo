---
title: "TechNova Systems"
---

TechNova Systems is a cybersecurity incident investigation simulator. Students are briefed on a data breach at a fictional IT services company and must gather evidence, interview staff, reconstruct the attack timeline, and recommend security improvements -- all through a browser-based simulation.

## The Scenario

TechNova Systems is a mid-sized IT services provider with 200+ clients across Australia. A spear phishing attack has compromised an employee's credentials, leading to fraudulent invoices being sent to customers. Two customers have already lost money. Twenty-three more may be affected.

Students take the role of incident investigators. Nobody hands them the answer -- they have to find it.

## How It Works

The simulation is a static website representing TechNova's corporate presence and internal systems. Students navigate public pages, discover internal evidence, and interview AI-powered employee personas to piece together what happened.

### Evidence Trail

Eight discoverable pieces of evidence are distributed across the site:

- **Press release** -- the company's vague public admission
- **Customer FAQ** -- clues about fake invoices
- **Helpdesk log** -- detailed timeline with ticket numbers
- **Phishing email** -- with red flags for students to identify
- **Invoice comparison** -- real vs. fraudulent side-by-side
- **Server access logs** -- suspicious IP addresses and file downloads
- **Security memo** -- internal analysis and recommendations
- **Staff portal** -- hints and links connecting the evidence

### AI Employee Interviews

Four personas with distinct knowledge and perspectives:

- **Dave Wilson** (IT Support) -- technical details of the breach
- **Sarah Mitchell** (Accounts Clerk) -- the victim's perspective
- **Michael Torres** (Security Officer) -- analysis and recommendations
- **James Patterson** (CEO) -- business impact and organisational response

Each persona knows what their character would know. Students must interview multiple people to build the full picture.

## Learning Outcomes

- Identify phishing indicators (domain typos, urgency tactics, failed email authentication)
- Trace an attack timeline through distributed evidence
- Understand credential theft and its downstream consequences
- Recognise human factors in cybersecurity incidents
- Recommend practical security improvements
- Assess business impact beyond technical damage

## Deployment Options

- **Local** -- `python3 -m http.server 8080` for classroom use
- **GitHub Pages** -- static hosting, no server required
- **VPS** -- Nginx with SSL for persistent deployment

## Educator Materials

The simulation includes a facilitator guide with a complete answer key, assessment rubric (5-point scale), timing guidance (45--60 minutes), discussion prompts, and extension activities for advanced students.

## Links

- **GitHub:** [github.com/michael-borck/technova-sim](https://github.com/michael-borck/technova-sim)
