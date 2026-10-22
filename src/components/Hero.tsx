import React from 'react';
import { ArrowDown, ArrowUpRight, TrendingUp, Layers, BookOpen, CheckCircle2, ChevronDown } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenDeck: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDeck }) => {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-16 flex flex-col justify-between bg-[#F8FAFC]">
      {/* Subtle Lavender Background Tint Blobs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#A5A6F6]/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#DCE3EC]/50 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto">
        {/* Top Eyebrow Status */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#DCE3EC] text-xs font-mono text-[#101828] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#A5A6F6]"></span>
            <span className="tracking-wider uppercase font-semibold">SELECTED WORK / 2026</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF0FF] border border-[#A5A6F6]/30 text-xs font-mono text-[#101828]">
            <span>2 YEARS 8 MONTHS PRACTICE</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>AVAILABLE FOR SELECT ROLES</span>
          </div>
        </div>

        {/* Two Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Typography & Intent */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-widest text-[#101828] uppercase font-bold bg-[#EEF0FF] px-2.5 py-1 rounded border border-[#A5A6F6]/40 inline-block">
                {DESIGNER_INFO.role}
              </span>
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-display font-bold tracking-tight text-[#101828] leading-[1.08]">
                Connecting <br className="hidden sm:block" />
                <span className="text-[#101828]">creative decisions</span> <br />
                with <span className="underline decoration-[#A5A6F6] decoration-4 underline-offset-8">business outcomes.</span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-[#202938] font-normal leading-relaxed max-w-2xl">
              I turn business requirements into visual systems that are{' '}
              <span className="font-semibold text-[#101828]">useful, consistent and ready to scale</span>. 
              Multidisciplinary design across interface systems, high-converting e-commerce, and 
              AI-accelerated production with rigorous human craft.
            </p>

            {/* Disciplines Chips (Style Guide Label Format: BRANDING • UI/UX • SOCIAL MEDIA) */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['PRODUCT', 'BRAND IDENTITY', 'E-COMMERCE', 'AI CONTENT', 'SYSTEMS'].map((pill) => (
                <span
                  key={pill}
                  className="px-3 py-1 text-xs font-mono tracking-wider font-semibold rounded-lg bg-white text-[#101828] border border-[#DCE3EC] shadow-sm hover:border-[#A5A6F6] transition-colors"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Primary & Secondary CTAs (Exact User Brief Requirements) */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              {/* Primary CTA: "Explore My Work" */}
              <a
                href="#case-studies"
                className="px-7 py-3.5 rounded-xl bg-[#101828] hover:bg-[#202938] text-white font-medium text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2.5 group"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 text-[#A5A6F6] group-hover:translate-y-0.5 transition-transform" />
              </a>

              {/* Secondary CTA: "Let's Connect" */}
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl bg-[#A5A6F6] hover:bg-[#9495F0] text-[#101828] font-semibold text-sm shadow-sm transition-all flex items-center gap-2"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-[#101828]" />
              </a>

              {/* Deck Viewer Button */}
              <button
                onClick={onOpenDeck}
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-[#EEF0FF] text-[#101828] text-xs font-mono font-medium border border-[#DCE3EC] hover:border-[#A5A6F6] transition-all flex items-center gap-2 shadow-sm"
              >
                <BookOpen className="w-4 h-4 text-[#A5A6F6]" />
                <span>21-Slide CV Deck</span>
              </button>
            </div>

            {/* Micro Credibility Strip */}
            <div className="pt-6 border-t border-[#DCE3EC] flex flex-wrap items-center gap-6 text-xs text-[#202938] font-mono">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#101828]" />
                <span className="font-medium">Mountainor Wellbeing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#101828]" />
                <span className="font-medium">Zonopact</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#101828]" />
                <span className="font-medium">WEO Infotech</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Metric Orbit */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Background Decorative Frame */}
            <div className="absolute w-[360px] sm:w-[420px] h-[360px] sm:h-[420px] rounded-3xl border border-[#DCE3EC] -z-10 rotate-3"></div>

            {/* Main Portrait Frame */}
            <div className="relative group max-w-[340px] sm:max-w-[380px] w-full">
              <div className="relative rounded-2xl overflow-hidden bg-white border border-[#DCE3EC] shadow-xl p-2.5">
                <div className="rounded-xl overflow-hidden relative">
                  <img
                    src={DESIGNER_INFO.portrait}
                    alt="Gazal Soni - UI & Graphic Designer"
                    className="w-full h-[450px] sm:h-[480px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101828]/80 via-transparent to-transparent opacity-60"></div>

                  {/* Portrait Caption */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-[#DCE3EC] flex items-center justify-between shadow-sm">
                    <div>
                      <div className="font-display font-bold text-[#101828] text-base">Gazal Soni</div>
                      <div className="text-[11px] font-mono text-[#202938]">UI &amp; Graphic Designer</div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EEF0FF] text-[#101828] font-semibold border border-[#A5A6F6]/40">
                      2.8 YRS EXP
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Metric 1: Conversion Lift */}
              <div className="absolute -top-3 -left-4 sm:-left-8 bg-white border border-[#DCE3EC] p-3 rounded-xl shadow-lg animate-float">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#EEF0FF] border border-[#A5A6F6]/40 flex items-center justify-center text-[#101828]">
                    <TrendingUp className="w-4 h-4 text-[#A5A6F6]" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-[#101828] font-display">+40%</div>
                    <div className="text-[10px] font-mono text-gray-500">Truly Beauty Conversion</div>
                  </div>
                </div>
              </div>

              {/* Floating Metric 2: Revenue Scale */}
              <div className="absolute top-1/2 -right-4 sm:-right-8 translate-y-4 bg-white border border-[#DCE3EC] p-3 rounded-xl shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#101828] flex items-center justify-center text-white">
                    <span className="text-xs font-bold font-mono">₹</span>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#101828] font-display">₹50K → ₹3-4L / mo</div>
                    <div className="text-[10px] font-mono text-gray-500">Mono Revenue Scale</div>
                  </div>
                </div>
              </div>

              {/* Floating Metric 3: System Scale */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-white border border-[#DCE3EC] p-3 rounded-xl shadow-lg animate-float" style={{ animationDelay: '3.5s' }}>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#EEF0FF] border border-[#A5A6F6]/40 flex items-center justify-center text-[#101828]">
                    <Layers className="w-4 h-4 text-[#A5A6F6]" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#101828] font-display">188-Page System</div>
                    <div className="text-[10px] font-mono text-gray-500">Avidator Statistics Guide</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Brand Ticker */}
        <div className="mt-14 pt-8 border-t border-[#DCE3EC]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-gray-500 font-semibold">
              FEATURED CLIENT EXPERIENCES &amp; BRANDS
            </span>
            <span className="text-xs font-mono text-gray-400 hidden sm:inline-block">
              UI DESIGN • VISUAL IDENTITY • COMMERCE
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { name: 'Truly Beauty', desc: 'E-Commerce UI', tag: '+40% CVR' },
              { name: 'FirstFlowAI', desc: 'CRM & Marketing UI', tag: 'AI Platform' },
              { name: 'Mono Bioholistic', desc: 'Brand & Commerce', tag: '₹4L/mo Scale' },
              { name: 'Avidator UK', desc: '188p Publication', tag: 'Curriculum' },
              { name: 'LSET London', desc: 'Incubator & UI', tag: 'Campaigns' },
              { name: 'Mountainor', desc: 'Full-Funnel Brand', tag: 'Creative Dir' },
            ].map((b) => (
              <div
                key={b.name}
                className="p-3.5 rounded-xl bg-white border border-[#DCE3EC] hover:border-[#A5A6F6] transition-all hover:-translate-y-0.5 group shadow-sm"
              >
                <div className="font-display font-bold text-[#101828] text-sm group-hover:text-[#A5A6F6] transition-colors">
                  {b.name}
                </div>
                <div className="text-[11px] text-[#202938] font-mono mt-0.5">{b.desc}</div>
                <div className="text-[10px] font-mono text-[#101828] mt-1.5 inline-block bg-[#EEF0FF] border border-[#A5A6F6]/30 px-2 py-0.5 rounded font-medium">
                  {b.tag}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle indication that more content exists below the fold */}
        <div className="mt-8 flex justify-center">
          <a
            href="#case-studies"
            className="group flex flex-col items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-[#101828] transition-colors"
          >
            <span>Scroll to explore selected work</span>
            <ChevronDown className="w-4 h-4 text-[#A5A6F6] group-hover:translate-y-1 transition-transform animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
