---
title: Decodie Cloud
description: Using Decodie Cloud for team workspaces, GitHub integration, and automated analysis.
---

Decodie Cloud is the hosted platform for teams. It connects to your GitHub repositories, stores entries centrally, and provides workspace-level collaboration.

## Getting started

1. **Sign up** at [app.decodie.dev](https://app.decodie.dev) using your GitHub account
2. **Create a workspace** for your team or project
3. **Connect repositories** — install the Decodie GitHub App on the repos you want to analyse
4. **Add credentials** — go to Settings > Credentials, select your provider, and paste your API key

## Features

### Automated analysis

Decodie Cloud can automatically generate learning entries when code is pushed. Connected repositories are analysed in the background using a worker queue.

### Team workspaces

Workspaces let multiple developers share learning entries, progress, and Q&A conversations for the same codebase.

### Q&A

Ask questions about any entry with full conversation history. Q&A uses the workspace's configured API key.

### Credential management

Each workspace has its own API credentials. Go to **Settings > Credentials** to:

- Select a provider from the dropdown (Anthropic, OpenAI, Google, Mistral, xAI, DeepSeek)
- Paste your API key
- Keys are encrypted at rest

## Tiers

| Feature | Free | Team | Business |
|---------|------|------|----------|
| Connected repos | 1 | Unlimited | Unlimited |
| Q&A | Yes | Yes | Yes |
| Auto-generation | - | Yes | Yes |
| Platform-funded LLM | - | - | Yes |

Business tier workspaces use a platform-funded Anthropic key — no BYOK credential needed.
