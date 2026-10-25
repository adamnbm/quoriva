import React, { useState } from 'react';
import {
  Star,
  Clock,
  Layers,
  ArrowRight,
  Eye,
  Code2,
  Database,
  TrendingUp
} from 'lucide-react';
import type { Course, CourseCategory } from '../types';
import { COURSES_DATA } from '../data/mockData';

interface FeaturedCoursesProps {
  onSelectCourse: (course: Course) => void;
  onQuickEnroll: (courseId: string) => void;
}

export const FeaturedCourses: React.FC<FeaturedCoursesProps> = ({
  onSelectCourse,
  onQuickEnroll
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CourseCategory>('All');

  const categories: CourseCategory[] = [
    'All',
    'UI/UX Design',
    'Data Analytics',
    'Web Development',
    'Digital Marketing'
  ];

  const filteredCourses = selectedCategory === 'All'
    ? COURSES_DATA
    : COURSES_DATA.filter(c => c.category === selectedCategory);

  // Helper for formatting Rupiah currency
  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const getCourseVisual = (category: string) => {
    switch (category) {
      case 'UI/UX Design':
        return (
          <div className="w-full h-40 bg-gradient-to-tr from-purple-900 via-indigo-950 to-slate-900 relative overflow-hidden flex items-center justify-center p-4">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#c084fc_1px,transparent_1px)] [background-size:12px_12px]" />
            {/* UI mock frame */}
            <div className="relative w-48 bg-white/10 backdrop-blur-md rounded-lg p-2.5 border border-white/20 shadow-lg transform -rotate-2 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-1.5 mb-2">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <div className="w-2 h-2 rounded-full bg-indigo-400" />
                <div className="w-16 h-1.5 rounded-full bg-white/30" />
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                <div className="h-10 rounded bg-purple-500/30 border border-purple-400/30" />
                <div className="h-10 rounded bg-indigo-500/30 border border-indigo-400/30" />
              </div>
            </div>
            <div className="absolute bottom-2 right-3 flex items-center gap-1 text-[11px] font-mono text-purple-200 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-500/30">
              <Layers className="w-3 h-3 text-purple-400" />
              <span>Figma & Design Systems</span>
            </div>
          </div>
        );

      case 'Data Analytics':
        return (
          <div className="w-full h-40 bg-gradient-to-tr from-blue-950 via-sky-950 to-slate-900 relative overflow-hidden flex items-center justify-center p-4">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:12px_12px]" />
            {/* SQL Table & Chart mock */}
            <div className="relative w-48 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20 shadow-lg transform rotate-2 hover:rotate-0 transition-transform">
              <div className="flex justify-between items-end gap-1.5 h-12 mb-1 px-2">
                <div className="w-4 bg-sky-400/40 rounded-t h-[40%]" />
                <div className="w-4 bg-sky-400/60 rounded-t h-[75%]" />
                <div className="w-4 bg-sky-400/80 rounded-t h-[55%]" />
                <div className="w-4 bg-sky-400 rounded-t h-[95%]" />
              </div>
              <div className="w-full h-1 bg-white/20 rounded-full" />
            </div>
            <div className="absolute bottom-2 right-3 flex items-center gap-1 text-[11px] font-mono text-sky-200 bg-sky-950/80 px-2 py-0.5 rounded border border-sky-500/30">
              <Database className="w-3 h-3 text-sky-400" />
              <span>SQL Queries & Excel</span>
            </div>
          </div>
        );

      case 'Web Development':
        return (
          <div className="w-full h-40 bg-gradient-to-tr from-indigo-950 via-slate-900 to-navy-950 relative overflow-hidden flex items-center justify-center p-4">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:12px_12px]" />
            {/* Code editor mock */}
            <div className="relative w-48 bg-black/50 backdrop-blur-md rounded-lg p-2.5 border border-white/15 shadow-lg font-mono text-[10px] text-slate-300">
              <div className="flex items-center gap-1 mb-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
              <p className="text-brand-300 font-semibold">{`<SkilloraApp>`}</p>
              <p className="pl-2 text-emerald-400">const [ready] = true;</p>
              <p className="text-brand-300 font-semibold">{`</SkilloraApp>`}</p>
            </div>
            <div className="absolute bottom-2 right-3 flex items-center gap-1 text-[11px] font-mono text-indigo-200 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-500/30">
              <Code2 className="w-3 h-3 text-brand-400" />
              <span>React & TypeScript</span>
            </div>
          </div>
        );

      case 'Digital Marketing':
        return (
          <div className="w-full h-40 bg-gradient-to-tr from-teal-950 via-emerald-950 to-slate-900 relative overflow-hidden flex items-center justify-center p-4">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:12px_12px]" />
            {/* Funnel & ROAS indicator */}
            <div className="relative w-48 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20 shadow-lg text-center">
              <div className="text-[10px] text-emerald-200 font-medium">Campaign ROAS</div>
              <div className="text-xl font-extrabold text-emerald-400">4.8x Growth</div>
              <div className="text-[9px] text-slate-300">High-Conversion Funnel</div>
            </div>
            <div className="absolute bottom-2 right-3 flex items-center gap-1 text-[11px] font-mono text-emerald-200 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
              <TrendingUp className="w-3 h-3 text-emerald-400" />
              <span>Meta Ads & SEO</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="courses" className="py-20 bg-[#fafbff] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
              Explore Popular Courses
            </h2>
            <p className="text-base text-slate-600">
              Kurikulum industri terkurasi untuk membawa Anda dari level pemula hingga siap kerja dengan portofolio teruji.
            </p>
          </div>

        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-brand-500/30 ${selectedCategory === category
                  ? 'bg-navy-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:text-navy-950 hover:bg-slate-100/80 border border-slate-200'
                }`}
            >
              {category === 'All' ? 'Semua Kursus' : category}
            </button>
          ))}
        </div>

        {/* 4 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-2xl border border-slate-200/90 shadow-soft hover:shadow-card hover:border-brand-300 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
            >
              <div>
                {/* Visual Header */}
                <div className="relative">
                  {getCourseVisual(course.category)}

                  {/* Category Pill Over Visual */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/95 text-navy-900 shadow-xs border border-white/50">
                      {course.category}
                    </span>
                  </div>

                  {course.featuredBadge && (
                    <div className="absolute top-3 right-3">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-400 text-navy-950 shadow-xs">
                        {course.featuredBadge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3">

                  {/* Rating & Level Row */}
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1 text-amber-500 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span>{course.rating}</span>
                      <span className="text-slate-400 font-normal">({course.reviewsCount})</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-medium text-[11px]">
                      {course.level}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-navy-950 group-hover:text-brand-600 transition-colors line-clamp-1">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Duration & Hours Meta */}
                  <div className="pt-2 flex items-center gap-3 text-[11px] text-slate-500 border-t border-slate-100">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-brand-600" />
                      <span>{course.duration}</span>
                    </div>
                    <span>•</span>
                    <span>{course.totalHours}</span>
                  </div>

                </div>
              </div>

              {/* Card Footer: Pricing & Action */}
              <div className="p-5 pt-0 mt-2 space-y-3">
                <div className="flex items-baseline justify-between border-t border-slate-100 pt-3">
                  <div>
                    <span className="text-[11px] text-slate-400 line-through mr-1.5">
                      {formatRupiah(course.originalPrice)}
                    </span>
                    <div className="text-lg font-extrabold text-navy-950">
                      {formatRupiah(course.price)}
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Diskon {Math.round((1 - course.price / course.originalPrice) * 100)}%
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => onSelectCourse(course)}
                    className="w-full py-2 px-3 rounded-xl border border-slate-300 hover:border-brand-500 hover:bg-brand-50/50 text-slate-700 hover:text-brand-700 text-xs font-semibold transition-all flex items-center justify-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Course</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onQuickEnroll(course.id)}
                    className="w-full py-2 px-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold shadow-xs hover:shadow-sm transition-all flex items-center justify-center gap-1 focus:outline-none focus:ring-2 focus:ring-navy-900/30"
                  >
                    <span>Daftar</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-300" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
