---
title: "HandsOnAI"
description: "Progressive AI toolkit teaching chat, RAG, and agent patterns through hands-on coding."
---

## Overview

HandsOnAI is a modular Python toolkit that teaches three core AI interaction patterns through progressive, hands-on learning. Students build and interact with each pattern directly, moving from simple chat to retrieval-augmented generation to autonomous agents.

**GitHub:** [teaching-repositories/hands-on-ai](https://github.com/teaching-repositories/hands-on-ai)
**Install:** `pip install hands-on-ai`

## Three Modules, Three Patterns

### 1. Chat — Prompt Engineering

The simplest pattern: send a message, get a response. Students learn how system prompts, temperature, and persona design shape model behaviour.

```bash
chat --personality teacher "Explain recursion"
```

Multiple built-in personalities demonstrate how the same model produces radically different responses depending on the system prompt.

### 2. RAG — Retrieval-Augmented Generation

Students load documents and ask questions grounded in that content. The module handles chunking, embedding, similarity search, and context injection — but exposes each step so students understand what RAG actually does.

```bash
rag load report.pdf
rag ask "What were the key findings?"
```

This is where students learn that LLMs don't *know* things — they generate responses based on context. Providing the right context is the skill.

### 3. Agent — ReAct Reasoning

A ReAct-style agent that reasons step by step, selects tools, and composes multi-step answers. Students see the reasoning loop in action: think, act, observe, repeat.

```bash
agent "What's the weather in Perth and should I bring an umbrella?"
```

The agent module teaches the pattern behind every AI agent framework — the same loop that powers LangChain, CrewAI, and AutoGen, stripped to its essentials.

## Provider Agnostic

HandsOnAI works with any OpenAI-compatible API:

- **Local:** Ollama, vLLM, LocalAI
- **Cloud:** OpenAI, Google Gemini, Groq, Together AI, OpenRouter
- **Hugging Face:** Inference API endpoints

Students learn the industry-standard API pattern once and apply it everywhere. No vendor lock-in.

## The Rehearsal

HandsOnAI is the intermediate step in the AI development track. Students who have mastered basic LLM interaction with [SimpleBot](simplebot.md) move here to learn the three patterns that underpin most real-world AI applications. The progression — chat → RAG → agents — mirrors how production AI systems are actually built.

Each module is self-contained. An educator can teach just chat in a single session, or run the full three-module sequence across a semester.

## Part of LocoEnsayo

LocoEnsayo covers two types of rehearsal: professional skills (talking *to* AI characters) and AI development (learning to *build* AI applications). HandsOnAI is the intermediate step — after [SimpleBot](simplebot.md), before building full applications like [CloudCore](cloudcore.md) or [TalkBuddy](talk-buddy.md).
