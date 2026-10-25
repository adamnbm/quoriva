import React, { useState } from 'react';
import { Plus, Minus, MessageCircle, ArrowRight } from 'lucide-react';
import { FAQS_DATA } from '../data/mockData';

interface FaqSectionProps {
  onOpenRegister: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenRegister }) => {
  // Item 0 is open by default exactly as shown in the wireframe!
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#fafbff] border-t border-slate-100 scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Header - Exactly matching wireframe */}
        <div className="text-center space-y-3 mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Questions and answers about our courses, our processes, mentoring, mentors, and certificates.
          </p>
        </div>

        {/* Clean Accordion List matching wireframe layout */}
        <div className="space-y-3.5">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-200 border overflow-hidden ${
                  isOpen
                    ? 'bg-brand-50/70 border-brand-200 shadow-soft ring-1 ring-brand-500/10'
                    : 'bg-white border-slate-200/90 hover:border-slate-300 shadow-xs'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-sm sm:text-base font-semibold leading-snug transition-colors ${
                      isOpen ? 'text-navy-950 font-bold' : 'text-slate-800'
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Plus / Minus Toggle Icon as in Wireframe */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-brand-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-brand-100/70 animate-modal">
                    <p className="mt-1 text-slate-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Banner - Centered, matching wireframe */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200/90 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center sm:text-left">
            <div className="w-11 h-11 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 flex-shrink-0 mx-auto sm:mx-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-navy-950">
                Masih memiliki pertanyaan seputar kursus?
              </h4>
              <p className="text-xs text-slate-500">
                Tim admission Quoriva siap membantu Anda memilih learning path yang tepat.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenRegister}
            className="px-5 py-2.5 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold shadow-xs flex items-center justify-center gap-2 whitespace-nowrap transition-all focus:outline-none focus:ring-2 focus:ring-navy-900/30"
          >
            <span>Daftar Konsultasi Gratis</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-300" />
          </button>
        </div>

      </div>
    </section>
  );
};
