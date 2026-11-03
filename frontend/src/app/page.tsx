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
      vi: 'Cổng thông tin & quản lý hoạt động chính thức của Đoàn Thanh niên - Hội Sinh viên Trường Đại học Công nghệ TP.HCM (HUTECH) phục vụ hàng chục ngàn sinh viên.',
      en: 'Official web portal & activity management platform for the Youth Union and Student Association of HUTECH University, serving tens of thousands of students.',
    },
    architecture: {
      vi: 'Nền tảng Full Stack xây dựng trên Next.js (SSR & ISR) kết hợp Mantine UI tối ưu hóa trải nghiệm responsive. Cơ sở dữ liệu NoSQL MongoDB quản lý linh hoạt hồ sơ sinh viên và tin tức phong trào. Tích hợp Cloudinary CDN nén và phân phối hình ảnh/media thời gian thực với độ trễ thấp.',
      en: 'Full-stack platform built on Next.js (SSR & ISR) and Mantine UI delivering modern responsive experiences. Scalable MongoDB NoSQL database modeling complex student profiles, event feeds, and youth movement activities. Cloudinary API integration for automated image/document transformations over a high-speed global CDN.',
    },
    keyPoints: [
      {
        vi: 'Xử lý lưu lượng truy cập lớn trong các đợt cao điểm sự kiện sinh viên với độ ổn định 99.9%',
        en: 'Handles high traffic peaks during major university campaigns with 99.9% uptime',
      },
      {
        vi: 'Hệ thống quản trị nội dung (CMS) hỗ trợ xuất bản tin bài, biểu mẫu và sự kiện phong trào',
        en: 'Administrative CMS for editors to publish articles, guidelines, and event schedules',
      },
      {
        vi: 'Bàn giao thương mại thành công, đang hoạt động chính thức trên môi trường Production',
        en: 'Successful commercial client handover, deployed to high-availability live production',
      },
    ],
    tags: ['Next.js', 'Mantine UI', 'MongoDB', 'Cloudinary', 'Production', 'Client Handover'],
    demoUrl: 'https://doanhoihutech.vn/',
    isPrivate: true,
    metrics: {
      vi: 'Hàng chục ngàn sinh viên sử dụng • Live Production',
      en: 'Tens of Thousands Active Students • Live Production',
    },
  },
  {
    id: 'inventory',
    title: 'SmartInventoryManager (VioWare)',
    subtitle: 'Enterprise Supply Chain Platform',
    category: 'ENTERPRISE',
    description: {
      vi: 'Hệ thống quản lý kho thông minh doanh nghiệp xây dựng trên .NET 10 & C#, kiểm soát chuỗi cung ứng đa kho với tính toàn vẹn giao dịch ACID tuyệt đối.',
      en: 'Enterprise-grade smart inventory management platform built with .NET 10 & C#, managing multi-warehouse supply chains with strict ACID transaction integrity.',
    },
    architecture: {
      vi: 'Kiến trúc phân tầng Clean Architecture (Business, Data, Common, UI). Tầng dữ liệu kết hợp Entity Framework Core và ADO.NET tối ưu. Toàn bộ quy trình duyệt phiếu nhập/xuất kho, cập nhật tồn và ghi log kiểm toán được đóng gói trong một Database Transaction duy nhất. Phân quyền RBAC đa cấp.',
      en: 'Multi-layer Clean Architecture (.NET 10, EF Core, ADO.NET). Entire slip approval lifecycle, inventory balance adjustments, and audit trail entries execute within unified atomic database transactions. Enterprise Role-Based Access Control (ADMIN, WAREHOUSE_MANAGER, STAFF).',
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
      vi: 'Phần mềm phát nhạc sự kiện, soundboard và audio cue chuyên nghiệp độ trễ siêu thấp (< 1ms) dành cho kỹ thuật viên âm thanh, đạo diễn sân khấu và DJ trên Ubuntu Linux & Windows.',
      en: 'Professional ultra-low latency (< 1ms) audio cue, soundboard, and stage playback workstation for sound engineers, stage directors, and live events on Ubuntu Linux & Windows.',
    },
    architecture: {
      vi: 'Xây dựng trên nền tảng Tauri v2 (Rust backend kết hợp React 19 & TypeScript). Giải nén toàn bộ luồng âm thanh trực tiếp trên RAM để kích hoạt tức thì. Cột đèn Stereo L/R VU Meter chuẩn đài truyền hình (IEC 60268-10) render bằng Canvas 2D siêu nhẹ (0% CPU/GPU khi đứng yên). Hỗ trợ 2 chế độ phát: Đa âm (Polyphonic) và Độc quyền mờ dần (Solo Smooth Fade-Out).',
      en: 'Architected with Tauri v2 (Rust backend paired with React 19 & TypeScript). Audio tracks decoded directly into RAM for instant triggering (< 1ms). Broadcast-grade Stereo VU Meter (IEC 60268-10 standard) rendered with hardware-accelerated 2D Canvas (0% idle overhead). Features dual playback modes: Polyphonic layering and Solo Smooth Fade-Out.',
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
      vi: 'Nền tảng điều phối đa tác nhân AI tự hành tại máy cục bộ (local), phân phối công việc thông minh giữa các coding CLI hàng đầu với cơ chế kiểm thử an toàn.',
      en: 'Local autonomous multi-agent orchestration engine, coordinating tasks across elite coding CLIs with isolated verification sandboxes.',
    },
    architecture: {
      vi: 'Hệ thống phân tán viết bằng Python 3.11+. Sử dụng Git Worktree độc lập để cô lập môi trường lập trình của từng agent, ngăn ngừa xung đột mã nguồn. Tích hợp Model Context Protocol (MCP) server, Copilot Chat @hub và cơ chế lưu vết checkpoint bền vững cho phép khôi phục tác vụ khi cạn quota.',
      en: 'Distributed multi-agent orchestration engine in Python 3.11+. Isolates coding agents inside temporary Git worktrees to prevent workspace contamination. Features custom MCP tool server, Copilot Chat @hub participant, and durable checkpoint recovery for interrupted long-running tasks.',
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
      vi: 'Web Portfolio cá nhân phong cách Dark Mode OLED chuẩn mực, xây dựng bằng Next.js 15, Tailwind CSS, Lucide Icons và bộ quy chuẩn thiết kế UI/UX Pro Max.',
      en: 'Architectural-grade personal portfolio built with Next.js 15, Tailwind CSS, Lucide Icons, and UI/UX Pro Max design intelligence.',
    },
    architecture: {
      vi: 'Thiết kế theo chuẩn Zero Root Clutter và kiến trúc Feature-Driven. Tối ưu typography kép (JetBrains Mono cho code/tiêu đề và IBM Plex Sans cho nội dung). Đạt chuẩn tương phản tiếp cận WCAG 2.1 với 100/100 Lighthouse performance.',
      en: 'Architected under Zero Root Clutter and Feature-Driven design. Dual typography (JetBrains Mono for headers/code and IBM Plex Sans for body UI). Fully WCAG 2.1 compliant with 100/100 Lighthouse score.',
    },
    keyPoints: [
      {
        vi: 'Hỗ trợ chuyển đổi Theme (Dark OLED / Light Mode) và Song ngữ (VI / EN) tức thì',
        en: 'Instant Theme toggle (OLED Dark / Light) and persistent Bilingual i18n switcher',
      },
      {
        vi: 'Giao diện tương thích hoàn hảo từ Mobile (375px) tới Màn hình lớn (1440px+)',
        en: '100% responsive fluid layout spanning mobile (375px) to ultra-wide displays (1440px+)',
      },
      {
        vi: 'Xác thực runtime form liên hệ an toàn bằng Zod schema',
        en: 'Zero unhandled exceptions with Zod runtime boundary validation',
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
