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
      themeDark: 'Giao diện Tối',
      langSwitch: 'Chuyển sang English',
    },
    hero: {
      welcome: 'Phát triển phần mềm • TP. Hồ Chí Minh',
      greeting: 'Xin chào, tôi là',
      name: 'Nguyễn Khang',
      role: 'Software Developer',
      bio: 'Tôi xây dựng ứng dụng web và phần mềm desktop phục vụ nhu cầu sử dụng thực tế. Các dự án tập trung vào việc tổ chức mã nguồn rõ ràng, xử lý dữ liệu an toàn và giao diện dễ thao tác.',
      highlight1Title: 'Ứng dụng Web',
      highlight1Desc: 'Xây dựng giao diện và hệ thống quản lý nội dung bằng Next.js, React, TypeScript và Node.js.',
      highlight2Title: 'Phần mềm Desktop & Quản lý',
      highlight2Desc: 'Phát triển ứng dụng bằng .NET, C# và Tauri/Rust, kết nối cơ sở dữ liệu và đóng gói bộ cài cho Windows, Linux.',
      highlight3Title: 'Công cụ & Tự động hóa',
      highlight3Desc: 'Viết công cụ dòng lệnh điều phối tác vụ, chạy kiểm thử tự động trong môi trường tách biệt trước khi áp dụng mã nguồn.',
      contactBtn: 'Liên Hệ',
    },
    skills: {
      badge: 'Kỹ năng',
      title: 'Công nghệ và công cụ sử dụng',
      frontend: 'Giao diện & Desktop',
      backend: 'Backend & Xử lý',
      database: 'Cơ sở dữ liệu & Đóng gói',
      architecture: 'Tổ chức mã & Công cụ',
    },
    projects: {
      badge: 'Dự án',
      title: 'Các dự án đã thực hiện',
      subtitle: 'Các phần mềm, công cụ và ứng dụng web được xây dựng trong quá trình học tập và làm việc.',
      viewDetails: 'Xem chi tiết',
      modalTitle: 'Thông tin dự án',
      architectureTitle: 'Công nghệ và tổ chức mã nguồn',
      featuresTitle: 'Chức năng chính',
      close: 'Đóng',
      liveDemo: 'Mở liên kết',
      sourceCode: 'Mã nguồn GitHub',
      privateRepo: 'Mã nguồn riêng tư',
      clientProject: 'Dự án thực tế',
    },
    contact: {
      badge: 'Liên hệ',
      title: 'Gửi tin nhắn',
      subtitle: 'Nếu bạn muốn trao đổi về công việc hoặc các dự án trên, vui lòng để lại lời nhắn qua biểu mẫu dưới đây.',
      nameLabel: 'Họ và Tên',
      namePlaceholder: 'Ví dụ: Nguyễn Văn A',
      emailLabel: 'Địa Chỉ Email',
      emailPlaceholder: 'Ví dụ: email.cua.ban@example.com',
      subjectLabel: 'Tiêu Đề Tin Nhắn',
      subjectPlaceholder: 'Ví dụ: Trao đổi về công việc / dự án',
      messageLabel: 'Nội Dung',
      messagePlaceholder: 'Nhập nội dung bạn muốn trao đổi...',
      sendBtn: 'Gửi Tin Nhắn',
      successMsg: 'Cảm ơn bạn! Tin nhắn đã được gửi.',
    },
    footer: {
      rights: 'Nguyễn Khang.',
    },
  },
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      themeLight: 'Light Theme',
      themeDark: 'Dark Theme',
      langSwitch: 'Switch to Vietnamese',
    },
    hero: {
      welcome: 'Software Development • Ho Chi Minh City',
      greeting: "Hi, I am",
      name: 'Nguyen Khang',
      role: 'Software Developer',
      bio: 'I build web applications and desktop software for practical use. My projects focus on clear code structure, safe data handling, and straightforward user interfaces.',
      highlight1Title: 'Web Applications',
      highlight1Desc: 'Building web interfaces and content management systems with Next.js, React, TypeScript, and Node.js.',
      highlight2Title: 'Desktop & Management Software',
      highlight2Desc: 'Developing applications in .NET, C#, and Tauri/Rust with database integration and installers for Windows and Linux.',
      highlight3Title: 'Tooling & Automation',
      highlight3Desc: 'Writing CLI tools for task coordination and automated testing in isolated environments before applying changes.',
      contactBtn: 'Contact',
    },
    skills: {
      badge: 'Skills',
      title: 'Technologies & Tools',
      frontend: 'Frontend & Desktop',
      backend: 'Backend & Logic',
      database: 'Database & Packaging',
      architecture: 'Structure & Tooling',
    },
    projects: {
      badge: 'Projects',
      title: 'Completed Projects',
      subtitle: 'Software applications, command-line tools, and websites built during my studies and work.',
      viewDetails: 'View details',
      modalTitle: 'Project Information',
      architectureTitle: 'Technology and code structure',
      featuresTitle: 'Main features',
      close: 'Close',
      liveDemo: 'Open link',
      sourceCode: 'GitHub Repository',
      privateRepo: 'Private repository',
      clientProject: 'Client Project',
    },
    contact: {
      badge: 'Contact',
      title: 'Send a Message',
      subtitle: 'Use the form below to get in touch regarding work or any of the projects listed above.',
      nameLabel: 'Full Name',
      namePlaceholder: 'e.g., Jane Doe',
      emailLabel: 'Email Address',
      emailPlaceholder: 'e.g., your.email@example.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'e.g., Work / Project Inquiry',
      messageLabel: 'Message',
      messagePlaceholder: 'Enter your message...',
      sendBtn: 'Send Message',
      successMsg: 'Thank you! Your message has been sent.',
    },
    footer: {
      rights: 'Nguyen Khang.',
    },
  },
};
