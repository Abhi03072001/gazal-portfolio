import React, { useState } from 'react';
import { ExternalLink, Check, ChevronRight, Eye, ArrowUpRight, TrendingUp, Sparkles, Layers, BookOpen, X } from 'lucide-react';
import { CASE_STUDIES, CaseStudy } from '../data/portfolioData';

interface CaseStudiesSectionProps {
  selectedId?: string;
  onSelectCaseStudy: (id: string) => void;
  onOpenImage: (imgUrl: string, title: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onSelectCaseStudy,
  onOpenImage,
}) => {
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="py-28 relative bg-[#F8FAFC] border-t border-[#DCE3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EEF0FF] text-xs font-mono text-[#101828] border border-[#A5A6F6]/40">
            <span className="w-2 h-2 rounded-full bg-[#A5A6F6]"></span>
            <span className="font-semibold uppercase tracking-wider">SELECTED WORK / CURATED CASE STUDIES</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h2 className="text-4xl sm:text-6xl font-display font-bold text-[#101828] tracking-tight">
                Four Stories. <br className="hidden sm:inline" />
                <span className="text-[#101828]">One Design Practice.</span>
              </h2>
              <p className="text-[#202938] text-base sm:text-lg max-w-2xl mt-3 leading-relaxed">
                The portfolio begins with the work where design most directly supported company growth, e-commerce conversion, and educational clarity.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-gray-500 bg-white border border-[#DCE3EC] px-4 py-2 rounded-xl shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#A5A6F6]"></span>
              <span>4 FLAGSHIP SYSTEMS EXPLORED</span>
            </div>
          </div>
        </div>

        {/* Curated Editorial Project Showcase (Alternating Compositions) */}
        <div className="space-y-24">
          {CASE_STUDIES.map((study, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={study.id}
                className="group relative bg-white border border-[#DCE3EC] hover:border-[#A5A6F6] rounded-3xl p-6 sm:p-10 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-[#A5A6F6]/10"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Visual Preview Frame (7 cols) */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-2xl overflow-hidden bg-[#F8FAFC] border border-[#DCE3EC] shadow-sm group-hover:border-[#A5A6F6] transition-colors">
                      {/* Browser Mockup Header */}
                      <div className="bg-white border-b border-[#DCE3EC] px-4 py-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-[#DCE3EC]"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-[#DCE3EC]"></span>
                          <span className="w-2.5 h-2.5 rounded-full bg-[#DCE3EC]"></span>
                        </div>
                        <div className="text-[11px] font-mono text-gray-500 bg-[#F8FAFC] px-3 py-0.5 rounded-md border border-[#DCE3EC]">
                          {study.liveUrl ? study.liveUrl.replace('https://www.', '').replace('https://', '').replace('/', '') : `${study.id}.system`}
                        </div>
                        <span className="text-[10px] font-mono text-gray-400 font-medium">CASE STUDY {study.number}</span>
                      </div>

                      {/* Main Featured Image */}
                      <div
                        onClick={() => onOpenImage(study.visuals[0].image, `${study.title} - Overview`)}
                        className="relative aspect-[16/10] overflow-hidden cursor-pointer"
                      >
                        <img
                          src={study.visuals[0].image}
                          alt={study.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#101828]/60 via-transparent to-transparent opacity-40"></div>

                        {/* Quick Inspect Button */}
                        <div className="absolute top-4 right-4 p-2.5 rounded-full bg-white text-[#101828] hover:bg-[#A5A6F6] transition-all opacity-0 group-hover:opacity-100 shadow-md">
                          <Eye className="w-4 h-4" />
                        </div>

                        {/* Primary Highlight Badge */}
                        <div className="absolute bottom-4 left-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/95 text-[#101828] backdrop-blur-md border border-[#DCE3EC] shadow-sm">
                            <TrendingUp className="w-3.5 h-3.5 text-[#A5A6F6]" />
                            {study.highlights[0].value} • {study.highlights[0].label}
                          </span>
                        </div>
                      </div>

                      {/* Secondary Thumbnails Row */}
                      {study.visuals.length > 1 && (
                        <div className="bg-[#F8FAFC] border-t border-[#DCE3EC] p-3 grid grid-cols-3 gap-2">
                          {study.visuals.slice(1, 4).map((vis, vIdx) => (
                            <div
                              key={vIdx}
                              onClick={() => onOpenImage(vis.image, vis.title)}
                              className="relative aspect-[16/10] rounded-lg overflow-hidden bg-white border border-[#DCE3EC] hover:border-[#A5A6F6] cursor-pointer transition-all"
                            >
                              <img
                                src={vis.image}
                                alt={vis.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform"
                              />
                              <span className="absolute bottom-1 left-1 right-1 text-[9px] font-mono bg-white/90 text-[#101828] px-1 py-0.5 rounded truncate">
                                {vis.badge || vis.title}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Narrative & Details Column (5 cols) */}
                  <div className={`lg:col-span-5 space-y-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-display font-bold text-[#A5A6F6]">
                          /{study.number}
                        </span>
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                          {study.company}
                        </span>
                      </div>

                      <h3 className="text-3xl font-display font-bold text-[#101828] group-hover:text-[#6062D6] transition-colors leading-tight">
                        {study.title}
                      </h3>

                      <p className="text-xs font-mono text-gray-500">
                        ROLE: <span className="text-[#101828] font-medium">{study.companyRole}</span>
                      </p>
                    </div>

                    <p className="text-sm text-[#202938] leading-relaxed">
                      {study.challenge}
                    </p>

                    {/* Key Highlights Metrics */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      {study.highlights.slice(0, 2).map((h, hIdx) => (
                        <div
                          key={hIdx}
                          className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#DCE3EC]"
                        >
                          <div className="text-[11px] font-mono text-gray-500 uppercase">{h.label}</div>
                          <div className="text-lg font-display font-bold text-[#101828] mt-0.5">
                            {h.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-[#EEF0FF] text-[#101828] border border-[#A5A6F6]/40 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setActiveModalStudy(study)}
                        className="px-5 py-2.5 rounded-xl bg-[#101828] hover:bg-[#202938] text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-sm"
                      >
                        <span>Read Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#A5A6F6]" />
                      </button>

                      {study.liveUrl && (
                        <a
                          href={study.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2.5 rounded-xl bg-white hover:bg-[#EEF0FF] text-[#101828] text-xs font-semibold flex items-center gap-1.5 border border-[#DCE3EC] hover:border-[#A5A6F6] transition-all shadow-sm"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3 h-3 text-[#A5A6F6]" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* In-Depth Case Study Modal Reader */}
      {activeModalStudy && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn">
          <div className="bg-white border border-[#DCE3EC] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative my-auto">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalStudy(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#F8FAFC] hover:bg-[#EEF0FF] text-[#101828] border border-[#DCE3EC] transition-colors"
              title="Close (Esc)"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-3 pb-6 border-b border-[#DCE3EC] pr-12">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-[#A5A6F6] text-[#101828]">
                  CASE STUDY {activeModalStudy.number}
                </span>
                <span className="text-xs font-mono text-gray-500 uppercase">
                  {activeModalStudy.company}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-display font-bold text-[#101828]">
                {activeModalStudy.title}
              </h3>

              <p className="text-sm font-mono text-gray-500">
                ROLE: <span className="text-[#101828] font-medium">{activeModalStudy.companyRole}</span>
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
              {activeModalStudy.highlights.map((h, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#F8FAFC] border border-[#DCE3EC]">
                  <div className="text-[11px] font-mono text-gray-500 uppercase">{h.label}</div>
                  <div className="text-xl font-display font-bold text-[#101828] mt-1">{h.value}</div>
                  {h.desc && <div className="text-xs text-[#202938] mt-1 leading-tight">{h.desc}</div>}
                </div>
              ))}
            </div>

            {/* Problem & Approach */}
            <div className="space-y-6 my-6">
              <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#DCE3EC] space-y-2">
                <span className="text-xs font-mono font-bold text-[#101828] uppercase tracking-wider">
                  THE DESIGN CHALLENGE &amp; OBJECTIVE
                </span>
                <p className="text-sm text-[#202938] leading-relaxed">
                  {activeModalStudy.challenge}
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#F8FAFC] border border-[#DCE3EC] space-y-3">
                <span className="text-xs font-mono font-bold text-[#101828] uppercase tracking-wider">
                  DESIGN APPROACH &amp; KEY TRADE-OFFS
                </span>
                <ul className="space-y-2">
                  {activeModalStudy.approach.map((step, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2.5 text-sm text-[#202938]">
                      <Check className="w-4 h-4 text-[#A5A6F6] shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Visual Sheets Gallery */}
            <div className="space-y-4 pt-4 border-t border-[#DCE3EC]">
              <div className="flex items-center justify-between">
                <h4 className="font-display font-bold text-lg text-[#101828]">
                  Verified Deliverables &amp; Design Sheets
                </h4>
                <span className="text-xs font-mono text-gray-500">
                  Click any sheet to inspect full resolution
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeModalStudy.visuals.map((vis, vIdx) => (
                  <div
                    key={vIdx}
                    onClick={() => onOpenImage(vis.image, vis.title)}
                    className="group rounded-xl overflow-hidden bg-[#F8FAFC] border border-[#DCE3EC] hover:border-[#A5A6F6] cursor-pointer transition-all shadow-sm"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-white">
                      <img
                        src={vis.image}
                        alt={vis.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      {vis.badge && (
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] font-mono bg-white/95 text-[#101828] border border-[#DCE3EC] font-semibold">
                          {vis.badge}
                        </span>
                      )}
                      <div className="absolute top-2 right-2 p-1.5 rounded-full bg-white text-[#101828] opacity-0 group-hover:opacity-100 transition-opacity shadow">
                        <Eye className="w-3.5 h-3.5 text-[#A5A6F6]" />
                      </div>
                    </div>
                    <div className="p-3.5 space-y-1">
                      <div className="font-display font-bold text-sm text-[#101828]">{vis.title}</div>
                      <p className="text-xs text-[#202938] leading-relaxed line-clamp-2">{vis.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-8 pt-4 border-t border-[#DCE3EC] flex items-center justify-between">
              {activeModalStudy.liveUrl ? (
                <a
                  href={activeModalStudy.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#101828] text-white text-xs font-semibold flex items-center gap-1.5"
                >
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#A5A6F6]" />
                </a>
              ) : (
                <span className="text-xs font-mono text-gray-500">Publication Case Study</span>
              )}

              <button
                onClick={() => setActiveModalStudy(null)}
                className="px-4 py-2 rounded-xl bg-[#F8FAFC] border border-[#DCE3EC] text-xs font-mono text-[#101828] hover:bg-[#EEF0FF]"
              >
                Close Case Study
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
