import React from 'react';

export default function Badge({
  children,
  variant = "subtle", // "subtle" | "gold" | "orange" | "outline" | "success"
  size = "sm",        // "xs" | "sm" | "md"
  className = ""
}) {
  const sizeClasses = {
    xs: "px-2 py-0.5 text-[10px]",
    sm: "px-2.5 py-1 text-xs",
    md: "px-3 py-1.5 text-xs sm:text-sm"
  };

  const variantClasses = {
    subtle: "bg-[#1A222D]/80 text-[#969DA8] border border-white/5",
    gold: "bg-[#C5A16A]/10 text-[#C5A16A] border border-[#C5A16A]/30",
    orange: "bg-[#FF7138]/10 text-[#FF7138] border border-[#FF7138]/30",
    outline: "bg-transparent text-[#F2F1ED] border border-white/10 hover:border-white/20",
    success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md font-mono tracking-wide ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
