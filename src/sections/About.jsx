import { motion } from 'framer-motion';
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Download,
  GraduationCap,
  MapPin,
  ShieldCheck,
  Eye,
  Sparkles,
  Target
} from 'lucide-react';
import React from 'react';
import Badge from '../components/ui/Badge';
import SectionHeader from '../components/ui/SectionHeader';
import { profileData } from '../data/profile';

export default function About() {
  const edu = profileData.education[0];

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto">
      <SectionHeader
        badge="01 // Profil & Parcours"
        badgeColor="gold"
        title="À Propos de YOUP-YOUP SOTER AUTON"
        subtitle="Articuler logique d'ingénierie, supervision proactive des systèmes et sensibilité graphique éditoriale."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Portrait & Identity Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Portrait Frame */}
          <div className="relative rounded-3xl overflow-hidden glass-panel border border-[#C5A16A]/30 p-2 bg-[#121822] shadow-2xl group">
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#0A0D12]">
              <img
                src="/images/profile/photo-cv.jpg"
                alt="YOUP-YOUP SOTER AUTON — Digital Engineer"
                className="w-full h-full object-cover object-top filter brightness-95 group-hover:brightness-105 group-hover:scale-102 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080A0E] via-transparent to-transparent opacity-80" />

              {/* Bottom Card Identity Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel bg-[#0F141D]/90 border border-white/10 backdrop-blur-md">
                <span className="text-[10px] font-mono text-[#C5A16A] tracking-widest uppercase">
                  Digital Engineer
                </span>
                <h3 className="text-lg font-bold font-heading text-[#F2F1ED]">
                  YOUP-YOUP SOTER AUTON
                </h3>
                <span className="flex items-center gap-1.5 text-xs text-[#969DA8] mt-1 font-mono">
                  <MapPin className="w-3 h-3 text-[#FF7138]" /> Douala, Cameroun
                </span>
              </div>
            </div>
          </div>

          {/* Signature Box */}
          <div className="p-6 rounded-2xl bg-[#111721] border border-white/5 space-y-2 text-left">
            <span className="text-xs font-mono text-[#C5A16A] uppercase tracking-wider block">
              // Signature Professionnelle
            </span>
            <p className="text-base font-bold font-heading text-[#F2F1ED]">
              {profileData.signature}
            </p>
            <p className="text-xs text-[#969DA8] leading-relaxed pt-1">
              Concevoir des architectures pérennes, automatiser les processus récurrents, sécuriser les infrastructures Linux et animer des expériences visuelles marquantes.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Bio, Education & Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 space-y-8 text-left"
        >
          {/* Bio Text (Exact Text from User) */}
          <div className="p-6 sm:p-8 rounded-3xl glass-panel bg-[#111620]/90 border border-white/10 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#F2F1ED]">
              Présentation Professionnelle
            </h3>
            <p className="text-base sm:text-lg text-[#F2F1ED]/95 leading-relaxed font-light">
              « {profileData.bio.intro} »
            </p>
            <div className="p-4 rounded-xl bg-[#151D2A] border-l-2 border-[#C5A16A] text-sm text-[#F2F1ED] font-medium leading-relaxed">
              {profileData.bio.certifications}
            </div>
            <p className="text-sm sm:text-base text-[#969DA8] leading-relaxed">
              {profileData.bio.approach}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="/documents/cv-youpyoup.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C5A16A]/40 bg-[#151A22] px-5 py-3 text-sm font-semibold text-[#F2F1ED] transition-colors hover:bg-[#1C232E]"
              >
                <Eye className="h-4 w-4 text-[#C5A16A]" /> Consulter mon CV
              </a>
              <a
                href="/documents/cv-youpyoup.pdf"
                download="CV_Auton_Youp-Youp.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#C5A16A] to-[#D9B37A] px-5 py-3 text-sm font-bold text-[#080A0E] transition-all hover:brightness-110"
              >
                <Download className="h-4 w-4" /> Télécharger mon CV
              </a>
            </div>
          </div>

          {/* Academic Journey (Licence Réseaux & Sécurité) */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-[#C5A16A]" />
              <h4 className="text-lg font-bold font-heading text-[#F2F1ED]">
                Formation Académique
              </h4>
            </div>

            <div className="p-6 rounded-2xl bg-[#131924] border border-white/5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h5 className="font-heading font-bold text-base text-[#F2F1ED]">
                  {edu.degree}
                </h5>
                <Badge variant="gold" size="xs">
                  {edu.status}
                </Badge>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-[#C5A16A]">
                <span>Enseignement Supérieur en Informatique</span>
                <span>•</span>
                <span>{edu.location}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                {edu.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#969DA8]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A16A] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications & Objectifs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Certifications Card */}
            <div className="p-5 rounded-2xl bg-[#111721] border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C5A16A] uppercase">
                <Award className="w-4 h-4 text-[#C5A16A]" /> Certifications Obtenues
              </div>
              <div className="space-y-2">
                {profileData.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-2.5 rounded-lg bg-[#141A25] border border-white/5">
                    <span className="text-xs font-semibold text-[#F2F1ED] font-heading">{cert.title}</span>
                    <span className="text-[10px] font-mono text-[#C5A16A]">{cert.area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Objectifs Professionnels */}
            <div className="p-5 rounded-2xl bg-[#111721] border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF7138] uppercase">
                <Target className="w-4 h-4 text-[#FF7138]" /> Objectifs Professionnels
              </div>
              <p className="text-xs text-[#F2F1ED] font-heading font-medium leading-relaxed">
                Mettre mes compétences techniques et créatives au service de projets innovants et de solutions concrètes.
              </p>
              <div className="pt-2 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-[#969DA8]">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Prêt pour missions stimulantes &amp; collaborations</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
