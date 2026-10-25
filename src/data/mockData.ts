import type { Course, ValueProp, StepItem, Testimonial, FeatureItem, FaqItem } from '../types';

export const COURSES_DATA: Course[] = [
  {
    id: 'course-uiux',
    title: 'UI/UX Design Fundamentals',
    category: 'UI/UX Design',
    tagline: 'Dari riset pengguna hingga prototipe interaktif siap uji coba.',
    description: 'Master user research, wireframing, design system modular, dan high-fidelity interactive prototyping menggunakan Figma standar industri.',
    level: 'Beginner',
    duration: '8 Minggu',
    totalHours: '32 Jam Belajar',
    rating: 4.9,
    reviewsCount: 1240,
    studentsCount: 4520,
    price: 499000,
    originalPrice: 899000,
    featuredBadge: 'Paling Populer',
    themeColor: 'purple',
    gradient: 'from-purple-500/10 via-indigo-500/5 to-transparent',
    whatYouWillLearn: [
      'Design Thinking & User Empathy Framework',
      'Wireframing low-fi ke mid-fi & Information Architecture',
      'Membuat reusable Design System & Auto Layout di Figma',
      'Interactive Micro-animations & Advanced Prototyping',
      'Usability Testing & penyusunan studi kasus portofolio'
    ],
    toolsUsed: ['Figma', 'FigJam', 'Miro', 'Notion', 'Lottie'],
    syllabus: [
      {
        week: 'Minggu 1-2',
        title: 'Fondasi Riset Pengguna & User Persona',
        topics: ['User Interview Methodologies', 'Empathy Mapping', 'Competitor Analysis', 'User Journey Map']
      },
      {
        week: 'Minggu 3-4',
        title: 'Information Architecture & Wireframing',
        topics: ['Sitemap Strategy', 'Card Sorting', 'Low-Fidelity Sketching', 'Wireframe Grid Systems']
      },
      {
        week: 'Minggu 5-6',
        title: 'Design System & Component Library',
        topics: ['Color & Typography Tokens', 'Auto Layout v5', 'Component Variants', 'Iconography Hierarchy']
      },
      {
        week: 'Minggu 7-8',
        title: 'Interactive Prototyping & Capstone Defense',
        topics: ['Smart Animate & Variables', 'User Testing Plan', 'Portfolio Presentation', 'Mentor Review']
      }
    ],
    instructor: {
      name: 'Aditya Ramadhan',
      role: 'Principal Product Designer',
      company: 'Ex-Unicorn Tech',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    },
    sampleProject: 'Aplikasi FinTech Mobile: Redesign Onboarding & Transfer Flow'
  },
  {
    id: 'course-data',
    title: 'Data Analytics with Excel and SQL',
    category: 'Data Analytics',
    tagline: 'Olah data mentah menjadi keputusan bisnis yang bernilai tinggi.',
    description: 'Clean, query, dan visualisasikan data bisnis menggunakan formula lanjutan Excel, relational query modern SQL, serta dashboard storytelling interaktif.',
    level: 'Beginner to Intermediate',
    duration: '10 Minggu',
    totalHours: '40 Jam Belajar',
    rating: 4.8,
    reviewsCount: 980,
    studentsCount: 3890,
    price: 549000,
    originalPrice: 949000,
    featuredBadge: 'High Demand',
    themeColor: 'blue',
    gradient: 'from-blue-500/10 via-cyan-500/5 to-transparent',
    whatYouWillLearn: [
      'Advanced Excel: XLOOKUP, Pivot Tables, Power Query & DAX',
      'SQL Relational Queries: JOIN, GROUP BY, CTEs, Window Functions',
      'Data Cleaning & Validasi Ketelitian Dataset Nyata',
      'Visualisasi Data Interaktif & Business Metric KPI Modeling',
      'Penyusunan Executive Business Recommendation Report'
    ],
    toolsUsed: ['Microsoft Excel', 'PostgreSQL', 'Tableau Public', 'Google BigQuery'],
    syllabus: [
      {
        week: 'Minggu 1-3',
        title: 'Mastering Advanced Excel for Business Analysts',
        topics: ['Dynamic Array Formulas', 'Power Query Transformations', 'Pivot Dashboard Architecture']
      },
      {
        week: 'Minggu 4-6',
        title: 'Relational Database & Core SQL Foundations',
        topics: ['Database Schema & Normalization', 'SELECT, WHERE, ORDER BY', 'Multi-table INNER/LEFT JOINs']
      },
      {
        week: 'Minggu 7-8',
        title: 'Advanced SQL Analytics & Aggregations',
        topics: ['Common Table Expressions (CTE)', 'Window Functions (RANK, OVER)', 'Cohort & Retention Analysis']
      },
      {
        week: 'Minggu 9-10',
        title: 'Dashboard Storytelling & Capstone Presentation',
        topics: ['Building Executive Dashboard', 'Insight to Action Matrix', 'Real E-commerce Sales Analysis']
      }
    ],
    instructor: {
      name: 'Rendra Wicaksono',
      role: 'Lead Data Analytics Specialist',
      company: 'Southeast Asia FinTech',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
    },
    sampleProject: 'Analisis Penjualan E-Commerce Multi-Channel & Dashboard Retensi Pelanggan'
  },
  {
    id: 'course-webdev',
    title: 'Full-Stack Web Development',
    category: 'Web Development',
    tagline: 'Bangun web app modern yang responsif, cepat, dan scalable.',
    description: 'Bangun dan luncurkan aplikasi web responsif skala nyata dari frontend hingga backend menggunakan React, TypeScript, Tailwind CSS, dan RESTful API Node.js.',
    level: 'Intermediate',
    duration: '12 Minggu',
    totalHours: '56 Jam Belajar',
    rating: 4.9,
    reviewsCount: 2100,
    studentsCount: 5210,
    price: 799000,
    originalPrice: 1299000,
    featuredBadge: 'Rekomendasi Karir',
    themeColor: 'indigo',
    gradient: 'from-indigo-500/10 via-brand-500/5 to-transparent',
    whatYouWillLearn: [
      'Modern JavaScript ES6+, TypeScript Types & Generics',
      'React Components, Custom Hooks, Context & State Management',
      'Styling Modern & Responsif dengan Tailwind CSS',
      'Backend REST API dengan Node.js & Express',
      'Autentikasi JWT, Database CRUD, dan Deployment Best Practices'
    ],
    toolsUsed: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Vite', 'Git & GitHub'],
    syllabus: [
      {
        week: 'Minggu 1-3',
        title: 'Modern Frontend Fundamentals (HTML5, Modern CSS, TS)',
        topics: ['Semantic Elements & Accessibility', 'TypeScript Types & Interfaces', 'Git Collaboration Workflow']
      },
      {
        week: 'Minggu 4-6',
        title: 'React Architecture & State Management',
        topics: ['Component Lifecycle & Hooks', 'Custom Hooks Pattern', 'State Management & Form Validation']
      },
      {
        week: 'Minggu 7-9',
        title: 'Tailwind CSS & Responsive UI Systems',
        topics: ['Utility-First Best Practices', 'Mobile-First Responsive Layouts', 'Dark Mode & Animations']
      },
      {
        week: 'Minggu 10-12',
        title: 'Backend API Integration & Full-Stack Capstone',
        topics: ['Node.js Express Server', 'JWT Authentication', 'CRUD Database Operations', 'Final Showcase']
      }
    ],
    instructor: {
      name: 'Bima Satria',
      role: 'Staff Frontend Engineer',
      company: 'Global SaaS Co.',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
    },
    sampleProject: 'SaaS Platform Management Dashboard Lengkap dengan Autentikasi & Data Visual'
  },
  {
    id: 'course-digitalmarketing',
    title: 'Digital Marketing Essentials',
    category: 'Digital Marketing',
    tagline: 'Kuasai channel berbayar & organik untuk melipatgandakan konversi.',
    description: 'Rancang strategi kampanye iklan berkonversi tinggi, funnel marketing efektif, SEO praktis, dan content marketing berbasis analitik pertumbuhan bisnis.',
    level: 'Beginner',
    duration: '6 Minggu',
    totalHours: '24 Jam Belajar',
    rating: 4.8,
    reviewsCount: 850,
    studentsCount: 2940,
    price: 399000,
    originalPrice: 699000,
    featuredBadge: 'Best Value',
    themeColor: 'teal',
    gradient: 'from-emerald-500/10 via-teal-500/5 to-transparent',
    whatYouWillLearn: [
      'Memahami Customer Acquisition Funnel (AARRR Model)',
      'Meta Ads & Google Ads: Setup Targeting, Budgeting, & A/B Testing',
      'Search Engine Optimization (SEO) On-Page & Keyword Intent',
      'Copywriting persuasive untuk Landing Page & Ads Creatives',
      'Google Analytics 4 (GA4) Tracking & ROI Attribution'
    ],
    toolsUsed: ['Meta Ads Manager', 'Google Ads', 'GA4', 'Semrush', 'Canva Pro'],
    syllabus: [
      {
        week: 'Minggu 1-2',
        title: 'Marketing Funnel & Target Audience Strategy',
        topics: ['Buyer Persona Research', 'Value Proposition Canvas', 'Offer Creation & Messaging']
      },
      {
        week: 'Minggu 3-4',
        title: 'Performance Marketing (Meta Ads & TikTok Ads)',
        topics: ['Ad Account Architecture', 'Pixel & CAPI Setup', 'Creative Testing Framework', 'ROAS Optimization']
      },
      {
        week: 'Minggu 5',
        title: 'Organic Search Engine Optimization (SEO)',
        topics: ['Keyword Intent Mapping', 'On-Page Content Structuring', 'Internal Linking Strategies']
      },
      {
        week: 'Minggu 6',
        title: 'Analytics GA4 & Portfolio Campaign Deck',
        topics: ['Conversion Event Tracking', 'UTM Campaign Tagging', 'Portfolio Presentation Deck']
      }
    ],
    instructor: {
      name: 'Siti Sarah',
      role: 'Head of Growth Marketing',
      company: 'D2C Brand Agency',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
    },
    sampleProject: 'Kampanye Peluncuran Produk: Full Funnel Strategy dari Top-of-Funnel hingga Retargeting'
  }
];

