import { motion } from 'framer-motion';
import {
  Boxes,
  CheckCircle2,
  Code2,
  Cpu,
  Layers,
  Palette,
  ShieldAlert,
  Sparkles
} from 'lucide-react';
import React, { useState } from 'react';
import Badge from '../components/ui/Badge';
import SectionHeader from '../components/ui/SectionHeader';
import { skillsData } from '../data/skills';

const iconMap = {
  Code2: Code2,
  ShieldAlert: ShieldAlert,
  Palette: Palette,
  Boxes: Boxes
};

export default function Expertise() {
  const [activeDomain, setActiveDomain] = useState(skillsData[0].id);

  const currentDomain = skillsData.find((d) => d.id === activeDomain) || skillsData[0];
  const IconComponent = iconMap[currentDomain.iconName] || Code2;
  const isOrange = currentDomain.category === 'CYBERSECURITY & SYSTEMS' || currentDomain.category === 'MOTION DESIGN & 3D';

  return (
    <section id="expertise" className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto">
      <SectionHeader
        badge="02 // Pôles d'Expertise"
        badgeColor="orange"
        title="Quatre Domaines d'Intervention Complémentaires"
        subtitle="De l'infrastructure système au raffinement graphique, chaque domaine est cultivé avec méthode et rigueur."
      />

      {/* 4 Interactive Domain Navigation Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
        {skillsData.map((domain) => {
          const Icon = iconMap[domain.iconName] || Code2;
          const isSelected = activeDomain === domain.id;
          return (
            <button
              key={domain.id}
              onClick={() => setActiveDomain(domain.id)}
              className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 flex flex-col justify-between border ${
                isSelected
                  ? 'bg-[#151C28] border-[#C5A16A] shadow-xl shadow-[#C5A16A]/10 scale-[1.02]'
                  : 'bg-[#10151E]/80 border-white/5 hover:border-white/20 hover:bg-[#131924]'
              }`}
            >
              <div className="flex items-center justify-between w-full mb-3">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                    isSelected
                      ? 'bg-[#C5A16A] text-[#080A0E]'
                      : 'bg-[#18212E] text-[#969DA8]'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono text-[#969DA8] uppercase">
                  {domain.badge}
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-[#C5A16A] tracking-wider block">
                  {domain.category}
                </span>
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#F2F1ED] mt-0.5 line-clamp-1">
                  {domain.title}
                </h3>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed Domain Showcase Panel */}
      <motion.div
        key={currentDomain.id}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl glass-panel bg-[#111620] border border-white/10 p-6 sm:p-10 shadow-2xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Domain Description & Best Practices */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant={isOrange ? 'orange' : 'gold'} size="xs">
                  {currentDomain.category}
                </Badge>
                <span className="text-xs font-mono text-[#969DA8]">{currentDomain.badge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#F2F1ED]">
                {currentDomain.title}
              </h3>
              <p className="mt-3 text-sm text-[#969DA8] leading-relaxed">
                {currentDomain.description}
              </p>
            </div>

            {/* Practices list */}
            <div className="p-5 rounded-2xl bg-[#0E131A] border border-white/5 space-y-3">
              <span className="text-xs font-mono text-[#C5A16A] uppercase tracking-wider block">
                // Méthodologie &amp; Bonnes Pratiques
              </span>
              <div className="space-y-2">
                {currentDomain.practices.map((practice, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs text-[#F2F1ED]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A16A] shrink-0 mt-0.5" />
                    <span>{practice}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Concrete Skills with Levels */}
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono text-[#969DA8] uppercase tracking-wider block text-left">
              // Compétences &amp; Outils
            </span>

            <div className="space-y-3">
              {currentDomain.skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl bg-[#141A25] border border-white/5 hover:border-white/15 transition-all text-left"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-heading font-bold text-sm text-[#F2F1ED]">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1E2736] text-[#969DA8]">
                        {skill.tag}
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
