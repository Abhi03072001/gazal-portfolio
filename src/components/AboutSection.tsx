import React from 'react';
import { User, Quote } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative bg-[#F8FAFC] border-t border-[#DCE3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Portrait & Visual Persona */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative max-w-[360px] w-full">
              <div className="relative rounded-2xl overflow-hidden bg-white border border-[#DCE3EC] shadow-xl p-2.5">
                <div className="rounded-xl overflow-hidden relative">
                  <img
                    src={DESIGNER_INFO.portrait}
                    alt="Gazal Soni"
                    className="w-full h-[460px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101828]/70 via-transparent to-transparent opacity-60"></div>

                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#DCE3EC] shadow-sm">
                    <div className="text-base font-display font-bold text-[#101828]">Gazal Soni</div>
                    <div className="text-xs font-mono text-[#101828]">UI &amp; Graphic Designer</div>
                    <p className="text-[11px] text-gray-500 mt-1 font-mono">
                      2 years 8 months across WEO Infotech, Zonopact &amp; Mountainor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Core Capabilities */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF0FF] text-xs font-mono text-[#101828] border border-[#A5A6F6]/40">
                <User className="w-3.5 h-3.5 text-[#A5A6F6]" />
                <span>PROFILE &amp; PHILOSOPHY</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#101828] tracking-tight">
                Design with a reason.
              </h2>

              <p className="text-sm font-mono text-gray-500">
                A multidisciplinary practice shaped by clarity, consistency, and business context.
              </p>
            </div>

            {/* Core Statement Quote (Styled with Midnight Navy & Lavender) */}
            <blockquote className="p-6 rounded-2xl bg-[#EEF0FF] border-l-4 border-[#101828] space-y-3 border-y border-r border-[#DCE3EC]">
              <Quote className="w-6 h-6 text-[#A5A6F6]" />
              <p className="text-xl sm:text-2xl font-display font-bold text-[#101828] leading-snug">
                "I turn business requirements into visual systems that are useful, consistent and ready to scale."
              </p>
            </blockquote>

            <p className="text-[#202938] text-base leading-relaxed">
              With 2 years 8 months of experience, my work spans UI design, brand communication, educational design, e-commerce, and graphic design. I now use AI throughout my workflow to explore ideas, create visual options, speed up production, and save time—while keeping final design decisions and quality control firmly with me.
            </p>

            {/* Core Capabilities Checklist */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#101828] font-bold block">
                CORE CAPABILITIES
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DESIGNER_INFO.capabilities.map((cap) => (
                  <div
                    key={cap}
                    className="p-3.5 rounded-xl bg-white border border-[#DCE3EC] flex items-center gap-3 text-sm text-[#202938] hover:border-[#A5A6F6] transition-colors shadow-sm"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#A5A6F6] shrink-0"></div>
                    <span className="font-medium text-[#101828]">{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
