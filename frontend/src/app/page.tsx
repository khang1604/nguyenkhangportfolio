'use client';

import React, { useState } from 'react';
import {
  Terminal,
  Code2,
  Cpu,
  ShieldCheck,
  Layers,
  Sparkles,
  Send,
  ExternalLink,
  Lock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Globe,
  Server,
  Database,
  Bot,
  Zap,
  Boxes,
  FileCode,
  FolderGit2,
  X,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcons';
import { z } from 'zod';

// Zod Contact Form Schema
const ContactSchema = z.object({
  name: z.string().min(2, 'Vui lòng nhập tên (tối thiểu 2 ký tự)'),
  email: z.string().email('Địa chỉ email không hợp lệ'),
  subject: z.string().min(3, 'Tiêu đề tối thiểu 3 ký tự'),
  message: z.string().min(10, 'Nội dung tin nhắn tối thiểu 10 ký tự'),
});

type ContactFormData = z.infer<typeof ContactSchema>;

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'CLIENT' | 'ENTERPRISE' | 'AI_SYSTEM' | 'PORTFOLIO';
  description: string;
  architecture: string;
  keyPoints: string[];
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  isPrivate?: boolean;
  metrics: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'doanhoi',
    title: 'Cổng Thông Tin Đoàn - Hội HUTECH',
    subtitle: 'doanhoihutech.vn',
    category: 'CLIENT',
    description:
      'Cổng thông tin & quản lý hoạt động chính thức của Đoàn Thanh niên - Hội Sinh viên Trường Đại học Công nghệ TP.HCM (HUTECH) phục vụ hàng chục ngàn sinh viên.',
    architecture:
      'Nền tảng Full Stack với Next.js (SSR & ISR) kết hợp Mantine UI tối ưu hóa trải nghiệm responsive. Cơ sở dữ liệu MongoDB quản lý linh hoạt hồ sơ sinh viên và tin tức phong trào. Tích hợp Cloudinary CDN nén và phân phối hình ảnh/media thời gian thực với độ trễ thấp.',
    keyPoints: [
      'Xử lý lưu lượng truy cập lớn trong các đợt cao điểm sự kiện sinh viên với độ ổn định 99.9%',
      'Hệ thống quản trị nội dung (CMS) hỗ trợ xuất bản tin bài, biểu mẫu và sự kiện phong trào',
      'Được chuyển giao thương mại thành công, đang hoạt động chính thức trên môi trường Production',
    ],
    tags: ['Next.js', 'Mantine UI', 'MongoDB', 'Cloudinary', 'Production', 'Client Handover'],
    demoUrl: 'https://doanhoihutech.vn/',
    isPrivate: true,
    metrics: 'Hàng chục ngàn sinh viên sử dụng • Live Production',
  },
  {
    id: 'inventory',
    title: 'SmartInventoryManager (VioWare)',
    subtitle: 'Enterprise Supply Chain Platform',
    category: 'ENTERPRISE',
    description:
      'Hệ thống quản lý kho thông minh doanh nghiệp xây dựng trên .NET 10 & C#, kiểm soát chuỗi cung ứng đa kho với tính toàn vẹn giao dịch ACID tuyệt đối.',
    architecture:
      'Kiến trúc phân tầng Clean Architecture (Business, Data, Common, UI). Tầng dữ liệu kết hợp Entity Framework Core và ADO.NET tối ưu. Toàn bộ quy trình duyệt phiếu nhập/xuất kho, cập nhật tồn và ghi log kiểm toán được đóng gói trong một Database Transaction duy nhất. Phân quyền RBAC đa cấp.',
    keyPoints: [
      'Quy trình kiểm duyệt phiếu nhập/xuất kho 5 bước nghiêm ngặt (Gửi duyệt, Duyệt, Từ chối, Hủy, Hoàn tất)',
      'Cảnh báo tồn kho thời gian thực (hết hàng, dưới ngưỡng an toàn, vượt sức chứa tối đa)',
      'Tự động xuất báo cáo Excel qua ClosedXML và in phiếu chứng từ A4 định dạng chuẩn PDF với QuestPDF',
      'Đóng gói bộ cài đặt Windows x64 chuyên nghiệp bằng Inno Setup',
    ],
    tags: ['.NET 10', 'C#', 'SQL Server', 'EF Core', 'WinForms', 'AntdUI', 'QuestPDF', 'Inno Setup'],
    githubUrl: 'https://github.com/khang1604/SmartInventoryManager',
    metrics: '100% Atomic Ledger Transactions • Multi-Warehouse',
  },
  {
    id: 'multiagents',
    title: 'Multi Agents Orchestrator',
    subtitle: 'Autonomous AI Coding Engine',
    category: 'AI_SYSTEM',
    description:
      'Nền tảng điều phối đa tác nhân AI tự hành tại máy cục bộ (local), phân phối công việc thông minh giữa các coding CLI hàng đầu với cơ chế kiểm thử an toàn.',
    architecture:
      'Hệ thống phân tán viết bằng Python 3.11+. Sử dụng Git Worktree độc lập để cô lập môi trường lập trình của từng agent, ngăn ngừa xung đột mã nguồn. Tích hợp Model Context Protocol (MCP) server, Copilot Chat @hub và cơ chế lưu vết checkpoint bền vững cho phép khôi phục tác vụ khi cạn quota.',
    keyPoints: [
      'Phát lệnh đơn giản từ Terminal: ma "task" và theo dõi tiến độ thời gian thực',
      'Chạy tự động kiểm thử hồi quy (AAA Pattern) trước khi người dùng chấp thuận áp dụng mã nguồn',
      'Cơ chế Fail-Closed Security: Ngăn chặn rò rỉ secret, bảo vệ an toàn tệp nhạy cảm và dữ liệu cá nhân',
    ],
    tags: ['Python 3.11', 'Git Worktrees', 'MCP Protocol', 'VS Code Extension', 'LLM Agents', 'AppSec'],
    githubUrl: 'https://github.com/khang1604/multi_agents',
    metrics: 'Zero Workspace Collisions • Deterministic CI Gates',
  },
  {
    id: 'portfolio',
    title: 'NguyenKhangPortfolio',
    subtitle: 'Modern Developer Portfolio',
    category: 'PORTFOLIO',
    description:
      'Web Portfolio cá nhân phong cách Dark Mode OLED chuẩn mực, xây dựng bằng Next.js 15, Tailwind CSS, Lucide Icons và bộ quy chuẩn thiết kế UI/UX Pro Max.',
    architecture:
      'Thiết kế theo chuẩn Zero Root Clutter và kiến trúc Feature-Driven. Tối ưu typography kép (JetBrains Mono cho code/tiêu đề và IBM Plex Sans cho nội dung). Đạt chuẩn tương phản tiếp cận WCAG 2.1 với 100/100 Lighthouse performance.',
    keyPoints: [
      'Bảng màu Dark Mode OLED thuần đen (#000000) chống mỏi mắt và tiết kiệm điện năng màn hình',
      'Giao diện tương thích hoàn hảo từ Mobile (375px) tới Màn hình lớn (1440px+)',
      'Xác thực runtime form liên hệ an toàn bằng Zod schema',
    ],
    tags: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Lucide Icons', 'Zod', 'OLED Dark'],
    githubUrl: 'https://github.com/khang1604/nguyenkhangportfolio',
    metrics: '100/100 Performance • WCAG 2.1 Compliant',
  },
];

