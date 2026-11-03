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
    category: 'WEB APP',
    description: {
      vi: 'Trang thông tin điện tử và quản lý hoạt động của Đoàn Thanh niên – Hội Sinh viên Trường Đại học Công nghệ TP.HCM (HUTECH). Hệ thống phục vụ đăng tải tin tức, văn bản và thông tin sự kiện cho sinh viên.',
      en: 'Web portal and activity management system for the Youth Union and Student Association of HUTECH University. It publishes news, documents, and event information for students.',
    },
    architecture: {
      vi: 'Ứng dụng xây dựng bằng Next.js kết hợp Mantine UI, hỗ trợ hiển thị trên cả máy tính và điện thoại. Dữ liệu bài viết, văn bản và thông tin hoạt động được lưu trữ trên MongoDB. Hình ảnh và tài liệu đính kèm được tải lên và phân phối qua Cloudinary.',
      en: 'Built with Next.js and Mantine UI for desktop and mobile browsers. Articles, documents, and activity records are stored in MongoDB, while images and media files are hosted and served through Cloudinary.',
    },
    keyPoints: [
      {
        vi: 'Đăng tải tin tức, thông báo, văn bản hướng dẫn và lịch trình sự kiện phong trào',
        en: 'Publishes news, announcements, guidelines, and student event schedules',
      },
      {
        vi: 'Trang quản trị nội dung (CMS) dành cho ban biên tập cập nhật bài viết và biểu mẫu',
        en: 'Content management interface for editors to update articles and forms',
      },
      {
        vi: 'Đã bàn giao và đang vận hành thực tế tại địa chỉ doanhoihutech.vn',
        en: 'Handed over and currently operating at doanhoihutech.vn',
      },
    ],
    tags: ['Next.js', 'Mantine UI', 'MongoDB', 'Cloudinary'],
    demoUrl: 'https://doanhoihutech.vn/',
    isPrivate: true,
    metrics: {
      vi: 'Đang vận hành • doanhoihutech.vn',
      en: 'In production • doanhoihutech.vn',
    },
  },
  {
    id: 'inventory',
    title: 'VioWare — Smart Inventory Manager',
    subtitle: 'Phần mềm quản lý kho',
    category: 'DESKTOP APP',
    description: {
      vi: 'Đồ án quản lý kho xây dựng bằng C# và Windows Forms, phục vụ theo dõi hàng hóa tại nhiều kho. Hệ thống kết nối SQL Server, quản lý quy trình nhập/xuất và ghi nhận lịch sử thay đổi tồn kho.',
      en: 'Warehouse management application built with C# and Windows Forms for tracking goods across multiple warehouses. Connects to SQL Server, manages receipt/issue workflows, and records stock history.',
    },
    architecture: {
      vi: 'Ứng dụng sử dụng .NET 10, Windows Forms, AntdUI, SQL Server, Entity Framework Core và ADO.NET. Mã nguồn tách thành các phần giao diện (UI), xử lý nghiệp vụ và phân quyền (Business), truy cập dữ liệu (Data) và tiện ích dùng chung (Common). Chỉ phiếu hoàn tất mới cập nhật tồn kho; việc lưu phiếu, thay đổi tồn và ghi lịch sử được thực hiện trong cùng giao dịch. Bộ cài Windows x64 được đóng gói bằng Inno Setup kèm .NET runtime.',
      en: 'Uses .NET 10, Windows Forms, AntdUI, SQL Server, Entity Framework Core, and ADO.NET. Separated into UI, Business, Data, and Common layers. Only completed slips update stock balances; saving slips, changing stock, and logging history run in the same transaction. Packaged as a Windows x64 installer with Inno Setup.',
    },
    keyPoints: [
      {
        vi: 'Quản lý sản phẩm, danh mục, nhà cung cấp, kho và theo dõi tồn theo từng sản phẩm–kho',
        en: 'Manages products, categories, suppliers, warehouses, and per-warehouse stock levels',
      },
      {
        vi: 'Lập phiếu nhập/xuất, gửi duyệt, duyệt, từ chối, hủy, hoàn tất phiếu và chuyển hàng giữa hai kho',
        en: 'Creates receipt/issue slips through submission, approval, rejection, cancellation, completion, and stock transfers',
      },
      {
        vi: 'Cảnh báo hết hàng, sắp hết, vượt mức tồn; xuất báo cáo Excel bằng ClosedXML và in phiếu A4 PDF bằng QuestPDF',
        en: 'Alerts on out-of-stock, low-stock, and over-capacity items; exports Excel via ClosedXML and prints A4 PDF slips with QuestPDF',
      },
    ],
    tags: ['.NET 10', 'C#', 'SQL Server', 'EF Core', 'WinForms', 'AntdUI', 'QuestPDF', 'Inno Setup'],
    githubUrl: 'https://github.com/khang1604/SmartInventoryManager',
    metrics: {
      vi: '.NET 10 & WinForms • Quản lý đa kho',
      en: '.NET 10 & WinForms • Multi-warehouse',
    },
  },
  {
    id: 'playmusic',
    title: 'PlayMusic Studio',
    subtitle: 'Phần mềm phát nhạc sự kiện & Soundboard',
    category: 'DESKTOP APP',
    description: {
      vi: 'Phần mềm phát âm thanh và soundboard phục vụ kỹ thuật viên âm thanh chạy nhạc sự kiện, hội nghị và sân khấu trên Ubuntu Linux và Windows. Giao diện dạng bàn phím Launchpad giúp gán phím tắt và phát nhạc nhanh.',
      en: 'Audio playback and soundboard software for running live event, conference, and stage cues on Ubuntu Linux and Windows. Provides a grid interface for assigning hotkeys and triggering tracks.',
    },
    architecture: {
      vi: 'Ứng dụng xây dựng bằng Tauri v2 (Rust) kết hợp React 19 và TypeScript. File âm thanh được giải nén sẵn vào bộ nhớ để phát ngay khi bấm phím mà không chờ đọc ổ đĩa. Cột đo âm lượng Stereo L/R vẽ bằng Canvas 2D và tự dừng vẽ khi không có nhạc phát. Phần mềm đóng gói sẵn bộ cài .deb, .AppImage cho Linux và .exe, .msi cho Windows.',
      en: 'Built with Tauri v2 (Rust), React 19, and TypeScript. Audio files are decoded into memory upfront so tracks play immediately on key press without waiting for disk reads. The Stereo L/R level meter renders on 2D Canvas and pauses when idle. Packaged as .deb and .AppImage for Linux, and .exe and .msi for Windows.',
    },
    keyPoints: [
      {
        vi: 'Lưới 20 ô mặc định gán sẵn phím tắt (1-0, Q-P), tự động thêm ô mới khi kéo thả nhiều file nhạc vào ứng dụng',
        en: 'Default 20-slot grid mapped to keys (1-0, Q-P) that automatically adds new slots when dropping multiple audio files',
      },
      {
        vi: 'Hỗ trợ chế độ phát đè nhiều hiệu ứng cùng lúc (Đa âm) hoặc tự giảm âm lượng bài cũ khi chuyển bài mới (Độc quyền)',
        en: 'Supports playing multiple tracks simultaneously (Polyphonic) or fading out the previous track when starting a new one (Exclusive)',
      },
      {
        vi: 'Đặt điểm bắt đầu phát (Cue In) cho từng bài và lưu danh sách nhạc, màu sắc, phím tắt thành file cấu hình .json',
        en: 'Sets custom start offsets (Cue In) per track and saves track lists, colors, and hotkeys as .json preset files',
      },
    ],
    tags: ['Tauri v2', 'Rust', 'React 19', 'TypeScript', 'Web Audio API', 'Canvas 2D'],
    demoUrl: 'https://github.com/khang1604/playmusic/releases/tag/v1.0.11',
    githubUrl: 'https://github.com/khang1604/playmusic',
    metrics: {
      vi: 'Tauri v2 & Rust • Ubuntu Linux & Windows',
      en: 'Tauri v2 & Rust • Ubuntu Linux & Windows',
    },
  },
  {
    id: 'multiagents',
    title: 'Multi Agents',
    subtitle: 'Công cụ điều phối các AI CLI lập trình',
    category: 'CLI TOOL',
    description: {
      vi: 'Công cụ dòng lệnh phối hợp các AI CLI (Antigravity, Codex, Claude Code, Copilot) để lập kế hoạch, viết mã, chạy kiểm thử và xem lại thay đổi ngay trên máy cục bộ.',
      en: 'Command-line tool that coordinates coding CLIs (Antigravity, Codex, Claude Code, Copilot) for planning, coding, running tests, and reviewing changes locally.',
    },
    architecture: {
      vi: 'Viết bằng thư viện chuẩn Python 3.11+ và Git. Mỗi tác vụ được tách ra chạy trong một Git worktree tạm thời để không ảnh hưởng đến nhánh code đang làm việc. Khi agent viết mã xong, công cụ tự chạy lệnh test của dự án rồi mới hiển thị bản so sánh (diff) để người dùng chọn nhận toàn bộ hoặc từng file. Hỗ trợ lưu trạng thái để chạy tiếp khi bị ngắt giữa chừng.',
      en: 'Written using the Python 3.11+ standard library and Git. Each task runs inside a temporary Git worktree so active working files remain untouched. After coding finishes, the tool runs the project test command and presents a diff for accepting all changes or individual files. Saves checkpoints to resume interrupted tasks.',
    },
    keyPoints: [
      {
        vi: 'Giao việc trực tiếp từ terminal bằng lệnh ma "yêu cầu" và theo dõi tiến độ theo thời gian thực',
        en: 'Dispatches tasks from the terminal via `ma "task"` and follows progress in real time',
      },
      {
        vi: 'Tự chạy kiểm thử trong Git worktree riêng và cho phép xem trước thay đổi (ma review, ma diff) trước khi áp dụng',
        en: 'Runs project tests in an isolated Git worktree and lets users preview diffs before applying changes',
      },
      {
        vi: 'Tích hợp với VS Code qua lệnh ma open, Copilot Chat @hub và giao thức MCP',
        en: 'Integrates with VS Code via `ma open`, Copilot Chat `@hub`, and an MCP server',
      },
    ],
    tags: ['Python 3.11', 'Git Worktrees', 'MCP Protocol', 'VS Code Extension'],
    githubUrl: 'https://github.com/khang1604/multi_agents',
    metrics: {
      vi: 'Python & Git Worktree • Chạy cục bộ',
      en: 'Python & Git Worktree • Local execution',
    },
  },
  {
    id: 'portfolio',
    title: 'NguyenKhangPortfolio',
    subtitle: 'Trang web giới thiệu dự án cá nhân',
    category: 'WEB APP',
    description: {
      vi: 'Trang web cá nhân tổng hợp thông tin kỹ năng, các dự án đã làm và biểu mẫu liên hệ, hỗ trợ chuyển đổi giao diện sáng/tối và tiếng Việt/tiếng Anh.',
      en: 'Personal website summarizing skills, completed projects, and a contact form, with light/dark theme switching and Vietnamese/English language support.',
    },
    architecture: {
      vi: 'Xây dựng bằng Next.js 15 App Router, React 19 và Tailwind CSS v4. Dữ liệu nhập từ biểu mẫu liên hệ được kiểm tra bằng Zod. Trang web cấu hình các HTTP security headers (HSTS, X-Frame-Options, Permissions-Policy) và tạo mã nonce riêng cho mỗi request trong Middleware để áp dụng Content-Security-Policy.',
      en: 'Built with Next.js 15 App Router, React 19, and Tailwind CSS v4. Contact form inputs are validated using Zod. Configures HTTP security headers (HSTS, X-Frame-Options, Permissions-Policy) and generates a per-request nonce in Middleware for Content-Security-Policy.',
    },
    keyPoints: [
      {
        vi: 'Chuyển đổi giao diện Sáng / Tối và ngôn ngữ Tiếng Việt / Tiếng Anh, tự lưu lựa chọn trong trình duyệt',
        en: 'Switches between Light / Dark themes and Vietnamese / English languages, saving preferences in the browser',
      },
      {
        vi: 'Hiển thị tương thích trên cả màn hình máy tính và điện thoại với menu thu gọn',
        en: 'Adapts layout across desktop and mobile screens with a collapsible navigation menu',
      },
      {
        vi: 'Kiểm tra hợp lệ dữ liệu biểu mẫu bằng Zod và cấu hình các header bảo mật HTTP',
        en: 'Validates form fields with Zod and configures standard HTTP security headers',
      },
    ],
    tags: ['Next.js 15', 'React 19', 'Tailwind CSS', 'TypeScript', 'Zod'],
    githubUrl: 'https://github.com/khang1604/nguyenkhangportfolio',
    metrics: {
      vi: 'Next.js 15 & Tailwind CSS • Sáng / Tối',
      en: 'Next.js 15 & Tailwind CSS • Light / Dark',
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
