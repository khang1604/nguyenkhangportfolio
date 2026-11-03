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
    welcome: string;
    greeting: string;
    name: string;
    role: string;
    bio: string;
    highlight1Title: string;
    highlight1Desc: string;
    highlight2Title: string;
    highlight2Desc: string;
    highlight3Title: string;
    highlight3Desc: string;
    contactBtn: string;
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
    subtitle: string;
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
      welcome: 'Kỹ sư phần mềm • TP. Hồ Chí Minh',
      greeting: 'Xin chào, tôi là',
      name: 'Nguyễn Khang',
      role: 'Software Engineer & Systems Developer',
      bio: 'Tôi chuyên xây dựng ứng dụng web chịu tải và phần mềm desktop đa nền tảng. Trọng tâm của tôi là viết mã nguồn tường minh, kiểm soát giao dịch dữ liệu chặt chẽ và giữ độ trễ ở mức tối thiểu — từ hệ thống phục vụ hàng chục ngàn sinh viên đến ứng dụng âm thanh độ trễ dưới 1ms.',
      highlight1Title: 'Web & Full-Stack Thực Chiến',
      highlight1Desc: 'Phát triển giao diện phản hồi nhanh và API chuẩn hóa với Next.js, React, TypeScript và Node.js.',
      highlight2Title: 'Hệ Thống Doanh Nghiệp & Desktop',
      highlight2Desc: 'Phần mềm .NET, C# và Tauri/Rust với tính toàn vẹn giao dịch ACID và tối ưu bộ nhớ trực tiếp trên RAM.',
      highlight3Title: 'Tự Động Hóa & Kiểm Thử Khép Kín',
      highlight3Desc: 'Điều phối đa tác nhân AI qua Git Worktree, kiểm thử hồi quy tự động và tuân thủ các chuẩn an toàn ứng dụng.',
      contactBtn: 'Liên Hệ Trực Tiếp',
    },
    skills: {
      badge: 'Năng Lực Kỹ Thuật',
      title: 'Tech Stack & Công Cụ Sử Dụng',
      frontend: 'Frontend & Desktop',
      backend: 'Backend & Systems',
      database: 'Database & Cloud',
      architecture: 'Kiến Trúc & Tự Động Hóa',
    },
    projects: {
      badge: 'Sản Phẩm',
      title: 'Dự Án Đã Triển Khai',
      subtitle: 'Những sản phẩm phần mềm thực tế — từ cổng thông tin phục vụ sinh viên diện rộng, phần mềm quản trị chuỗi kho đến audio workstation đa nền tảng.',
      viewDetails: 'Xem Chi Tiết & Kiến Trúc',
      modalTitle: 'Chi Tiết Kỹ Thuật Dự Án',
      architectureTitle: 'Kiến Trúc Kỹ Thuật & Giải Pháp',
      featuresTitle: 'Tính Năng Cốt Lõi',
      close: 'Đóng',
      liveDemo: 'Bản Demo Trực Tuyến',
      sourceCode: 'Mã Nguồn GitHub',
      privateRepo: 'Mã nguồn nội bộ khách hàng',
      clientProject: 'Dự Án Thương Mại',
    },
    contact: {
      badge: 'Kết Nối',
      title: 'Liên Hệ Trao Đổi',
      subtitle: 'Nếu bạn cần trao đổi về cơ hội việc làm, dự án phần mềm hoặc giải pháp kỹ thuật, hãy gửi tin nhắn trực tiếp qua biểu mẫu bên dưới.',
      nameLabel: 'Họ và Tên',
      namePlaceholder: 'Ví dụ: Nguyễn Văn A',
      emailLabel: 'Địa Chỉ Email',
      emailPlaceholder: 'Ví dụ: email.cua.ban@example.com',
      subjectLabel: 'Tiêu Đề Tin Nhắn',
      subjectPlaceholder: 'Ví dụ: Trao đổi cơ hội việc làm / dự án',
      messageLabel: 'Nội Dung',
      messagePlaceholder: 'Mô tả ngắn gọn về nhu cầu hoặc nội dung trao đổi của bạn...',
      sendBtn: 'Gửi Tin Nhắn',
      successMsg: 'Cảm ơn bạn! Tin nhắn đã được gửi và ghi nhận thành công.',
    },
    footer: {
      rights: 'Bản quyền thuộc về Nguyễn Khang. Đã đăng ký bản quyền.',
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
      welcome: 'Software Engineer • Ho Chi Minh City',
      greeting: "Hi, I am",
      name: 'Nguyen Khang',
      role: 'Software Engineer & Systems Developer',
      bio: 'I build high-traffic web applications and cross-platform desktop software. My focus is writing clean code, maintaining strict transaction integrity, and minimizing runtime latency — from systems serving tens of thousands of active users to sub-millisecond audio workstations.',
      highlight1Title: 'Web & Full-Stack',
      highlight1Desc: 'Responsive UIs and standardized APIs built with Next.js, React, TypeScript, and Node.js.',
      highlight2Title: 'Enterprise Systems & Desktop',
      highlight2Desc: 'Desktop applications in .NET, C#, and Tauri/Rust with strict ACID transactions and direct RAM optimization.',
      highlight3Title: 'Automation & Verification',
      highlight3Desc: 'Multi-agent orchestration isolated via Git Worktrees, automated regression tests, and fail-closed security.',
      contactBtn: 'Get In Touch',
    },
    skills: {
      badge: 'Capabilities',
      title: 'Tech Stack & Engineering Tools',
      frontend: 'Frontend & Desktop',
      backend: 'Backend & Systems',
      database: 'Database & Cloud',
      architecture: 'Architecture & Automation',
    },
    projects: {
      badge: 'Portfolio',
      title: 'Deployed Projects',
      subtitle: 'Production software systems — from campus-wide student portals and supply-chain logistics to cross-platform audio workstations.',
      viewDetails: 'View Details & Architecture',
      modalTitle: 'Project Technical Deep Dive',
      architectureTitle: 'System Architecture & Solutions',
      featuresTitle: 'Core Capabilities',
      close: 'Close',
      liveDemo: 'Live Demo',
      sourceCode: 'GitHub Source',
      privateRepo: 'Client Private Repository',
      clientProject: 'Commercial Project',
    },
    contact: {
      badge: 'Connect',
      title: 'Get In Touch',
      subtitle: 'Reach out directly using the form below for job opportunities, software projects, or technical consulting.',
      nameLabel: 'Full Name',
      namePlaceholder: 'e.g., Jane Doe',
      emailLabel: 'Email Address',
      emailPlaceholder: 'e.g., your.email@example.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'e.g., Job Opportunity / Project Discussion',
      messageLabel: 'Message',
      messagePlaceholder: 'Briefly share your inquiry or proposal details...',
      sendBtn: 'Send Message',
      successMsg: 'Thank you! Your message has been validated and received successfully.',
    },
    footer: {
      rights: 'Nguyen Khang. All rights reserved.',
    },
  },
};
