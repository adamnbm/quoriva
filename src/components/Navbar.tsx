import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, BookOpen } from 'lucide-react';

interface NavbarProps {
  onOpenRegister: (courseId?: string) => void;
  onOpenLogin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister, onOpenLogin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Courses', href: '#courses' },
    { name: 'Learning Path', href: '#how-it-works' },
    { name: 'Success Stories', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 88;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled
          ? 'glass-nav border-b border-slate-200/80 shadow-soft py-2.5'
          : 'bg-white/85 backdrop-blur-md border-b border-slate-100 py-2.5 sm:py-3'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Quoriva Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-indigo-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold tracking-tight text-navy-900">
                Quoriva
              </span>

            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-600 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenLogin}
              className="text-sm font-semibold text-slate-700 hover:text-navy-950 px-3.5 py-2 rounded-lg hover:bg-slate-100/80 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500/30"
            >
              Login
            </button>
            <button
              type="button"
              onClick={() => onOpenRegister()}
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-navy-900 hover:bg-navy-800 active:scale-95 rounded-xl shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-navy-900/40"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 text-brand-300" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenRegister()}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-navy-900 rounded-lg shadow-sm"
            >
              Get Started
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-navy-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 animate-modal shadow-lg">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2 text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-brand-50/50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full text-center py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
              >
                Masuk ke Akun (Login)
              </button>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-navy-900 rounded-xl shadow-md active:scale-98 transition-all"
              >
                <Sparkles className="w-4 h-4 text-brand-300" />
                <span>Mulai Belajar Sekarang</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
