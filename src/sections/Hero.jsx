import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, Eye, FolderGit2, Mail, ShieldAlert, Sparkles } from 'lucide-react';
import React from 'react';
import HeroScene from '../components/3d/HeroScene';
import { profileData } from '../data/profile';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-24 pb-12 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Ambient Cyber Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#C5A16A]/10 via-[#FF7138]/5 to-transparent rounded-full blur-[120px] pointer-events-none" />

      {/* Main Hero Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 my-auto">
        {/* Left Column: Editorial & Imposing Typography */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 z-10 text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#151A22] border border-[#C5A16A]/30 text-xs font-mono text-[#C5A16A] mb-6 shadow-lg shadow-black/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>{profileData.availability.status}</span>
            <span className="text-white/20">•</span>
            <span className="text-[#969DA8]">{profileData.contact.location}</span>
          </div>

          {/* Imposing Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black font-heading tracking-tight text-[#F2F1ED] leading-[0.95]">
            YOUP-YOUP <br />
            <span className="bg-gradient-to-r from-[#F2F1ED] via-[#E5C795] to-[#C5A16A] bg-clip-text text-transparent">
              SOTER AUTON
            </span>
          </h1>

          {/* Professional Role Title */}
          <div className="mt-4 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#FF7138]" />
            <p className="text-lg sm:text-2xl font-bold font-heading tracking-widest text-[#FF7138] uppercase">
              {profileData.role}
            </p>
          </div>

          {/* Signature Mandate */}
          <p className="mt-4 text-base sm:text-xl font-medium text-[#F2F1ED]/90 font-heading">
            {profileData.signature}
          </p>

          {/* Editorial Tagline */}
          <p className="mt-4 text-sm sm:text-base text-[#969DA8] max-w-xl leading-relaxed">
            {profileData.tagline}
          </p>

          {/* Action CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo('projects')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C5A16A] to-[#D9B37A] text-[#080A0E] font-heading font-bold text-sm tracking-wide shadow-xl shadow-[#C5A16A]/20 hover:brightness-110 active:scale-95 transition-all"
            >
              <FolderGit2 className="w-4 h-4" />
              <span>Découvrir mes projets</span>
            </button>

            <button
              onClick={() => scrollTo('contact')}
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#151A22] hover:bg-[#1C232E] text-[#F2F1ED] border border-white/10 text-sm font-semibold transition-all active:scale-95"
            >
              <Mail className="w-4 h-4 text-[#C5A16A]" />
              <span>Me contacter</span>
            </button>
            <a
              href="/documents/cv-youpyoup.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#151A22] hover:bg-[#1C232E] text-[#F2F1ED] border border-[#C5A16A]/40 text-sm font-semibold transition-all active:scale-95"
            >
              <Eye className="w-4 h-4 text-[#C5A16A]" />
              <span>Consulter mon CV</span>
            </a>
            <a
              href="/documents/cv-youpyoup.pdf"
              download="CV_Auton_Youp-Youp.pdf"
              className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C5A16A] to-[#D9B37A] text-[#080A0E] font-heading font-bold text-sm tracking-wide shadow-xl shadow-[#C5A16A]/20 hover:brightness-110 active:scale-95 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Télécharger mon CV</span>
            </a>
          </div>
        </motion.div>

        {/* Right Column: Interactive 3D Metallic Sculpture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="lg:col-span-5 relative w-full h-[400px] sm:h-[480px] lg:h-[580px] flex items-center justify-center"
        >
          {/* Subtle Cyber Frame corners */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C5A16A]/40 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#FF7138]/40 pointer-events-none" />

          {/* 3D Scene */}
          <HeroScene />
        </motion.div>
      </div>

      {/* Bottom Real Stats & Quick Facts Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-12 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {profileData.stats.map((stat, idx) => (
          <div key={idx} className="p-3 sm:p-4 rounded-xl bg-[#111620]/60 border border-white/5">
            <span className="block text-[11px] font-mono text-[#969DA8] uppercase tracking-wider">
              {stat.label}
            </span>
            <span className="block text-lg sm:text-xl font-bold font-heading text-[#F2F1ED] mt-0.5">
              {stat.value}
            </span>
            <span className="block text-xs text-[#C5A16A] mt-0.5 font-mono">
              {stat.detail}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
