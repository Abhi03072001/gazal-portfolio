import React from 'react';
import { Cpu, UserCheck, Layers, Zap } from 'lucide-react';
import { AI_WORKFLOW_STEPS, DESIGNER_INFO, baseAsset } from '../data/portfolioData';

interface AiWorkflowSectionProps {
  onOpenImage: (imgUrl: string, title: string) => void;
}

export const AiWorkflowSection: React.FC<AiWorkflowSectionProps> = ({ onOpenImage }) => {
  const engineImages = [
    { src: '/assets/real/product_mockup_designs/Clearbiotics.png', label: 'Clearbiotics Botanical Mockup' },
    { src: '/assets/real/product_mockup_designs/Gummies_.png', label: 'Melatonin Gummies Jar Mockup' },
    { src: '/assets/real/product_mockup_designs/L-Glutathione.png', label: 'L-Glutathione 100% Capsules' },
    { src: '/assets/real/product_mockup_designs/Seabuckthorn.png', label: 'Sea Buckthorn Skin+Balance' },
    { src: '/assets/real/product_mockup_designs/Serum.png', label: 'Clinical Dropper Serum Mockup' },
  ];

  return (
    <section id="ai-workflow" className="py-24 relative bg-[#F8FAFC] border-t border-[#DCE3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="space-y-4 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF0FF] text-xs font-mono text-[#101828] border border-[#A5A6F6]/40">
            <Cpu className="w-3.5 h-3.5 text-[#A5A6F6]" />
            <span>AI-ENABLED PRODUCTION PIPELINE</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#101828] tracking-tight">
            Design Craft, Accelerated by AI
          </h2>

          <p className="text-[#202938] text-base sm:text-lg leading-relaxed">
            AI is integrated across the current workflow to save time, explore exponentially more visual options, and speed up turnaround—while{' '}
            <span className="font-semibold text-[#101828]">keeping final design decisions, brand fit, and quality control strictly human-led</span>.
          </p>
        </div>

        {/* 5-Step Visual Production Engine Flow */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold">
              5-STAGE VISUAL CONTENT ENGINE (MONO &amp; EXPANDED WORK)
            </span>
            <span className="text-xs font-mono text-[#101828] font-medium bg-[#EEF0FF] px-2.5 py-0.5 rounded border border-[#A5A6F6]/30">
              FROM BRIEF TO MULTI-CHANNEL ADAPTATION
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {AI_WORKFLOW_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl bg-white border border-[#DCE3EC] hover:border-[#A5A6F6] transition-all flex flex-col justify-between space-y-4 group shadow-sm hover:shadow-md relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-[#EEF0FF] text-[#101828] font-mono text-xs font-bold flex items-center justify-center border border-[#A5A6F6]/40 group-hover:bg-[#101828] group-hover:text-white transition-colors">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono text-gray-400">{step.category}</span>
                  </div>

                  <h3 className="font-display font-bold text-[#101828] text-base group-hover:text-[#6062D6] transition-colors">
                    {step.name}
                  </h3>

                  <p className="text-xs text-[#202938] mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {idx < 4 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <div className="w-6 h-6 rounded-full bg-white border border-[#DCE3EC] flex items-center justify-center text-gray-400 text-xs shadow-sm">
                      →
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Real Generated Visual Outputs Strip (From Page 10) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DCE3EC] mb-12 space-y-5 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h4 className="font-display font-bold text-[#101828] text-lg">
                Engine Outputs: Studio-Grade 3D Product Mockups
              </h4>
              <p className="text-xs font-mono text-gray-500">
                Created through AI-prompted generation and human brand refinement in Photoshop &amp; Figma
              </p>
            </div>
            <span className="text-xs font-mono text-[#101828] bg-[#EEF0FF] px-2.5 py-1 rounded border border-[#A5A6F6]/30">
              Outputs: Transparent Renders • Botanical Staging • Studio Lighting
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-1">
            {engineImages.map((img, i) => (
              <div
                key={i}
                onClick={() => onOpenImage(img.src, `${img.label} - AI-Assisted Product Visual`)}
                className="group rounded-xl overflow-hidden bg-[#F8FAFC] border border-[#DCE3EC] hover:border-[#A5A6F6] cursor-pointer transition-all aspect-square relative shadow-sm p-2 flex items-center justify-center"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101828]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5 rounded-xl">
                  <span className="text-xs font-mono text-white truncate drop-shadow">{img.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI-Assisted Ad Video Reels */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#DCE3EC] mb-16 space-y-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono text-[#101828] uppercase font-bold tracking-wider bg-[#EEF0FF] px-2.5 py-0.5 rounded border border-[#A5A6F6]/30">
                MOTION &amp; AD VIDEO PRODUCTION
              </span>
              <h4 className="font-display font-bold text-[#101828] text-xl mt-1">
                AI-Assisted Performance Ad Videos
              </h4>
            </div>
            <span className="text-xs font-mono text-gray-500">
              Native MP4 Video Deliverables
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden bg-[#101828] border border-[#DCE3EC] shadow-sm">
              <video
                controls
                preload="metadata"
                className="w-full aspect-video object-cover"
                src={baseAsset("/assets/real/videos_created_with_ai_for_ad/Mino_Skincare_Adviceee_SM_post.mp4")}
              >
                Your browser does not support the video tag.
              </video>
              <div className="p-4 bg-white border-t border-[#DCE3EC]">
                <h5 className="font-display font-bold text-[#101828] text-sm">MINO Skincare Advice Social Ad</h5>
                <p className="text-xs text-[#202938] mt-1 font-mono">Animated MINO 3D character explaining clinical skincare tips with engaging voiceover and typography.</p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden bg-[#101828] border border-[#DCE3EC] shadow-sm">
              <video
                controls
                preload="metadata"
                className="w-full aspect-video object-cover"
                src={baseAsset("/assets/real/videos_created_with_ai_for_ad/Kuch_meetha_ho_jaye.mp4")}
              >
                Your browser does not support the video tag.
              </video>
              <div className="p-4 bg-white border-t border-[#DCE3EC]">
                <h5 className="font-display font-bold text-[#101828] text-sm">AI Commercial: 'Kuch Meetha Ho Jaye'</h5>
                <p className="text-xs text-[#202938] mt-1 font-mono">Creative promotional video combining AI generative motion with product storytelling and festive offers.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid: Design Tools vs AI Tools vs Human Quality (From Page 20) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Pillar 1: Design Tools */}
          <div className="p-8 rounded-2xl bg-white border border-[#DCE3EC] space-y-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEF0FF] border border-[#A5A6F6]/40 flex items-center justify-center text-[#101828]">
                <Layers className="w-5 h-5 text-[#A5A6F6]" />
              </div>
              <div>
                <span className="text-xs font-mono text-gray-500 uppercase">FOUNDATION</span>
                <h3 className="text-xl font-display font-bold text-[#101828]">Design Tools</h3>
              </div>
            </div>

            <p className="text-sm text-[#202938]">
              Core production toolset where design systems are structured, wireframed, and composed.
            </p>

            <div className="space-y-2.5">
              {DESIGNER_INFO.tools.design.map((tool) => (
                <div
                  key={tool}
                  className="p-3 rounded-xl bg-[#F8FAFC] border border-[#DCE3EC] flex items-center justify-between text-sm text-[#202938]"
                >
                  <span className="font-medium text-[#101828]">{tool}</span>
                  <span className="text-xs font-mono text-gray-500">Production</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pillar 2: AI Tools & Uses */}
          <div className="p-8 rounded-2xl bg-white border border-[#DCE3EC] space-y-6 relative shadow-sm">
            <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-[#EEF0FF] border border-[#A5A6F6]/40 text-[#101828] text-[10px] font-mono font-semibold">
              ACCELERATOR
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#EEF0FF] border border-[#A5A6F6]/40 flex items-center justify-center text-[#101828]">
                <Zap className="w-5 h-5 text-[#A5A6F6]" />
              </div>
              <div>
                <span className="text-xs font-mono text-gray-500 uppercase">LEVERAGE</span>
                <h3 className="text-xl font-display font-bold text-[#101828]">AI Tools &amp; Uses</h3>
              </div>
            </div>

            <p className="text-sm text-[#202938]">
              Integrated across the workflow to unlock rapid iterations, variant explorations, and automated tasks.
            </p>

            <div className="space-y-2.5">
              {DESIGNER_INFO.tools.ai.map((tool) => (
                <div
                  key={tool}
                  className="p-3 rounded-xl bg-[#F8FAFC] border border-[#DCE3EC] flex items-center justify-between text-sm text-[#202938]"
                >
                  <span className="font-medium text-[#101828]">{tool}</span>
                  <span className="text-xs font-mono text-gray-500">Speed &amp; Scale</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pillar 3: Human-Led Quality Control */}
          <div className="p-8 rounded-2xl bg-white border border-[#A5A6F6] space-y-6 relative shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#101828] flex items-center justify-center text-white">
                <UserCheck className="w-5 h-5 text-[#A5A6F6]" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#101828] uppercase font-semibold">THE PROMISE</span>
                <h3 className="text-xl font-display font-bold text-[#101828]">Human-Led Quality</h3>
              </div>
            </div>

            <blockquote className="p-3 rounded-xl bg-[#EEF0FF] border-l-4 border-[#101828] text-sm text-[#202938] font-medium">
              "AI helps me move faster, but it does not replace my role as a designer."
            </blockquote>

            <div className="space-y-2.5">
              {DESIGNER_INFO.tools.qualityPillars.map((pillar) => (
                <div
                  key={pillar}
                  className="p-3 rounded-xl bg-[#F8FAFC] border border-[#DCE3EC] flex items-center gap-3 text-sm text-[#202938]"
                >
                  <div className="w-2 h-2 rounded-full bg-[#101828]"></div>
                  <span className="font-medium text-[#101828]">{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Bar Footer */}
        <div className="mt-12 p-4 rounded-xl bg-white border border-[#DCE3EC] text-center font-mono text-xs sm:text-sm text-[#202938] tracking-wider shadow-sm">
          <span className="text-[#101828] font-bold">WORKFLOW PROTOCOL:</span> BRIEF &gt; EXPLORE &gt; DESIGN &gt; GENERATE VARIANTS &gt; REFINE &gt; DELIVER
        </div>
      </div>
    </section>
  );
};
