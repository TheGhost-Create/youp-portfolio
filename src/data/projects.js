/**
 * Registre centralisé des projets phares — YOUP-YOUP SOTER AUTON
 * Conçu pour être étendu facilement selon le guide ADDING_PROJECTS.md
 */

export const projectsData = [
  {
    id: "gbcam-sarl",
    order: "01",
    title: "GBCAM SARL",
    subtitle: "Site Institutionnel d'Exportation Cacao & Café",
    category: "Web Development",
    categorySlug: "web-dev",
    status: "En production / Déployé",
    statusType: "live", // "live" | "completed" | "concept" | "in-progress"
    featured: true,
    coverImage: "/images/projects/gbcam/gbcam-real-home.png",
    logoImage: "/images/projects/gbcam/gbcam-logo.jpg",
    accentColor: "#C5A16A",
    projectUrl: "https://gbcam-site.vercel.app/",
    githubUrl: null,
    videoUrl: null,

    summary: "Conception et développement du site institutionnel d'une entreprise agro-industrielle camerounaise d'envergure, spécialisée dans l'achat, l'usinage et l'exportation internationale de fèves de cacao et de café de qualité supérieure.",

    context: "GBCAM SARL souhaitait moderniser son empreinte digitale pour asseoir sa crédibilité auprès des partenaires d'importation internationaux en Europe et en Asie, tout en valorisant la traçabilité de ses filières locales et ses infrastructures de séchage et stockage.",

    highlights: [
      "Architecture éditoriale valorisant la filière cacaoyère et caféière camerounaise",
      "Identité visuelle sobre, robuste et haut de gamme aux teintes naturelles",
      "Parcours utilisateur optimisé : présentation des activités, infrastructures et gouvernance",
      "Performance de chargement exemplaire et adaptation responsive multi-écrans",
      "Mise en avant des normes internationales de contrôle qualité et de conditionnement"
    ],

    technologies: ["HTML5 Sémantique", "CSS3 Moderne", "JavaScript", "Responsive Design", "Vercel CI/CD"],

    contributions: [
      "Direction artistique et structuration ergonomique du site",
      "Intégration HTML/CSS/JS modulaire et responsive",
      "Traitement et optimisation du corpus photographique réel des plantations et entrepôts",
      "Déploiement et tests de résilience sur Vercel"
    ],

    gallery: [
      {
        url: "/images/projects/gbcam/gbcam-real-home.png",
        caption: "Capture réelle de la page d'accueil de la plateforme GBCAM SARL",
        tag: "Site en Ligne"
      },
      {
        url: "/images/projects/gbcam/gbcam-hero.jpg",
        caption: "Mise en valeur de la filière et de la récolte de cacao",
        tag: "Filières"
      },
      {
        url: "/images/projects/gbcam/gbcam-warehouse.jpg",
        caption: "Infrastructures de stockage et logistique d'exportation",
        tag: "Infrastructures"
      }
    ]
  },

  {
    id: "monitor-pro",
    order: "02",
    title: "MONITOR_PRO",
    subtitle: "Système de Télémétrie Système, Réseau & Gestionnaire d'Alertes",
    category: "Python / Linux / Cybersecurity",
    categorySlug: "cybersecurity",
    status: "Projet Terminé & Fonctionnel",
    statusType: "completed",
    featured: true,
    coverImage: "/images/projects/monitor-pro/monitor-pro-real-dashboard.png",
    logoImage: null,
    accentColor: "#FF7138",
    projectUrl: null,
    githubUrl: "https://github.com/TheGhost-Create",
    videoUrl: null,

    summary: "Suite logicielle développée en Python pour la supervision approfondie de parcs de serveurs Linux. Le système surveille en temps réel l'utilisation des ressources CPU/RAM/Disque, trace les processus suspects, cartographie les connexions réseau et déclenche des alertes configurables.",

    context: "Face aux besoins critiques d'administration des serveurs sous Debian/Kali Linux et de supervision réseau sans dépendance lourde à des outils tiers propriétaires, MONITOR_PRO a été conçu pour offrir une visibilité instantanée et sans concession sur l'état de la machine.",

    highlights: [
      "Surveillance multi-niveaux : CPU par cœur, RAM physique/swap, disques et I/O",
      "Cartographie dynamique des processus et corrélation automatique avec les ports d'écoute",
      "Scanner de vulnérabilités et détection des sockets ouverts non autorisés",
      "Gestionnaire d'alertes par seuils critiques (consommation anormale, saturation réseau)",
      "Double interface : dashboard console terminal enrichi avec Rich et module serveur"
    ],

    technologies: ["Python 3", "Linux (Debian / Kali)", "psutil", "Rich (CLI Engine)", "Sockets & Réseaux TCP", "Threading"],

    contributions: [
      "Conception du moteur de collecte de télémétrie asynchrone (system_monitor.py)",
      "Développement de l'analyseur de processus et du mappeur de ports (process_port_mapper.py)",
      "Implémentation du gestionnaire d'alertes et de notifications seuils (alert_manager.py)",
      "Architecture serveur de consolidation de données (monitor_server.py)"
    ],

    gallery: [
      {
        url: "/images/projects/monitor-pro/monitor-pro-real-dashboard.png",
        caption: "Capture réelle du tableau de bord de surveillance Linux cisco@labvm:~/monitor_pro",
        tag: "Console Réelle"
      },
      {
        url: "/images/projects/monitor-pro/monitor-pro-dashboard.svg",
        caption: "Architecture modulaire de la console de supervision MONITOR_PRO",
        tag: "Architecture"
      },
      {
        url: "/images/projects/monitor-pro/monitor-pro-telemetry.svg",
        caption: "Tableau de bord de télémétrie et indicateurs d'intégrité système",
        tag: "Supervision"
      }
    ]
  },

  {
    id: "digital-business-card",
    order: "03",
    title: "DIGITAL BUSINESS CARD",
    subtitle: "Plateforme de Cartes de Visite Électroniques — Vantaj CardLink",
    category: "Web Application",
    categorySlug: "web-dev",
    status: "En production / Déployé",
    statusType: "live",
    featured: true,
    coverImage: "/images/projects/digital-card/vantaj-cardlink-app.png",
    logoImage: "/images/projects/digital-card/vantaj-cardlink.png",
    accentColor: "#C5A16A",
    projectUrl: "https://carte-de-visite-electronique.vercel.app/",
    githubUrl: null,
    videoUrl: null,

    summary: "Application web interactive permettant la création, la personnalisation et le partage instantané de cartes de visite professionnelles dématérialisées. Conçue pour fluidifier le networking moderne via QR code dynamique et synchronisation multi-terminaux.",

    context: "Remplacer la carte papier traditionnelle par une expérience numérique élégante, interactive, instantanément actualisable et respectueuse de l'environnement, dotée d'une interface de studio complète (Vantaj CardLink).",

    highlights: [
      "Génération et partage instantané de coordonnées professionnelles via QR Code",
      "Interface studio de personnalisation graphique en temps réel (Vantaj Studio)",
      "Rendu adaptatif haute fidélité optimisé pour smartphone et ordinateur",
      "Boutons d'action directs : appel, envoi d'email, profil social et enregistrement contact vCard",
      "Zéro friction : consultation instantanée sans obligation d'installer une application"
    ],

    technologies: ["React", "Vite", "JavaScript", "Tailwind CSS", "QR Code Engine", "Vercel"],

    contributions: [
      "Direction artistique, logo et design de l'expérience utilisateur",
      "Développement de la logique d'interactivité et des animations de cartes",
      "Intégration des connecteurs de contact directs et génération dynamique",
      "Déploiement continu et optimisation des performances"
    ],

    gallery: [
      {
        url: "/images/projects/digital-card/vantaj-cardlink-app.png",
        caption: "Capture réelle de l'interface studio de création et personnalisation des cartes numériques Vantaj",
        tag: "Studio en Ligne"
      },
      {
        url: "/images/projects/digital-card/vantaj-cardlink.png",
        caption: "Identité visuelle officielle Vantaj CardLink",
        tag: "Branding"
      },
      {
        url: "/images/projects/digital-card/card-mockup.svg",
        caption: "Mockup de la carte de visite virtuelle sur smartphone et desktop",
        tag: "Mockup"
      }
    ]
  },

  {
    id: "keyce-graphic-design",
    order: "04",
    title: "KEYCE GRAPHIC DESIGN",
    subtitle: "Campagne Publicitaire & Affiche Institutionnelle 2024/2025",
    category: "Graphic Design / Adobe Photoshop",
    categorySlug: "graphic-design",
    status: "Projet Réalisé & Validé",
    statusType: "completed",
    featured: true,
    coverImage: "/images/projects/keyce/keyce-poster-square.png",
    fullImage: "/images/projects/keyce/keyce-poster-full.png",
    logoImage: null,
    accentColor: "#FF7138",
    projectUrl: null,
    githubUrl: null,
    videoUrl: null,

    summary: "Conception graphique d'une affiche publicitaire carrée (1080×1080 px) à fort impact visuel, réalisée sous Adobe Photoshop pour la campagne officielle des inscriptions académiques de KEYCE Informatique (École Supérieure Française).",

    context: "Projet d'examen et de communication institutionnelle exigeant le respect strict des normes de conception graphique pour les réseaux sociaux et l'impression haute qualité (résolution 300 ppp, marges de sécurité 80 px, colorimétrie RVB, équilibre texte/image).",

    highlights: [
      "Respect rigoureux des contraintes techniques professionnelles (1080×1080 px, 300 ppp)",
      "Hiérarchie typographique percutante guidant naturellement la lecture de l'offre académique",
      "Détourage précis et intégration photographique harmonieuse de l'étudiante ambassadrice",
      "Palette de couleurs institutionnelle équilibrée : bleu profond, orange stimulant et blanc pur",
      "Mise en valeur claire des pièces à fournir et des coordonnées des 4 campus (Yaoundé, Douala, Bafoussam, Garoua)"
    ],

    technologies: ["Adobe Photoshop", "Composition Graphique", "Retouche & Détourage", "Typographie Éditoriale", "Normes Print & Social Media"],

    contributions: [
      "Direction artistique globale et conception du layout de l'affiche",
      "Détourage chirurgical et étalonnage chromatique de la photographie principale",
      "Structuration des niveaux de lecture et call-to-action percutant ('Rejoignez-nous')",
      "Intégration des éléments de réassurance (labels d'excellence, réseaux sociaux, campus)"
    ],

    gallery: [
      {
        url: "/images/projects/keyce/keyce-poster-square.png",
        caption: "Affiche publicitaire carrée finalisée (Keyce Informatique)",
        tag: "Création Print / Social"
      },
      {
        url: "/images/projects/keyce/keyce-poster-full.png",
        caption: "Document de travail et environnement Photoshop",
        tag: "Production Photoshop"
      }
    ]
  },

  {
    id: "brand-motion",
    order: "05",
    title: "BRAND MOTION",
    subtitle: "Étude Cinétique de Marque & Animation de Logo (15–30s)",
    category: "Motion Design",
    categorySlug: "motion-design",
    status: "Concept & En développement",
    statusType: "concept",
    featured: true,
    coverImage: "/images/projects/motion-design/motion-cover.svg",
    logoImage: null,
    accentColor: "#C5A16A",
    projectUrl: null,
    githubUrl: null,
    videoUrl: "/images/projects/motion-design/plr-video.mp4",

    summary: "Projet de démonstration de motion design explorant l'identité d'une marque technologique de pointe à travers l'animation de logo, la typographie cinétique, les micro-transitions dynamiques et les effets de distorsion géométrique sur un format de 15 à 30 secondes.",

    context: "Démontrer la maîtrise du rythme, du timing et de la mise en valeur des univers de marque numériques. Ce projet est présenté en toute transparence avec son concept, son storyboard et son lecteur prêt pour l'intégration de la vidéo finale.",

    highlights: [
      "Concept articulé autour de la transition entre rigueur d'ingénierie et fluidité créative",
      "Animation de logo avec révélation par tracé vectoriel et particules lumineuses",
      "Typographie cinétique rythmée sur une cadence sonore futuriste",
      "Étude approfondie des courbes de vitesse (easing) pour un rendu cinématographique",
      "Emplacements prévus pour fichiers vidéo MP4 et WebM haute définition"
    ],

    technologies: ["Adobe After Effects", "Motion Typography", "Vector Animation", "Blender (Notions 3D)", "Adobe Premiere Pro"],

    contributions: [
      "Définition du concept narratif et du moodboard cinétique",
      "Conception du storyboard et des clés d'animation",
      "Recherche stylistique sur la distorsion lumineuse et le glitch maîtrisé",
      "Préparation de l'architecture d'intégration multimédia dans le portfolio"
    ],

    gallery: [
      {
        url: "/images/projects/motion-design/motion-storyboard.svg",
        caption: "Storyboard conceptuel et séquençage temporel de l'animation",
        tag: "Storyboard"
      },
      {
        url: "/images/projects/motion-design/motion-cover.svg",
        caption: "Aperçu visuel de la composition cinétique Brand Motion",
        tag: "Motion Study"
      }
    ]
  }
];
