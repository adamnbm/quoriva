import React from 'react';
import { Compass, BookOpenCheck, FolderKanban, ArrowRight, CheckCircle2 } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/mockData';

interface HowItWorksProps {
  onStartLearning: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartLearning }) => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="w-6 h-6 text-brand-600" />;
      case 1:
        return <BookOpenCheck className="w-6 h-6 text-indigo-600" />;
      case 2:
        return <FolderKanban className="w-6 h-6 text-purple-600" />;
      default:
        return <Compass className="w-6 h-6 text-brand-600" />;
    }
  };

  return (
    <section id="how-it-works" className="py-20 bg-white border-y border-slate-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Start Learning in Three Simple Steps
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Metode teruji membawa pemula menguasai keahlian digital dari nol hingga memiliki portofolio proyek yang siap dipresentasikan ke recruiter.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Subtle connecting line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-slate-200 -z-0 -translate-y-12" />

          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="relative z-10 bg-white rounded-2xl p-8 border border-slate-200 shadow-soft hover:shadow-card hover:border-brand-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-4xl font-black text-slate-200 group-hover:text-brand-500/40 transition-colors font-mono tracking-tighter">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-50 transition-all duration-300">
                    {getStepIcon(idx)}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold text-navy-950 mb-3 group-hover:text-brand-600 transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Step highlight */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-50/70 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="truncate">{step.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-brand-50 via-indigo-50/60 to-purple-50 border border-brand-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-navy-900">
              Siap melangkah ke jenjang karir digital impian Anda?
            </h4>
            <p className="text-xs text-slate-600">
              Konsultasikan latar belakang pendidikan Anda secara gratis bersama konselor kami.
            </p>
          </div>
          <button
            type="button"
            onClick={onStartLearning}
            className="px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold shadow-xs flex items-center gap-2 whitespace-nowrap transition-all focus:outline-none focus:ring-2 focus:ring-navy-900/30"
          >
            <span>Mulai Langkah Pertama</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-300" />
          </button>
        </div>

      </div>
    </section>
  );
};
