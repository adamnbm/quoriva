import React from 'react';
import { Laptop, FolderGit2, Clock, ArrowRight } from 'lucide-react';
import { VALUE_PROPS } from '../data/mockData';

interface ValuePropositionProps {
  onLearnMore?: () => void;
}

export const ValueProposition: React.FC<ValuePropositionProps> = ({ onLearnMore }) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'prop-practical':
        return <Laptop className="w-6 h-6 text-brand-600" />;
      case 'prop-projects':
        return <FolderGit2 className="w-6 h-6 text-indigo-600" />;
      case 'prop-flexible':
        return <Clock className="w-6 h-6 text-purple-600" />;
      default:
        return <Laptop className="w-6 h-6 text-brand-600" />;
    }
  };

  return (
    <section id="why-us" className="py-20 bg-white border-y border-slate-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Everything You Need to Grow Your Skills
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Designed for fast-track career readiness with structured guidance, real project involvement, and clear mentor feedback.
          </p>
        </div>

        {/* 3 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUE_PROPS.map((prop) => (
            <div
              key={prop.id}
              className="group relative rounded-2xl p-7 bg-white border border-slate-200/80 hover:border-brand-300 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              {/* Top Accent Gradient Border */}
              <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-brand-500 to-indigo-500 rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-50/80 border border-brand-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-100/70 transition-all duration-300">
                    {getIcon(prop.id)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                    {prop.badge}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-brand-600 transition-colors">
                  {prop.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {prop.description}
                </p>
              </div>

              {/* Bottom Link */}
              <button
                type="button"
                onClick={onLearnMore}
                className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-brand-600 group-hover:text-brand-700 w-full text-left focus:outline-none"
              >
                <span>{prop.actionText}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
