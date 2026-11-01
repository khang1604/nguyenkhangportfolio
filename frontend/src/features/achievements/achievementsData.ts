import type { Achievement } from '../../core/validation/schemas';

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'ach-1',
    title: {
      vi: 'Giải Nhất Cuộc Thi Lập Trình & Giải Pháp Phần Mềm',
      en: '1st Prize - Outstanding Software Engineering Solutions',
    },
    organization: 'National University / Tech Symposium',
    date: '2025',
    category: 'AWARDS',
    description: {
      vi: 'Vinh danh giải pháp kiến trúc Full Stack hiệu năng cao, tối ưu hóa độ trễ thời gian thực và tích hợp AI Agent tự động hóa.',
      en: 'Awarded 1st Prize for pioneering modern full-stack web and autonomous AI architecture design with sub-second latency.',
    },
    badge: {
      vi: 'Giải Nhất Toàn Đoàn',
      en: 'Gold Medal / 1st Prize',
    },
  },
  {
    id: 'ach-2',
    title: {
      vi: 'Chứng Chỉ Quốc Tế AWS Certified Solutions Architect',
      en: 'AWS Certified Solutions Architect & Developer',
    },
    organization: 'Amazon Web Services',
    date: '2024',
    category: 'CERTIFICATIONS',
    description: {
      vi: 'Chứng minh năng lực thiết kế hệ thống phân tán, đám mây có khả năng mở rộng linh hoạt, bảo mật đa lớp và độ sẵn sàng cao.',
      en: 'Demonstrated mastery in cloud architectures, microservices, containerization, resilient infrastructure and high availability.',
    },
    badge: {
      vi: 'Chứng Chỉ Chính Thức',
      en: 'Official Certified',
    },
  },
  {
    id: 'ach-3',
    title: {
      vi: 'Quán Quân Hackathon Công Nghệ Tài Chính (FinTech)',
      en: 'Grand Champion - FinTech Innovation Hackathon',
    },
    organization: 'FinTech Innovation Hackathon',
    date: '2024',
    category: 'COMPETITIONS',
    description: {
      vi: 'Xây dựng nền tảng giám sát giao dịch phản ứng nhanh (reactive monitoring), hỗ trợ hàng chục nghìn kết nối đồng thời với zero downtime.',
      en: 'Engineered a real-time reactive transaction monitoring platform handling high concurrency with zero downtime.',
    },
    badge: {
      vi: 'Vô Địch Cuộc Thi',
      en: 'Grand Champion',
    },
  },
  {
    id: 'ach-4',
    title: {
      vi: 'Đóng Góp Mã Nguồn Mở & Hệ Sinh Thái Developer',
      en: 'Open Source Contributor & Dev Community Mentor',
    },
    organization: 'Tech Community Global',
    date: '2023 - 2025',
    category: 'COMMUNITY',
    description: {
      vi: 'Tác giả và người đóng góp cho các thư viện mã nguồn mở React, công cụ tự động hóa TypeScript và chia sẻ kiến thức kỹ thuật.',
      en: 'Author and active contributor to React/TypeScript tooling, performance optimization libraries, and developer mentorship.',
    },
    badge: {
      vi: 'Cộng Đồng',
      en: 'Community Lead',
    },
  },
];
