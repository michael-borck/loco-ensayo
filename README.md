# LocoEnsayo

**Rehearsal platform for AI-driven teaching scenarios.**

LocoEnsayo ("Loco Rehearsal") provides simulated business environments where students interact with AI-powered systems to develop professional skills. Each scenario is a self-contained rehearsal — students practice in realistic contexts without real-world consequences.

## Scenarios

### CloudCore Networks
A simulated ISP where students interact with AI chatbot employees to handle customer service, technical support, and business operations. Each chatbot has a unique backstory, personality, and domain expertise powered by fine-tuned small language models.

- **Website:** [cloudcore.eduserver.au](https://cloudcore.eduserver.au)
- **Repository:** [michael-borck/cloudcore](https://github.com/michael-borck/cloudcore)
- **API:** [michael-borck/cloudcore-api](https://github.com/michael-borck/cloudcore-api)

### Pinnacles Travel *(coming soon)*
A simulated travel agency scenario — details to be announced.

## Structure

This repository uses git submodules to link to each scenario's components:

```
loco-ensayo/
├── cloudcore/          # CloudCore Networks (Quarto site)
├── cloudcore-api/      # CloudCore API backend
└── README.md
```

## Getting Started

Clone with submodules:

```bash
git clone --recurse-submodules git@github.com:michael-borck/loco-ensayo.git
```

Or if already cloned:

```bash
git submodule update --init --recursive
```

## Part of LocoLab

LocoEnsayo is part of the [LocoLab](https://locolabo.org) research group exploring local AI for education.

- [LocoLLM](https://locollm.org) — Local LLM fine-tuning and routing
- [LocoBench](https://locobench.org) — GPU benchmarking for small models
- [LocoConvoy](https://lococonvoy.org) — Multi-GPU research
