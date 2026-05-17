---
title: GitHub Action
description: Automatically analyse changed files on every pull request.
---

The Decodie GitHub Action analyses changed files in every PR. It uses the same Decodie skill under the hood — same prompts, same quality, zero manual effort.

## Setup

Add this file to your repo at `.github/workflows/decodie.yml`:

```yaml
name: Decodie
on:
  pull_request:
    types: [opened, synchronize]

jobs:
  analyze:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pull-requests: write
    steps:
      - uses: actions/checkout@v4
        with:
          ref: ${{ github.head_ref }}
      - uses: owenbush/decodie-github-action@v1
        with:
          anthropic-api-key: ${{ secrets.ANTHROPIC_API_KEY }}
```

Add your API key as a repository secret (**Settings > Secrets and variables > Actions**).

## Features

- **Zero manual effort** — runs automatically when a PR is opened or updated
- **PR comment summary** — posts a formatted comment with entries grouped by file (disable with `comment: false`)
- **Commits to .decodie/** — entries are committed to the PR branch (disable with `commit: false`)
- **Fully configurable** — control max files, include/exclude patterns, selective vs exhaustive mode, and model selection

## Configuration

| Input | Default | Description |
|-------|---------|-------------|
| `anthropic-api-key` | | Anthropic API key for analysis |
| `model` | `claude-sonnet-4-6` | Model to use |
| `mode` | `selective` | `selective` or `exhaustive` |
| `max-files` | `10` | Maximum files to analyse per PR |
| `include` | `**/*` | Glob pattern for files to include |
| `exclude` | | Glob pattern for files to exclude |
| `comment` | `true` | Post a PR comment with results |
| `commit` | `true` | Commit generated entries to the branch |

## Example with all options

```yaml
- uses: owenbush/decodie-github-action@v1
  with:
    anthropic-api-key: ${{ secrets.ANTHROPIC_API_KEY }}
    model: claude-sonnet-4-6
    mode: exhaustive
    max-files: 20
    include: "src/**/*.ts"
    exclude: "**/*.test.ts"
    comment: true
    commit: true
```
