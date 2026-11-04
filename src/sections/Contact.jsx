import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';
import {
  Check,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles
} from 'lucide-react';
import React, { useState } from 'react';
import Badge from '../components/ui/Badge';
import { GithubIcon, LinkedinIcon } from '../components/ui/Icons';
import SectionHeader from '../components/ui/SectionHeader';
import { profileData } from '../data/profile';

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#C5A16A', '#FF7138', '#F2F1ED']
      });
    } catch {
      // Fallback si canvas non disponible
    }

    const mailtoLink = `mailto:${profileData.contact.email}?subject=${encodeURIComponent(
      `[Contact Portfolio] ${formData.subject || 'Nouveau message'}`
    )}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.open(mailtoLink, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-8 max-w-7xl mx-auto">
      <SectionHeader
        badge="05 // Collaboration & Contact"
        badgeColor="gold"
        title="Démarrons une Collaboration"
        subtitle="Disponible pour des stages techniques, missions de développement web, audits de systèmes ou projets créatifs."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Direct Coordonnées & Channels */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-6 text-left"
        >
          {/* Identity Contact Card */}
          <div className="p-6 sm:p-8 rounded-3xl glass-panel bg-[#111620] border border-white/10 space-y-6">
            <div>
              <span className="text-xs font-mono text-[#C5A16A] uppercase tracking-widest block">
                // Coordonnées Directes
              </span>
              <h3 className="text-2xl font-bold font-heading text-[#F2F1ED] mt-1">
                {profileData.fullName}
              </h3>
              <p className="text-xs font-mono text-[#969DA8] mt-1">
                {profileData.role} • {profileData.contact.location}
              </p>
            </div>

            {/* Email Box */}
            <div className="p-4 rounded-xl bg-[#141A25] border border-white/5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-lg bg-[#C5A16A]/10 text-[#C5A16A] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="block text-[10px] font-mono text-[#969DA8] uppercase">Email Professionnel</span>
                  <a
                    href={`mailto:${profileData.contact.email}`}
                    className="text-xs sm:text-sm font-mono text-[#F2F1ED] hover:text-[#C5A16A] truncate block transition-colors"
                  >
                    {profileData.contact.email}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(profileData.contact.email, 'email')}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#969DA8] hover:text-[#F2F1ED] transition-colors cursor-pointer"
                title="Copier l'email"
                aria-label="Copier l'email"
              >
                {copiedType === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone & WhatsApp Box */}
            <div className="p-4 rounded-xl bg-[#141A25] border border-white/5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-10 h-10 rounded-lg bg-[#FF7138]/10 text-[#FF7138] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono text-[#969DA8] uppercase">Téléphone &amp; WhatsApp</span>
                  <a
                    href={profileData.contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-mono text-[#F2F1ED] hover:text-[#FF7138] transition-colors"
                  >
                    {profileData.contact.phone}
                  </a>
                </div>
              </div>

              <button
                onClick={() => copyToClipboard(profileData.contact.phone, 'phone')}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#969DA8] hover:text-[#F2F1ED] transition-colors cursor-pointer"
                title="Copier le numéro"
                aria-label="Copier le numéro"
              >
                {copiedType === 'phone' ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Social Network Links */}
            <div className="pt-2 flex flex-col gap-3">
              {/* GitHub */}
              <a
                href={profileData.contact.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#141A25] hover:bg-[#18212E] border border-white/5 text-sm flex items-center justify-between text-[#F2F1ED] group transition-all"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-4 h-4 text-[#C5A16A]" />
                  <span>GitHub : TheGhost-Create</span>
                </div>
                <ExternalLink className="w-4 h-4 text-[#969DA8] group-hover:text-[#F2F1ED] transition-colors" />
              </a>

              {/* LinkedIn */}
              <div className="p-3.5 rounded-xl bg-[#141A25] border border-white/5 text-sm flex items-center justify-between text-[#F2F1ED]">
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-4 h-4 text-[#C5A16A]" />
                  <span>LinkedIn : {profileData.contact.linkedin.label}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Contact Message Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="p-6 sm:p-10 rounded-3xl glass-panel bg-[#111620] border border-white/10 text-left">
            <div className="mb-6">
              <span className="text-xs font-mono text-[#FF7138] uppercase tracking-wider block">
                // Transmission Directe
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#F2F1ED] mt-1">
                Envoyer un Message
              </h3>
              <p className="text-xs text-[#969DA8] mt-1">
                Remplissez ce formulaire pour initialiser une discussion par e-mail ou WhatsApp.
              </p>
            </div>

            {formSent ? (
              <div className="p-8 rounded-2xl bg-[#0F1822] border border-emerald-500/30 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-lg text-[#F2F1ED]">
                  Message Prêt à l'Envoi !
                </h4>
                <p className="text-xs text-[#969DA8] max-w-sm mx-auto">
                  Votre client de messagerie a été ouvert avec les informations pré-remplies. Vous pouvez également me joindre directement sur WhatsApp.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="mt-4 px-4 py-2 rounded-full bg-white/10 text-xs font-mono text-[#F2F1ED] hover:bg-white/20 transition-colors cursor-pointer"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-[#969DA8] mb-1.5 uppercase">
                      Votre Nom
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0C1017] border border-white/10 focus:border-[#C5A16A] text-sm text-[#F2F1ED] placeholder-[#646C7A] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#969DA8] mb-1.5 uppercase">
                      Votre Adresse Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jean@entreprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#0C1017] border border-white/10 focus:border-[#C5A16A] text-sm text-[#F2F1ED] placeholder-[#646C7A] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#969DA8] mb-1.5 uppercase">
                    Objet de la Demande
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Opportunité de stage, projet web, mission..."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0C1017] border border-white/10 focus:border-[#C5A16A] text-sm text-[#F2F1ED] placeholder-[#646C7A] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[#969DA8] mb-1.5 uppercase">
                    Votre Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Présentez brièvement vos besoins ou votre opportunité..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#0C1017] border border-white/10 focus:border-[#C5A16A] text-sm text-[#F2F1ED] placeholder-[#646C7A] outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#C5A16A] to-[#D9B37A] hover:brightness-110 text-[#080A0E] font-heading font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#C5A16A]/20 transition-all active:scale-[0.99] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmettre le Message</span>
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
