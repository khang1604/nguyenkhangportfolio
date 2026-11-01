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
      welcome: 'Chào mừng đến với Portfolio của tôi',
      greeting: 'Xin chào, tôi là',
      name: 'Nguyễn Khang',
      role: 'Software Engineer & Technology Enthusiast',
      bio: 'Lập trình viên đam mê kiến tạo các sản phẩm web quy mô lớn, kiến trúc bền vững, hiệu năng tối ưu và trải nghiệm người dùng tinh tế.',
      highlight1Title: 'Frontend & Full-Stack Thực Chiến',
      highlight1Desc: 'React, TypeScript, Node.js & Thiết kế Clean Architecture',
      highlight2Title: 'Năng Lực Thiết Kế Hệ Thống',
      highlight2Desc: 'Kiến trúc API chuẩn hóa, tối ưu truy vấn cơ sở dữ liệu và bảo mật đa lớp',
      highlight3Title: 'Không Ngừng Đổi Mới & Sáng Tạo',
      highlight3Desc: 'Đam mê giải thuật thi đấu lập trình, AI Agents và giải pháp công nghệ',
      contactBtn: 'Kết Nối Ngay',
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
      badge: 'Sản Phẩm',
      title: 'Dự Án Tiêu Biểu',
      subtitle: 'Các giải pháp thực tế giải quyết bài toán nghiệp vụ với mã nguồn chuẩn mực.',
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
      title: 'Liên Hệ Với Tôi',
      subtitle: 'Bạn có dự án thú vị hoặc cơ hội hợp tác nghề nghiệp? Hãy để lại tin nhắn nhé!',
      nameLabel: 'Họ và Tên',
      namePlaceholder: 'Ví dụ: Nguyễn Văn A',
      emailLabel: 'Địa Chỉ Email',
      emailPlaceholder: 'Ví dụ: email.cua.ban@example.com',
      subjectLabel: 'Tiêu Đề Tin Nhắn',
      subjectPlaceholder: 'Ví dụ: Thảo luận về cơ hội việc làm',
      messageLabel: 'Nội Dung',
      messagePlaceholder: 'Chia sẻ chi tiết về ý tưởng hoặc dự án của bạn...',
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
      welcome: 'Welcome to my Portfolio',
      greeting: "Hi, I am",
      name: 'Nguyen Khang',
      role: 'Software Engineer & Technology Enthusiast',
      bio: 'Software Engineer & Technology Enthusiast passionate about building scalable web applications, modern architectures, and resilient AI systems.',
      highlight1Title: 'Frontend & Full-Stack',
      highlight1Desc: 'React, TypeScript, Node.js & Clean Architecture',
      highlight2Title: 'Project Leadership',
      highlight2Desc: 'Scalable engineering, robust API design & system resilience',
      highlight3Title: 'Continuous Innovation',
      highlight3Desc: 'Passionate about competitive programming & AI solutions',
      contactBtn: 'Get In Touch',
    },
    skills: {
      badge: 'Capabilities',
      title: 'Tech Stack & Core Skills',
      frontend: 'Frontend',
      backend: 'Backend & APIs',
      database: 'Database & Cloud',
      architecture: 'Architecture & AI',
    },
    projects: {
      badge: 'Portfolio',
      title: 'Featured Projects',
      subtitle: 'Real-world software solutions delivering robust business value and clean code.',
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
      subtitle: 'Have an exciting project, job opportunity, or collaboration in mind? Drop a message!',
      nameLabel: 'Full Name',
      namePlaceholder: 'e.g., Jane Doe',
      emailLabel: 'Email Address',
      emailPlaceholder: 'e.g., your.email@example.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'e.g., Full Stack Role Opportunity',
      messageLabel: 'Message',
      messagePlaceholder: 'Share the details of your vision or proposal...',
      sendBtn: 'Send Message',
      successMsg: 'Thank you! Your message has been validated and received successfully.',
    },
    footer: {
      rights: 'Nguyen Khang. All rights reserved.',
    },
  },
};