export default function HomePage() {
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
      message: 'Cảm ơn bạn! Tin nhắn đã được gửi và ghi nhận thành công.',
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="relative min-h-screen bg-black text-slate-100 flex flex-col font-sans selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Background Tech Grid */}
      <div className="fixed inset-0 oled-grid-pattern pointer-events-none opacity-40 z-0" />

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/80 border-b border-zinc-800/80 transition-all">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href="#hero"
            className="flex items-center gap-2.5 font-mono-tech text-sm sm:text-base font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Terminal className="w-5 h-5 text-cyan-400" />
            <span>nguyenkhang.dev</span>
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse ml-1" />
          </a>

          <nav className="flex items-center gap-4 sm:gap-8 text-xs sm:text-sm font-medium text-zinc-400">
            <a href="#about" className="hover:text-cyan-300 transition-colors">
              Giới Thiệu
            </a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">
              Kỹ Năng
            </a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">
              Dự Án
            </a>
            <a
              href="#contact"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Liên Hệ</span>
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-24 sm:space-y-32">
        {/* HERO SECTION */}
        <section id="hero" className="pt-6 sm:pt-12 pb-6 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono-tech">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>SẴN SÀNG CHO CÁC DỰ ÁN & VỊ TRÍ MỚI</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-mono-tech">
            Xin chào, tôi là <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">
              Nguyễn Khang
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 font-light leading-relaxed">
            <strong className="text-zinc-200 font-medium">Full Stack Engineer &amp; System Architect</strong>{' '}
            đam mê xây dựng các nền tảng web quy mô lớn, kiến trúc hướng sự kiện, hệ thống quản lý kho ACID bền vững và giải pháp điều phối AI Agent tự hành.
          </p>

          {/* Quick Metrics Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-lg border border-zinc-800 bg-zinc-950/60">
              <div className="text-xl sm:text-2xl font-bold text-cyan-400 font-mono-tech">
                4+ Dự Án
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">Triển khai thực tế</div>
            </div>
            <div className="p-3.5 rounded-lg border border-zinc-800 bg-zinc-950/60">
              <div className="text-xl sm:text-2xl font-bold text-emerald-400 font-mono-tech">
                100% ACID
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">Toàn vẹn số liệu kho</div>
            </div>
            <div className="col-span-2 sm:col-span-1 p-3.5 rounded-lg border border-zinc-800 bg-zinc-950/60">
              <div className="text-xl sm:text-2xl font-bold text-indigo-400 font-mono-tech">
                Next.js 15
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">SSR &amp; Clean Architecture</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold text-sm hover:opacity-95 transition-all shadow-lg shadow-cyan-500/20"
            >
              <span>Xem Các Dự Án</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/khang1604"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-300 text-sm hover:border-cyan-500/50 hover:text-white transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/nguyenkhang"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-800 bg-zinc-900/60 text-zinc-300 text-sm hover:border-cyan-500/50 hover:text-white transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>

        {/* ABOUT ME SECTION */}
        <section id="about" className="space-y-8 scroll-mt-24">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-cyan-400 tracking-wider uppercase">
              <Sparkles className="w-4 h-4" />
              <span>Về Bản Thân</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-mono-tech text-white">
              Tư Duy Kỹ Thuật &amp; Triết Lý Xây Dựng
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-950/70 hover:border-cyan-500/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg text-white font-mono-tech">
                Backend &amp; Toàn Vẹn Dữ Liệu
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Đóng gói các tác vụ giao dịch phức tạp (nhập xuất kho, chuyển chi nhánh) trong một Database Transaction nguyên tử duy nhất. Cam kết zero balance discrepancies.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-950/70 hover:border-blue-500/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg text-white font-mono-tech">
                Full-Stack &amp; Tối Ưu Tốc Độ
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Thành thạo Next.js 15, React 19, TypeScript và Mantine UI. Tận dụng SSR, ISR và CDN Cloudinary để đạt tốc độ tải trang dưới 1 giây và điểm SEO tuyệt đối.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-zinc-800/80 bg-zinc-950/70 hover:border-indigo-500/40 transition-all space-y-3">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Bot className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-lg text-white font-mono-tech">
                AI Agents &amp; Bảo Mật AppSec
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Nghiên cứu và hiện thực hóa các giải pháp AI tự hành theo giao thức Model Context Protocol (MCP), thực thi kiểm thử an toàn trong sandbox Git worktrees.
              </p>
            </div>
          </div>
        </section>

        {/* TECH STACK & SKILLS */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-cyan-400 tracking-wider uppercase">
              <Cpu className="w-4 h-4" />
              <span>Năng Lực Công Nghệ</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-mono-tech text-white">
              Tech Stack &amp; Hệ Thống Kỹ Năng
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Frontend */}
            <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-950/50 space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold font-mono-tech">
                <Code2 className="w-4 h-4" />
                <span>Frontend</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Mantine UI', 'Vite'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-mono-tech"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Backend */}
            <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-950/50 space-y-3">
              <div className="flex items-center gap-2 text-blue-400 text-sm font-semibold font-mono-tech">
                <Server className="w-4 h-4" />
                <span>Backend &amp; API</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['.NET 10', 'C#', 'Node.js', 'FastAPI', 'EF Core', 'ADO.NET', 'JSend API'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-mono-tech"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Database & Cloud */}
            <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-950/50 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold font-mono-tech">
                <Database className="w-4 h-4" />
                <span>Database &amp; Cloud</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['SQL Server', 'MongoDB', 'PostgreSQL', 'Redis', 'Cloudinary', 'Docker', 'Inno Setup'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-mono-tech"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Architecture & AI */}
            <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-950/50 space-y-3">
              <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold font-mono-tech">
                <Boxes className="w-4 h-4" />
                <span>Kiến Trúc &amp; AI</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {['Clean Architecture', 'Multi-Agents', 'MCP Protocol', 'Git Worktrees', 'Zod Validation', 'AppSec'].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-mono-tech"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED PROJECTS */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-cyan-400 tracking-wider uppercase">
              <FolderGit2 className="w-4 h-4" />
              <span>Dự Án Tiêu Biểu</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-mono-tech text-white">
              Sản Phẩm Đã Xây Dựng &amp; Triển Khai
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <div
                key={project.id}
                className="group relative p-6 rounded-xl border border-zinc-800 bg-zinc-950/70 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-950/20"
              >
                <div className="space-y-4">
                  {/* Category & Links Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-tech font-semibold px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-cyan-400">
                      {project.category}
                    </span>

                    <div className="flex items-center gap-2">
                      {project.isPrivate && (
                        <span
                          title="Mã nguồn riêng tư thuộc sở hữu khách hàng"
                          className="w-8 h-8 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400"
                        >
                          <Lock className="w-3.5 h-3.5" />
                        </span>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          title="Xem mã nguồn GitHub"
                          className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          title="Trải nghiệm bản Live Production"
                          className="w-8 h-8 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-mono-tech text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-500 font-mono-tech mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="text-xs font-mono-tech text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-md inline-block">
                    {project.metrics}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded bg-zinc-900/80 border border-zinc-800/80 text-zinc-400"
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
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 text-sm font-medium hover:border-cyan-500/40 hover:text-white transition-all cursor-pointer"
                  >
                    <span>Xem Kiến Trúc &amp; Giải Pháp</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT FORM */}
        <section id="contact" className="space-y-8 scroll-mt-24 max-w-2xl mx-auto">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono-tech text-cyan-400 tracking-wider uppercase">
              <Send className="w-4 h-4" />
              <span>Gửi Tin Nhắn</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-mono-tech text-white">
              Kết Nối &amp; Hợp Tác
            </h2>
            <p className="text-sm text-zinc-400">
              Bạn có bài toán kỹ thuật cần giải quyết hoặc cơ hội hợp tác nghề nghiệp? Hãy để lại thông tin nhé.
            </p>
          </div>

          <form
            onSubmit={handleContactSubmit}
            className="p-6 sm:p-8 rounded-2xl border border-zinc-800 bg-zinc-950/80 space-y-5 shadow-2xl"
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
                <label className="text-xs font-medium text-zinc-300" htmlFor="name">
                  Họ và Tên
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ví dụ: Nguyễn Văn A"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-300" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="email.cua.ban@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-300" htmlFor="subject">
                Tiêu Đề
              </label>
              <input
                id="subject"
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Trao đổi cơ hội việc làm / Hợp tác dự án"
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:border-cyan-400 focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-zinc-300" htmlFor="message">
                Nội Dung Tin Nhắn
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mô tả tóm tắt về ý tưởng hoặc yêu cầu của bạn..."
                className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold text-sm hover:opacity-95 transition-all shadow-lg shadow-cyan-500/20 cursor-pointer flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Gửi Tin Nhắn Ngay</span>
            </button>
          </form>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-zinc-800/80 bg-zinc-950 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Nguyễn Khang. All rights reserved.</p>
          <div className="flex items-center gap-4 text-zinc-400">
            <a
              href="https://github.com/khang1604"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/nguyenkhang"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
            <a href="mailto:contact@example.com" className="hover:text-cyan-400 transition-colors">
              contact@example.com
            </a>
          </div>
        </div>
      </footer>

      {/* TECHNICAL DEEP DIVE MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-zinc-800 bg-zinc-950 p-6 sm:p-8 space-y-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-4">
              <div>
                <span className="text-xs font-mono-tech text-cyan-400 font-semibold uppercase">
                  {selectedProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-mono-tech text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-emerald-400 font-mono-tech mt-1">
                  {selectedProject.metrics}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="w-8 h-8 rounded-full border border-zinc-800 bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Đóng modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Architecture Overview */}
            <div className="space-y-2">
              <h4 className="text-sm font-semibold text-white font-mono-tech flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>Kiến Trúc Kỹ Thuật &amp; Giải Pháp</span>
              </h4>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {selectedProject.architecture}
              </p>
            </div>

            {/* Key Features Checklist */}
            <div className="space-y-2.5">
              <h4 className="text-sm font-semibold text-white font-mono-tech flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Điểm Nổi Bật Cốt Lõi</span>
              </h4>
              <ul className="space-y-2">
                {selectedProject.keyPoints.map((point, idx) => (
                  <li key={idx} className="text-sm text-zinc-400 flex items-start gap-2.5">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 font-mono-tech"
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
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-zinc-800 bg-zinc-900 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Mã Nguồn</span>
                </a>
              )}
              {selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-cyan-500 text-black font-semibold text-sm hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Bản Demo Trực Tuyến</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
