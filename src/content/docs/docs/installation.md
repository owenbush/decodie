---
title: Installation
description: How to install Decodie skills, the VS Code extension, and the local UI.
---

## Agent Skills

Install all seven Decodie skills into your AI coding agent:

```bash
npx skills add owenbush/decodie-skill --all
```

This works with Claude Code, Gemini CLI, Cursor, and [70+ other agents](https://agentskills.io). To install a single skill:

```bash
npx skills add owenbush/decodie-skill -s decodie-observe
```

See the [Skills guide](/docs/guides/commands) for what each skill does.

## VS Code Extension

Install from the VS Code Marketplace:

1. Open VS Code
2. Go to Extensions (`Cmd+Shift+X` / `Ctrl+Shift+X`)
3. Search for **Decodie**
4. Click **Install**

Or install from the command line:

```bash
code --install-extension owenbush.decodie
```

See the [VS Code guide](/docs/guides/vscode) for usage.

## Local UI

Install the CLI globally via npm:

```bash
npm install -g @owenbush/decodie-ui
```

Then start the server in any project that has a `.decodie/` directory:

```bash
decodie serve
```

This opens a web dashboard at `http://localhost:3000` showing your learning entries.

See the [Local UI guide](/docs/guides/local-ui) for usage.

## Next steps

[Configure a provider](/docs/provider-setup) to enable AI-powered features like Q&A and explanations.
