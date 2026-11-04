import { AnimatePresence, motion } from 'framer-motion';
import {
  Boxes,
  Briefcase,
  Code2,
  FolderGit2,
  Mail,
  Menu,
  Sparkles,
  User,
  X
} from 'lucide-react';
import React, { useEffect, useState } from 'react';

const navItems = [
  { id: 'hero', label: 'Accueil', icon: Sparkles },
  { id: 'about', label: 'À Propos', icon: User },
  { id: 'expertise', label: 'Expertise', icon: Code2 },
  { id: 'projects', label: 'Projets', icon: FolderGit2 },
  { id: 'studio', label: 'Creative Studio', icon: Boxes },
  { id: 'contact', label: 'Contact', icon: Mail }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-8 flex justify-center ${
          isScrolled ? 'backdrop-blur-md bg-[#080A0E]/80 border-b border-white/5 shadow-2xl shadow-black/40' : ''
        }`}
      >
        <div className="w-full max-w-7xl flex items-center justify-between">
          {/* Logo / Monogram */}
          <button
            onClick={() => scrollTo('hero')}
            className="group flex items-center gap-3 text-left focus:outline-none"
            aria-label="Retour en haut"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#151A22] border border-[#C5A16A]/40 flex items-center justify-center font-heading font-extrabold text-sm sm:text-base text-[#F2F1ED] group-hover:border-[#C5A16A] transition-all shadow-lg group-hover:shadow-[#C5A16A]/20">
              <span className="text-[#C5A16A]">Y</span>A
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-xs sm:text-sm text-[#F2F1ED] tracking-wider leading-none">
                YOUP-YOUP SOTER AUTON
              </span>
              <span className="text-[10px] font-mono text-[#969DA8] tracking-widest uppercase mt-0.5">
                Digital Engineer
              </span>
            </div>
          </button>

          {/* Desktop Floating Pill Navigation */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full glass-panel border border-white/10 shadow-xl shadow-black/30">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#080A0E] font-semibold'
                      : 'text-[#969DA8] hover:text-[#F2F1ED] hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-gradient-to-r from-[#C5A16A] to-[#E5C795] rounded-full shadow-md shadow-[#C5A16A]/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <Icon className="w-3.5 h-3.5" />
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Right Action: Status indicator & Contact CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#151A22]/90 border border-white/5 text-[11px] font-mono text-[#969DA8]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="hidden xl:inline">En veille &amp; Projets</span>
              <span className="xl:hidden">Dispo</span>
            </div>

            <button
              onClick={() => scrollTo('contact')}
              className="px-4 py-2 rounded-full text-xs font-semibold font-heading bg-gradient-to-r from-[#C5A16A] to-[#D9B37A] text-[#080A0E] hover:brightness-110 active:scale-95 transition-all shadow-md shadow-[#C5A16A]/25"
            >
              Me Contacter
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#151A22] border border-white/10 text-[#F2F1ED] focus:outline-none"
            aria-label="Menu principal"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-4 top-20 z-40 lg:hidden p-6 rounded-2xl glass-panel border border-white/10 bg-[#0F141C]/95 backdrop-blur-2xl shadow-2xl flex flex-col gap-3"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-[#C5A16A] text-[#080A0E] font-bold shadow-md shadow-[#C5A16A]/20'
                      : 'text-[#969DA8] hover:bg-white/5 hover:text-[#F2F1ED]'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </span>
                  {isActive && <span className="text-xs font-mono">ACTIF</span>}
                </button>
              );
            })}

            <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
              <button
                onClick={() => scrollTo('contact')}
                className="w-full py-3 rounded-xl text-center text-sm font-bold bg-gradient-to-r from-[#C5A16A] to-[#D9B37A] text-[#080A0E]"
              >
                Me contacter
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
