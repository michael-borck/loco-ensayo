---
title: "TalkBuddy"
---

TalkBuddy is a conversation rehearsal tool for the scenarios that can't be scripted around a fictional company. It puts students in difficult professional conversations before they face them for real, with real-time speech recognition and synthesis so the rehearsal feels like an actual conversation rather than a chat interface.

## Why Conversation Rehearsal?

Every discipline has its version of the difficult conversation -- arguably the most transferable professional skill across faculties:

- **Business / HR:** Performance reviews, redundancies, negotiation
- **Medicine / Nursing:** Breaking bad news, end-of-life conversations, informed consent
- **Social Work:** Crisis intervention, disclosing abuse
- **Law:** Delivering unfavourable outcomes to clients
- **Management:** Conflict resolution, whistleblowing

These conversations are high-stakes, emotionally complex, and impossible to practice safely in real contexts. TalkBuddy provides a repeatable, private space to rehearse them.

## How It Works

TalkBuddy is a client-side Electron application. Students install it on their own machine and point it at an Ollama backend (either local or provided by Cerebro in the lab). Speech-to-text and text-to-speech make the interaction feel like a real conversation.

The student selects a scenario, and TalkBuddy generates an AI character with context-appropriate behaviour. The AI doesn't just respond -- it reacts. Push back too hard and the employee gets defensive. Be too vague and the patient asks for clarification. The conversation unfolds naturally.

## Deployment Options

- **Desktop** -- Electron app installed locally, pointing at any Ollama endpoint
- **Docker** -- Containerised deployment for lab or classroom use
- **Server** -- Hosted instance on Cerebro for students without local GPU capability

## Privacy

All conversation data stays local. No transcripts are sent to cloud services. Students can rehearse sensitive scenarios -- a redundancy conversation, a crisis intervention -- without worrying about who might see the transcript.

## Links

- **GitHub:** [github.com/michael-borck/talk-buddy](https://github.com/michael-borck/talk-buddy)
