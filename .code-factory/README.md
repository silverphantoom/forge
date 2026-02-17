# Code Factory

Agent-written, agent-reviewed code with machine-verifiable safety.

## How It Works

1. **Coding agent** writes code (Codex CLI / Claude)
2. **POLICY.yml** enforces risk-based gates
3. **Review agent** validates the PR against policy
4. **Evidence** is machine-checkable (not narrative)
5. **Failures** become permanent test harnesses

Humans supervise policy — not every PR.

## Key Rules

- `POLICY.yml` is the single source of truth — everything obeys it
- Preflight gates run BEFORE expensive CI
- All evidence must match current PR head SHA
- One canonical rerun requester (no comment spam / race conditions)
- Bot-only threads auto-resolve after clean rerun
- Every incident produces a test harness (floor only goes up)

## Files

- `POLICY.yml` — canonical rules (risk tiers, gates, SHA discipline)
- `review-agent.md` — prompt for the review agent
- `harnesses/` — test harnesses from past incidents
- `incident-sla.md` — tracked regressions and resolutions

## Mental Model

```
Policy gate → Risk classify → Review on current HEAD → Fix in-branch → Merge
```

Agents can write code — repos must enforce truth.
