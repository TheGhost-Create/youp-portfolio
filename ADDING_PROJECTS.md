# Guide de Gestion et d'Ajout des Projets — Portfolio de YOUP-YOUP SOTER AUTON
**Digital Engineer** — Architecture modulaire & centralisée

Ce document explique pas-à-pas comment faire évoluer votre portfolio sans toucher aux composants d'affichage ni risquer de casser le design.

---

## 1. Vue d'Ensemble de l'Architecture des Données

Toutes les données du site sont strictement découplées de l'interface et regroupées dans le répertoire `src/data/` :

```
src/data/
├── profile.js    # Coordonnées, bio, statut de disponibilité, formation académique
├── skills.js     # Les 4 pôles d'expertise, niveaux de maîtrise et bonnes pratiques
├── projects.js   # Registre centralisé des 5 projets phares (Selected Work)
└── gallery.js    # Créations du Creative Studio (Print, Branding, 3D, Motion)
```

Les images et médias sont stockés dans le dossier public :
```
public/
└── images/
    ├── profile/             # Votre portrait professionnel
    ├── projects/
    │   ├── gbcam/           # Photos et logos GBCAM
    │   ├── monitor-pro/     # Schémas et visuels de télémétrie
    │   ├── digital-card/    # Logo et mockups Vantaj CardLink
    │   ├── keyce/           # Affiches Photoshop (carré et pleine résolution)
    │   └── motion-design/   # Storyboards et visuels Brand Motion
    └── gallery/             # Créations additionnelles (Digitara, Unity 3D, etc.)
```

---

## 2. Structure Standard d'un Projet (`src/data/projects.js`)

Chaque projet est un objet JavaScript respectant rigoureusement le schéma suivant :

```javascript
{
  id: "nom-unique-du-projet",            // Identifiant unique (kebab-case)
  order: "06",                           // Numéro d'affichage sur la carte (ex: 01, 02...)
  title: "NOM DU PROJET",                 // Titre principal
  subtitle: "Sous-titre explicatif",      // Catégorie précise ou baseline
  category: "Web Development",            // Catégorie lisible affichée sur le badge
  categorySlug: "web-dev",                // Filtre ("web-dev" | "cybersecurity" | "graphic-design" | "motion-design")
  status: "En production / Déployé",      // Texte du statut
  statusType: "live",                     // "live" (vert) | "completed" (gris/or) | "concept" (ambre)
  featured: true,                         // true pour figurer sur la page d'accueil
  coverImage: "/images/projects/mon-projet/cover.jpg", // Image de couverture principale
  fullImage: null,                        // URL si une affiche grand format peut être zoomée (ex: Keyce)
  logoImage: null,                        // Logo optionnel
  accentColor: "#C5A16A",                 // Couleur dominante ("#C5A16A" ou "#FF7138")
  projectUrl: "https://mon-site.vercel.app/", // Lien vers le site en ligne (ou null)
  githubUrl: "https://github.com/...",    // Lien GitHub (ou null)
  videoUrl: null,                         // Lien vers vidéo MP4/WebM ou embed (ou null)

  summary: "Description synthétique de 2 à 3 phrases pour la carte du projet...",
  context: "Explication détaillée de la problématique et des objectifs pour la modale...",

  highlights: [
    "Caractéristique clé 1",
    "Caractéristique clé 2",
    "Performance ou protocole mis en place"
  ],

  technologies: ["React", "Python", "Tailwind CSS", "Linux"],

  contributions: [
    "Ce que Youp-Youp Soter Auton a concrètement conçu et développé",
    "Intégration d'APIs ou sécurisation de l'infrastructure"
  ],

  gallery: [
    {
      url: "/images/projects/mon-projet/capture1.jpg",
      caption: "Description de la capture",
      tag: "Interface"
    }
  ]
}
```

---

## 3. Guide Pas-à-Pas des Opérations Fréquentes

