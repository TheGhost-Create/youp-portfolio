import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Eye,
  Maximize2,
  Sparkles
} from 'lucide-react';
import React from 'react';
import Badge from '../ui/Badge';
import { GithubIcon } from '../ui/Icons';

export default function ProjectCard({ project, onOpenDetails, onZoomImage }) {
  const isOrange = project.categorySlug === 'cybersecurity' || project.categorySlug === 'graphic-design';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="group relative rounded-3xl glass-panel border border-white/10 hover:border-[#C5A16A]/40 transition-all duration-500 overflow-hidden bg-[#111620]/80 flex flex-col justify-between"
    >
      {/* Accent Edge Glow on Hover */}
      <div
        className={`absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none ${
          isOrange ? 'bg-[#FF7138]' : 'bg-[#C5A16A]'
        }`}
      />

      {/* Visual / Media Container */}
      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#0A0D13] border-b border-white/5">
        {project.videoUrl ? (
          <video
            src={project.videoUrl}
            aria-label={`Vidéo du projet ${project.title}`}
            controls
            preload="metadata"
            playsInline
            onClick={(event) => event.stopPropagation()}
            className="w-full h-full object-contain"
          />
        ) : (
          <img
            src={project.coverImage}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
          />
        )}

        {/* Media Overlay Gradient */}
        {!project.videoUrl && <div className="absolute inset-0 bg-gradient-to-t from-[#111620] via-transparent to-black/30 pointer-events-none" />}

        {/* Top Badges over image */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-10">
          <Badge variant={isOrange ? 'orange' : 'gold'} size="sm">
            {project.category}
          </Badge>

          {project.statusType === 'live' && (
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px] font-mono text-emerald-400 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              Live
            </span>
          )}

          {project.statusType === 'concept' && (
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-950/80 border border-amber-500/40 text-[11px] font-mono text-amber-300 backdrop-blur-md">
              <Sparkles className="w-3 h-3" /> Concept
            </span>
          )}

          {project.statusType === 'completed' && (
            <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-900/80 border border-slate-600/40 text-[11px] font-mono text-slate-300 backdrop-blur-md">
              <CheckCircle2 className="w-3 h-3 text-[#C5A16A]" /> Validé
            </span>
          )}
        </div>

        {/* Quick View Button on Image Hover */}
        {!project.videoUrl && <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
          <button
            onClick={() => onOpenDetails(project)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F2F1ED] text-[#080A0E] font-heading font-bold text-xs uppercase tracking-wider shadow-2xl hover:bg-[#C5A16A] transition-colors cursor-pointer"
          >
            <Eye className="w-4 h-4" /> Explorer la Fiche
          </button>
        </div>}

        {/* Order Watermark */}
        <div className="absolute bottom-3 right-4 font-heading font-extrabold text-3xl sm:text-4xl text-white/10 select-none">
          {project.order}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
        <div>
          {/* Subtitle & Title */}
          <div className="mb-2">
            <span className="text-xs font-mono text-[#969DA8] uppercase tracking-wider">
              {project.subtitle}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F2F1ED] font-heading mt-1 group-hover:text-[#C5A16A] transition-colors">
              {project.title}
            </h3>
          </div>

          {/* Summary */}
          <p className="text-[#969DA8] text-sm leading-relaxed line-clamp-3 mb-6">
            {project.summary}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-8">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <Badge key={index} variant="subtle" size="xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="subtle" size="xs">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>
        </div>

        {/* Action Footer */}
        <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-3">
          <button
            onClick={() => onOpenDetails(project)}
            className="flex items-center gap-2 text-xs font-semibold text-[#F2F1ED] hover:text-[#C5A16A] transition-colors group/btn cursor-pointer"
          >
            Fiche complète
            <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>

          <div className="flex items-center gap-2">
            {project.fullImage && (
              <button
                onClick={() => onZoomImage(project.fullImage, project.title)}
                className="p-2 rounded-lg bg-[#18202C] text-[#969DA8] hover:text-[#F2F1ED] hover:bg-[#202B3C] transition-colors cursor-pointer"
                title="Ouvrir l'affiche en grand"
                aria-label="Ouvrir en grand"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            )}

            {project.projectUrl && (
              <a
                href={project.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#C5A16A]/10 text-[#C5A16A] hover:bg-[#C5A16A]/20 border border-[#C5A16A]/30 text-xs font-medium transition-colors"
              >
                <span>Visiter</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && !project.projectUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 text-[#969DA8] hover:text-[#F2F1ED] hover:bg-white/10 text-xs transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
