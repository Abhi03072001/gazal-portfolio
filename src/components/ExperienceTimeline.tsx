import React from 'react';
import { Briefcase, CheckCircle2, Sparkles } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-white border-t border-[#DCE3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF0FF] text-xs font-mono text-[#101828] border border-[#A5A6F6]/40">
              <Briefcase className="w-3.5 h-3.5 text-[#A5A6F6]" />
              <span>CAREER JOURNEY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#101828] tracking-tight">
              2 Years 8 Months of Design Practice
            </h2>
            <p className="text-[#202938] text-base sm:text-lg leading-relaxed">
              A journey from website and graphic design to product systems, e-commerce conversion, and AI-enabled content production.
            </p>
          </div>

          <div className="text-xs font-mono text-[#202938] bg-[#F8FAFC] border border-[#DCE3EC] px-4 py-2.5 rounded-xl self-start md:self-end">
            <span className="text-[#101828] font-bold">3 COMPANIES</span> • MULTIDISCIPLINARY PRACTICE
          </div>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {WORK_EXPERIENCE.map((exp) => (
            <div
              key={exp.number}
              className="p-8 rounded-2xl bg-white border border-[#DCE3EC] hover:border-[#A5A6F6] transition-all duration-300 flex flex-col justify-between space-y-6 group shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              <div className="space-y-5">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-xl bg-[#101828] text-white flex items-center justify-center font-mono text-sm font-bold group-hover:bg-[#A5A6F6] group-hover:text-[#101828] transition-colors">
                    {exp.number}
                  </span>
                  <span className="text-xs font-mono text-[#101828] px-2.5 py-1 rounded bg-[#EEF0FF] border border-[#A5A6F6]/30 font-medium">
                    UI &amp; GRAPHIC DESIGN
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-display font-bold text-[#101828] group-hover:text-[#6062D6] transition-colors">
                    {exp.company}
                  </h3>
                  <div className="text-xs font-mono text-gray-500 mt-1">
                    {exp.role}
                  </div>
                </div>

                <p className="text-sm text-[#202938] leading-relaxed">
                  {exp.description}
                </p>

                {/* Focus Areas */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-wider block font-semibold">
                    KEY SCOPE &amp; FOCUS
                  </span>
                  <ul className="space-y-2">
                    {exp.focus.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-[#202938]">
                        <CheckCircle2 className="w-4 h-4 text-[#A5A6F6] shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Projects Footnote */}
              <div className="pt-4 border-t border-[#DCE3EC] space-y-2">
                <span className="text-[10px] font-mono text-gray-400 uppercase font-semibold">
                  FEATURED WORK
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {exp.projects.map((proj) => (
                    <span
                      key={proj}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-[#F8FAFC] text-[#101828] border border-[#DCE3EC] font-medium"
                    >
                      {proj}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Current Focus Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#EEF0FF] border border-[#A5A6F6]/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#A5A6F6]/40 flex items-center justify-center text-[#101828] shrink-0 shadow-sm">
              <Sparkles className="w-5 h-5 text-[#A5A6F6]" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#101828] uppercase font-bold">
                CURRENT FOCUS &amp; ADVANTAGE
              </span>
              <p className="text-sm font-semibold text-[#101828]">
                Using AI across the workflow to save time, explore more options, and deliver faster without sacrificing craft.
              </p>
            </div>
          </div>

          <div className="text-xs font-mono text-[#101828] shrink-0 font-medium bg-white px-3 py-1 rounded-full border border-[#DCE3EC]">
            2.8 YRS VERIFIED PRACTICE
          </div>
        </div>
      </div>
    </section>
  );
};
