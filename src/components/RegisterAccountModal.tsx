import React, { useState, useEffect } from 'react';
import {
  X,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  Loader2,
  UserPlus,
  ShieldCheck
} from 'lucide-react';

interface RegisterAccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export const RegisterAccountModal: React.FC<RegisterAccountModalProps> = ({
  isOpen,
  onClose,
  onSwitchToLogin
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setFormData({ fullName: '', email: '', password: '', confirmPassword: '' });
      setErrors({});
      setShowPassword(false);
      setShowConfirmPassword(false);
      setAgreeTerms(false);
      setIsLoading(false);
      setIsSuccess(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Nama lengkap minimal 3 karakter.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Masukkan alamat email yang valid.';
    }

    if (formData.password.length < 8) {
      newErrors.password = 'Kata sandi minimal 8 karakter.';
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Konfirmasi kata sandi tidak cocok.';
    }

    if (!agreeTerms) {
      newErrors.agreeTerms = 'Anda harus menyetujui syarat & ketentuan.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        onSwitchToLogin();
      }, 2000);
    }, 1200);
  };

  // Password strength indicator
  const getPasswordStrength = () => {
    const pw = formData.password;
    if (pw.length === 0) return { level: 0, label: '', color: '' };
    if (pw.length < 6) return { level: 1, label: 'Lemah', color: 'bg-rose-500' };
    if (pw.length < 8) return { level: 2, label: 'Cukup', color: 'bg-amber-500' };
    const hasUpper = /[A-Z]/.test(pw);
    const hasNumber = /[0-9]/.test(pw);
    const hasSpecial = /[^A-Za-z0-9]/.test(pw);
    if (pw.length >= 8 && hasUpper && hasNumber && hasSpecial) return { level: 4, label: 'Sangat Kuat', color: 'bg-emerald-500' };
    if (pw.length >= 8 && (hasUpper || hasNumber)) return { level: 3, label: 'Kuat', color: 'bg-brand-500' };
    return { level: 2, label: 'Cukup', color: 'bg-amber-500' };
  };

  const strength = getPasswordStrength();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy-950/70 backdrop-blur-sm animate-modal"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-brand-700 to-indigo-600 p-6 text-white flex-shrink-0">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white transition-all focus:outline-none"
            aria-label="Tutup form registrasi"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center">
              <UserPlus className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white">Buat Akun Baru</h3>
              <p className="text-xs text-white/70 mt-0.5">
                Bergabung dan mulai perjalanan belajar Anda.
              </p>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isSuccess ? (
            <div className="py-10 text-center space-y-3 animate-modal">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-lg font-bold text-navy-900">Akun Berhasil Dibuat! 🎉</h4>
              <p className="text-sm text-slate-500">
                Selamat datang di Quoriva. Anda akan diarahkan ke halaman login...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Nama Lengkap <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
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
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border transition-all focus:outline-none focus:ring-2 ${errors.fullName
                      ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-200'
                      : 'border-slate-300 focus:border-brand-500 focus:ring-brand-500/20'
                      }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Email <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
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
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm border transition-all focus:outline-none focus:ring-2 ${errors.email
                      ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-200'
                      : 'border-slate-300 focus:border-brand-500 focus:ring-brand-500/20'
                      }`}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Kata Sandi <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={(e) => {
                      setFormData({ ...formData, password: e.target.value });
                      if (errors.password) setErrors({ ...errors, password: '' });
                    }}
                    placeholder="Minimal 8 karakter"
                    className={`w-full pl-10 pr-10 py-2.5 rounded-xl text-xs sm:text-sm border transition-all focus:outline-none focus:ring-2 ${errors.password
                      ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-200'
                      : 'border-slate-300 focus:border-brand-500 focus:ring-brand-500/20'
                      }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {/* Password strength bar */}
                {formData.password.length > 0 && (
                  <div className="mt-2 space-y-1">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className={`h-1 flex-1 rounded-full transition-all ${i <= strength.level ? strength.color : 'bg-slate-200'
                            }`}
                        />
                      ))}
                    </div>
                    <p className="text-[10px] text-slate-500">
                      Kekuatan: <span className="font-semibold">{strength.label}</span>
                    </p>
                  </div>
                )}
                {errors.password && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.password}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Konfirmasi Kata Sandi <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={(e) => {
                      setFormData({ ...formData, confirmPassword: e.target.value });
                      if (errors.confirmPassword) setErrors({ ...errors, confirmPassword: '' });
                    }}
                    placeholder="Ulangi kata sandi"
                    className={`w-full pl-10 pr-10 py-2.5 rounded-xl text-xs sm:text-sm border transition-all focus:outline-none focus:ring-2 ${errors.confirmPassword
                      ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-200'
                      : 'border-slate-300 focus:border-brand-500 focus:ring-brand-500/20'
                      }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-1 text-xs text-rose-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Terms checkbox */}
              <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => {
                    setAgreeTerms(e.target.checked);
                    if (errors.agreeTerms) setErrors({ ...errors, agreeTerms: '' });
                  }}
                  className="rounded border-slate-300 text-brand-600 focus:ring-brand-500 mt-0.5 h-4 w-4"
                />
                <span className="text-xs text-slate-600 leading-relaxed">
                  Saya menyetujui{' '}
                  <span className="font-semibold text-brand-600">Syarat & Ketentuan</span>{' '}
                  dan{' '}
                  <span className="font-semibold text-brand-600">Kebijakan Privasi</span>{' '}
                  Quoriva.
                </span>
              </label>
              {errors.agreeTerms && (
                <p className="text-xs text-rose-600 flex items-center gap-1 -mt-2">
                  <AlertCircle className="w-3 h-3" /> {errors.agreeTerms}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-brand-600 to-indigo-600 hover:from-brand-700 hover:to-indigo-700 text-white font-bold text-sm shadow-lg shadow-brand-500/25 transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand-500/40 disabled:opacity-70"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Membuat akun...</span>
                  </>
                ) : (
                  <>
                    <UserPlus className="w-4 h-4" />
                    <span>Buat Akun</span>
                  </>
                )}
              </button>

              {/* Switch to login */}
              <div className="text-center pt-1 text-xs text-slate-500">
                Sudah memiliki akun?{' '}
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onSwitchToLogin();
                  }}
                  className="font-bold text-brand-600 hover:underline"
                >
                  Masuk di sini
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
