export type CourseCategory = 'All' | 'UI/UX Design' | 'Data Analytics' | 'Web Development' | 'Digital Marketing';

export interface Course {
  id: string;
  title: string;
  category: 'UI/UX Design' | 'Data Analytics' | 'Web Development' | 'Digital Marketing';
  tagline: string;
  description: string;
  level: 'Beginner' | 'Beginner to Intermediate' | 'Intermediate';
  duration: string;
  totalHours: string;
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  price: number;
  originalPrice: number;
  featuredBadge?: string;
  themeColor: string; // for card styling accents
  gradient: string;
  whatYouWillLearn: string[];
  toolsUsed: string[];
  syllabus: {
    week: string;
    title: string;
    topics: string[];
  }[];
  instructor: {
    name: string;
    role: string;
    company: string;
    avatar: string;
  };
  sampleProject: string;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  actionText: string;
  badge: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  highlight: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  quote: string;
  courseTaken: string;
  badge: string;
}

export interface FeatureItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tag: string;
  benefit: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  courseId: string;
  phone: string;
  agreeTerms: boolean;
}
