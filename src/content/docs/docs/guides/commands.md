---
title: Skills
description: Reference for all Decodie skills.
---

Decodie provides seven [Agent Skills](https://agentskills.io) compatible with Claude Code, Gemini CLI, Cursor, and 70+ other AI coding agents.

```bash
npx skills add owenbush/decodie-skill --all
```

## decodie-observe

Activate at the start of a coding session. The agent documents decisions, patterns, and concepts as it writes code in real-time.

- Entries are written after each meaningful decision, interleaved with coding
- Tracks session start/end with automatic session IDs
- Detects duplicates and cross-references related entries
- Marks entries as superseded when referenced code is rewritten or removed
- Links to external documentation (MDN, php.net, React docs, etc.)

## decodie-analyze

Generate learning entries from existing code — even code that wasn't written with an AI agent. Read-only: never modifies source files.

- Target a single file, a directory, or an entire project
- **Selective mode** (default): picks the 3–5 most significant patterns per file
- **Exhaustive mode**: documents every meaningful pattern
- Analysis sessions are prefixed `analyze-` for easy identification
- Same duplicate detection and cross-referencing as observe

### Source annotations

Place annotation markers in source code comments to control what gets analyzed. These work in both selective and exhaustive modes.

| Marker | Scope |
|--------|-------|
| `@decodie-include:file` | Entire file |
| `@decodie-include:class` | Next class/interface/enum |
| `@decodie-include:function` | Next function/method |
| `@decodie-include:start/end` | Block region |
| `@decodie-ignore:file` | Entire file |
| `@decodie-ignore:class` | Next class/interface/enum |
| `@decodie-ignore:function` | Next function/method |
| `@decodie-ignore:start/end` | Block region |

`@decodie-ignore` always takes precedence over `@decodie-include` when scopes overlap. `@decodie-include` entries don't count against the 3–5 limit in selective mode.

## decodie-explain

Get an immediate, detailed explanation of a specific piece of code — what it does, how it works, potential issues, and improvement suggestions.

- **Summary** — a high-level overview of what the code does
- **Detailed breakdowns** — complex sections explained individually with code excerpts
- **Issues** — potential bugs, security concerns, and edge cases flagged with severity
- **Improvements** — refactoring suggestions and modern alternatives with rationale
- **Ephemeral by default** — nothing is saved unless you explicitly ask
- Saved explanations use the `explain-` session prefix

## decodie-ask

Ask questions about existing learning entries and get deeper explanations using the entry content and live source code as context.

- Resolves the target entry by ID, keyword match, or most recent in session
- Loads the full entry content and reads current source files for context
- Goes beyond the entry — explains underlying concepts, provides examples, clarifies trade-offs
- Read-only — does not create or modify entries

## decodie-overview

Generate a high-level overview of a file, directory, or project — purpose, structure, entry points, and dependencies. The onboarding skill: run this first when opening unfamiliar code.

- Target a single file, a directory, or the whole project
- **Persists by default** — overviews are saved as entries so they can be browsed and shared
- Re-running on the same target overwrites the existing overview in place
- Overview sessions are prefixed `overview-`
- Captures `purpose`, `structure`, optional `entry_points`, and optional `dependencies`

## decodie-verify

Walk every entry's references, confirm the anchored code still resolves, and stamp confirmed entries with the current commit SHA.

- Re-checks each `anchor_hash` against the current file contents
- Backfills the `sources` field on older entries
- Sets `verified_sha` to the current HEAD when all anchors resolve
- Flips `stale: true` when an anchor is missing or a file has been removed
- Optional path argument scopes the check to a subdirectory

## decodie-flag-stale

The cheap counterpart to `decodie-verify`, designed for CI on every PR. Diffs source files against each entry's `verified_sha` and flips `stale: true` on entries whose files have changed.

- Uses `git diff --name-only` — fast enough for every PR
- Only sets the flag; clearing it requires `decodie-verify`
- Skips entries that have never been verified
- Output is machine-friendly so wrapping tools decide PR blocking policy
- Used under the hood by the GitHub Action
