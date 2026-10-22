import React from 'react';
import { ExternalLink, ArrowRight, TrendingUp, Eye } from 'lucide-react';
import { LIVE_CLIENT_SITES } from '../data/portfolioData';

interface LiveClientSitesProps {
  onSelectCaseStudy: (caseStudyId: string) => void;
  onOpenImage: (imgUrl: string, title: string) => void;
}

export const LiveClientSites: React.FC<LiveClientSitesProps> = ({
  onSelectCaseStudy,
  onOpenImage,
}) => {
  const caseStudyMap: Record<string, string> = {
    'Truly Beauty': 'truly-beauty',
    'FirstFlowAI': 'firstflow-ai',
    'Mono Bioholistic': 'mono-bioholistic',
  };

  return (
    <section id="live-sites" className="py-24 relative bg-white border-t border-[#DCE3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF0FF] text-xs font-mono text-[#101828] border border-[#A5A6F6]/40">
              <span className="w-2 h-2 rounded-full bg-[#A5A6F6]"></span>
              <span>LIVE CLIENT PRODUCTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#101828] tracking-tight">
              Live Sites Worked On
            </h2>
            <p className="text-[#202938] text-base sm:text-lg leading-relaxed">
              Production web applications and e-commerce stores where Gazal designed the <span className="font-semibold text-[#101828]">graphic identity, product visual storytelling, and user interfaces</span> that are live today.
            </p>
          </div>

          <div className="text-xs font-mono text-[#202938] bg-[#F8FAFC] border border-[#DCE3EC] px-4 py-2.5 rounded-xl self-start md:self-end">
            <span className="text-[#101828] font-bold">● 3 LIVE PLATFORMS</span> • GRAPHIC &amp; UI ARCHITECTURE
          </div>
        </div>

        {/* 3 Live Sites Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {LIVE_CLIENT_SITES.map((site) => {
            const caseStudyId = caseStudyMap[site.name];

            return (
              <div
                key={site.name}
                className="group rounded-2xl bg-white border border-[#DCE3EC] hover:border-[#A5A6F6] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#A5A6F6]/10 hover:-translate-y-1"
              >
                {/* Visual Preview Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#F8FAFC] border-b border-[#DCE3EC]">
                  <img
                    src={site.previewImg}
                    alt={`${site.name} design preview`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101828]/60 via-transparent to-transparent opacity-40"></div>

                  {/* Impact Tag Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/95 text-[#101828] backdrop-blur-md border border-[#DCE3EC] shadow-sm">
                      <TrendingUp className="w-3.5 h-3.5 text-[#A5A6F6]" />
                      {site.impact}
                    </span>
                  </div>

                  {/* Inspect Button */}
                  <button
                    onClick={() => onOpenImage(site.previewImg, `${site.name} - UI & Graphic Design`)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white text-[#101828] hover:bg-[#A5A6F6] transition-all opacity-0 group-hover:opacity-100 shadow-md border border-[#DCE3EC]"
                    title="Inspect visual"
                  >
                    <Eye className="w-4 h-4" />
                  </button>

                  {/* Live URL Pill */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono">
                    <span className="bg-white/90 px-2.5 py-1 rounded-md backdrop-blur-md border border-[#DCE3EC] text-[#101828] font-medium shadow-sm">
                      {site.displayUrl}
                    </span>
                    <span className="text-[11px] text-white drop-shadow font-medium">UI &amp; Graphic Design</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-display font-bold text-[#101828] group-hover:text-[#6062D6] transition-colors">
                        {site.name}
                      </h3>
                      <span className="text-xs font-mono text-gray-500">
                        {site.role.split('(')[1]?.replace(')', '') || 'Direct'}
                      </span>
                    </div>

                    <p className="text-sm text-[#202938] leading-relaxed">
                      {site.description}
                    </p>

                    {/* Discipline Tags in Lavender Soft Tint */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {site.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-[#EEF0FF] text-[#101828] border border-[#A5A6F6]/40 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-5 border-t border-[#DCE3EC] flex items-center justify-between gap-3">
                    {/* Live Website Button */}
                    <a
                      href={site.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 rounded-xl bg-[#101828] hover:bg-[#202938] text-white text-xs font-medium flex items-center gap-2 transition-all flex-1 justify-center shadow-sm"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#A5A6F6]" />
                    </a>

                    {/* Case Study Jump */}
                    {caseStudyId && (
                      <button
                        onClick={() => onSelectCaseStudy(caseStudyId)}
                        className="px-3.5 py-2.5 rounded-xl bg-[#EEF0FF] hover:bg-[#A5A6F6] text-[#101828] text-xs font-semibold flex items-center gap-1.5 border border-[#A5A6F6]/40 transition-all"
                        title="View Full Case Study"
                      >
                        <span>Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
