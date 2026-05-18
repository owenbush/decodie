---
title: VS Code Extension
description: Using Decodie's VS Code extension to analyse, explain, and ask questions about code.
---

The Decodie VS Code extension lets you analyse code selections, get explanations, and ask follow-up questions — all within your editor.

## Prerequisites

- [Install the extension](/docs/installation)
- [Configure an API key](/docs/provider-setup)

## Features

### Analyse Selection

Select code in your editor, right-click, and choose **Decodie: Analyse Selection**. Decodie will generate structured learning entries for the selected code, including:

- A title summarising the pattern or concept
- A focused code snippet
- An explanation of why the code works this way
- Alternatives that were considered
- Key concepts to take away

The generated entries are saved to your `.decodie/` directory.

### Explain Selection

Select code and choose **Decodie: Explain Selection** for a quick, inline explanation without creating a persistent entry. Useful for understanding unfamiliar code on the fly.

### Q&A

Open the Decodie sidebar panel to ask follow-up questions about any learning entry. The conversation is contextual — the LLM sees the entry's code, explanation, and your conversation history.

Conversations are saved locally in `.decodie/conversations/` so you can pick up where you left off.

## Settings

| Setting | Default | Description |
|---------|---------|-------------|
| `decodie.model` | *(empty)* | LLM model override. Leave empty for the provider default. |
| `decodie.apiKey` | *(empty)* | **Deprecated.** Use `.decodie/.env` instead. If set, treated as an Anthropic key. |

## Tips

- The extension reads your `.decodie/.env` file for the API key, so you can use different providers per project.
- If no API key is found in the project, the extension checks environment variables and VS Code settings as fallbacks.
- The Analyse and Explain features use `generateText` (non-streaming) for structured output. Q&A uses `streamText` for real-time responses.
