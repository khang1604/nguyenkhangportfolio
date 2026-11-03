'use client';

import React, { useState } from 'react';
import {
  Terminal,
  Code2,
  Briefcase,
  GraduationCap,
  Cpu,
  Layers,
  Send,
  ExternalLink,
  Lock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Server,
  Database,
  Boxes,
  X,
  Menu,
  Sun,
  Moon,
  Globe,
} from 'lucide-react';
import { z } from 'zod';
import { GithubIcon } from '@/components/icons/BrandIcons';
import { ThemeProvider, useTheme } from '@/core/theme/ThemeContext';
import { LanguageProvider, useLanguage } from '@/core/i18n/LanguageContext';
import { RevealOnScroll } from '@/components/common/RevealOnScroll';
import { BackgroundEffect } from '@/components/common/BackgroundEffect';

// Zod Contact Form Schema
const ContactSchema = z.object({
  name: z.string().min(2, 'Vui lòng nhập họ tên / Name is required (min 2 chars)'),
  email: z.string().email('Địa chỉ email không hợp lệ / Invalid email address'),
  subject: z.string().min(3, 'Tiêu đề tối thiểu 3 ký tự / Subject min 3 chars'),
  message: z.string().min(10, 'Nội dung tối thiểu 10 ký tự / Message min 10 chars'),
});

type ContactFormData = z.infer<typeof ContactSchema>;

