---
title: Supported Providers
description: Complete reference of all LLM providers supported by Decodie.
---

Decodie uses the [Vercel AI SDK](https://sdk.vercel.ai) to support multiple LLM providers. The AI SDK is an open-source library that calls provider APIs directly — no Vercel account required.

## Provider details

### Anthropic (Claude)

| | |
|---|---|
| **Environment variable** | `ANTHROPIC_API_KEY` |
| **Default model** | `claude-sonnet-4-6` |
| **Key format** | `sk-ant-api03-...` |
| **Get a key** | [console.anthropic.com/settings/keys](https://console.anthropic.com/settings/keys) |
| **Pricing** | Pay-per-token, no free tier |

Popular models: `claude-sonnet-4-6`, `claude-opus-4-6`, `claude-haiku-4-5-20251001`

### OpenAI

| | |
|---|---|
| **Environment variable** | `OPENAI_API_KEY` |
| **Default model** | `gpt-4o` |
| **Key format** | `sk-...` |
| **Get a key** | [platform.openai.com/api-keys](https://platform.openai.com/api-keys) |
| **Pricing** | Pay-per-token, free trial credits for new accounts |

Popular models: `gpt-4o`, `gpt-4o-mini`, `o1`, `o1-mini`

Supports custom base URLs via the `OPENAI_BASE_URL` environment variable, enabling use with any OpenAI-compatible API.

### Google (Gemini)

| | |
|---|---|
| **Environment variable** | `GOOGLE_GENERATIVE_AI_API_KEY` |
| **Default model** | `gemini-2.0-flash` |
| **Key format** | `AI...` |
| **Get a key** | [aistudio.google.com/apikey](https://aistudio.google.com/apikey) |
| **Pricing** | Free tier available, pay-per-token beyond limits |

Popular models: `gemini-2.0-flash`, `gemini-2.5-pro`, `gemini-2.5-flash`

### Mistral

| | |
|---|---|
| **Environment variable** | `MISTRAL_API_KEY` |
| **Default model** | `mistral-large-latest` |
| **Get a key** | [console.mistral.ai/api-keys](https://console.mistral.ai/api-keys) |
| **Pricing** | 1 billion tokens/month free, no credit card required |

Popular models: `mistral-large-latest`, `mistral-medium-latest`, `mistral-small-latest`

:::tip
Mistral's free tier is the most generous of any provider — great for trying Decodie without spending anything.
:::

### xAI (Grok)

| | |
|---|---|
| **Environment variable** | `XAI_API_KEY` |
| **Default model** | `grok-3-mini` |
| **Key format** | `xai-...` |
| **Get a key** | [console.x.ai](https://console.x.ai) |
| **Pricing** | Free credits for new accounts |

Popular models: `grok-3`, `grok-3-mini`

### DeepSeek

| | |
|---|---|
| **Environment variable** | `DEEPSEEK_API_KEY` |
| **Default model** | `deepseek-chat` |
| **Key format** | `sk-...` |
| **Get a key** | [platform.deepseek.com/api_keys](https://platform.deepseek.com/api_keys) |
| **Pricing** | Very low per-token pricing |

Popular models: `deepseek-chat`, `deepseek-coder`

DeepSeek uses an OpenAI-compatible API, so Decodie connects via the OpenAI SDK with a custom base URL.

## Auto-detection order

When multiple API keys are present, Decodie uses the first match in this order:

1. Anthropic
2. OpenAI
3. Google
4. Mistral
5. xAI
6. DeepSeek
