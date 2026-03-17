---
title: "SimpleBot"
description: "A minimal Python wrapper for LLM interaction — the first step in learning to build AI applications."
---

## Overview

SimpleBot is a lightweight Python package that reduces LLM interaction to a single function call. It is the entry point for students who have never written code that talks to an AI model.

**GitHub:** [michael-borck/simplebot](https://github.com/michael-borck/simplebot)
**Install:** `pip install simplebot`

## Why SimpleBot?

Most LLM libraries require students to understand API clients, message formatting, authentication, and async patterns before they can get a response. SimpleBot removes all of that:

```python
from simplebot import get_response

answer = get_response("What is photosynthesis?")
print(answer)
```

One import. One function. One response. The student is talking to a model in three lines.

## Personality Bots

Pre-built personality functions let students explore how system prompts shape model behaviour without writing prompt templates:

```python
from simplebot import pirate_bot, teacher_bot, coder_bot

pirate_bot("Tell me about sailing ships")
teacher_bot("Explain gravity to a 10-year-old")
coder_bot("Write a function to reverse a string")
```

Available personalities include pirate, shakespeare, emoji, teacher, coder, and more. Each one is a thin wrapper around `get_response()` with a different system prompt — students can read the source to see exactly how it works.

## Local First

SimpleBot defaults to a local Ollama server at `http://localhost:11434`. No API keys, no cloud accounts, no cost. Students can also point it at any OpenAI-compatible endpoint for cloud providers.

## The Rehearsal

SimpleBot is rehearsal for AI development. Students practise the fundamental interaction pattern — send a prompt, receive a response — in the simplest possible form. Once they are comfortable here, they move to [HandsOnAI](hands-on-ai.md) for more sophisticated patterns (RAG, agents), and eventually to building full applications.

SimpleBot is also the case study from *Ship Python, Orchestrate AI: Professional Python in the AI Era* by Michael Borck, teaching best practices for professional Python packaging alongside LLM interaction.

## Part of LocoEnsayo

LocoEnsayo covers two types of rehearsal: professional skills (talking *to* AI characters in simulated organisations) and AI development (learning to *build* AI applications). SimpleBot is the foundation of the development track.