interface LocalizedItem {
  vi: string;
  en: string;
}

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: LocalizedItem;
  architecture: LocalizedItem;
  keyPoints: LocalizedItem[];
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  isPrivate?: boolean;
  metrics: LocalizedItem;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'doanhoi',
    title: 'Cổng Thông Tin Đoàn - Hội HUTECH',
    subtitle: 'doanhoihutech.vn',
    category: 'CLIENT WORK',
    description: {
      vi: 'Cổng thông tin và quản lý hoạt động cho Đoàn - Hội HUTECH, xử lý lưu lượng truy cập của hơn 30.000 sinh viên trong các đợt cao điểm phong trào.',
      en: 'Official web portal and activity management platform for HUTECH Youth Union, handling peak traffic from over 30,000 students during major university campaigns.',
    },
    architecture: {
      vi: 'Nền tảng sử dụng Next.js với cơ chế Server-Side Rendering và ISR để giảm thời gian phản hồi trang xuống dưới 1 giây. Dữ liệu hồ sơ sinh viên và tin tức được mô hình hóa linh hoạt trên MongoDB, còn toàn bộ ảnh hoạt động được xử lý nén và phân phối qua Cloudinary CDN.',
      en: 'Built on Next.js with SSR and ISR to keep page load times under 1 second. Student profiles and campaign feeds are stored in MongoDB NoSQL, while media assets are compressed and distributed automatically via Cloudinary CDN.',
    },
    keyPoints: [
      {
        vi: 'Xử lý ổn định các đợt cao điểm bình chọn và đăng ký sự kiện của hàng chục ngàn sinh viên',
        en: 'Maintains stability during high-traffic voting and event registrations across tens of thousands of users',
      },
      {
        vi: 'Hệ thống CMS cho phép ban biên tập đăng tải văn bản, biểu mẫu và tin tức sự kiện',
        en: 'Administrative CMS for editors to publish guidelines, forms, and event announcements',
      },
      {
        vi: 'Bàn giao nghiệm thu thực tế, đang vận hành chính thức trên môi trường Production',
        en: 'Delivered and verified in production, running continuously for real-world client operations',
      },
    ],
    tags: ['Next.js', 'Mantine UI', 'MongoDB', 'Cloudinary', 'Production', 'Client Handover'],
    demoUrl: 'https://doanhoihutech.vn/',
    isPrivate: true,
    metrics: {
      vi: 'Hơn 30.000 Sinh Viên • Vận Hành Thực Tế',
      en: '30,000+ Active Students • Live Production',
    },
  },
  {
    id: 'inventory',
    title: 'SmartInventoryManager (VioWare)',
    subtitle: 'Enterprise Supply Chain Platform',
    category: 'ENTERPRISE',
    description: {
      vi: 'Phần mềm quản lý kho vật tư doanh nghiệp viết bằng .NET 10 và C#, kiểm soát điều chuyển hàng hóa đa kho theo thời gian thực.',
      en: 'Enterprise supply-chain and warehouse management software built with .NET 10 and C#, tracking real-time material transfers across multiple facilities.',
    },
    architecture: {
      vi: 'Mã nguồn tổ chức theo Clean Architecture nhằm tách biệt hoàn toàn nghiệp vụ kho khỏi tầng dữ liệu Entity Framework Core. Mọi bước duyệt phiếu, cập nhật tồn kho và ghi nhật ký kiểm toán đều thực thi trong một Database Transaction duy nhất để bảo đảm dữ liệu không lệch khi mất kết nối mạng. Hệ thống tự động kết xuất báo cáo Excel qua ClosedXML và in chứng từ PDF khổ A4 bằng QuestPDF.',
      en: 'Structured under Clean Architecture to completely decouple business logic from EF Core data persistence. Slip approvals, inventory balance updates, and audit logging execute inside single database transactions to guarantee ledger consistency. Exports automated Excel reports via ClosedXML and standardized A4 PDF receipts using QuestPDF.',
    },
    keyPoints: [
      {
        vi: 'Quy trình kiểm duyệt phiếu nhập/xuất kho 5 bước nghiêm ngặt (Gửi duyệt, Duyệt, Từ chối, Hủy, Hoàn tất)',
        en: 'Strict 5-stage inventory receipt workflow (Submit, Approve, Reject, Cancel, Finalize)',
      },
      {
        vi: 'Cảnh báo tồn kho thời gian thực (hết hàng, dưới ngưỡng an toàn, vượt sức chứa tối đa)',
        en: 'Real-time stock threshold alerts (out-of-stock, minimum reorder point, excess capacity)',
      },
      {
        vi: 'Tự động xuất báo cáo Excel qua ClosedXML và in phiếu chứng từ A4 định dạng chuẩn PDF với QuestPDF',
        en: 'Automated Excel reporting via ClosedXML and standardized A4 PDF voucher printing with QuestPDF',
      },
      {
        vi: 'Đóng gói bộ cài đặt Windows x64 chuyên nghiệp bằng Inno Setup',
        en: 'Production-ready Windows x64 installer packaged with Inno Setup',
      },
    ],
    tags: ['.NET 10', 'C#', 'SQL Server', 'EF Core', 'WinForms', 'AntdUI', 'QuestPDF', 'Inno Setup'],
    githubUrl: 'https://github.com/khang1604/SmartInventoryManager',
    metrics: {
      vi: '100% Giao Dịch ACID • Đồng Bộ Đa Kho',
      en: '100% Atomic Ledger Transactions • Multi-Warehouse',
    },
  },
  {
    id: 'playmusic',
    title: 'PlayMusic Studio',
    subtitle: 'Ultra-Low Latency Audio Workstation',
    category: 'DESKTOP APP',
    description: {
      vi: 'Phần mềm soundboard và audio cue chuyên dụng cho kỹ thuật viên âm thanh sự kiện và đạo diễn sân khấu, chạy độc lập trên Ubuntu Linux và Windows.',
      en: 'Dedicated soundboard and audio cue software for live event sound engineers and stage directors, running natively on Ubuntu Linux and Windows.',
    },
    architecture: {
      vi: 'Kết hợp backend Rust (Tauri v2) với frontend React 19 để giảm độ trễ kích hoạt âm thanh xuống dưới 1ms. Toàn bộ file nhạc được giải nén sẵn vào RAM nhằm tránh nghẽn đọc ổ đĩa trong lúc diễn live. Cột VU Meter Stereo L/R vẽ trực tiếp bằng Canvas 2D theo chuẩn đài truyền hình IEC 60268-10, tự động chuyển về chế độ nghỉ 0% tải khi không có âm thanh phát ra.',
      en: 'Pairs a Rust backend (Tauri v2) with React 19 to trigger audio cues in under 1ms. Decodes full audio tracks into RAM upfront to eliminate disk I/O bottlenecks during live shows. The Stereo VU Meter renders directly on 2D Canvas under broadcast standard IEC 60268-10, dropping to 0% CPU/GPU overhead when idle.',
    },
    keyPoints: [
      {
        vi: 'Kích hoạt âm thanh tức thì (< 1ms), hỗ trợ điểm bắt đầu nhạc (Cue In Offset) chính xác đến mili-giây',
        en: 'Instant audio triggering (< 1ms) with sub-second numerical Cue-In Offset precision',
      },
      {
        vi: 'Bàn Master Fader & Cột VU Meter Stereo L/R chuẩn đài truyền hình với thuật toán Ballistic Decay',
        en: 'Broadcast-grade Master Fader and hardware-accelerated Stereo VU Meter with ballistic decay',
      },
      {
        vi: 'Đóng gói cài đặt đa nền tảng hoàn chỉnh: .deb, .AppImage (Linux) và .exe, .msi (Windows x64)',
        en: 'Multi-platform packaging: Native .deb & .AppImage for Ubuntu Linux, and .exe & .msi for Windows x64',
      },
    ],
    tags: ['Tauri v2', 'Rust', 'React 19', 'TypeScript', 'Web Audio API', 'Canvas 2D', 'Debian', 'Inno Setup'],
    demoUrl: 'https://github.com/khang1604/playmusic/releases/tag/v1.0.11',
    githubUrl: 'https://github.com/khang1604/playmusic',
    metrics: {
      vi: 'Độ Trễ < 1ms • Đa Nền Tảng Linux & Windows',
      en: 'Latency < 1ms • Ubuntu Linux & Windows x64',
    },
  },
  {
    id: 'multiagents',
    title: 'Multi Agents Orchestrator',
    subtitle: 'Autonomous AI Coding Engine',
    category: 'AI SYSTEM',
    description: {
      vi: 'Công cụ dòng lệnh điều phối nhiều tác nhân AI lập trình song song trên máy cục bộ, kiểm tra mã nguồn tự động trước khi ghi nhận thay đổi.',
      en: 'CLI engine that coordinates multiple autonomous AI coding agents locally, running automated tests before applying changes to working branches.',
    },
    architecture: {
      vi: 'Hệ thống viết bằng Python 3.11+, sử dụng Git Worktree để cấp cho mỗi agent một môi trường làm việc độc lập nhằm ngăn xung đột tệp. Tích hợp Model Context Protocol (MCP) server để cung cấp công cụ đọc ghi an toàn. Khi tiến trình bị ngắt do hết hạn ngạch API, trạng thái tác vụ có thể khôi phục nguyên vẹn từ tệp checkpoint cục bộ.',
      en: 'Developed in Python 3.11+, using isolated Git Worktrees to give each agent a clean environment without workspace collision. Integrates an MCP server for bounded tool execution, with local checkpoint recovery to resume interrupted tasks after quota limits.',
    },
    keyPoints: [
      {
        vi: 'Phát lệnh đơn giản từ Terminal: ma "task" và theo dõi tiến độ thời gian thực',
        en: 'Single-command execution via `ma "task description"` with real-time terminal milestone tracking',
      },
      {
        vi: 'Chạy tự động kiểm thử hồi quy (AAA Pattern) trước khi người dùng chấp thuận áp dụng mã nguồn',
        en: 'Git worktree sandbox isolation executing automated test suites before offering change acceptance',
      },
      {
        vi: 'Cơ chế Fail-Closed Security: Ngăn chặn rò rỉ secret, bảo vệ an toàn tệp nhạy cảm và dữ liệu cá nhân',
        en: 'Fail-closed security invariants: Zero secret leaks, sandbox boundary protection, and uncommitted code safety',
      },
    ],
    tags: ['Python 3.11', 'Git Worktrees', 'MCP Protocol', 'VS Code Extension', 'LLM Agents', 'AppSec'],
    githubUrl: 'https://github.com/khang1604/multi_agents',
    metrics: {
      vi: 'Zero Xung Đột Code • CI Gate Xác Thực 100%',
      en: 'Zero Workspace Collisions • Deterministic CI Gates',
    },
  },
  {
    id: 'portfolio',
    title: 'NguyenKhangPortfolio',
    subtitle: 'Modern Developer Portfolio',
    category: 'PORTFOLIO',
    description: {
      vi: 'Trang web cá nhân hiển thị hồ sơ năng lực và các dự án kỹ thuật, tối ưu tốc độ tải trang và áp dụng chính sách bảo mật HTTP nghiêm ngặt.',
      en: 'Personal developer portfolio presenting technical projects and capabilities, optimized for fast rendering and hardened with strict HTTP security headers.',
    },
    architecture: {
      vi: 'Ứng dụng xây dựng trên Next.js 15 App Router và React 19, định dạng giao diện bằng Tailwind CSS v4 với hai tông màu Dark OLED và Light. Bảo mật toàn diện với Content-Security-Policy sử dụng Nonce động trong Middleware, giúp chặn đứng rủi ro XSS mà không làm gián đoạn hydration của React, đạt điểm A+ trên SecurityHeaders.com.',
      en: 'Engineered with Next.js 15 App Router and React 19, styled with Tailwind CSS v4 supporting OLED Dark and Light modes. Enforces strict Content-Security-Policy with dynamic nonces in Edge Middleware to eliminate XSS risks without breaking React hydration, earning an A+ grade on SecurityHeaders.com.',
    },
    keyPoints: [
      {
        vi: 'Chuyển đổi tức thì giữa Theme Dark OLED / Light và bộ chuyển đổi song ngữ VI / EN',
        en: 'Instant theme switching between OLED Dark / Light and persistent bilingual switcher',
      },
      {
        vi: 'Tương thích đa kích thước từ màn hình điện thoại 375px đến màn hình lớn 1440px+',
        en: 'Responsive layout across mobile screens (375px) to ultra-wide desktop displays (1440px+)',
      },
      {
        vi: 'Kiểm tra dữ liệu form liên hệ ngay tại runtime bằng Zod schema',
        en: 'Runtime form payload validation enforced with Zod schemas',
      },
    ],
    tags: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Lucide Icons', 'Zod', 'OLED Dark', 'i18n'],
    githubUrl: 'https://github.com/khang1604/nguyenkhangportfolio',
    metrics: {
      vi: '100/100 Performance • Chuẩn WCAG 2.1',
      en: '100/100 Performance • WCAG 2.1 Compliant',
    },
  },
];

