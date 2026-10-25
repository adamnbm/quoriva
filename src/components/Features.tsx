import React from 'react';
import { 
  FolderGit2, 
  GitMerge, 
  Users, 
  LineChart, 
  Briefcase, 
  Award,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { FEATURES_DATA } from '../data/mockData';

export const Features: React.FC = () => {
  const getFeatureIcon = (id: string) => {
    switch (id) {
      case 'feat-1':
        return <FolderGit2 className="w-5 h-5 text-brand-600" />;
      case 'feat-2':
        return <GitMerge className="w-5 h-5 text-indigo-600" />;
      case 'feat-3':
        return <Users className="w-5 h-5 text-purple-600" />;
      case 'feat-4':
        return <LineChart className="w-5 h-5 text-emerald-600" />;
      case 'feat-5':
        return <Briefcase className="w-5 h-5 text-blue-600" />;
      case 'feat-6':
        return <Award className="w-5 h-5 text-amber-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-brand-600" />;
    }
  };

  return (
    <section id="features" className="py-20 bg-white border-y border-slate-100 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            More Than Just Online Courses
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Ekosistem terintegrasi yang dirancang untuk memastikan Anda tidak hanya memahami materi, tetapi juga memiliki kepercayaan diri dan bukti kompetensi nyata.
          </p>
        </div>

        {/* 6 Grid Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES_DATA.map((feat) => (
            <div
              key={feat.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-soft hover:shadow-card hover:border-brand-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Top: Icon & Tag */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-50 transition-all duration-300">
                    {getFeatureIcon(feat.id)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100/90 px-2.5 py-1 rounded-full border border-slate-200">
                    {feat.tag}
                  </span>
                </div>

                {/* Number & Title */}
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-brand-600 transition-colors">
                    {feat.number}.
                  </span>
                  <h3 className="text-lg font-bold text-navy-950 group-hover:text-brand-600 transition-colors">
                    {feat.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {feat.description}
                </p>
              </div>

              {/* Benefit Bullet */}
              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-medium text-brand-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 flex-shrink-0" />
                <span>{feat.benefit}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
