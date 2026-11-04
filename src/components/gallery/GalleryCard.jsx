import { motion } from 'framer-motion';
import { Eye, Layers, Maximize2, Play } from 'lucide-react';
import React from 'react';
import Badge from '../ui/Badge';

export default function GalleryCard({ item, onClick }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      onClick={() => onClick(item)}
      className="group relative rounded-2xl glass-panel border border-white/10 hover:border-[#C5A16A]/50 bg-[#10151E] overflow-hidden cursor-pointer transition-all duration-300 flex flex-col justify-between"
    >
      {/* Media Box */}
      <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden bg-[#0A0D13]">
        {item.videoUrl ? (
          <video
            src={item.videoUrl}
            aria-label={`Vidéo : ${item.title}`}
            controls
            preload="metadata"
            playsInline
            onClick={(event) => event.stopPropagation()}
            className="w-full h-full object-contain"
          />
        ) : (
          <img
            src={item.mediaUrl}
            alt={item.title}
            loading="lazy"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        )}

        {/* Hover overlay with zoom icon */}
        {!item.videoUrl && <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-[#F2F1ED] text-[#080A0E] flex items-center justify-center shadow-2xl">
            <Maximize2 className="w-5 h-5" />
          </div>
        </div>}
        {item.videoUrl && (
          <span className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 rounded-full bg-black/70 px-3 py-1.5 text-xs font-medium text-white">
            <Play className="h-3.5 w-3.5 fill-current" /> Vidéo disponible
          </span>
        )}

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
          <Badge variant="gold" size="xs">
            {item.categoryLabel}
          </Badge>
          <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-[#F2F1ED]">
            {item.year}
          </span>
        </div>
      </div>

      {/* Details Box */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
        <div>
          <h4 className="font-heading font-bold text-base text-[#F2F1ED] group-hover:text-[#C5A16A] transition-colors line-clamp-1">
            {item.title}
          </h4>
          <p className="mt-1 text-xs text-[#969DA8] line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between gap-2">
          {/* Software tags */}
          <div className="flex flex-wrap gap-1">
            {item.tools.map((tool, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded bg-[#161E2A] text-[10px] font-mono text-[#969DA8]"
              >
                {tool}
              </span>
            ))}
          </div>
          <span className="text-[11px] font-mono text-[#C5A16A] group-hover:underline flex items-center gap-1 shrink-0">
            <Eye className="w-3 h-3" /> Voir
          </span>
        </div>
      </div>
    </motion.div>
  );
}
