import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  QrCode
} from 'lucide-react';

interface FinalCtaProps {
  onStartLearning: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onStartLearning }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Banner Box */}
        <div className="relative rounded-3xl bg-gradient-to-br from-navy-950 via-slate-900 to-indigo-950 p-8 sm:p-12 lg:p-16 text-white overflow-hidden shadow-2xl border border-slate-800">
          
          {/* Decorative Background Lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 left-10 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Your Next Opportunity Starts with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-300 to-purple-300">
                  One Skill.
                </span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
                Bergabunglah bersama ribuan talenta digital lainnya yang telah membuktikan peningkatan karir nyata bersama Skillora. Pelajari keahlian bernilai tinggi hari ini dengan jaminan bimbingan mentor.
              </p>

              {/* Action Buttons & Note */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  type="button"
                  onClick={onStartLearning}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-brand-500 hover:bg-brand-600 active:scale-98 text-white font-bold text-sm shadow-lg shadow-brand-500/30 transition-all focus:outline-none focus:ring-4 focus:ring-brand-500/40 group"
                >
                  <span>Start Learning Today</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Badges Under CTA */}
              <div className="pt-4 flex flex-wrap items-center gap-5 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Garansi kepuasan 7 hari</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-400" />
                  <span>Akses seumur hidup materi</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Sertifikat siap LinkedIn</span>
                </div>
              </div>

            </div>

            {/* Right Visual: Student Credential & Capstone Card */}
            <div className="lg:col-span-5 relative">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl relative overflow-hidden group hover:border-white/30 transition-all">
                
                {/* Header of Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-brand-500/30 border border-brand-400/40 flex items-center justify-center text-brand-300">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">Skillora Digital Passport</h4>
                      <p className="text-[10px] text-slate-300">Verified Certificate & Portfolio</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    STATUS: ACTIVE
                  </span>
                </div>

                {/* Student Profile Simulation */}
                <div className="py-4 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">Student Profile:</span>
                    <span className="font-semibold text-white">Citra Bella / Digital Career</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300">Track:</span>
                    <span className="font-semibold text-brand-300">Full-Stack Digital Specialist</span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] text-slate-300">
                      <span>Curriculum Mastery</span>
                      <span className="text-emerald-400 font-bold">100% Completed</span>
                    </div>
                    <div className="w-full bg-white/15 h-2 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-brand-400 to-emerald-400 h-full w-full rounded-full" />
                    </div>
                  </div>

                  {/* Skills Tag Pills */}
                  <div className="pt-2">
                    <span className="text-[11px] text-slate-300 block mb-1.5">Keahlian Terverifikasi:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Figma UI/UX', 'React.js', 'TypeScript', 'SQL & Excel', 'Meta Ads'].map((skill) => (
                        <span key={skill} className="text-[10px] bg-white/10 border border-white/15 px-2 py-0.5 rounded text-white">
                          ✓ {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer of Card with simulated QR & Verification */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <QrCode className="w-4 h-4 text-brand-300" />
                    <span>ID: SKL-2026-8849</span>
                  </div>
                  <span className="text-emerald-400 font-semibold">Tersertifikasi Resmi</span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
