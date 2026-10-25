import React, { useEffect, useState } from 'react';
import { 
  X, 
  Clock, 
  Star, 
  CheckCircle2, 
  Award, 
  FolderGit2, 
  ArrowRight,
  ChevronDown,
  Layers,
  ShieldCheck
} from 'lucide-react';
import type { Course } from '../types';

interface CourseDetailModalProps {
  course: Course | null;
  onClose: () => void;
  onEnrollCourse: (courseId: string) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  onClose,
  onEnrollCourse,
}) => {
  const [activeWeek, setActiveWeek] = useState<number | null>(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (course) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [course, onClose]);

  if (!course) return null;

  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const discountPercentage = Math.round((1 - course.price / course.originalPrice) * 100);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/70 backdrop-blur-sm animate-modal"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner with Theme Accent */}
        <div className="relative bg-gradient-to-r from-navy-950 via-slate-900 to-indigo-950 p-6 sm:p-7 text-white flex-shrink-0">
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all focus:outline-none"
            aria-label="Tutup detail kursus"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 border border-brand-400/30">
              {course.category}
            </span>
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/10 text-slate-200">
              Level: {course.level}
            </span>
            {course.featuredBadge && (
              <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-400 text-navy-950">
                {course.featuredBadge}
              </span>
            )}
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
            {course.title}
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
            {course.description}
          </p>

          {/* Meta metrics */}
          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-300 border-t border-white/10 mt-4">
            <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>{course.rating}</span>
              <span className="text-slate-400 font-normal">({course.reviewsCount} review)</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-brand-400" />
              <span>{course.duration} ({course.totalHours})</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Sertifikat Terverifikasi</span>
            </div>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 space-y-8 flex-1 overflow-y-auto">
          
          {/* Section: What You Will Learn */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-600" />
              <span>Kompetensi yang Akan Anda Kuasai</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {course.whatYouWillLearn.map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-700 font-bold flex items-center justify-center flex-shrink-0 text-[11px] mt-0.5">
                    ✓
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Tools Used */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-600" />
              <span>Tools & Teknologi Standar Industri</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {course.toolsUsed.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Section: Syllabus Breakdown */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 flex items-center gap-2">
              <Award className="w-4 h-4 text-brand-600" />
              <span>Silabus Kurikulum Lengkap</span>
            </h3>
            <div className="space-y-2">
              {course.syllabus.map((syl, idx) => {
                const isOpen = activeWeek === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs"
                  >
                    <button
                      type="button"
                      onClick={() => setActiveWeek(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3 hover:bg-slate-50 transition-colors focus:outline-none"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded border border-brand-200">
                          {syl.week}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-navy-900">
                          {syl.title}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform ${
                          isOpen ? 'rotate-180 text-brand-600' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 bg-slate-50/60 border-t border-slate-100">
                        <ul className="space-y-1.5 text-xs text-slate-600 pl-4 list-disc">
                          {syl.topics.map((t, tIdx) => (
                            <li key={tIdx}>{t}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section: Capstone Project & Mentor */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {/* Capstone Project Card */}
            <div className="p-4 rounded-2xl bg-brand-50/60 border border-brand-200/60 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-700">
                <FolderGit2 className="w-4 h-4" />
                <span>Capstone Project Portofolio</span>
              </div>
              <p className="text-xs font-semibold text-navy-950">
                {course.sampleProject}
              </p>
              <p className="text-[11px] text-slate-600">
                Dinilai langsung oleh mentor dengan panduan feedback 1-on-1.
              </p>
            </div>

            {/* Instructor Card */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-3.5">
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
              />
              <div className="text-xs">
                <span className="text-[10px] text-brand-600 font-semibold uppercase tracking-wider">
                  Lead Instructor
                </span>
                <h4 className="font-bold text-navy-950">{course.instructor.name}</h4>
                <p className="text-slate-500">{course.instructor.role} • {course.instructor.company}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Sticky Footer CTA */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 flex-shrink-0">
          <div className="flex items-baseline gap-2">
            <span className="text-xs text-slate-400 line-through">
              {formatRupiah(course.originalPrice)}
            </span>
            <span className="text-2xl font-black text-navy-950">
              {formatRupiah(course.price)}
            </span>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
              Hemat {discountPercentage}%
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 sm:w-auto px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Tutup
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onEnrollCourse(course.id);
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Daftar Sekarang</span>
              <ArrowRight className="w-4 h-4 text-brand-300" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
