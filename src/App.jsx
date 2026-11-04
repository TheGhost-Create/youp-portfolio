import React, { useState } from 'react';
import LightboxModal from './components/gallery/LightboxModal';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import { galleryItems } from './data/gallery';
import About from './sections/About';
import Contact from './sections/Contact';
import CreativeStudio from './sections/CreativeStudio';
import Expertise from './sections/Expertise';
import Hero from './sections/Hero';
import SelectedWork from './sections/SelectedWork';

export default function App() {
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    item: null,
    items: galleryItems
  });

  const openLightbox = (item, customItems = galleryItems) => {
    setLightboxState({
      isOpen: true,
      item,
      items: customItems
    });
  };

  const closeLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  const handleLightboxNavigate = (direction) => {
    const { item, items } = lightboxState;
    if (!item || !items.length) return;
    const currentIndex = items.findIndex((i) => i.id === item.id);
    let nextIndex = currentIndex + direction;
    if (nextIndex < 0) nextIndex = items.length - 1;
    if (nextIndex >= items.length) nextIndex = 0;
    setLightboxState((prev) => ({ ...prev, item: items[nextIndex] }));
  };

  // Permet de zoomer sur n'importe quelle image (affiche Keyce ou autre)
  const handleZoomImage = (imageUrl, title) => {
    openLightbox({
      id: 'zoom-' + Date.now(),
      title: title || 'Agrandissement Visuel',
      categoryLabel: 'Aperçu Haute Définition',
      mediaUrl: imageUrl,
      fullUrl: imageUrl,
      tools: ['Haute Résolution']
    }, [{
      id: 'zoom-' + Date.now(),
      title: title || 'Agrandissement Visuel',
      categoryLabel: 'Aperçu Haute Définition',
      mediaUrl: imageUrl,
      fullUrl: imageUrl,
      tools: ['Haute Résolution']
    }]);
  };

  return (
    <div className="min-h-screen bg-[#080A0E] text-[#F2F1ED] font-sans antialiased selection:bg-[#C5A16A]/30 selection:text-[#F2F1ED] relative overflow-x-hidden">
      {/* Editorial Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Expertise />
        <SelectedWork onZoomImage={handleZoomImage} />
        <CreativeStudio onOpenLightbox={(item) => openLightbox(item, galleryItems)} />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Lightbox Viewer for Images & Posters */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        item={lightboxState.item}
        items={lightboxState.items}
        onClose={closeLightbox}
        onNavigate={handleLightboxNavigate}
      />
    </div>
  );
}
