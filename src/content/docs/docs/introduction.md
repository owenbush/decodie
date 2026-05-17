---
title: Introduction
description: What Decodie is and how it helps developers learn from AI-assisted coding sessions.
---

Decodie generates structured learning entries as a byproduct of AI-assisted coding sessions, helping developers understand what was built, how, and why.

## How it works

When you use an AI coding assistant to write or modify code, Decodie analyses the results and produces learning entries that capture:

- **Code patterns** with focused snippets
- **Explanations** of why a particular approach was chosen
- **Alternatives considered** and their trade-offs
- **Key concepts** that underpin the code

These entries are stored in a `.decodie/` directory alongside your code in a structured JSON format.

## Products

Decodie is available in three forms:

- **[VS Code Extension](/docs/guides/vscode)** — analyse and explain code selections, ask follow-up questions, all within your editor
- **[Local UI](/docs/guides/local-ui)** — a web dashboard that reads your `.decodie/` directory and presents entries with filtering, lessons, and Q&A
- **[Decodie Cloud](/docs/guides/cloud)** — a hosted platform with GitHub integration, team workspaces, and automated analysis of pull requests

## Multi-provider LLM support

Decodie works with any major LLM provider. You bring your own API key from whichever provider you prefer:

| Provider | Models |
|----------|--------|
| Anthropic | Claude Sonnet, Claude Opus, Claude Haiku |
| OpenAI | GPT-4o, GPT-4o mini, o1 |
| Google | Gemini 2.0 Flash, Gemini 2.5 Pro |
| Mistral | Mistral Large, Mistral Medium |
| xAI | Grok 3, Grok 3 mini |
| DeepSeek | DeepSeek Chat, DeepSeek Coder |

See [Provider Setup](/docs/provider-setup) for details on getting an API key and configuring it.
