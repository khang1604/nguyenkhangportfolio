# Project Progress & Handoff Log: NguyenKhangPortfolio

### Session Status [2026-11-01 20:19]
- **Task:** Resolve Dev Server Cache Conflict & Non-Destructive Pre-Commit Diagnostics | **State:** Completed (100%)
- **Tech Stack:** Next.js 15.5+, React 19, TypeScript, Tailwind CSS v4, Lucide Icons
- **Target Location:** `C:\Project\NguyenKhangPortfolio`

#### Completed Deliverables:
1. **Dev Server 404 Root Cause Analysis:**
   - **Root Cause:** When the pre-commit hook previously executed `next build`, it regenerated the `.next/` directory with production hashes while the developer's live `next dev` server was actively running on `localhost:3000`. The running dev server's in-memory router attempted to serve development chunk URLs (`layout.css?v=...`, `app-pages-internals.js`), which resulted in 404 responses because `.next/` had been rewritten for production.
   - **Permanent Architectural Fix:**
     - Separated pre-commit diagnostics from production building: updated `.git/hooks/pre-commit` to execute `npm run typecheck` (`tsc --noEmit`) and `npm run lint`.
     - Preserves full static analysis and 100% type verification without touching or wiping the active development `.next` cache.
     - Added `npm run build-check` for standalone production build verification when the dev server is offline.
2. **Standardized Local Project Rules (`AGENTS.md`):**
   - Documented the non-destructive pre-commit diagnostic standard.

#### Next Actions:
1. Restart the local dev server (`npm run dev`) to reload fresh dev assets.
