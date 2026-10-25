import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { FeaturedCourses } from './components/FeaturedCourses';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { Features } from './components/Features';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { CourseDetailModal } from './components/CourseDetailModal';
import { RegistrationModal } from './components/RegistrationModal';
import { LoginModal } from './components/LoginModal';
import { RegisterAccountModal } from './components/RegisterAccountModal';
import { PolicyModal } from './components/PolicyModal';
import type { Course } from './types';
import './App.css';

export function App() {
  // Modal states
  const [selectedCourseForDetail, setSelectedCourseForDetail] = useState<Course | null>(null);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [preselectedCourseId, setPreselectedCourseId] = useState<string>('course-uiux');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterAccountOpen, setIsRegisterAccountOpen] = useState(false);
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | null>(null);

  // Handlers
  const handleOpenRegister = (courseId?: string) => {
    if (courseId) {
      setPreselectedCourseId(courseId);
    }
    setIsRegisterOpen(true);
  };

  const handleSelectCourseForDetail = (course: Course) => {
    setSelectedCourseForDetail(course);
  };

  const handleEnrollFromDetail = (courseId: string) => {
    setPreselectedCourseId(courseId);
    setSelectedCourseForDetail(null);
    setIsRegisterOpen(true);
  };

  const handleExploreCourses = () => {
    const el = document.getElementById('courses');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLearningPath = () => {
    const el = document.getElementById('how-it-works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fafbff] text-navy-950 flex flex-col font-sans selection:bg-brand-500 selection:text-white">
      {/* 1. Navbar */}
      <Navbar
        onOpenRegister={handleOpenRegister}
        onOpenLogin={() => setIsLoginOpen(true)}
      />

      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onExploreCourses={handleExploreCourses}
          onLearningPath={handleLearningPath}
        />

        {/* 3. Value Proposition */}
        <ValueProposition
          onLearnMore={handleExploreCourses}
        />

        {/* 4. Featured Courses */}
        <FeaturedCourses
          onSelectCourse={handleSelectCourseForDetail}
          onQuickEnroll={handleOpenRegister}
        />

        {/* 5. How It Works */}
        <HowItWorks
          onStartLearning={() => handleOpenRegister()}
        />

        {/* 6. Social Proof / Testimonials */}
        <Testimonials />

        {/* 7. Features: More Than Just Online Courses */}
        <Features />

        {/* 8. Frequently Asked Questions */}
        <FaqSection
          onOpenRegister={() => handleOpenRegister()}
        />

        {/* 9. Final CTA */}
        <FinalCta
          onStartLearning={() => handleOpenRegister()}
        />
      </main>

      {/* 10. Footer */}
      <Footer
        onOpenPrivacy={() => setPolicyType('privacy')}
        onOpenTerms={() => setPolicyType('terms')}
      />

      {/* Interactive Modals */}
      <CourseDetailModal
        course={selectedCourseForDetail}
        onClose={() => setSelectedCourseForDetail(null)}
        onEnrollCourse={handleEnrollFromDetail}
      />

      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        preselectedCourseId={preselectedCourseId}
        onOpenPrivacy={() => setPolicyType('privacy')}
      />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        onSwitchToRegister={() => {
          setIsLoginOpen(false);
          setIsRegisterAccountOpen(true);
        }}
      />

      <RegisterAccountModal
        isOpen={isRegisterAccountOpen}
        onClose={() => setIsRegisterAccountOpen(false)}
        onSwitchToLogin={() => {
          setIsRegisterAccountOpen(false);
          setIsLoginOpen(true);
        }}
      />

      <PolicyModal
        type={policyType}
        onClose={() => setPolicyType(null)}
      />
    </div>
  );
}

export default App;

