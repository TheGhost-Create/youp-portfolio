import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Layers,
  Maximize2,
  Sparkles,
  Terminal,
  X
} from 'lucide-react';
import React, { useEffect } from 'react';
import Badge from '../ui/Badge';
import { GithubIcon } from '../ui/Icons';
import MonitorDashboardVisual from './MonitorDashboardVisual';

export default function ProjectModal({ project, isOpen, onClose, onZoomImage }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const isOrange = project.categorySlug === 'cybersecurity' || project.categorySlug === 'graphic-design';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#080A0E]/90 backdrop-blur-xl cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel bg-[#0F141C] border border-white/10 shadow-2xl z-10 text-left my-auto"
        >
          {/* Sticky Header Bar */}
          <div className="sticky top-0 z-20 px-6 sm:px-8 py-5 border-b border-white/10 bg-[#0F141C]/95 backdrop-blur-md flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-heading font-extrabold text-sm sm:text-base text-[#C5A16A]">
                PROJET {project.order}
              </span>
              <span className="text-white/20">/</span>
              <Badge variant={isOrange ? 'orange' : 'gold'} size="xs">
                {project.category}
              </Badge>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#969DA8] hover:text-[#F2F1ED] transition-colors focus:outline-none cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 md:p-10 space-y-10">
            {/* Title & Actions Bar */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/5">
              <div className="max-w-2xl">
                <span className="text-xs font-mono text-[#969DA8] uppercase tracking-widest">
                  {project.subtitle}
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#F2F1ED] font-heading mt-2">
                  {project.title}
                </h2>
                <p className="mt-3 text-[#969DA8] text-sm sm:text-base leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C5A16A] to-[#D9B37A] text-[#080A0E] font-heading font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#C5A16A]/20 hover:brightness-110 transition-all cursor-pointer"
                  >
                    <span>Consulter le Site en Ligne</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {project.fullImage && (
                  <button
                    onClick={() => onZoomImage(project.fullImage, project.title)}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#18202C] hover:bg-[#202B3C] text-[#F2F1ED] border border-white/10 text-xs font-semibold transition-all cursor-pointer"
                  >
                    <Maximize2 className="w-4 h-4 text-[#FF7138]" />
                    <span>Agrandir l'Affiche</span>
                  </button>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-[#F2F1ED] border border-white/10 text-xs font-semibold transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Dépôt GitHub</span>
                  </a>
                )}
              </div>
            </div>

            {/* Special Interactive Section for MONITOR_PRO */}
            {project.id === 'monitor-pro' && (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF7138] uppercase tracking-widest mb-3">
                  <Terminal className="w-4 h-4" /> Démonstration Interactive du Dashboard Télémétrique
                </div>
                <MonitorDashboardVisual />
              </div>
            )}

            {project.videoUrl && (
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-[#C5A16A] uppercase tracking-widest mb-3">
                  <Sparkles className="w-4 h-4" /> Vidéo Motion Design
                </div>
                <video
                  src={project.videoUrl}
                  aria-label={`Vidéo du projet ${project.title}`}
                  controls
                  preload="metadata"
                  playsInline
                  className="w-full max-h-[70vh] rounded-2xl bg-black object-contain border border-white/10"
                />
              </div>
            )}

            {/* Context & Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Context */}
              <div className="p-6 rounded-2xl bg-[#131922] border border-white/5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C5A16A] uppercase tracking-wider">
                  <Layers className="w-4 h-4" /> Contexte &amp; Problématique
                </div>
                <p className="text-sm text-[#969DA8] leading-relaxed">
                  {project.context}
                </p>
              </div>

              {/* Technologies Stack */}
              <div className="p-6 rounded-2xl bg-[#131922] border border-white/5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C5A16A] uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" /> Technologies &amp; Outils Utilisés
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="subtle" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Points Clés / Highlights */}
            <div>
              <h3 className="text-lg font-bold text-[#F2F1ED] font-heading mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C5A16A]" /> Points Forts &amp; Architecture
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.highlights.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-[#121720] border border-white/5 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#C5A16A] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#969DA8] leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contributions Personnelles */}
            <div>
              <h3 className="text-lg font-bold text-[#F2F1ED] font-heading mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF7138]" /> Contributions &amp; Rôle de Youp-Youp Soter Auton
              </h3>
              <div className="space-y-2.5">
                {project.contributions.map((contribution, index) => (
                  <div
                    key={index}
                    className="px-4 py-3 rounded-xl bg-[#121720] border-l-2 border-[#FF7138] text-sm text-[#F2F1ED]"
                  >
                    {contribution}
                  </div>
                ))}
              </div>
            </div>

            {/* Project Gallery / Visuals */}
            {project.gallery && project.gallery.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-[#F2F1ED] font-heading mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white/40" /> Médias &amp; Documents Visuels
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.gallery.map((media, i) => (
                    <div
                      key={i}
                      className="group/media relative rounded-2xl overflow-hidden bg-[#0A0D13] border border-white/10"
                    >
                      <img
                        src={media.url}
                        alt={media.caption}
                        className="w-full h-64 object-cover object-center group-hover/media:scale-105 transition-transform duration-500 cursor-pointer"
                        onClick={() => onZoomImage(media.url, media.caption)}
                      />
                      <div className="p-4 bg-[#111620] border-t border-white/5 flex items-center justify-between gap-3">
                        <span className="text-xs text-[#969DA8] line-clamp-1">{media.caption}</span>
                        <Badge variant="subtle" size="xs">{media.tag}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="px-6 sm:px-8 py-4 border-t border-white/10 bg-[#0C1017] flex items-center justify-between">
            <button
              onClick={onClose}
              className="flex items-center gap-2 text-xs font-mono text-[#969DA8] hover:text-[#F2F1ED] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Revenir au portfolio
            </button>
            <span className="text-[11px] font-mono text-white/30">
              YOUP-YOUP SOTER AUTON // DIGITAL ENGINEER
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
