export type Language = 'vi' | 'en';

export interface TranslationDictionary {
  nav: {
    about: string;
    achievements: string;
    projects: string;
    contact: string;
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
  achievements: {
    badge: string;
    title: string;
    subtitle: string;
    categories: {
      AWARDS: string;
      CERTIFICATIONS: string;
      COMPETITIONS: string;
      COMMUNITY: string;
    };
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    viewDetails: string;
    modalTitle: string;
    architecture: string;
    keyFeatures: string;
    learnings: string;
    close: string;
    liveDemo: string;
    sourceCode: string;
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
      achievements: 'Thành Tựu',
      projects: 'Dự Án',
      contact: 'Liên Hệ',
    },
    hero: {
      welcome: 'Chào mừng đến với Portfolio của tôi',
      greeting: 'Xin chào, tôi là',
      name: 'Nguyễn Khang',
      role: 'Kỹ sư Full Stack / Web Developer',
      bio: 'Lập trình viên đam mê kiến tạo các sản phẩm web quy mô lớn, kiến trúc bền vững, hiệu năng tối ưu và trải nghiệm người dùng tinh tế.',
      highlight1Title: 'Frontend & Full-Stack Thực Chiến',
      highlight1Desc: 'React, TypeScript, Node.js, Next.js & Thiết kế Clean Architecture',
      highlight2Title: 'Năng Lực Thiết Kế Hệ Thống',
      highlight2Desc: 'Kiến trúc API chuẩn hóa, tối ưu truy vấn cơ sở dữ liệu và bảo mật đa lớp',
      highlight3Title: 'Không Ngừng Đổi Mới & Sáng Tạo',
      highlight3Desc: 'Tích hợp AI Agents, tự động hóa quy trình và chinh phục các thử thách kỹ thuật',
      contactBtn: 'Kết Nối Ngay',
    },
    achievements: {
      badge: 'Cột Mốc Tiêu Biểu',
      title: 'Thành Tựu & Vinh Danh',
      subtitle: 'Các giải thưởng cuộc thi, chứng chỉ công nghệ quốc tế và dấu ấn kỹ thuật nổi bật.',
      categories: {
        AWARDS: 'GIẢI THƯỞNG',
        CERTIFICATIONS: 'CHỨNG CHỈ',
        COMPETITIONS: 'THI ĐẤU',
        COMMUNITY: 'ĐÓNG GÓP',
      },
    },
    projects: {
      badge: 'Sản Phẩm',
      title: 'Dự Án Tiêu Biểu',
      subtitle: 'Các giải pháp thực tế giải quyết bài toán nghiệp vụ với mã nguồn chuẩn mực.',
      viewDetails: 'Xem Chi Tiết & Kiến Trúc',
      modalTitle: 'Chi Tiết Kỹ Thuật Dự Án',
      architecture: 'Kiến Trúc & Giải Pháp Kỹ Thuật',
      keyFeatures: 'Tính Năng Cốt Lõi',
      learnings: 'Bài Học & Tối Ưu Rút Ra',
      close: 'Đóng',
      liveDemo: 'Bản Demo Trực Tuyến',
      sourceCode: 'Mã Nguồn GitHub',
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
      achievements: 'Achievements',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      welcome: 'Welcome to my Portfolio',
      greeting: "Hi, I am",
      name: 'Nguyen Khang',
      role: 'Full Stack Engineer / Web Developer',
      bio: 'Software engineer passionate about engineering scalable web platforms, resilient architectures, optimal performance, and refined user experiences.',
      highlight1Title: 'Hands-on Full-Stack Engineering',
      highlight1Desc: 'React, TypeScript, Node.js, Next.js & Clean Architecture Design',
      highlight2Title: 'System Design & Scalability',
      highlight2Desc: 'Standardized API contracts, optimized database queries, and defense-in-depth security',
      highlight3Title: 'Continuous Innovation & AI Integration',
      highlight3Desc: 'AI Agent workflows, automated testing pipelines, and tackling complex tech challenges',
      contactBtn: 'Get In Touch',
    },
    achievements: {
      badge: 'Key Milestones',
      title: 'Key Achievements & Honors',
      subtitle: 'Notable competition awards, international certifications, and technical breakthroughs.',
      categories: {
        AWARDS: 'AWARDS',
        CERTIFICATIONS: 'CERTIFICATIONS',
        COMPETITIONS: 'COMPETITIONS',
        COMMUNITY: 'COMMUNITY',
      },
    },
    projects: {
      badge: 'Portfolio',
      title: 'Featured Projects',
      subtitle: 'Real-world software solutions delivering robust business value and clean code.',
      viewDetails: 'View Details & Architecture',
      modalTitle: 'Project Technical Deep Dive',
      architecture: 'System Architecture & Solutions',
      keyFeatures: 'Core Capabilities',
      learnings: 'Lessons Learned & Optimizations',
      close: 'Close',
      liveDemo: 'Live Demo',
      sourceCode: 'GitHub Source',
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

