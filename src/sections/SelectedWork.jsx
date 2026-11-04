import { AnimatePresence, motion } from 'framer-motion';
import {
  Filter,
  FolderGit2,
  Layers,
  Sparkles
} from 'lucide-react';
import React, { useState } from 'react';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectModal from '../components/projects/ProjectModal';
import Badge from '../components/ui/Badge';
import SectionHeader from '../components/ui/SectionHeader';
import { projectsData } from '../data/projects';

const filterCategories = [
  { id: 'all', label: 'Tous les projets' },
  { id: 'web-dev', label: 'Web & Applications' },
  { id: 'cybersecurity', label: 'Cybersécurité & Python' },
  { id: 'graphic-design', label: 'Graphic Design' },
  { id: 'motion-design', label: 'Motion Design' }
];

export default function SelectedWork({ onZoomImage }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = selectedFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.categorySlug === selectedFilter);

  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto">
      <SectionHeader
        badge="03 // Selected Work"
        badgeColor="gold"
        title="Réalisations &amp; Projets Techniques"
        subtitle="Grandes compositions interactives alliant architecture logicielle, supervision système et création graphique."
      />

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-start gap-2 mb-12">
        {filterCategories.map((cat) => {
          const isActive = selectedFilter === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-heading font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-[#C5A16A] text-[#080A0E] font-bold shadow-lg shadow-[#C5A16A]/20'
                  : 'bg-[#131922] text-[#969DA8] hover:text-[#F2F1ED] hover:bg-[#1A2230] border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenDetails={(p) => setActiveProject(p)}
            onZoomImage={onZoomImage}
          />
        ))}
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeProject}
        isOpen={!!activeProject}
        onClose={() => setActiveProject(null)}
        onZoomImage={onZoomImage}
      />
    </section>
  );
}
