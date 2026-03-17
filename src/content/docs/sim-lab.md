---
title: "SimLab"
description: "Simulation toolkit for modelling complex systems — business, ecological, and statistical scenarios for education."
---

## Overview

SimLab is a comprehensive simulation toolkit for modelling complex systems across multiple domains. Students run, configure, and analyse simulations through a unified interface — CLI, terminal UI, web, or Python API.

**GitHub:** [michael-borck/sim-lab](https://github.com/michael-borck/sim-lab)
**Install:** `pip install sim-lab`

## What It Simulates

SimLab includes 18+ simulation categories spanning business, science, and systems thinking:

| Category | Examples |
|----------|---------|
| **Business** | Stock market, product popularity, resource fluctuations, supply chains |
| **Statistical** | Monte Carlo methods, Markov chains |
| **Agent-based** | Autonomous interacting agents with emergent behaviour |
| **System dynamics** | Stocks, flows, and feedback loops |
| **Network** | Topologies and processes on graphs |
| **Ecological** | Predator-prey (Lotka-Volterra), population dynamics |
| **Epidemiological** | SIR/SEIR disease spread models |
| **Discrete event** | Queueing theory, event-driven processes |
| **Cellular automata** | Grid-based rule systems |

## Multiple Interfaces

```bash
# CLI — run a simulation directly
simlab stock-market run --start-price 100 --days 365 --volatility 0.02

# TUI — interactive terminal interface
simlab-tui

# Web — browser-based dashboard
simlab-web
```

All interfaces share the same simulation engine. Students can start with the CLI, explore interactively in the TUI, and build dashboards with the web interface.

## The Rehearsal

SimLab is rehearsal for systems thinking. Students don't just learn *about* complex systems — they build models, adjust parameters, and observe what happens. A stock market simulation with different volatility settings teaches more about risk than a textbook definition. An SIR model with adjustable transmission rates makes epidemiology tangible.

The simulation registry system teaches software design patterns: dynamic discovery, consistent APIs across different model types, and parameter validation. Students writing their own simulations learn to extend a well-designed framework.

## Disciplines

SimLab crosses traditional faculty boundaries:

- **Information Systems** — supply chain and queueing models
- **Marketing** — product popularity and market dynamics
- **Management** — resource allocation and scenario planning
- **Science** — ecological and epidemiological models
- **Statistics** — Monte Carlo and Markov chain methods

## Part of LocoEnsayo

LocoEnsayo covers two types of rehearsal: professional skills (talking *to* AI characters) and AI development (learning to *build* and model systems). SimLab sits alongside [SimpleBot](simplebot.md) and [HandsOnAI](hands-on-ai.md) in the development toolkit — a different kind of rehearsal, focused on understanding complex systems through simulation rather than conversation.
