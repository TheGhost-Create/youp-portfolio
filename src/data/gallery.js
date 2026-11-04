/**
 * Galerie créative indépendante — Creative Studio
 * Présente les réalisations en Graphic Design, Posters, Branding, Social Media, Motion Design et 3D
 */

export const galleryCategories = [
  { id: "all", label: "Toutes les créations" },
  { id: "graphic-design", label: "Graphic Design" },
  { id: "posters", label: "Affiches & Posters" },
  { id: "branding", label: "Branding & Identité" },
  { id: "social-media", label: "Social Media" },
  { id: "motion-design", label: "Motion Design" },
  { id: "3d-experiments", label: "3D Experiments" }
];

export const galleryItems = [
  {
    id: "g-01",
    title: "KEYCE — Affiche Inscriptions 2024/2025",
    category: "posters",
    categoryLabel: "Affiches & Posters",
    secondaryCategory: "graphic-design",
    type: "image",
    mediaUrl: "/images/projects/keyce/keyce-poster-square.png",
    fullUrl: "/images/projects/keyce/keyce-poster-full.png",
    format: "1080 × 1080 px (Carré)",
    client: "Keyce Informatique",
    year: "2024",
    tools: ["Adobe Photoshop", "Camera Raw"],
    description: "Conception graphique complète de l'affiche officielle des inscriptions académiques 2024/2025 pour KEYCE Informatique. Intégration photographique, hiérarchisation de l'information et harmonisation chromatique bleu profond et orange.",
    aspect: "square"
  },
  {
    id: "g-02",
    title: "DIGITARA ACADEMY — Design · Branding · Digital",
    category: "graphic-design",
    categoryLabel: "Graphic Design",
    secondaryCategory: "social-media",
    type: "image",
    mediaUrl: "/images/gallery/digitara-flyer.png",
    fullUrl: "/images/gallery/digitara-flyer.png",
    format: "Flyer A4 / Social Media",
    client: "Digitara Academy",
    year: "2024",
    tools: ["Adobe Photoshop", "Typographie Éditoriale"],
    description: "Flyer publicitaire haut de gamme valorisant les services de branding, création de logos, cartes de visite et sites web. Palette sombre or/bleu profond, mise en page épurée et intégration de QR Code interactif.",
    aspect: "portrait"
  },
  {
    id: "g-03",
    title: "Vantaj CardLink — Identité de Marque & Logo",
    category: "branding",
    categoryLabel: "Branding & Identité",
    secondaryCategory: "graphic-design",
    type: "image",
    mediaUrl: "/images/projects/digital-card/vantaj-cardlink.png",
    fullUrl: "/images/projects/digital-card/vantaj-cardlink.png",
    format: "Vector Logo / Master Brand",
    client: "Vantaj Digital",
    year: "2024",
    tools: ["Adobe Photoshop", "Conception Vectorielle"],
    description: "Création du logotype et de la signature graphique pour la plateforme de carte de visite connectée Vantaj CardLink. Symbolique des maillons de connexion et de la puce à contact sécurisée.",
    aspect: "landscape"
  },
  {
    id: "g-04",
    title: "Unity 3D — Scène Interactive & Environnement",
    category: "3d-experiments",
    categoryLabel: "3D Experiments",
    secondaryCategory: "motion-design",
    type: "image",
    mediaUrl: "/images/gallery/unity-3d-scene.png",
    fullUrl: "/images/gallery/unity-3d-scene.png",
    format: "1920 × 1080 px (Temps Réel)",
    client: "Projet Académique Keyce B2",
    year: "2024",
    tools: ["Unity 3D (URP)", "Mixamo", "Shader Graph"],
    description: "Conception d'une scène 3D interactive sous Unity URP avec terrain texturé, murs texturés brique, intégration d'avatar humanoïde Mixamo et contrôleur tiers-personne.",
    aspect: "landscape"
  },
  {
    id: "g-05",
    title: "GBCAM SARL — Direction Visuelle & Patrimoine",
    category: "branding",
    categoryLabel: "Branding & Identité",
    secondaryCategory: "posters",
    type: "image",
    mediaUrl: "/images/projects/gbcam/gbcam-real-home.png",
    fullUrl: "/images/projects/gbcam/gbcam-real-home.png",
    format: "Photographie & Compositions",
    client: "GBCAM SARL",
    year: "2024",
    tools: ["Adobe Photoshop", "Retouche Colorimétrique"],
    description: "Direction visuelle et traitement photographique pour la filière d'exportation de cacao et café au Cameroun. Mise en scène de l'excellence agro-industrielle.",
    aspect: "landscape"
  },
  {
    id: "g-06",
    title: "Brand Motion — Étude Cinétique de Logo",
    category: "motion-design",
    categoryLabel: "Motion Design",
    secondaryCategory: "3d-experiments",
    type: "video",
    mediaUrl: "/images/projects/motion-design/motion-cover.svg",
    fullUrl: "/images/projects/motion-design/motion-storyboard.svg",
    videoUrl: "/images/projects/motion-design/plr-video.mp4",
    format: "Animation 4K (15–30s)",
    client: "Recherche Personnelle",
    year: "2024",
    tools: ["Adobe After Effects", "Blender", "Premiere Pro"],
    description: "Recherche en typographie cinétique, décomposition géométrique et révélation de marque par jeu de lumière volumétrique.",
    aspect: "landscape"
  }
];
