---
title: GitHub Bot
description: On-demand analysis and explanations via @decodie-bot in PR comments.
---

Mention `@decodie-bot` in any pull request comment. Highlight code in a review for an instant explanation, or ask it to analyse files from a top-level comment.

## Setup

Add this file to your repo at `.github/workflows/decodie-bot.yml`:

```yaml
name: Decodie Bot
on:
  issue_comment:
    types: [created]
  pull_request_review_comment:
    types: [created]

jobs:
  bot:
    if: contains(github.event.comment.body, '@decodie-bot')
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pull-requests: write
      issues: write
    steps:
      - uses: actions/checkout@v4
      - uses: owenbush/decodie-github-bot@main
        with:
          anthropic-api-key: ${{ secrets.ANTHROPIC_API_KEY }}
```

## Usage

### Inline code explanations

Highlight lines in a PR review and mention `@decodie-bot`. You'll get a detailed breakdown with summary, issues, improvements, and key concepts — posted as a reply.

### On-demand analysis

Post a top-level PR comment with `@decodie-bot analyze this PR` to generate structured learning entries for the changed files.

## How it works

1. You mention `@decodie-bot` in a comment
2. The bot reacts immediately and posts a status update with a link to the running workflow
3. Analysis runs and results are posted as a reply

The Bot complements the Action: the Action documents every PR automatically, while the Bot answers specific questions during review.
