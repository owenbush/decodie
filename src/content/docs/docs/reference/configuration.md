---
title: Configuration
description: Decodie configuration file reference.
---

Decodie stores its configuration in `.decodie/config.json` in your project root. This file controls how entries are displayed and filtered in the local UI.

## Config file

```json
{
  "user_experience_level": "intermediate",
  "preferred_topics": [],
  "excluded_topics": [],
  "archival_threshold_days": 90,
  "auto_suggest_archival": true,
  "show_external_docs": true,
  "default_view": "all",
  "sessions_visible_by_default": 5
}
```

## Fields

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `user_experience_level` | string | `"intermediate"` | Your experience level: `foundational`, `intermediate`, `advanced`, or `ecosystem`. Entries are tagged with levels to help you focus on what's relevant. |
| `preferred_topics` | string[] | `[]` | Topics to prioritise in the UI. |
| `excluded_topics` | string[] | `[]` | Topics to hide from the UI. |
| `archival_threshold_days` | number | `90` | Number of days after which entries are suggested for archival. |
| `auto_suggest_archival` | boolean | `true` | Whether to suggest archiving old entries. |
| `show_external_docs` | boolean | `true` | Whether to show external documentation links on entries. |
| `default_view` | string | `"all"` | Default view when opening the UI: `all`, `active`, `session`, or `lessons`. |
| `sessions_visible_by_default` | number | `5` | Number of recent sessions to show in the session view. |

## Directory structure

A typical `.decodie/` directory:

```
.decodie/
  config.json          # Configuration
  index.json           # Entry index (metadata for all entries)
  sessions/            # Session files with full entry content
    session-*.json
  conversations/       # Q&A conversation history (local only)
    <entry-id>.json
  progress.json        # Learning progress tracking
  lessons.json         # Custom lesson definitions
  .env                 # API key (do not commit)
```

## VS Code settings

When using the VS Code extension, these settings are also available:

| Setting | Default | Description |
|---------|---------|-------------|
| `decodie.model` | *(empty)* | Model override, equivalent to `LLM_MODEL` in `.env`. |
| `decodie.apiKey` | *(empty)* | **Deprecated.** API key for Anthropic. Use `.decodie/.env` instead. |
| `decodie.provider` | `auto` | Provider selection: `auto`, `anthropic`, `openai`, `google`, `mistral`, `xai`. |
