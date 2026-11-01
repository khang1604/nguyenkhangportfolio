import type { Project } from '../../core/validation/schemas';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'SmartInventoryManager (VioWare)',
    shortDescription: {
      vi: 'Hệ thống quản lý kho thông minh doanh nghiệp xây dựng trên .NET 10 & C#, kiểm soát chuỗi cung ứng đa kho với tính toàn vẹn giao dịch ACID tuyệt đối.',
      en: 'Enterprise-grade smart inventory management platform built with .NET 10 & C#, managing multi-warehouse supply chains with strict ACID transaction integrity.',
    },
    architectureOverview: {
      vi: 'Kiến trúc Clean Architecture đa tầng (Business, Data, Common, UI). Tầng dữ liệu sử dụng Entity Framework Core kết hợp ADO.NET tối ưu. Toàn bộ quy trình duyệt phiếu nhập/xuất, cập nhật tồn kho và ghi log kiểm toán (audit trail) được đóng gói trong cùng một Database Transaction duy nhất. Hệ thống bảo mật phân quyền RBAC đa cấp (ADMIN, WAREHOUSE_MANAGER, STAFF).',
      en: 'Multi-layer Clean Architecture (.NET 10, EF Core, ADO.NET). Entire slip approval lifecycle, inventory balance adjustments, and audit trail entries execute within unified atomic database transactions. Enterprise Role-Based Access Control (ADMIN, WAREHOUSE_MANAGER, STAFF) with secure network connectivity via Tailscale.',
    },
    keyFeatures: [
      {
        vi: 'Quy trình kiểm duyệt phiếu nhập/xuất kho 5 bước nghiêm ngặt (Gửi duyệt, Duyệt, Từ chối, Hủy, Hoàn tất)',
        en: 'Strict 5-stage inventory receipt workflow (Submit, Approve, Reject, Cancel, Finalize)',
      },
      {
        vi: 'Cảnh báo tồn kho thời gian thực (hết hàng, dưới ngưỡng tối thiểu, vượt mức tồn tối đa)',
        en: 'Real-time stock threshold alerts (out-of-stock, minimum reorder point, excess capacity)',
      },
      {
        vi: 'Phân tích phân loại hàng hóa ABC, đề xuất đặt hàng tự động và luân chuyển giữa các kho',
        en: 'ABC inventory classification, automated replenishment proposals, and inter-warehouse transfers',
      },
      {
        vi: 'Xuất báo cáo tổng hợp Excel qua ClosedXML và in phiếu chứng từ A4 định dạng chuẩn PDF bằng QuestPDF',
        en: 'Automated Excel reporting via ClosedXML and standardized A4 PDF voucher printing with QuestPDF',
      },
      {
        vi: 'Đóng gói bộ cài đặt Windows x64 chuyên nghiệp với Inno Setup kèm kịch bản phân quyền cơ sở dữ liệu',
        en: 'Production-ready Windows x64 installer packaged with Inno Setup and automated SQL permission scripts',
      },
    ],
    lessonsLearned: {
      vi: 'Thiết kế transaction scope nguyên tử đảm bảo số liệu kế toán kho không bao giờ bị lệch ngay cả khi xảy ra sự cố mạng giữa chừng; tối ưu hóa index truy vấn giúp báo cáo hàng triệu bản ghi xuất tức thì.',
      en: 'Enforcing atomic transaction scopes guarantees zero balance discrepancies during concurrent warehouse operations; index tuning enabled instant analytics across millions of ledger entries.',
    },
    tags: ['.NET 10', 'C#', 'SQL Server', 'EF Core', 'WinForms', 'AntdUI', 'QuestPDF', 'Inno Setup'],
    githubUrl: 'https://github.com/khang1604/SmartInventoryManager',
    featured: true,
    metrics: '100% Atomic Ledger Transactions & Multi-Warehouse Sync',
  },
  {
    id: 'proj-2',
    title: 'Multi Agents Orchestrator',
    shortDescription: {
      vi: 'Nền tảng điều phối đa Agent tự hành tại local, phân phối tác vụ thông minh giữa các CLI coding hàng đầu với cơ chế kiểm thử an toàn.',
      en: 'Local autonomous multi-agent orchestration engine, coordinating tasks across elite coding CLIs with isolated verification sandboxes.',
    },
    architectureOverview: {
      vi: 'Kiến trúc điều phối phân tán (Multi-Agent Dispatcher) viết bằng Python 3.11+. Hệ thống tạo các Git Worktree độc lập làm sandbox cho mỗi agent lập trình mà không ảnh hưởng mã nguồn chính. Tích hợp Model Context Protocol (MCP) server, Copilot Chat `@hub` và cơ chế lưu vết checkpoint bền vững cho phép khôi phục tác vụ khi cạn quota.',
      en: 'Distributed multi-agent orchestration engine in Python 3.11+. Isolates coding agents inside temporary Git worktrees to prevent workspace contamination. Features custom MCP tool server, Copilot Chat `@hub` participant, and durable checkpoint recovery for interrupted long-running tasks.',
    },
    keyFeatures: [
      {
        vi: 'Phát lệnh đơn giản từ Terminal bằng lệnh `ma "mô tả tác vụ"` và theo dõi tiến độ thời gian thực',
        en: 'Single-command execution via `ma "task description"` with real-time terminal milestone tracking',
      },
      {
        vi: 'Cô lập không gian làm việc qua Git Worktree, chạy lệnh kiểm thử tự động (npm test, pytest) trước khi áp dụng',
        en: 'Git worktree sandbox isolation executing automated test suites before offering change acceptance',
      },
      {
        vi: 'Tích hợp mở workspace trong VS Code xem code live và review diff trực quan trước khi commit',
        en: 'Live VS Code workspace inspection (`ma open`) and unified diff reviewer before applying patches',
      },
      {
        vi: 'Hỗ trợ giao thức MCP (Model Context Protocol) và VS Code Copilot Chat `@hub` tương tác tự nhiên',
        en: 'Full Model Context Protocol (MCP) compliance and native VS Code Copilot Chat integration',
      },
      {
        vi: 'Cơ chế Fail-Closed Security Boundary: Chặn đọc secret, bảo vệ an toàn tệp nhạy cảm và dữ liệu cá nhân',
        en: 'Fail-closed security invariants: Zero secret leaks, sandbox boundary protection, and uncommitted code safety',
      },
    ],
    lessonsLearned: {
      vi: 'Bắt buộc agent phải vượt qua bộ test tự động (AAA Pattern) trước khi người dùng chấp thuận code giúp loại bỏ 100% mã sinh lỗi hoặc phá vỡ cấu hình dự án.',
      en: 'Requiring agents to pass regression test suites before prompting user acceptance eliminates 100% of hallucinations and breaking configuration regressions.',
    },
    tags: ['Python 3.11', 'Git Worktrees', 'MCP Protocol', 'VS Code Extension', 'LLM Agents', 'AppSec'],
    githubUrl: 'https://github.com/khang1604/multi_agents',
    featured: true,
    metrics: 'Zero Workspace Collisions & Deterministic CI Gates',
  },
  {
    id: 'proj-3',
    title: 'NguyenKhangPortfolio',
    shortDescription: {
      vi: 'Web Portfolio kiến trúc chuẩn mực với React 19, TypeScript, Zod validation, i18n Song ngữ và Dark/Light mode Glassmorphism.',
      en: 'Architectural-grade personal portfolio built with React 19, TypeScript, Zod validation, bilingual i18n, and Glassmorphism Dark/Light mode.',
    },
    architectureOverview: {
      vi: 'Thiết kế theo chuẩn Zero Root Clutter & Feature-Driven Domain Architecture. Tách biệt hoàn toàn giữa Core Foundations (ThemeContext, LanguageContext, Logger 4 cấp độ, JSend Envelope API Contract) và Presentation UI. Kiểm tra dữ liệu tĩnh và form bằng Zod runtime schemas.',
      en: 'Architected under Zero Root Clutter and Feature-Driven Domain design. Clean decoupling between Core Foundations (ThemeContext, LanguageContext, 4-level masking logger, JSend API envelope) and Presentation UI. Full Zod runtime validation.',
    },
    keyFeatures: [
      {
        vi: 'Chuyển đổi giao diện Dark / Light Mode tức thì, phong cách kính mờ Glassmorphism công nghệ cao',
        en: 'Instant Dark/Light theme switching with modern high-tech Glassmorphism styling',
      },
      {
        vi: 'Hỗ trợ song ngữ Tiếng Việt & Tiếng Anh với lưu trữ trạng thái tự động trong localStorage',
        en: 'Persistent bilingual support (VI/EN) with seamless language switching on Navbar',
      },
      {
        vi: 'Modal phân tích chi tiết kỹ thuật dự án (kiến trúc, tính năng cốt lõi, bài học rút ra)',
        en: 'Technical deep-dive modal revealing system blueprints, core features, and key takeaways',
      },
      {
        vi: 'Hệ thống Structured Logger 4 cấp độ tự động che giấu (redact) thông tin nhạy cảm',
        en: '4-level structured logger featuring automated redaction of sensitive credentials and tokens',
      },
      {
        vi: 'Tích hợp FontAwesome SVG Core tối ưu tree-shaking và đạt điểm hiệu năng tối đa',
        en: 'Tree-shaken FontAwesome SVG iconography delivering 100/100 Lighthouse performance',
      },
    ],
    lessonsLearned: {
      vi: 'Cấu trúc thư mục theo Domain kết hợp Zod validation giúp dự án dễ bảo trì, mở rộng thêm dự án hoặc công nghệ mới mà không phát sinh lỗi kiểu dữ liệu.',
      en: 'Domain-driven folder isolation paired with Zod runtime schemas guarantees effortless extensibility and zero runtime type errors.',
    },
    tags: ['React 19', 'TypeScript', 'Vite', 'FontAwesome', 'Zod', 'i18n', 'Glassmorphism'],
    githubUrl: 'https://github.com/khang1604/nguyenkhangportfolio',
    featured: false,
    metrics: '100/100 Lighthouse Performance & Zero Type Warnings',
  },
];
