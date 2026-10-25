import React, { useState, useEffect } from 'react';
import { 
  X, 
  User, 
  Mail, 
  Phone, 
  BookOpen, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Sparkles,
  Info
} from 'lucide-react';
import { COURSES_DATA } from '../data/mockData';
import type { RegistrationFormData } from '../types';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourseId?: string;
  onOpenPrivacy?: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  onClose,
  preselectedCourseId,
  onOpenPrivacy
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    courseId: preselectedCourseId || 'course-uiux',
    phone: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<RegistrationFormData | null>(null);

  // Sync preselectedCourseId when changed
  useEffect(() => {
    if (preselectedCourseId) {
      setFormData(prev => ({ ...prev, courseId: preselectedCourseId }));
    }
  }, [preselectedCourseId]);

  // Handle ESC key and scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleModalClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Nama lengkap wajib diisi.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Nama lengkap minimal 3 karakter.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Alamat email wajib diisi.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Format email tidak valid (contoh: nama@domain.com).';
    }

    if (!formData.courseId) {
      newErrors.courseId = 'Silakan pilih kursus yang diminati.';
    }

    if (formData.phone.trim() && !/^(\+62|62|0)[0-9]{8,13}$/.test(formData.phone.trim().replace(/[-\s]/g, ''))) {
      newErrors.phone = 'Format nomor WhatsApp tidak valid (contoh: 08123456789 atau +628123456789).';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'Anda harus menyetujui kebijakan privasi untuk melanjutkan.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate frontend asynchronous processing without claiming backend integration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmittedData({ ...formData });
    }, 1200);
  };

  const handleModalClose = () => {
    setIsSuccess(false);
    setErrors({});
    onClose();
  };

  const getSelectedCourseTitle = (id: string) => {
    const c = COURSES_DATA.find(item => item.id === id);
    return c ? c.title : 'Kursus Quoriva';
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/70 backdrop-blur-sm animate-modal"
      onClick={handleModalClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="relative bg-gradient-to-r from-navy-950 via-slate-900 to-indigo-950 p-6 sm:p-7 text-white flex-shrink-0">
          <button
            type="button"
            onClick={handleModalClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all focus:outline-none"
            aria-label="Tutup form pendaftaran"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-xs font-semibold mb-2 border border-brand-400/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Pendaftaran Kursus Quoriva</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            {isSuccess ? 'Pendaftaran Berhasil! 🎉' : 'Mulai Karir Digital Anda'}
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            {isSuccess
              ? 'Selamat, data registrasi simulasi Anda telah kami terima.'
              : 'Isi formulir singkat di bawah ini untuk mengakses materi kursus.'}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 overflow-y-auto flex-1">
          
          {/* Prototype Simulation Notice */}
          <div className="mb-6 p-3.5 rounded-xl bg-amber-50 border border-amber-200/80 flex items-start gap-2.5 text-xs text-amber-800">
            <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong className="font-semibold">Simulasi Lingkungan Lokal:</strong> Formulir ini berjalan pada lingkungan frontend untuk kebutuhan demonstrasi prototipe. Data belum tersimpan secara permanen ke database server.
            </p>
          </div>

          {isSuccess && submittedData ? (
            /* Success View */
            <div className="space-y-6 text-center animate-modal">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h4 className="text-lg font-bold text-navy-950">
                  Terima kasih, {submittedData.fullName}!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  Konfirmasi akses dan panduan kelas demonstrasi untuk kursus{' '}
                  <strong className="text-brand-600">
                    {getSelectedCourseTitle(submittedData.courseId)}
                  </strong>{' '}
                  telah disiapkan.
                </p>
              </div>

              {/* Data Summary Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left text-xs space-y-2 text-slate-700">
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Nama Lengkap:</span>
                  <span className="font-semibold text-navy-900">{submittedData.fullName}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Alamat Email:</span>
                  <span className="font-semibold text-navy-900">{submittedData.email}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Pilihan Kursus:</span>
                  <span className="font-semibold text-brand-600">{getSelectedCourseTitle(submittedData.courseId)}</span>
                </div>
                {submittedData.phone && (
                  <div className="flex justify-between py-1">
                    <span className="text-slate-500">Nomor WhatsApp:</span>
                    <span className="font-semibold text-navy-900">{submittedData.phone}</span>
                  </div>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleModalClose}
                  className="w-full py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-white font-semibold text-xs transition-all shadow-md"
                >
                  Selesai & Kembali ke Landing Page
                </button>
              </div>
            </div>
          ) : (
            /* Form View */
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              
              {/* Field: Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Nama Lengkap <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: '' });
                    }}
                    placeholder="Contoh: Rian Pratama"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border transition-all focus:outline-none focus:ring-2 ${
                      errors.fullName
                        ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-200'
                        : 'border-slate-300 focus:border-brand-500 focus:ring-brand-500/20'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Field: Email */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Alamat Email <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="nama@email.com"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border transition-all focus:outline-none focus:ring-2 ${
                      errors.email
                        ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-200'
                        : 'border-slate-300 focus:border-brand-500 focus:ring-brand-500/20'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Field: Course Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Pilihan Kursus <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <select
                    value={formData.courseId}
                    onChange={(e) => {
                      setFormData({ ...formData, courseId: e.target.value });
                      if (errors.courseId) setErrors({ ...errors, courseId: '' });
                    }}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border bg-white appearance-none transition-all focus:outline-none focus:ring-2 ${
                      errors.courseId
                        ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-200'
                        : 'border-slate-300 focus:border-brand-500 focus:ring-brand-500/20'
                    }`}
                  >
                    {COURSES_DATA.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.title} ({c.level} - Rp {c.price.toLocaleString('id-ID')})
                      </option>
                    ))}
                  </select>
                </div>
                {errors.courseId && (
                  <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.courseId}</span>
                  </p>
                )}
              </div>

              {/* Field: WhatsApp Number (Optional) */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-xs font-bold text-slate-700">
                    Nomor WhatsApp <span className="text-slate-400 font-normal">(Opsional)</span>
                  </label>
                  <span className="text-[11px] text-slate-400">Untuk info jadwal grup kelas</span>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => {
                      setFormData({ ...formData, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: '' });
                    }}
                    placeholder="08xxxxxxxxxx"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border transition-all focus:outline-none focus:ring-2 ${
                      errors.phone
                        ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-200'
                        : 'border-slate-300 focus:border-brand-500 focus:ring-brand-500/20'
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Field: Privacy Agreement */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) => {
                      setFormData({ ...formData, agreeTerms: e.target.checked });
                      if (errors.agreeTerms) setErrors({ ...errors, agreeTerms: '' });
                    }}
                    className="mt-0.5 rounded border-slate-300 text-brand-600 focus:ring-brand-500 h-4 w-4"
                  />
                  <span className="text-xs text-slate-600 leading-snug">
                    Saya menyetujui{' '}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        if (onOpenPrivacy) onOpenPrivacy();
                      }}
                      className="text-brand-600 underline font-medium hover:text-brand-700"
                    >
                      Kebijakan Privasi
                    </button>{' '}
                    dan bersedia menerima materi belajar demonstrasi dari Quoriva.
                  </span>
                </label>
                {errors.agreeTerms && (
                  <p className="mt-1 text-[11px] text-rose-500 flex items-center gap-1 font-medium">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.agreeTerms}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-navy-900 hover:bg-navy-800 disabled:opacity-60 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-navy-900/30"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Memproses Pendaftaran...</span>
                    </>
                  ) : (
                    <span>Kirim Formulir Pendaftaran</span>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
};
