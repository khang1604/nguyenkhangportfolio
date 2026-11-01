# LOCAL AGENT RULES & SPECIFICATIONS: NguyenKhangPortfolio

## 1. Project Overview & Tech Stack
- **Project Name:** NguyenKhangPortfolio
- **Domain:** Personal Developer Portfolio, AI & Systems Showcase
- **Tech Stack:** Next.js 15.5+ (App Router), React 19, TypeScript, Tailwind CSS v4, Lucide Icons, Zod
- **Package Manager:** `npm` (Strictly enforced. Never run `yarn` or `pnpm` in this repository)
- **Primary Domain Folder:** `frontend/`
- **Remote Repository:** `https://github.com/khang1604/nguyenkhangportfolio.git` (`main` branch)

---

## 2. Directory Layout & Architecture Standards (Zero Root Clutter)
- Root is strictly reserved for configurations, CI/CD, documentation (`docs/`), and domain containers (`frontend/`, `docs/`, `.local/`).
- Scratch scripts, local notes, or developer tests must reside exclusively in `.local/scratch/` or `.local/docs/`.
- Progress updates must be continuously recorded in `docs/PROGRESS.md`.

### Frontend Structure (`frontend/src/`):
```text
frontend/src/
├── app/             # Next.js 15 App Router (layout.tsx, page.tsx, globals.css, not-found.tsx)
├── components/      # Shared UI presentation components
│   ├── common/      # RevealOnScroll, interactive elements
│   └── icons/       # Lucide and Brand SVG Icons (GithubIcon, LinkedinIcon)
├── core/            # Core cross-cutting utilities & standards
│   ├── theme/       # ThemeContext (OLED Dark & Clean Slate Light Mode)
│   ├── i18n/        # LanguageContext (Bilingual VI/EN)
│   ├── hooks/       # Custom React hooks (useScrollReveal)
│   └── logger/      # Structured project logger
└── types/           # Shared domain TypeScript types & interfaces
```

---

## 3. MANDATORY PRE-COMMIT DIAGNOSTICS & VERIFICATION (HARD RULE)

> [!IMPORTANT]
> **FAIL-CLOSED POLICY (Deny by Default):**
> Before executing ANY `git commit` or declaring any code modification complete, the developer or agent **MUST** run automated diagnostic checks. Committing untested or broken code is **STRICTLY PROHIBITED**.

### Diagnostic Commands (Run inside `frontend/`):
1. **Type Safety Diagnostics (Pre-Commit Standard):**
   ```bash
   cd frontend && npm run typecheck
   ```
   *Executes `tsc --noEmit` to verify 100% type safety and syntax without corrupting the local development server's `.next` cache.*

2. **Linting Check:**
   ```bash
   cd frontend && npm run lint
   ```
   *Executes code linting via `oxlint`.*

3. **Full Production Build Check (Deployment / CI Verification):**
   ```bash
   cd frontend && npm run build-check
   ```
   *Executes `tsc --noEmit && next build` for deep production verification.*

### Invariant Rules:
1. **Zero Errors Allowed:** If `npm run diagnose` or `tsc --noEmit` returns a non-zero exit code or any compilation/type error, the commit is **IMMEDIATELY BLOCKED**.
2. **No Bypass Flags:** Never use `--no-verify` or disable Git pre-commit hooks to bypass diagnostic failures.
3. **Automated Git Hook:** A Git `pre-commit` hook is configured in `.git/hooks/pre-commit` to automatically run `npm run diagnose` prior to every local commit.
4. **Root Cause Resolution:** When a diagnostic failure occurs, diagnose the root cause, fix the source code, and re-run diagnostics until an exit code of `0` is achieved.

---

## 4. UI/UX & Coding Standards
1. **Iconography:** Use exclusively **Lucide Icons** and clean SVG wrappers. Never use raw emojis as UI icons.
2. **Contrast & Theme Invariants (WCAG 2.1):**
   - Minimum 4.5:1 text contrast in both OLED Dark (`#000000`) and Light Mode (`#f8fafc`).
   - Use dynamic CSS variables (`var(--background)`, `var(--foreground)`, `var(--card)`, `var(--border)`, `var(--muted)`).
   - Never hardcode static dark colors (`bg-black`, `text-white`, `text-zinc-400`) on layout roots or interactive elements without theme-aware styling.
3. **Strict Type Safety:**
   - Zero `any` in TypeScript.
   - Runtime validation on forms and external inputs via `Zod`.
4. **Conventional Commits:**
   - Format: `<type>(<scope>): <concise description>` (e.g., `fix(theme): ...`, `feat(portfolio): ...`, `chore(rules): ...`).

---

## 5. Anti-Patterns to Avoid
- ❌ Do NOT commit code without running `npm run diagnose`.
- ❌ Do NOT place temporary scripts, files, or markdown dumps in repository root.
- ❌ Do NOT use `any` type in TypeScript.
- ❌ Do NOT mutate React state or arrays directly.
- ❌ Do NOT pass `async` callbacks directly into array methods like `.forEach()`.
- ❌ Do NOT install packages without explicit permission, and strictly use `npm`.
