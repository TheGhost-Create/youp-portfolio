import React from 'react';

export default function SectionHeader({
  badge,
  badgeColor = "gold", // "gold" | "orange"
  title,
  subtitle,
  align = "left", // "left" | "center"
  className = ""
}) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center' : 'text-left'} ${className}`}>
      {/* Badge éditorial */}
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase mb-4 glass-panel ${
          badgeColor === "orange"
            ? "border-[#FF7138]/30 text-[#FF7138]"
            : "border-[#C5A16A]/30 text-[#C5A16A]"
        }`}>
          <span className={`w-1.5 h-1.5 rounded-full ${badgeColor === "orange" ? "bg-[#FF7138]" : "bg-[#C5A16A]"}`} />
          {badge}
        </div>
      )}

      {/* Titre imposant Space Grotesk */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F2F1ED] font-heading leading-tight">
        {title}
      </h2>

      {/* Sous-titre ou chapô éditorial */}
      {subtitle && (
        <p className={`mt-4 text-[#969DA8] text-base sm:text-lg max-w-2xl leading-relaxed ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}

      {/* Accent Line */}
      <div className={`mt-6 h-[2px] w-16 bg-gradient-to-r ${
        badgeColor === "orange"
          ? "from-[#FF7138] to-transparent"
          : "from-[#C5A16A] to-transparent"
      } ${isCenter ? 'mx-auto' : ''}`} />
    </div>
  );
}