export const VALUE_PROPS: ValueProp[] = [
  {
    id: 'prop-practical',
    title: 'Learn Practical Skills',
    description: 'Kuasai alat dan metode kerja terkini yang digunakan langsung oleh perusahaan teknologi dan agensi digital terkemuka.',
    actionText: 'Lihat kurikulum berbasis industri',
    badge: 'Standard Industri'
  },
  {
    id: 'prop-projects',
    title: 'Build Real Projects',
    description: 'Selesaikan studi kasus otentik dan proyek capstone terverifikasi yang langsung siap dipajang di portofolio dan resume Anda.',
    actionText: 'Jelajahi contoh proyek portofolio',
    badge: 'Portofolio Nyata'
  },
  {
    id: 'prop-flexible',
    title: 'Learn at Your Own Pace',
    description: 'Akses seumur hidup materi video berkualitas tinggi, latihan terstruktur, dan bimbingan fleksibel yang menyesuaikan jadwal kuliah atau kerja Anda.',
    actionText: 'Pelajari fleksibilitas belajar',
    badge: 'Akses Seumur Hidup'
  }
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: '01',
    title: 'Choose Your Course',
    description: 'Pilih jalur karir digital yang sesuai dengan minat dan target tujuan profesional Anda, mulai dari desain hingga pemrograman web.',
    highlight: 'Kurikulum terkurasi & berorientasi industri'
  },
  {
    number: '02',
    title: 'Learn and Practice',
    description: 'Pelajari materi video terstruktur, kerjakan latihan interaktif mingguan, dan dapatkan bimbingan langsung saat menghadapi kesulitan.',
    highlight: 'Latihan mandiri & sesi tanya-jawab mentor'
  },
  {
    number: '03',
    title: 'Build Your Portfolio',
    description: 'Kembangkan proyek akhir berskala industri, terima ulasan konstruktif dari mentor berpengalaman, dan kantongi sertifikat kelulusan resmi.',
    highlight: 'Portofolio siap kerja & verifikasi LinkedIn'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'testi-rian',
    name: 'Rian Pratama',
    role: 'Junior UI/UX Designer',
    company: 'Tech Corp Indonesia',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'Sebelumnya saya kuliah di jurusan akuntansi dan merasa ragu untuk beralih ke bidang UI/UX. Berkat kurikulum berbasis proyek di Skillora dan review mentor yang detail, saya berhasil merapikan portofolio Figma saya dan diterima kerja hanya dalam 2 bulan setelah kelulusan.',
    courseTaken: 'UI/UX Design Fundamentals',
    badge: 'Alumni 2025 • Karir Baru'
  },
  {
    id: 'testi-nadia',
    name: 'Nadia Safarina',
    role: 'Data Analyst',
    company: 'FinTech Nusantara',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'Excel dan SQL awalnya terasa sangat rumit. Skillora mengajarkannya dengan simulasi kasus bisnis riil yang relevan—mulai dari menghitung customer churn hingga e-commerce cohort. Materinya praktis dan langsung terpakai di pekerjaan saya sehari-hari!',
    courseTaken: 'Data Analytics with Excel & SQL',
    badge: 'Alumni 2025 • Fresh Graduate'
  },
  {
    id: 'testi-kevin',
    name: 'Kevin Adiwijaya',
    role: 'Frontend Developer',
    company: 'ScaleUp Studio',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'Proyek capstone Full-Stack Web Development sangat solid. Saya diajarkan membangun aplikasi lengkap dengan React, TypeScript, dan Tailwind CSS. Interviewer tech test saya terkesan karena kode saya tersusun rapi dengan best practices modern.',
    courseTaken: 'Full-Stack Web Development',
    badge: 'Alumni 2025 • Promosi Karir'
  }
];

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'feat-1',
    number: '01',
    title: 'Project-Based Learning',
    description: 'Setiap konsep teoritis langsung diuji melalui pengerjaan proyek nyata yang mencerminkan tantangan dunia kerja sebenarnya.',
    tag: 'Hands-on',
    benefit: 'Bukan sekadar menonton video'
  },
  {
    id: 'feat-2',
    number: '02',
    title: 'Structured Learning Paths',
    description: 'Peta pembelajaran terarah dari level fundamental hingga lanjutan tanpa kebingungan materi apa yang harus dipelajari berikutnya.',
    tag: 'Step-by-Step',
    benefit: 'Jalur karir teruji'
  },
  {
    id: 'feat-3',
    number: '03',
    title: 'Mentor Guidance',
    description: 'Dapatkan ulasan langsung untuk setiap tugas dan proyek portofolio Anda dari para praktisi aktif industri teknologi.',
    tag: 'Direct Feedback',
    benefit: 'Koreksi & masukan mendalam'
  },
  {
    id: 'feat-4',
    number: '04',
    title: 'Progress Tracking',
    description: 'Pantau kemajuan belajar harian, pencapaian milestone modul, dan statistik penyelesaian kursus dengan dashboard terpadu.',
    tag: 'Real-time',
    benefit: 'Visualisasi motivasi belajar'
  },
  {
    id: 'feat-5',
    number: '05',
    title: 'Portfolio Development',
    description: 'Bimbingan khusus dalam menyusun studi kasus, visual storytelling hasil karya, serta persiapan portofolio yang menarik recruiter.',
    tag: 'Career Ready',
    benefit: 'Aset utama melamar kerja'
  },
  {
    id: 'feat-6',
    number: '06',
    title: 'Course Completion Certificate',
    description: 'Dapatkan sertifikat kelulusan resmi dengan kredensial digital unik yang dapat diverifikasi dan dibagikan ke profil LinkedIn Anda.',
    tag: 'Verified',
    benefit: 'Pengakuan kompetensi resmi'
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Apakah kursus di Skillora cocok untuk pemula tanpa latar belakang IT atau desain?',
    answer: 'Ya, seluruh kursus dengan tanda "Beginner" dirancang khusus untuk pemula yang memulai dari nol. Kami menyusun materi secara bertahap dari pemahaman konsep dasar, pengenalan tools, hingga praktik langkah demi langkah dengan pendampingan mentor.',
    category: 'Persiapan & Level'
  },
  {
    id: 'faq-2',
    question: 'Apakah saya bisa belajar melalui perangkat mobile atau tablet?',
    answer: 'Tentu saja! Platform Skillora dioptimalkan untuk berbagai perangkat mulai dari desktop, laptop, tablet, hingga smartphone. Anda dapat mengakses materi video, membaca rangkuman pelajaran, dan memantau kemajuan belajar kapan pun dan di mana pun.',
    category: 'Akses Platform'
  },
  {
    id: 'faq-3',
    question: 'Apakah kursus ini memiliki proyek praktik nyata?',
    answer: 'Ya, seluruh kursus di Skillora menerapkan metode Project-Based Learning. Anda tidak hanya mendengarkan teori, melainkan langsung mengerjakan studi kasus riil (seperti membuat prototipe Figma, query database SQL, kode aplikasi React, atau kampanye Meta Ads) yang nantinya dinilai oleh mentor.',
    category: 'Metode Belajar'
  },
  {
    id: 'faq-4',
    question: 'Apakah saya akan mendapatkan sertifikat kelulusan resmi?',
    answer: 'Ya. Setelah Anda menyelesaikan seluruh modul pembelajaran dan lulus penilaian proyek capstone akhir, Anda akan menerima Sertifikat Kelulusan Digital Resmi dengan ID verifikasi unik yang dapat disematkan di LinkedIn dan CV Anda.',
    category: 'Sertifikasi'
  },
  {
    id: 'faq-5',
    question: 'Bagaimana cara mendaftar kursus di Skillora?',
    answer: 'Sangat mudah! Klik tombol "Get Started" di bagian atas halaman atau pilih "View Course" pada kursus yang Anda minati, lalu klik tombol daftar. Lengkapi nama, email, dan nomor WhatsApp Anda pada formulir pendaftaran. Tim Skillora akan segera mengirimkan konfirmasi serta akses belajar.',
    category: 'Pendaftaran'
  },
  {
    id: 'faq-6',
    question: 'Berapa biaya kursus dan apakah ada opsi cicilan atau jaminan uang kembali?',
    answer: 'Biaya kursus Skillora sangat terjangkau mulai dari Rp 399.000 dengan akses seumur hidup (lifetime access) dan pembaruan materi berkala. Kami juga menyediakan opsi pembayaran fleksibel serta jaminan kepuasan belajar 7 hari.',
    category: 'Biaya & Garansi'
  }
];
