import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Info,
  Maximize2,
  Minimize2,
  X,
  ZoomIn,
  ZoomOut
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Badge from '../ui/Badge';

export default function LightboxModal({
  item,
  items = [],
  isOpen,
  onClose,
  onNavigate
}) {
  const [isZoomed, setIsZoomed] = useState(false);
  const [showInfo, setShowInfo] = useState(true);

  useEffect(() => {
    setIsZoomed(false);
  }, [item]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNavigate) onNavigate(1);
      if (e.key === 'ArrowLeft' && onNavigate) onNavigate(-1);
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, onNavigate]);

  if (!isOpen || !item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);
  const displayUrl = item.fullUrl || item.mediaUrl || item.url;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/95 backdrop-blur-2xl">
        {/* Top Controls Bar */}
        <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2 pointer-events-auto">
            <span className="px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-mono text-[#F2F1ED]">
              {currentIndex >= 0 ? `${currentIndex + 1} / ${items.length}` : 'Visionneuse'}
            </span>
            <Badge variant="gold" size="xs">
              {item.categoryLabel || 'Creative Studio'}
            </Badge>
          </div>

          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={() => setIsZoomed(!isZoomed)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F2F1ED] transition-colors"
              title={isZoomed ? 'Dézoomer' : 'Zoomer'}
              aria-label="Zoomer"
            >
              {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setShowInfo(!showInfo)}
              className={`p-2.5 rounded-full transition-colors ${
                showInfo ? 'bg-[#C5A16A] text-[#080A0E]' : 'bg-white/10 hover:bg-white/20 text-[#F2F1ED]'
              }`}
              title="Informations"
              aria-label="Informations"
            >
              <Info className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-[#F2F1ED] transition-colors"
              title="Fermer (Échap)"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Previous Button */}
        {items.length > 1 && (
          <button
            onClick={() => onNavigate(-1)}
            className="absolute left-3 sm:left-6 z-20 p-3 rounded-full bg-white/5 hover:bg-white/15 text-[#F2F1ED] transition-colors focus:outline-none"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {items.length > 1 && (
          <button
            onClick={() => onNavigate(1)}
            className="absolute right-3 sm:right-6 z-20 p-3 rounded-full bg-white/5 hover:bg-white/15 text-[#F2F1ED] transition-colors focus:outline-none"
            aria-label="Suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Main Media Display */}
        <div
          className={`relative max-w-full max-h-full flex items-center justify-center overflow-auto transition-transform duration-300 ${
            isZoomed ? 'cursor-zoom-out scale-125' : 'cursor-zoom-in'
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          {item.videoUrl ? (
            <video
              src={item.videoUrl}
              aria-label={`Vidéo : ${item.title}`}
              controls
              autoPlay
              playsInline
              className="max-w-[90vw] max-h-[82vh] rounded-lg shadow-2xl"
            />
          ) : (
            <img
              src={displayUrl}
              alt={item.title}
              className="max-w-[90vw] max-h-[82vh] object-contain rounded-lg shadow-2xl"
            />
          )}
        </div>

        {/* Bottom Metadata Info Card (Collapsible) */}
        <AnimatePresence>
          {showInfo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-20 p-5 rounded-2xl glass-panel bg-[#0F141C]/90 border border-white/10 shadow-2xl text-left"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-heading font-bold text-lg text-[#F2F1ED]">
                    {item.title}
                  </h3>
                  {item.client && (
                    <span className="text-xs font-mono text-[#C5A16A]">
                      {item.client} • {item.format || 'Création Visuelle'}
                    </span>
                  )}
                </div>
              </div>

              {item.description && (
                <p className="mt-2 text-xs text-[#969DA8] leading-relaxed">
                  {item.description}
                </p>
              )}

              {item.tools && item.tools.length > 0 && (
                <div className="mt-3 pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                  {item.tools.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-[#18202D] text-[10px] font-mono text-[#969DA8]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatePresence>
  );
}
