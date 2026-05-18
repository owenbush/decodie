---
title: Claude Code Commands
description: Reference for all Decodie Claude Code skill commands.
---

The Decodie skill adds six commands to Claude Code. Install the skill once, then use these commands in any session.

```bash
npx @owenbush/decodie-ui install-skill
```

## /decodie:observe

Activate at the start of a coding session. The agent documents decisions, patterns, and concepts as it writes code in real-time.

- Entries are written after each meaningful decision, interleaved with coding
- Tracks session start/end with automatic session IDs
- Detects duplicates and cross-references related entries
- Marks entries as superseded when referenced code is rewritten or removed
- Links to external documentation (MDN, php.net, React docs, etc.)

```
/decodie:observe
# then code as usual
```

## /decodie:analyze

Generate learning entries from existing code — even code that wasn't written with Claude. Read-only: never modifies source files.

- Target a single file, a directory, or an entire project
- **Selective mode** (default): picks the 3–5 most significant patterns per file
- **Exhaustive mode** (`--exhaustive`): documents every meaningful pattern
- Analysis sessions are prefixed `analyze-` for easy identification
- Same duplicate detection and cross-referencing as observe

```
/decodie:analyze src/auth/
/decodie:analyze src/utils/helpers.ts
/decodie:analyze --exhaustive src/
```

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

## /decodie:explain

Get an immediate, detailed explanation of a specific piece of code — what it does, how it works, potential issues, and improvement suggestions.

- **Summary** — a high-level overview of what the code does
- **Detailed breakdowns** — complex sections explained individually with code excerpts
- **Issues** — potential bugs, security concerns, and edge cases flagged with severity
- **Improvements** — refactoring suggestions and modern alternatives with rationale
- **Ephemeral by default** — nothing is saved unless you explicitly ask
- Saved explanations use the `explain-` session prefix

```
# Paste or reference code, then:
/decodie:explain

# Ask to save a valuable explanation
"save this as an entry"
```

## /decodie:overview

Generate a high-level overview of a file, directory, or project — purpose, structure, entry points, and dependencies. The onboarding command: run this first when opening unfamiliar code.

- Target a single file, a directory, or the whole project
- **Persists by default** — overviews are saved as entries so they can be browsed and shared
- Re-running on the same target overwrites the existing overview in place
- Overview sessions are prefixed `overview-`
- Captures `purpose`, `structure`, optional `entry_points`, and optional `dependencies`

```
/decodie:overview src/auth/
/decodie:overview src/utils/helpers.ts
/decodie:overview  # whole project
```

## /decodie:verify

Walk every entry's references, confirm the anchored code still resolves, and stamp confirmed entries with the current commit SHA.

- Re-checks each `anchor_hash` against the current file contents
- Backfills the `sources` field on older entries
- Sets `verified_sha` to the current HEAD when all anchors resolve
- Flips `stale: true` when an anchor is missing or a file has been removed
- Optional path argument scopes the check to a subdirectory

```
/decodie:verify
/decodie:verify src/auth/
```

## /decodie:flag-stale

The cheap counterpart to `verify`, designed for CI on every PR. Diffs source files against each entry's `verified_sha` and flips `stale: true` on entries whose files have changed.

- Uses `git diff --name-only` — fast enough for every PR
- Only sets the flag; clearing it requires `/decodie:verify`
- Skips entries that have never been verified
- Output is machine-friendly so wrapping tools decide PR blocking policy
- Used under the hood by the GitHub Action

```
/decodie:flag-stale
```
