import { ArrowUp, Heart, Mail } from 'lucide-react';
import React from 'react';
import { profileData } from '../../data/profile';
import { GithubIcon } from '../ui/Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#06080B] pt-16 pb-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col justify-between gap-12">
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/5">
          <div className="text-left space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#151A22] border border-[#C5A16A]/40 flex items-center justify-center font-heading font-extrabold text-sm text-[#F2F1ED]">
                <span className="text-[#C5A16A]">Y</span>A
              </div>
              <span className="font-heading font-extrabold text-lg text-[#F2F1ED] tracking-wider">
                YOUP-YOUP SOTER AUTON
              </span>
            </div>
            <p className="text-xs font-mono text-[#969DA8] tracking-widest uppercase">
              Digital Engineer // {profileData.signature}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-white/10 hover:border-[#C5A16A] text-xs font-mono text-[#969DA8] hover:text-[#F2F1ED] transition-all cursor-pointer"
            >
              <span>Retour en haut</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#C5A16A]" />
            </button>
          </div>
        </div>

        {/* Bottom footer row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#969DA8]">
          <p>© {new Date().getFullYear()} YOUP-YOUP SOTER AUTON. Tous droits réservés.</p>
          
          <div className="flex items-center gap-6">
            <a
              href={profileData.contact.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F2F1ED] transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={`mailto:${profileData.contact.email}`}
              className="hover:text-[#C5A16A] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email Direct</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
