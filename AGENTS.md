# LOCAL AGENT RULES & SPECIFICATIONS: NguyenKhangPortfolio

## 1. Project Overview & Tech Stack
- **Project Name:** NguyenKhangPortfolio
- **Domain:** Personal Portfolio & Achievements Showcase
- **Tech Stack:** React 19+ (Vite), TypeScript, FontAwesome (`@fortawesome/react-fontawesome`)
- **Package Manager:** `npm` (Strictly enforced. Never run `yarn` or `pnpm` in this repository)
- **Primary Domain Folder:** `frontend/`

---

## 2. Directory Layout & Architecture Standards (Zero Root Clutter)
- Root is reserved for configurations, CI/CD, documentation (`docs/`), and domain containers (`frontend/`, `docs/`, `.local/`).
- Do not create scratch files or random notes in the repository root.
  - Scratch scripts, local notes, or developer tests must reside exclusively in `.local/scratch/` or `.local/docs/`.
  - Architecture specs, RFCs, and formal documentation must reside in `docs/architecture/`.
  - Progress updates must be recorded in `docs/PROGRESS.md`.

### Frontend Structure (`frontend/src/`):
```text
frontend/src/
├── assets/          # Static assets, images, icons
├── components/      # Shared UI presentation components (Atomic/Reusable)
│   ├── common/      # Buttons, Badges, Modals, Navbar, Footer
│   └── icons/       # FontAwesome icon abstractions & wrappers
├── features/        # Feature-driven domains
│   ├── about/       # Personal summary, bio, career milestones
│   ├── achievements/# Awards, certifications, hackathon results
│   ├── projects/    # Portfolio projects showcase & details
│   └── contact/     # Contact links, form & social channels
├── core/            # Core cross-cutting utilities & standards
│   ├── api/         # JSend envelope contracts & fetch wrappers
│   ├── logger/      # Structured 4-level logger (DEBUG, INFO, WARN, ERROR)
│   └── validation/  # Zod schemas for runtime validation
├── types/           # Shared domain TypeScript types & interfaces
├── styles/          # Global CSS / Theme variables
├── App.tsx          # Main Application composition
└── main.tsx         # Application entry point
```

---

## 3. React & TypeScript Coding Standards
1. **Naming Conventions:**
   - **Components:** PascalCase (e.g., `AchievementCard.tsx`, `HeroSection.tsx`).
   - **Hooks:** camelCase prefixed with `use` (e.g., `useScrollSpy.ts`, `useTheme.ts`).
   - **Utilities & Helpers:** camelCase (e.g., `formatDate.ts`, `validatePayload.ts`).
   - **Types/Interfaces:** PascalCase with descriptive names (e.g., `ProjectItem`, `AchievementRecord`).
   - **Constants:** UPPER_SNAKE_CASE (e.g., `MAX_FEATURED_PROJECTS`, `DEFAULT_THEME`).

2. **Component Architecture & Best Practices:**
   - Prefer Named Exports over Default Exports for predictable imports and refactoring.
   - Keep components under 150 lines. Decompose large views into focused sub-components.
   - Use early returns and guard clauses; avoid nested ternary operators in JSX.
   - Component props must have explicit TypeScript `interface` or `type` definitions. No implicit `any`.

3. **FontAwesome Icon Usage Pattern:**
   - Centralize FontAwesome icon imports or create clean icon wrapper components in `components/icons/`.
   - Explicitly import individual icons from `@fortawesome/free-solid-svg-icons` or `@fortawesome/free-brands-svg-icons` to allow proper tree-shaking:
     ```tsx
     import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
     import { faTrophy, faBriefcase } from '@fortawesome/free-solid-svg-icons';
     import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
     ```

4. **Runtime Validation with Zod:**
   - Validate external inputs, config files, contact form submissions, and API responses through Zod schemas in `core/validation/`.
   - Never cast untrusted payloads using `as unknown as Type` without runtime parsing.

5. **Logging Standards:**
   - Never leave raw `console.log()` statements in production code.
   - Use the centralized structured logger from `core/logger/logger.ts` supporting `DEBUG`, `INFO`, `WARN`, `ERROR` levels with production log redaction.

6. **Unified API Contract (JSend Specification):**
   - All network responses must conform to the JSend specification:
     - **Success:** `{ success: true, data: T, message?: string }`
     - **Failure:** `{ success: false, error: { code: string, message: string, details?: unknown } }`

---

## 4. Anti-Patterns to Avoid
- ❌ Do NOT place temporary scripts, files, or markdown dumps in repository root.
- ❌ Do NOT use `any` type in TypeScript.
- ❌ Do NOT mutate React state or arrays directly.
- ❌ Do NOT pass `async` callbacks directly into array methods like `.forEach()`.
- ❌ Do NOT hardcode contact links or API keys in component views. Store them in validated configuration or environment variables.
- ❌ Do NOT install packages without explicit permission, and strictly use `npm`.