### A. Ajouter un nouveau projet phare (Selected Work)

1. **Placer vos images** :
   - Créez un nouveau dossier dans `public/images/projects/` (ex: `public/images/projects/mon-projet/`).
   - Déposez votre image de couverture (`cover.jpg`) et vos captures d'écran.
2. **Déclarer le projet** :
   - Ouvrez le fichier `src/data/projects.js`.
   - Ajoutez votre nouvel objet projet à la fin du tableau `projectsData`.
3. **Tester** :
   - Le projet apparaît automatiquement dans la section **Selected Work**, avec sa carte animée, ses filtres de catégorie et sa modale détaillée.

### B. Ajouter une affiche ou une création dans le Creative Studio

1. **Placer le fichier image ou vidéo** dans `public/images/gallery/`.
2. Ouvrez `src/data/gallery.js`.
3. Ajoutez un élément dans le tableau `galleryItems` :
   ```javascript
   {
     id: "g-07",
     title: "Nouveau Poster Publicitaire",
     category: "posters", // 'graphic-design' | 'posters' | 'branding' | 'social-media' | 'motion-design' | '3d-experiments'
     categoryLabel: "Affiches & Posters",
     type: "image",
     mediaUrl: "/images/gallery/mon-affiche.png",
     fullUrl: "/images/gallery/mon-affiche.png",
     format: "1080 × 1080 px",
     client: "Client ou Projet",
     year: "2025",
     tools: ["Adobe Photoshop", "Illustrator"],
     description: "Description de la composition et des choix typographiques...",
     aspect: "square"
   }
   ```
4. L'élément s'intègre immédiatement dans la galerie avec filtrage instantané et visionneuse plein écran Lightbox.

### C. Ajouter une vidéo à un projet ou à Brand Motion

1. Déposez votre fichier vidéo MP4 ou WebM dans `public/videos/` (ex: `public/videos/brand-motion.mp4`).
2. Dans `src/data/projects.js`, pour le projet `brand-motion`, renseignez la propriété :
   ```javascript
   videoUrl: "/videos/brand-motion.mp4",
   ```
3. La fiche projet affichera automatiquement le lecteur vidéo natif.

### D. Modifier la description ou le statut d'un projet

- Pour passer un projet de l'état conceptuel à en production, modifiez simplement dans `src/data/projects.js` :
  ```javascript
  status: "En production / Déployé",
  statusType: "live", // Le badge devient vert avec pulsation en temps réel
  projectUrl: "https://votre-url-definitive.vercel.app/"
  ```

### E. Retirer temporairement un projet du portfolio

- Deux options simples :
  1. Passez `featured: false` pour le masquer de la sélection principale.
  2. Ou commentez le bloc du projet avec `/* ... */` dans `src/data/projects.js`.

---

## 4. Ajout d'un Nouveau Domaine d'Expertise ou d'une Catégorie Créative

### Ajouter une compétence ou un nouveau pôle dans `src/data/skills.js` :
Ajoutez un objet dans le tableau `skillsData` avec ses compétences et niveaux réels. La grille interactive s'adapte automatiquement sans modifier `Expertise.jsx`.

### Ajouter une catégorie dans le Creative Studio :
Dans `src/data/gallery.js`, ajoutez votre nouvelle catégorie dans `galleryCategories` :
```javascript
{ id: "ui-ux", label: "UI / UX Design" }
```
Les boutons de filtre se généreront automatiquement.

---

## 5. Commandes Utiles pour Travailler Localement

Sous Windows avec Visual Studio Code et PowerShell :

- **Démarrage en mode développement** :
  ```powershell
  npm.cmd run dev
  ```
  Accédez à l'adresse indiquée (ex: `http://localhost:5173`).

- **Vérification de la compilation de production** :
  ```powershell
  npm.cmd run build
  ```

- **Aperçu du build local** :
  ```powershell
  npm.cmd run preview
  ```
