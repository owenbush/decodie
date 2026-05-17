---
title: Provider Setup
description: How to get an API key and configure Decodie to use your preferred LLM provider.
---

import { Tabs, TabItem, Steps } from '@astrojs/starlight/components';

Decodie needs an API key from an LLM provider to power its analysis, explanation, and Q&A features. You can use any of the supported providers — pick whichever you prefer.

## Get an API key

<Tabs>
  <TabItem label="Anthropic">
    <Steps>
    1. Go to [console.anthropic.com/settings/keys](https://console.anthropic.com/settings/keys)
    2. Sign up or log in
    3. Click **Create Key**
    4. Copy the key (starts with `sk-ant-api03-`)
    </Steps>

    Default model: `claude-sonnet-4-6`
  </TabItem>

  <TabItem label="OpenAI">
    <Steps>
    1. Go to [platform.openai.com/api-keys](https://platform.openai.com/api-keys)
    2. Sign up or log in
    3. Click **Create new secret key**
    4. Copy the key (starts with `sk-`)
    </Steps>

    Default model: `gpt-4o`
  </TabItem>

  <TabItem label="Google">
    <Steps>
    1. Go to [aistudio.google.com/apikey](https://aistudio.google.com/apikey)
    2. Sign in with your Google account
    3. Click **Create API key**
    4. Copy the key
    </Steps>

    Default model: `gemini-2.0-flash`

    :::note
    New Google API keys may take a few minutes for quota to activate. If you get a quota error immediately after creating a key, wait a few minutes and try again.
    :::
  </TabItem>

  <TabItem label="Mistral">
    <Steps>
    1. Go to [console.mistral.ai/api-keys](https://console.mistral.ai/api-keys)
    2. Sign up or log in
    3. Click **Create new key**
    4. Copy the key
    </Steps>

    Default model: `mistral-large-latest`

    :::tip
    Mistral offers a generous free tier (1 billion tokens/month, no credit card required), making it a great option for trying Decodie.
    :::
  </TabItem>

  <TabItem label="xAI">
    <Steps>
    1. Go to [console.x.ai](https://console.x.ai)
    2. Sign up or log in
    3. Create an API key
    4. Copy the key (starts with `xai-`)
    </Steps>

    Default model: `grok-3-mini`
  </TabItem>

  <TabItem label="DeepSeek">
    <Steps>
    1. Go to [platform.deepseek.com/api_keys](https://platform.deepseek.com/api_keys)
    2. Sign up or log in
    3. Create an API key
    4. Copy the key
    </Steps>

    Default model: `deepseek-chat`
  </TabItem>
</Tabs>

## Configure your key

### VS Code Extension and Local UI

Create a `.decodie/.env` file in your project root:

```bash
mkdir -p .decodie
echo 'ANTHROPIC_API_KEY=sk-ant-api03-your-key-here' > .decodie/.env
```

Replace `ANTHROPIC_API_KEY` with the variable for your provider:

| Provider | Environment variable |
|----------|---------------------|
| Anthropic | `ANTHROPIC_API_KEY` |
| OpenAI | `OPENAI_API_KEY` |
| Google | `GOOGLE_GENERATIVE_AI_API_KEY` |
| Mistral | `MISTRAL_API_KEY` |
| xAI | `XAI_API_KEY` |
| DeepSeek | `DEEPSEEK_API_KEY` |

:::caution
Add `.decodie/.env` to your `.gitignore` to avoid committing your API key.
:::

## Override the default model

Each provider has a sensible default model. To use a different model, set the `LLM_MODEL` variable:

```ini
ANTHROPIC_API_KEY=sk-ant-api03-your-key-here
LLM_MODEL=claude-opus-4-6
```

In VS Code, you can also set this via the `decodie.model` setting.

## Provider auto-detection

Decodie automatically detects which provider to use based on which API key is present. If you have multiple keys in your `.env` file, the first match wins in this order:

1. Anthropic
2. OpenAI
3. Google
4. Mistral
5. xAI
6. DeepSeek

## Backwards compatibility

If you previously used `CLAUDE_API_KEY`, it still works and is treated as an Anthropic key. `CLAUDE_CODE_OAUTH_TOKEN` is no longer supported.
