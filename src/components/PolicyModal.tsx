import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && type) onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/70 backdrop-blur-sm animate-modal"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative bg-gradient-to-r from-navy-950 to-slate-900 p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' ? (
              <ShieldCheck className="w-5 h-5 text-brand-400" />
            ) : (
              <FileText className="w-5 h-5 text-brand-400" />
            )}
            <h3 className="text-lg font-bold text-white">
              {type === 'privacy' ? 'Kebijakan Privasi Quoriva' : 'Syarat & Ketentuan Layanan'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-4 max-h-[60vh] overflow-y-auto text-xs sm:text-sm text-slate-600 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>1. Pendahuluan:</strong> Quoriva menghargai privasi setiap pengguna, mahasiswa, dan pengunjung platform kami. Dokumen ini menjelaskan bagaimana data dan informasi demonstrasi Anda dikelola.
              </p>
              <p>
                <strong>2. Pengumpulan Informasi:</strong> Informasi yang Anda masukkan dalam formulir pendaftaran (nama lengkap, alamat email, nomor WhatsApp) digunakan semata-mata untuk simulasi pendaftaran kelas dan pengiriman materi belajar demonstrasi.
              </p>
              <p>
                <strong>3. Keamanan Data:</strong> Pada tahap prototipe lokal ini, data tidak dikirimkan atau diperjualbelikan ke pihak ketiga mana pun.
              </p>
              <p>
                <strong>4. Hak Pengguna:</strong> Anda dapat kapan saja meminta penghapusan informasi simulasi Anda atau membatalkan langganan informasi demonstrasi.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>1. Akses Materi Kursus:</strong> Seluruh materi kursus, video, silabus, dan file latihan di Quoriva adalah hak cipta dan ditujukan untuk pengembangan keterampilan pribadi peserta.
              </p>
              <p>
                <strong>2. Sertifikasi & Kelulusan:</strong> Sertifikat resmi diberikan kepada peserta yang telah menuntaskan modul serta mengumpulkan capstone project yang lolos review mentor.
              </p>
              <p>
                <strong>3. Garansi Belajar:</strong> Kami berkomitmen mendampingi proses belajar hingga selesai dan memberikan jaminan review proyek dari praktisi berpengalaman.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-200 text-right">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-white text-xs font-semibold"
          >
            Saya Mengerti
          </button>
        </div>
      </div>
    </div>
  );
};
