import { AnimatePresence, motion } from 'framer-motion';
import {
  Boxes,
  Compass,
  Filter,
  Grid,
  Sparkles
} from 'lucide-react';
import React, { useState } from 'react';
import GalleryCard from '../components/gallery/GalleryCard';
import SectionHeader from '../components/ui/SectionHeader';
import { galleryCategories, galleryItems } from '../data/gallery';

export default function CreativeStudio({ onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(
        (item) => item.category === activeCategory || item.secondaryCategory === activeCategory
      );

  return (
    <section id="studio" className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto">
      <SectionHeader
        badge="04 // Creative Studio"
        badgeColor="orange"
        title="Galerie Graphique, Branding &amp; 3D"
        subtitle="Un laboratoire visuel dédié aux compositions éditoriales Photoshop, aux affiches publicitaires grand format et aux expérimentations cinétiques."
      />

      {/* Filter Buttons */}
      <div className="flex flex-wrap items-center justify-start gap-2 mb-10">
        {galleryCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-heading font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-[#FF7138] text-[#080A0E] font-bold shadow-lg shadow-[#FF7138]/20'
                  : 'bg-[#121721] text-[#969DA8] hover:text-[#F2F1ED] hover:bg-[#1A2230] border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Gallery Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <AnimatePresence>
          {filteredItems.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={onOpenLightbox}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Studio Philosophy Note */}
      <div className="mt-12 p-6 rounded-2xl glass-panel bg-[#0F141C] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#C5A16A]/10 text-[#C5A16A] flex items-center justify-center shrink-0">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-sm text-[#F2F1ED]">
              Standards Professionnels de Production
            </h4>
            <p className="text-xs text-[#969DA8]">
              Respect scrupuleux des profils colorimétriques RVB/CMJN, résolutions 300 ppp pour l'impression, et intégration vidéo ProRes/WebM.
            </p>
          </div>
        </div>

        <span className="text-[11px] font-mono text-[#C5A16A] whitespace-nowrap px-3 py-1.5 rounded-lg bg-[#18212D] border border-[#C5A16A]/20">
          6 Créations Répertoriées
        </span>
      </div>
    </section>
  );
}