function PortfolioAppContent() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ type: 'idle', message: '' });

    const result = ContactSchema.safeParse(formData);
    if (!result.success) {
      setFormStatus({
        type: 'error',
        message: result.error.issues[0]?.message || 'Vui lòng kiểm tra lại thông tin form.',
      });
      return;
    }

    setFormStatus({
      type: 'success',
      message: t.contact.successMsg,
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div
      className="relative min-h-screen flex flex-col font-sans transition-colors duration-300"
      style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}
    >
      {/* Redesigned High-Tech Ambient Aurora & Precision Grid Background */}
      <BackgroundEffect />

      {/* Navigation Header */}
      <header
        className="sticky top-0 z-50 backdrop-blur-md border-b transition-colors"
        style={{
          backgroundColor: 'var(--navbar-bg)',
          borderColor: 'var(--border)',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href="#about"
            className="flex items-center gap-2 font-mono-tech text-sm sm:text-base font-semibold text-cyan-400 hover:text-cyan-300 transition-colors flex-shrink-0"
          >
            <Terminal className="w-5 h-5 text-cyan-400 flex-shrink-0" />
            <span>nguyenkhang.dev</span>
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-0.5" />
          </a>

          {/* Desktop Navigation Links (>= md) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a
              href="#about"
              className="hover:text-cyan-500 transition-colors"
              style={{ color: 'var(--muted)' }}
            >
              {t.nav.about}
            </a>
            <a
              href="#skills"
              className="hover:text-cyan-500 transition-colors"
              style={{ color: 'var(--muted)' }}
            >
              {t.nav.skills}
            </a>
            <a
              href="#projects"
              className="hover:text-cyan-500 transition-colors"
              style={{ color: 'var(--muted)' }}
            >
              {t.nav.projects}
            </a>
            <a
              href="#contact"
              className="hover:text-cyan-500 transition-colors"
              style={{ color: 'var(--muted)' }}
            >
              {t.nav.contact}
            </a>

            {/* Language Switcher */}
            <button
              type="button"
              onClick={toggleLanguage}
              title={t.nav.langSwitch}
              aria-label="Toggle language"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-mono-tech font-semibold theme-card transition-all cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language === 'vi' ? 'EN' : 'VI'}</span>
            </button>

            {/* Theme Switcher */}
            <button
              type="button"
              onClick={toggleTheme}
              title={theme === 'dark' ? t.nav.themeLight : t.nav.themeDark}
              aria-label="Toggle theme"
              className="p-1.5 rounded-lg border theme-card hover:text-cyan-400 transition-all cursor-pointer"
              style={{ color: 'var(--muted)' }}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-500" />
              )}
            </button>

            {/* Contact CTA */}
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all cursor-pointer text-xs font-semibold"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{t.nav.contact}</span>
            </a>
          </nav>

          {/* Mobile Quick Controls (< md) */}
          <div className="flex md:hidden items-center gap-2">
            {/* Mobile Language Switcher */}
            <button
              type="button"
              onClick={toggleLanguage}
              title={t.nav.langSwitch}
              aria-label="Toggle language"
              className="flex items-center gap-1 px-2 py-1.5 rounded-lg border text-xs font-mono-tech font-semibold theme-card cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{language === 'vi' ? 'EN' : 'VI'}</span>
            </button>

            {/* Mobile Theme Switcher */}
            <button
              type="button"
              onClick={toggleTheme}
              title={theme === 'dark' ? t.nav.themeLight : t.nav.themeDark}
              aria-label="Toggle theme"
              className="p-1.5 rounded-lg border theme-card cursor-pointer"
              style={{ color: 'var(--muted)' }}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-cyan-500" />
              )}
            </button>

            {/* Mobile Hamburger / Close Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              title="Menu"
              aria-label="Toggle navigation menu"
              className="p-1.5 rounded-lg border theme-card text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-cyan-400" />
              ) : (
                <Menu className="w-5 h-5 text-cyan-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer Menu */}
        {mobileMenuOpen && (
          <div
            className="md:hidden border-t backdrop-blur-xl transition-all animate-fade-in-down"
            style={{
              backgroundColor: 'var(--navbar-bg)',
              borderColor: 'var(--border)',
            }}
          >
            <div className="px-4 py-4 space-y-3">
              <nav className="flex flex-col space-y-1.5">
                <a
                  href="#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
                  style={{ color: 'var(--foreground)' }}
                >
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>{t.nav.about}</span>
                </a>
                <a
                  href="#skills"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
                  style={{ color: 'var(--foreground)' }}
                >
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>{t.nav.skills}</span>
                </a>
                <a
                  href="#projects"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
                  style={{ color: 'var(--foreground)' }}
                >
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span>{t.nav.projects}</span>
                </a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors"
                  style={{ color: 'var(--foreground)' }}
                >
                  <Send className="w-4 h-4 text-cyan-400" />
                  <span>{t.nav.contact}</span>
                </a>
              </nav>

              <div className="pt-2 border-t" style={{ borderColor: 'var(--border)' }}>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold text-sm shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.hero.contactBtn}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-24 sm:space-y-32">
        {/* HERO / ABOUT SECTION (Nội dung nguyên bản, thiết kế mới) */}
        <section id="about" className="pt-6 sm:pt-12 pb-6 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono-tech animate-fade-in-down">
            <span>{t.hero.welcome}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-mono-tech leading-tight animate-fade-in-up stagger-1">
            {t.hero.greeting}{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              {t.hero.name}
            </span>
          </h1>

          <p className="text-base sm:text-xl font-light leading-relaxed animate-fade-in-up stagger-2" style={{ color: 'var(--muted)' }}>
            {t.hero.bio}
          </p>

          {/* 3 Highlights ban đầu với giao diện OLED hiện đại */}
          <div className="space-y-3 pt-2 animate-fade-in-up stagger-3">
            <div className="p-3.5 sm:p-5 rounded-xl border theme-card flex items-start gap-3.5 sm:gap-4 transition-all">
              <div className="w-9 h-9 sm:w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 flex-shrink-0">
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <strong className="block text-sm sm:text-base font-semibold font-mono-tech leading-snug">
                  {t.hero.highlight1Title}
                </strong>
                <p className="text-xs sm:text-sm mt-1 leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {t.hero.highlight1Desc}
                </p>
              </div>
            </div>

            <div className="p-3.5 sm:p-5 rounded-xl border theme-card flex items-start gap-3.5 sm:gap-4 transition-all">
              <div className="w-9 h-9 sm:w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400 flex-shrink-0">
                <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <strong className="block text-sm sm:text-base font-semibold font-mono-tech leading-snug">
                  {t.hero.highlight2Title}
                </strong>
                <p className="text-xs sm:text-sm mt-1 leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {t.hero.highlight2Desc}
                </p>
              </div>
            </div>

            <div className="p-3.5 sm:p-5 rounded-xl border theme-card flex items-start gap-3.5 sm:gap-4 transition-all">
              <div className="w-9 h-9 sm:w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/25 flex items-center justify-center text-purple-400 flex-shrink-0">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0 flex-1">
                <strong className="block text-sm sm:text-base font-semibold font-mono-tech leading-snug">
                  {t.hero.highlight3Title}
                </strong>
                <p className="text-xs sm:text-sm mt-1 leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {t.hero.highlight3Desc}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 animate-fade-in-up stagger-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold text-sm hover:opacity-95 transition-all shadow-lg shadow-cyan-500/20"
            >
              <Send className="w-4 h-4" />
              <span>{t.hero.contactBtn}</span>
            </a>
            <a
              href="https://github.com/khang1604"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border theme-card text-sm hover:border-cyan-500/50 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </section>

        {/* TECH STACK & SKILLS */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <RevealOnScroll animation="fade-up">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-cyan-400 tracking-wider uppercase">
                <Cpu className="w-4 h-4" />
                <span>{t.skills.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-mono-tech">
                {t.skills.title}
              </h2>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Frontend */}
            <RevealOnScroll animation="fade-up" delayMs={50}>
              <div className="p-5 rounded-xl border theme-card space-y-3 h-full">
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold font-mono-tech">
                  <Code2 className="w-4 h-4" />
                  <span>{t.skills.frontend}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Tauri v2', 'Mantine UI'].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded border text-xs font-mono-tech"
                        style={{ backgroundColor: 'var(--card-hover)', borderColor: 'var(--border)' }}
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </RevealOnScroll>

            {/* Backend */}
            <RevealOnScroll animation="fade-up" delayMs={120}>
              <div className="p-5 rounded-xl border theme-card space-y-3 h-full">
                <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold font-mono-tech">
                  <Server className="w-4 h-4" />
                  <span>{t.skills.backend}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['.NET 10', 'C#', 'Rust', 'Node.js', 'FastAPI', 'EF Core', 'ADO.NET'].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded border text-xs font-mono-tech"
                        style={{ backgroundColor: 'var(--card-hover)', borderColor: 'var(--border)' }}
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </RevealOnScroll>

            {/* Database & Cloud */}
            <RevealOnScroll animation="fade-up" delayMs={190}>
              <div className="p-5 rounded-xl border theme-card space-y-3 h-full">
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold font-mono-tech">
                  <Database className="w-4 h-4" />
                  <span>{t.skills.database}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['SQL Server', 'MongoDB', 'PostgreSQL', 'Redis', 'Cloudinary', 'Docker', 'Inno Setup'].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded border text-xs font-mono-tech"
                        style={{ backgroundColor: 'var(--card-hover)', borderColor: 'var(--border)' }}
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </RevealOnScroll>

            {/* Architecture & AI */}
            <RevealOnScroll animation="fade-up" delayMs={260}>
              <div className="p-5 rounded-xl border theme-card space-y-3 h-full">
                <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold font-mono-tech">
                  <Boxes className="w-4 h-4" />
                  <span>{t.skills.architecture}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {['Clean Architecture', 'Multi-Agents', 'MCP Protocol', 'Git Worktrees', 'Zod', 'AppSec'].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded border text-xs font-mono-tech"
                        style={{ backgroundColor: 'var(--card-hover)', borderColor: 'var(--border)' }}
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <RevealOnScroll animation="fade-up">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-cyan-400 tracking-wider uppercase">
                <Code2 className="w-4 h-4" />
                <span>{t.projects.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-mono-tech">
                {t.projects.title}
              </h2>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>
                {t.projects.subtitle}
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, index) => (
              <RevealOnScroll
                key={project.id}
                animation="fade-up"
                delayMs={(index % 2) * 150}
              >
                <div className="group relative p-4 sm:p-6 rounded-xl border theme-card hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between h-full shadow-lg">
                  <div className="space-y-4">
                    {/* Category & Links Header */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono-tech font-semibold px-2.5 py-1 rounded border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
                        {project.category}
                      </span>

                      <div className="flex items-center gap-2">
                        {project.isPrivate && (
                          <span
                            title={t.projects.privateRepo}
                            className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400"
                          >
                            <Lock className="w-3.5 h-3.5" />
                          </span>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={t.projects.sourceCode}
                            className="w-8 h-8 rounded-full border theme-card flex items-center justify-center hover:text-cyan-400 transition-colors"
                          >
                            <GithubIcon className="w-4 h-4" />
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={t.projects.liveDemo}
                            className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold font-mono-tech group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono-tech mt-0.5" style={{ color: 'var(--muted)' }}>
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                      {project.description[language]}
                    </p>

                    <div className="text-xs font-mono-tech text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-md inline-block">
                      {project.metrics[language]}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded border"
                          style={{
                            backgroundColor: 'var(--card-hover)',
                            borderColor: 'var(--border)',
                            color: 'var(--muted)',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border theme-card text-sm font-medium hover:border-cyan-500/40 hover:text-cyan-400 transition-all cursor-pointer"
                    >
                      <span>{t.projects.viewDetails}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </section>

        {/* CONTACT FORM */}
        <section id="contact" className="space-y-8 scroll-mt-24 max-w-2xl mx-auto">
          <RevealOnScroll animation="fade-up">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-cyan-400 tracking-wider uppercase">
                <Send className="w-4 h-4" />
                <span>{t.contact.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold font-mono-tech">
                {t.contact.title}
              </h2>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>
                {t.contact.subtitle}
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll animation="fade-up" delayMs={100}>
            <form
              onSubmit={handleContactSubmit}
              className="p-5 sm:p-8 rounded-2xl border theme-card space-y-4 sm:space-y-5 shadow-2xl"
            >
              {formStatus.type === 'success' && (
                <div className="p-4 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span>{formStatus.message}</span>
                </div>
              )}

              {formStatus.type === 'error' && (
                <div className="p-4 rounded-lg bg-rose-500/15 border border-rose-500/30 text-rose-400 text-sm flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{formStatus.message}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium" htmlFor="name">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg border text-sm placeholder:opacity-50 focus:outline-none transition-colors"
                    style={{
                      backgroundColor: 'var(--card-hover)',
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)',
                    }}
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium" htmlFor="email">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-lg border text-sm placeholder:opacity-50 focus:outline-none transition-colors"
                    style={{
                      backgroundColor: 'var(--card-hover)',
                      borderColor: 'var(--border)',
                      color: 'var(--foreground)',
                    }}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium" htmlFor="subject">
                  {t.contact.subjectLabel}
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder={t.contact.subjectPlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-lg border text-sm placeholder:opacity-50 focus:outline-none transition-colors"
                  style={{
                    backgroundColor: 'var(--card-hover)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                  }}
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium" htmlFor="message">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t.contact.messagePlaceholder}
                  className="w-full px-3.5 py-2.5 rounded-lg border text-sm placeholder:opacity-50 focus:outline-none transition-colors resize-none"
                  style={{
                    backgroundColor: 'var(--card-hover)',
                    borderColor: 'var(--border)',
                    color: 'var(--foreground)',
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold text-sm hover:opacity-95 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{t.contact.sendBtn}</span>
              </button>
            </form>
          </RevealOnScroll>
        </section>
      </main>

      {/* FOOTER */}
      <footer
        className="relative z-10 border-t py-8 mt-16 transition-colors"
        style={{ borderColor: 'var(--border)', backgroundColor: 'var(--card)' }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ color: 'var(--muted)' }}>
          <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/khang1604"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </footer>

      {/* TECHNICAL DEEP DIVE MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl border theme-card p-4 sm:p-8 space-y-4 sm:space-y-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: 'var(--card)', borderColor: 'var(--border)' }}
          >
            <div className="flex items-start justify-between gap-4 border-b pb-4" style={{ borderColor: 'var(--border)' }}>
              <div>
                <span className="text-xs font-mono-tech text-cyan-400 font-semibold uppercase">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-mono-tech">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-emerald-400 font-mono-tech mt-1">
                  {selectedProject.metrics[language]}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-full border theme-card flex items-center justify-center hover:text-cyan-400 transition-colors cursor-pointer"
                style={{ color: 'var(--muted)' }}
                aria-label="Đóng modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Architecture Overview */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold font-mono-tech flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>{t.projects.architectureTitle}</span>
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                {selectedProject.architecture[language]}
              </p>
            </div>

            {/* Key Features Checklist */}
            <div className="space-y-2.5">
              <h4 className="text-sm font-semibold font-mono-tech flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{t.projects.featuresTitle}</span>
              </h4>
              <ul className="space-y-2">
                {selectedProject.keyPoints.map((point, idx) => (
                  <li key={idx} className="text-sm flex items-start gap-2.5" style={{ color: 'var(--muted)' }}>
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{point[language]}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2 border-t" style={{ borderColor: 'var(--border)' }}>
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded border font-mono-tech"
                  style={{ backgroundColor: 'var(--card-hover)', borderColor: 'var(--border)' }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border theme-card text-sm font-medium hover:text-cyan-400 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>{t.projects.sourceCode}</span>
                </a>
              )}
              {selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500 text-black font-semibold text-sm hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{t.projects.liveDemo}</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function HomePage() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortfolioAppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
