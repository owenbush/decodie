---
title: Environment Variables
description: All environment variables recognised by Decodie.
---

Decodie reads environment variables from `.decodie/.env` in your project root, falling back to process-level environment variables.

## API keys

Set **one** of these to enable LLM features:

| Variable | Provider |
|----------|----------|
| `ANTHROPIC_API_KEY` | Anthropic (Claude) |
| `OPENAI_API_KEY` | OpenAI (GPT) |
| `GOOGLE_GENERATIVE_AI_API_KEY` | Google (Gemini) |
| `MISTRAL_API_KEY` | Mistral |
| `XAI_API_KEY` | xAI (Grok) |
| `DEEPSEEK_API_KEY` | DeepSeek |

## Model override

| Variable | Default | Description |
|----------|---------|-------------|
| `LLM_MODEL` | *(provider default)* | Override the model used for all LLM calls. Must be a valid model ID for your configured provider. |

Examples:

```ini
ANTHROPIC_API_KEY=sk-ant-api03-...
LLM_MODEL=claude-opus-4-6
```

```ini
OPENAI_API_KEY=sk-...
LLM_MODEL=gpt-4o-mini
```

## OpenAI-compatible endpoints

| Variable | Default | Description |
|----------|---------|-------------|
| `OPENAI_BASE_URL` | *(none)* | Custom base URL for OpenAI-compatible APIs (e.g. local Ollama, Azure OpenAI, or other compatible providers). |

Example for a local Ollama instance:

```ini
OPENAI_API_KEY=ollama
OPENAI_BASE_URL=http://localhost:11434/v1
LLM_MODEL=llama3
```

## Deprecated variables

| Variable | Status | Migration |
|----------|--------|-----------|
| `CLAUDE_API_KEY` | Deprecated | Rename to `ANTHROPIC_API_KEY` |
| `CLAUDE_CODE_OAUTH_TOKEN` | Removed | Use `ANTHROPIC_API_KEY` instead |

`CLAUDE_API_KEY` still works and is treated as an Anthropic key, but will log a deprecation warning.

## .env file format

The `.decodie/.env` file uses standard dotenv syntax:

```ini
# Comments start with #
ANTHROPIC_API_KEY=sk-ant-api03-your-key-here
LLM_MODEL=claude-sonnet-4-6

# Quoted values are supported
OPENAI_API_KEY="sk-your-key-here"
```

:::caution
Add `.decodie/.env` to your `.gitignore` to keep API keys out of version control.
:::
