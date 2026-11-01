# Project Progress & Handoff Log: NguyenKhangPortfolio

### Session Status [2026-11-01 20:53]
- **Task:** Configure Content-Security-Policy (CSP) for A+ SecurityHeaders Rating | **State:** Completed (100%)
- **Tech Stack:** Next.js 15.5+, Content-Security-Policy, HTTP Security Headers, Vercel Edge
- **Target Location:** `C:\Project\NguyenKhangPortfolio`

#### Completed Deliverables:
1. **CSP Configuration in `next.config.mjs`:**
   - `default-src 'self'`: Restricts resource loading to same-origin by default.
   - `script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com`: Allows Next.js hydration and Vercel Analytics.
   - `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`: Allows Tailwind CSS, CSS variables, and Google Fonts.
   - `img-src 'self' data: blob: https:`: Allows local assets, data URIs, and HTTPS remote images.
   - `font-src 'self' data: https://fonts.gstatic.com`: Allows static fonts and Google Fonts CDN.
   - `connect-src 'self' https: wss: https://vitals.vercel-insights.com`: Allows API calls, WebSockets, and Vercel Speed Insights.
   - `frame-ancestors 'none'`: Prevents embedding in iframes (anti-clickjacking).
   - `upgrade-insecure-requests`: Enforces HTTPS upgrade across all requests.
2. **Preserved Existing Security Headers:**
   - `Strict-Transport-Security` (HSTS preload)
   - `X-Frame-Options: DENY`
   - `X-Content-Type-Options: nosniff`
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy: camera=(), microphone=(), geolocation=()`

#### Live Production URLs:
- **Primary Domain:** [https://nguyenkhang-portfolio.vercel.app](https://nguyenkhang-portfolio.vercel.app)
- **Deployment URL:** [https://frontend-tan-one-lw8i5bec9g.vercel.app](https://frontend-tan-one-lw8i5bec9g.vercel.app)
- **Vercel Dashboard Inspector:** [https://vercel.com/hutech-doan-hoi/frontend](https://vercel.com/hutech-doan-hoi/frontend)
