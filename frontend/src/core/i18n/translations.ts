export type Language = 'vi' | 'en';

export interface TranslationDictionary {
  nav: {
    about: string;
    skills: string;
    projects: string;
    contact: string;
    themeLight: string;
    themeDark: string;
    langSwitch: string;
  };
  hero: {
    status: string;
    greeting: string;
    name: string;
    role: string;
    bio: string;
    metric1Val: string;
    metric1Label: string;
    metric2Val: string;
    metric2Label: string;
    metric3Val: string;
    metric3Label: string;
    viewProjects: string;
  };
  about: {
    badge: string;
    title: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
  };
  skills: {
    badge: string;
    title: string;
    frontend: string;
    backend: string;
    database: string;
    architecture: string;
  };
  projects: {
    badge: string;
    title: string;
    viewDetails: string;
    modalTitle: string;
    architectureTitle: string;
    featuresTitle: string;
    close: string;
    liveDemo: string;
    sourceCode: string;
    privateRepo: string;
    clientProject: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendBtn: string;
    successMsg: string;
  };
  footer: {
    rights: string;
  };
}

export const translations: Record<Language, TranslationDictionary> = {
  vi: {
    nav: {
      about: 'Giới Thiệu',
      skills: 'Kỹ Năng',
      projects: 'Dự Án',
      contact: 'Liên Hệ',
      themeLight: 'Giao diện Sáng',
      themeDark: 'Giao diện Tối OLED',
      langSwitch: 'Chuyển sang English',
    },
    hero: {
      status: 'SẴN SÀNG CHO CÁC DỰ ÁN & VỊ TRÍ MỚI',
      greeting: 'Xin chào, tôi là',
      name: 'Nguyễn Khang',
      role: 'Full Stack Engineer & System Architect',
      bio: 'Đam mê xây dựng các nền tảng web quy mô lớn, kiến trúc hướng sự kiện, hệ thống quản lý kho ACID bền vững và giải pháp điều phối AI Agent tự hành.',
      metric1Val: '4+ Dự Án',
      metric1Label: 'Triển khai thực tế',
      metric2Val: '100% ACID',
      metric2Label: 'Toàn vẹn số liệu kho',
      metric3Val: 'Next.js 15',
      metric3Label: 'SSR & Clean Architecture',
      viewProjects: 'Xem Các Dự Án',
    },
    about: {
      badge: 'Về Bản Thân',
      title: 'Tư Duy Kỹ Thuật & Triết Lý Xây Dựng',
      card1Title: 'Backend & Toàn Vẹn Dữ Liệu',
      card1Desc: 'Đóng gói các tác vụ giao dịch phức tạp (nhập xuất kho, chuyển chi nhánh) trong một Database Transaction nguyên tử duy nhất. Cam kết zero balance discrepancies.',
      card2Title: 'Full-Stack & Tối Ưu Tốc Độ',
      card2Desc: 'Thành thạo Next.js 15, React 19, TypeScript và Mantine UI. Tận dụng SSR, ISR và CDN Cloudinary để đạt tốc độ tải trang dưới 1 giây và điểm SEO tuyệt đối.',
      card3Title: 'AI Agents & Bảo Mật AppSec',
      card3Desc: 'Nghiên cứu và hiện thực hóa các giải pháp AI tự hành theo giao thức Model Context Protocol (MCP), thực thi kiểm thử an toàn trong sandbox Git worktrees.',
    },
    skills: {
      badge: 'Năng Lực Công Nghệ',
      title: 'Tech Stack & Hệ Thống Kỹ Năng',
      frontend: 'Frontend',
      backend: 'Backend & API',
      database: 'Database & Cloud',
      architecture: 'Kiến Trúc & AI',
    },
    projects: {
      badge: 'Dự Án Tiêu Biểu',
      title: 'Sản Phẩm Đã Xây Dựng & Triển Khai',
      viewDetails: 'Xem Kiến Trúc & Giải Pháp',
      modalTitle: 'Chi Tiết Kỹ Thuật Dự Án',
      architectureTitle: 'Kiến Trúc Kỹ Thuật & Giải Pháp',
      featuresTitle: 'Điểm Nổi Bật Cốt Lõi',
      close: 'Đóng',
      liveDemo: 'Bản Demo Trực Tuyến',
      sourceCode: 'Mã Nguồn',
      privateRepo: 'Mã nguồn riêng tư thuộc sở hữu khách hàng',
      clientProject: 'Dự Án Thương Mại',
    },
    contact: {
      badge: 'Gửi Tin Nhắn',
      title: 'Kết Nối & Hợp Tác',
      subtitle: 'Bạn có bài toán kỹ thuật cần giải quyết hoặc cơ hội hợp tác nghề nghiệp? Hãy để lại thông tin nhé.',
      nameLabel: 'Họ và Tên',
      namePlaceholder: 'Ví dụ: Nguyễn Văn A',
      emailLabel: 'Email',
      emailPlaceholder: 'email.cua.ban@example.com',
      subjectLabel: 'Tiêu Đề',
      subjectPlaceholder: 'Trao đổi cơ hội việc làm / Hợp tác dự án',
      messageLabel: 'Nội Dung Tin Nhắn',
      messagePlaceholder: 'Mô tả tóm tắt về ý tưởng hoặc yêu cầu của bạn...',
      sendBtn: 'Gửi Tin Nhắn Ngay',
      successMsg: 'Cảm ơn bạn! Tin nhắn đã được gửi và ghi nhận thành công.',
    },
    footer: {
      rights: 'Nguyễn Khang. Bản quyền đã được bảo lưu.',
    },
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      themeLight: 'Light Theme',
      themeDark: 'OLED Dark Theme',
      langSwitch: 'Switch to Vietnamese',
    },
    hero: {
      status: 'AVAILABLE FOR ROLES & CONTRACTS',
      greeting: "Hi, I'm",
      name: 'Nguyen Khang',
      role: 'Full Stack Engineer & System Architect',
      bio: 'Passionate about engineering large-scale web platforms, event-driven architectures, resilient ACID supply-chain ledgers, and autonomous AI Agent workflows.',
      metric1Val: '4+ Projects',
      metric1Label: 'Production Deployed',
      metric2Val: '100% ACID',
      metric2Label: 'Atomic Ledger Integrity',
      metric3Val: 'Next.js 15',
      metric3Label: 'SSR & Clean Architecture',
      viewProjects: 'View Featured Work',
    },
    about: {
      badge: 'About Me',
      title: 'Engineering Mindset & Philosophy',
      card1Title: 'Backend & Data Integrity',
      card1Desc: 'Enforcing atomic database transactions for high-stakes inventory mutations across distributed warehouses. Guaranteeing zero balance drift.',
      card2Title: 'Full-Stack & Sub-Second Latency',
      card2Desc: 'Mastery in Next.js 15, React 19, TypeScript, and Mantine UI. Harnessing SSR, ISR, and Cloudinary CDN for sub-second responses and flawless SEO.',
      card3Title: 'AI Agents & AppSec Boundaries',
      card3Desc: 'Architecting autonomous multi-agent networks powered by Model Context Protocol (MCP), isolated Git worktree sandboxes, and fail-closed gates.',
    },
    skills: {
      badge: 'Technical Capabilities',
      title: 'Tech Stack & Core Competencies',
      frontend: 'Frontend',
      backend: 'Backend & APIs',
      database: 'Database & Cloud',
      architecture: 'Architecture & AI',
    },
    projects: {
      badge: 'Featured Work',
      title: 'Real-World Production Platforms',
      viewDetails: 'View Architecture & Blueprint',
      modalTitle: 'Project Technical Deep Dive',
      architectureTitle: 'Technical Architecture & Blueprint',
      featuresTitle: 'Core Highlights & Outcomes',
      close: 'Close',
      liveDemo: 'Live Production Demo',
      sourceCode: 'Source Code',
      privateRepo: 'Client Private Enterprise Repository',
      clientProject: 'Commercial Project',
    },
    contact: {
      badge: 'Get In Touch',
      title: 'Collaborate & Connect',
      subtitle: 'Have a complex engineering challenge, contract, or career role? Feel free to drop a message.',
      nameLabel: 'Full Name',
      namePlaceholder: 'e.g., Alex Johnson',
      emailLabel: 'Email Address',
      emailPlaceholder: 'alex.johnson@example.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Full Stack Opportunity / Technical Consultation',
      messageLabel: 'Message',
      messagePlaceholder: 'Share the details of your vision or proposal...',
      sendBtn: 'Send Message',
      successMsg: 'Thank you! Your message has been received and recorded successfully.',
    },
    footer: {
      rights: 'Nguyen Khang. All rights reserved.',
    },
  },
};
