import React from 'react';
import {
  ArrowRight,
  Compass,
  Star,
  Users,
  ShieldCheck,
  Layers,
  Database,
  Code2,
  TrendingUp
} from 'lucide-react';

interface HeroProps {
  onExploreCourses: () => void;
  onLearningPath: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCourses, onLearningPath }) => {
  const quickCategories = [
    { label: 'UI/UX Design', icon: <Layers className="w-3.5 h-3.5 text-purple-600" /> },
    { label: 'Data Analytics', icon: <Database className="w-3.5 h-3.5 text-sky-600" /> },
    { label: 'Web Development', icon: <Code2 className="w-3.5 h-3.5 text-indigo-600" /> },
    { label: 'Digital Marketing', icon: <TrendingUp className="w-3.5 h-3.5 text-emerald-600" /> },
  ];

  return (
    <section className="relative pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-gradient-to-b from-indigo-50/60 via-white to-[#fafbff]">
      {/* Background subtle ambient glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-gradient-to-r from-brand-200/30 via-purple-200/25 to-blue-200/30 blur-3xl -z-10 pointer-events-none rounded-full" />
      <div className="absolute -top-12 right-1/4 w-72 h-72 bg-brand-300/15 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">


        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy-950 tracking-tight leading-[1.14]">
          Build Skills That Move Your Career{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600">
            Forward.
          </span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Learn in-demand digital skills, build real projects, and prepare yourself for the next career opportunity. Dapatkan kurikulum teruji dan bimbingan langsung praktisi industri.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
          <button
            type="button"
            onClick={onExploreCourses}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-navy-950 hover:bg-navy-900 active:scale-98 text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-navy-900/40 group"
          >
            <span>Explore Courses</span>
            <ArrowRight className="w-4 h-4 text-brand-400 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={onLearningPath}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-semibold text-sm shadow-xs hover:border-slate-400 active:scale-98 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          >
            <Compass className="w-4 h-4 text-brand-600" />
            <span>Find Your Learning Path</span>
          </button>
        </div>

        {/* Trust Proof Bar */}
        <div className="pt-6 border-t border-slate-200/80 max-w-xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-600 font-medium">
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-bold text-slate-900">4.9/5</span>
              <span>(3.200+ ulasan)</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-brand-600" />
              <span className="font-semibold text-slate-900">15.000+</span>
              <span>Lulusan Aktif</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Sertifikat Terverifikasi</span>
            </div>
          </div>
        </div>

        {/* Quick Category Jump Pills */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-slate-400 font-medium mr-1">Kategori Kursus:</span>
          {quickCategories.map((cat) => (
            <button
              key={cat.label}
              type="button"
              onClick={onExploreCourses}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-brand-400 hover:text-brand-600 hover:bg-brand-50/50 shadow-xs transition-all"
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
