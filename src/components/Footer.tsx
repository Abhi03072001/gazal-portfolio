import React from 'react';
import { ArrowUp, BookOpen, ExternalLink, Mail, Phone } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenDeck: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDeck }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#101828] text-white pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#202938]">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#A5A6F6] text-[#101828] flex items-center justify-center font-display font-bold text-base shadow-sm">
                GS
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white tracking-tight">
                  {DESIGNER_INFO.name}
                </span>
                <span className="block text-xs font-mono text-[#A5A6F6] -mt-0.5 uppercase font-medium">
                  {DESIGNER_INFO.role}
                </span>
              </div>
            </div>

            <p className="text-sm text-gray-300 max-w-sm leading-relaxed">
              Connecting creative decisions with business outcomes. Multidisciplinary practice spanning interface design, visual brand systems, e-commerce, and human-led AI acceleration.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-mono text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A5A6F6] animate-pulse"></span>
              <span>Available for select opportunities</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-[#A5A6F6] font-bold">
              PORTFOLIO SECTIONS
            </div>
            <ul className="space-y-2 text-sm text-gray-300 font-sans">
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">
                  Four Flagship Stories
                </a>
              </li>
              <li>
                <a href="#live-sites" className="hover:text-white transition-colors">
                  Live Client Sites (Truly, FirstFlow, Mono)
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Range &amp; Visual Gallery
                </a>
              </li>
              <li>
                <a href="#ai-workflow" className="hover:text-white transition-colors">
                  AI-Assisted Workflow Engine
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Career Experience (WEO, Zonopact, Mountainor)
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Design Philosophy &amp; Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Connect & Deck */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-[#A5A6F6] font-bold">
              CONNECT &amp; CREDENTIALS
            </div>

            <div className="space-y-2 text-sm font-mono text-gray-300">
              <a
                href={`mailto:${DESIGNER_INFO.contact.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#A5A6F6]" />
                <span>{DESIGNER_INFO.contact.email}</span>
              </a>

              <a
                href={`tel:${DESIGNER_INFO.contact.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#A5A6F6]" />
                <span>{DESIGNER_INFO.contact.phone}</span>
              </a>

              <a
                href={DESIGNER_INFO.contact.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-[#A5A6F6]" />
                <span>{DESIGNER_INFO.contact.behanceDisplay}</span>
              </a>
            </div>

            <button
              onClick={onOpenDeck}
              className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#EEF0FF] text-[#101828] text-xs font-mono font-medium flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <BookOpen className="w-4 h-4 text-[#A5A6F6]" />
              <span>Inspect Original 21-Slide Presentation Deck</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <div>
            © 2026 Gazal Soni. Midnight Navy + Lavender identity. All designs preserved from source portfolio.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white border border-white/10 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
