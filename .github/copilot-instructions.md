# Copilot Instructions

## Project Overview

Workshop repository for **dev10to100** — a 1-day technical workshop teaching GitHub Copilot CLI. Participants clone this repo and use it as the practice project throughout the day.

The repo contains two things:
1. **A Node.js/TypeScript REST API** (`src/`) with deliberate bugs and incomplete tests — the practice project for labs
2. **Course documentation** (`docs/`, `instructor/`) — module guides and the full instructor guide

## Language

- Course docs and commit messages: **Spanish**
- Code, variable names, identifiers, comments: **English**

## Architecture

```
src/
  server.ts          # Express entry point
  utils.ts           # Utility functions — has 2 deliberate bugs (validateEmail, getPage)
  api/users.ts       # Users CRUD — bug: GET /users crashes on empty array
  api/auth.ts        # Auth endpoints — bug: expired tokens not checked
  legacy/            # Plain JS files with no types — Módulo 6 migration exercise
__tests__/           # Intentionally incomplete tests (filling them in is a lab exercise)
docs/                # One markdown file per module (modulo-0 through modulo-6)
instructor/          # Full instructor guide (guia-instructor.md)
scripts/             # ai-review.sh — headless Copilot CLI automation example
```

## Build, Test, Lint

```bash
npm install
npm test                                    # Run all tests
npm run test:watch                          # Watch mode
npx jest __tests__/utils.test.ts           # Run single test file
npx jest --testNamePattern="validateEmail" # Run single test by name
npm run build                              # Compile TypeScript
npm run dev                                # Start server with ts-node
```

## Key Conventions (from AGENTS.md)

- TypeScript strict — no `any`
- Naming: `camelCase` for functions/variables, `PascalCase` for classes/interfaces
- JSDoc on all public functions in `src/`
- Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `test:`
- Never push directly to `main`
- Do **not** modify `src/legacy/` — it's intentionally untyped for the Módulo 6 exercise

## Deliberate Bugs (do not fix unless doing a lab exercise)

| Location | Bug |
|----------|-----|
| `src/utils.ts` `validateEmail` | Rejects subdomain emails (`user@mail.example.com`) |
| `src/utils.ts` `getPage` | 0-indexed but API treats page as 1-indexed |
| `src/api/users.ts` `GET /users` | Crashes if users array is empty |
| `src/api/auth.ts` `GET /auth/me` | Does not check token expiry |

## Commit Messages

Always include this trailer:

```
Co-authored-by: Copilot <223556219+Copilot@users.noreply.github.com>
```
