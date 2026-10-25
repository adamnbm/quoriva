import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#fafbff] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
              Stories from Our Learners
            </h2>
            <p className="text-base text-slate-600">
              Ulasan nyata dari mahasiswa, fresh graduate, dan profesional yang bertransformasi dan membuka peluang karir baru bersama Skillora.
            </p>
          </div>

          {/* Overall Rating Pill */}
          <div className="bg-white border border-slate-200/90 rounded-2xl p-4 shadow-soft flex items-center gap-3.5 self-start md:self-auto">
            <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-500">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-navy-950">
                <span>Overall Rating</span>
                <span className="text-amber-500">4.9/5.0</span>
              </div>
              <p className="text-[11px] text-slate-500">Berdasarkan 3.200+ ulasan alumni</p>
            </div>
          </div>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-soft hover:shadow-card hover:border-brand-300 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Top: Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-brand-500 group-hover:bg-brand-50 transition-colors">
                    <Quote className="w-4 h-4" />
                  </div>
                </div>

                {/* Quote Text */}
                <p className="text-sm text-slate-700 leading-relaxed mb-6 italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Bottom: Student Info */}
              <div className="pt-5 border-t border-slate-100 flex items-center gap-3.5">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-slate-100 shadow-xs"
                />
                <div className="text-xs">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-navy-950">{item.name}</h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-600" />
                  </div>
                  <p className="text-slate-500">{item.role} • <span className="text-slate-700 font-medium">{item.company}</span></p>
                  <span className="inline-block mt-1 text-[10px] font-semibold text-brand-600 bg-brand-50 px-2 py-0.5 rounded">
                    {item.courseTaken}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
