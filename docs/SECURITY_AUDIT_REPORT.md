# Security Audit Report: NguyenKhangPortfolio

- **Target Repository:** `C:\Project\NguyenKhangPortfolio`
- **Target URL:** `https://nguyenkhang-portfolio.vercel.app`
- **Audit Date:** 2026-11-01
- **Audit Standard:** Global AppSec Invariants (Defense-in-Depth, OWASP Top 10, SecurityHeaders A+)
- **Overall Status:** `FLAGGED_WITH_WARNINGS`

---

## 1. Executive Summary

| Category | Status | Details |
| :--- | :--- | :--- |
| **Overall Status** | **FLAGGED_WITH_WARNINGS** | No Critical vulnerabilities; 1 SCA High CVE in upstream dependency; HTTP security headers at Grade A+. |
| **Critical Findings** | **0** | Zero remote code execution, SQLi, or privilege escalation risks. |
| **High Findings** | **1** | Upstream bundled `postcss <= 8.5.22` vulnerability via Next.js core. |
| **Medium Findings** | **0** | Zero SSRF, IDOR, or authentication bypass risks. |
| **Low / Informational** | **1** | External anchor tags missing explicit `noopener` keyword in `rel` attribute. |

---

## 2. Automated Security Audit Checklist (7 Invariants)

| Checkpoint | Target | Finding / Evaluation | Verdict |
| :--- | :--- | :--- | :--- |
| **1. SSRF** | Outbound URL calls | No server-side URL proxying or unvalidated outbound requests. Next.js images allowlist strictly limited to `res.cloudinary.com` via HTTPS. | **PASSED** |
| **2. SCA** | Dependencies | `npm audit` identified CVEs in bundled `postcss` within `next@15.5.28` (`GHSA-qx2v-qp2m-jg93`). Requires Next.js major bump to resolve completely. | **FLAGGED** |
| **3. Audit & Secrets** | Logging & secrets | No hardcoded tokens or API keys. `.env*` files protected via `.gitignore`. Structured logger implements automated regex masking for sensitive credentials. | **PASSED** |
| **4. DoS & Bounds** | Resource bounds | Contact form protected by Zod runtime schema with character length constraints. Rate limiting and DDoS protection handled at Vercel Edge. | **PASSED** |
| **5. Injection** | Queries & shell | Zero shell invocations or unescaped HTML injections. React 19 JSX context-aware output encoding enforced. | **PASSED** |
| **6. Access Control** | Resource authorization | Public static developer portfolio with client-side state. No BOLA/IDOR attack surface. | **PASSED** |
| **7. Transport** | Network & headers | Full compliance with HSTS preload (`max-age=63072000`), X-Frame-Options (`DENY`), X-Content-Type-Options (`nosniff`), Permissions-Policy, and dynamic cryptographic Nonce CSP (`A+` rating). | **PASSED** |

---

## 3. Detailed Findings & Remediation Patches

### Finding SCA-001: Upstream PostCSS Vulnerability in Next.js Dependency Tree
- **Rule ID:** `SCA-001`
- **Location:** `frontend/package-lock.json` (`node_modules/next/node_modules/postcss`)
- **Severity:** `High` (CVSS 7.5 - Advisory `GHSA-qx2v-qp2m-jg93` & `GHSA-6g55-p6wh-862q`)
- **Exploit Scenario:**
  PostCSS versions `<= 8.5.22` contain an issue where unescaped `</style>` tags in CSS stringify output or malicious `sourceMappingURL` comments could cause unintended script execution or local map file disclosure when parsing untrusted user-supplied CSS stylesheets.
- **Exploitability in Target Application:**
  **Minimal / Negligible.** The portfolio is a static developer profile where CSS is compiled strictly from trusted developer sources during build time. No client-supplied or untrusted runtime CSS is ever passed to PostCSS.
- **Remediation Patch:**
  Monitor upstream Next.js security patch releases for Next.js 15 LTS or plan an upgrade to Next.js 16 once stable:
  ```bash
  # Check for minor patch releases of next 15 that bump postcss
  npm update next
  ```

---

### Finding SEC-002: External Links Missing Explicit `noopener`
- **Rule ID:** `SEC-002`
- **Location:** `frontend/src/app/page.tsx` (Lines 526, 689, 700, 902, 994, 1005)
- **Severity:** `Low` / `Informational`
- **Exploit Scenario:**
  Hyperlinks using `target="_blank"` with `rel="noreferrer"` are protected against referrer leaking, but older browsers or non-standard webviews may not implicitly apply `noopener`, potentially exposing `window.opener` to the target page (Reverse Tabnabbing).
- **Remediation Patch:**
  Update external link attributes across `page.tsx` from `rel="noreferrer"` to `rel="noopener noreferrer"`.

---

## 4. Verification & Validation Evidence

- **TypeScript Typecheck:** `npm run typecheck` (`tsc --noEmit`) -> **0 Errors**.
- **Code Linter:** `npm run lint` (`oxlint`) -> **0 Errors**.
- **Production Build:** `next build` -> **Compiled Successfully, Dynamic CSP Middleware active**.
- **Live Response Headers:**
  ```http
  HTTP/1.1 200 OK
  Content-Security-Policy: default-src 'self'; script-src 'self' 'nonce-...' 'strict-dynamic' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: blob: https:; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' https: wss: https://vitals.vercel-insights.com; frame-ancestors 'none'; upgrade-insecure-requests;
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  ```
