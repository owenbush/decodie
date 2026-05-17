---
title: Local UI
description: Using the Decodie local web dashboard to browse entries, track progress, and use Q&A.
---

The Decodie local UI is a web dashboard that reads your `.decodie/` directory and presents your learning entries with filtering, lessons, progress tracking, and Q&A.

## Prerequisites

- [Install the CLI](/docs/installation)
- A project with a `.decodie/` directory containing learning entries
- [An API key](/docs/provider-setup) (required for Q&A only)

## Starting the server

```bash
cd your-project
decodie serve
```

Options:

| Flag | Default | Description |
|------|---------|-------------|
| `--port` | `3000` | Port to run the server on |
| `--dir` | `.` | Path to the project directory |

The dashboard opens at `http://localhost:<port>`.

## Features

### Entries

Browse all learning entries with filtering by:

- **Experience level** — foundational, intermediate, advanced, ecosystem
- **Decision type** — explanation, rationale, pattern, warning, convention, overview
- **Topic** — auto-generated tags from the entries

### Lessons

Entries are automatically grouped into topic-based lessons. You can also create custom lessons with a curated selection of entries in a specific order.

### Progress

Mark entries as "learned" to track your progress through the codebase. Progress is stored locally in `.decodie/progress.json`.

### Q&A

Ask follow-up questions about any entry. The Q&A panel streams responses in real-time and supports multi-turn conversations.

Q&A requires an API key configured in `.decodie/.env`. The status bar shows which provider is active.

## Provider status

Visit `/api/qa/status` to check which provider is configured:

```json
{ "enabled": true, "provider": "mistral" }
```

If no provider is configured, Q&A is disabled but all other features still work.
