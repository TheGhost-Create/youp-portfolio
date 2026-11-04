import React from 'react';

/**
 * Solution de remplacement élégante si WebGL n'est pas supporté
 * ou si l'utilisateur a activé prefers-reduced-motion.
 */
export default function Fallback3D() {
  return (
    <div className="relative w-full h-full flex items-center justify-center pointer-events-none select-none">
      <div className="relative w-72 h-72 sm:w-96 sm:h-96">
        {/* Glow Halo */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF7138]/20 via-[#C5A16A]/15 to-transparent blur-3xl animate-pulse" />

        {/* Nested Geometric Rings (CSS SVG) */}
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full animate-[spin_40s_linear_infinite]"
        >
          <circle
            cx="200"
            cy="200"
            r="160"
            fill="none"
            stroke="#232B38"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />
          <circle
            cx="200"
            cy="200"
            r="120"
            fill="none"
            stroke="#C5A16A"
            strokeWidth="2"
            strokeDasharray="40 20"
            opacity="0.7"
          />
          <circle
            cx="200"
            cy="200"
            r="80"
            fill="none"
            stroke="#FF7138"
            strokeWidth="1.5"
            strokeDasharray="15 10"
            opacity="0.8"
          />
          {/* Central Polygon */}
          <polygon
            points="200,140 250,230 150,230"
            fill="none"
            stroke="#F2F1ED"
            strokeWidth="2"
            opacity="0.9"
          />
          <polygon
            points="200,260 150,170 250,170"
            fill="none"
            stroke="#C5A16A"
            strokeWidth="1.5"
            opacity="0.5"
          />
          <circle cx="200" cy="200" r="6" fill="#FF7138" />
        </svg>

        {/* Tech Monogram badge */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-4 py-2 rounded-full glass-panel border border-[#C5A16A]/30 text-xs font-mono tracking-widest text-[#C5A16A]">
            DIGITAL CORE
          </div>
        </div>
      </div>
    </div>
  );
}
