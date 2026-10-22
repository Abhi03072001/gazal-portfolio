import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/portfolioData';

interface GallerySectionProps {
  onOpenImage: (imgUrl: string, title: string) => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenImage }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Range (16)' },
    { id: 'ui', label: 'UI & Dashboards' },
    { id: 'ecommerce', label: 'E-Commerce & Amazon' },
    { id: 'campaign', label: 'Campaigns & Social' },
    { id: 'print', label: 'Publication & Print' },
    { id: 'creative', label: 'Creative & AI Art' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-24 relative bg-white border-t border-[#DCE3EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF0FF] text-xs font-mono text-[#101828] border border-[#A5A6F6]/40">
              <span className="w-2 h-2 rounded-full bg-[#A5A6F6]"></span>
              <span>EXPANDED RANGE &amp; CAMPAIGNS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-[#101828] tracking-tight">
              UI, Visual Systems &amp; Campaigns
            </h2>
            <p className="text-[#202938] text-base sm:text-lg leading-relaxed">
              A broader portfolio of customer-facing and client deliverables across Amazon storefronts, ad funnels, print publishing, and creative image manipulation.
            </p>
          </div>

          <div className="text-xs font-mono text-gray-500 bg-[#F8FAFC] border border-[#DCE3EC] px-4 py-2 rounded-xl self-start md:self-end">
            SHOWN IN FULL TO PRESERVE COMPOSITION
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#101828] text-white font-medium shadow-sm'
                  : 'bg-[#F8FAFC] text-[#202938] hover:text-[#101828] hover:bg-[#EEF0FF] border border-[#DCE3EC]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onOpenImage(item.image, item.title)}
              className="group rounded-2xl bg-white border border-[#DCE3EC] hover:border-[#A5A6F6] overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
            >
              <div className="relative aspect-square sm:aspect-[4/3] overflow-hidden bg-[#F8FAFC] border-b border-[#DCE3EC]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#101828]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <div className="text-center space-y-2">
                    <div className="w-10 h-10 rounded-full bg-white text-[#101828] flex items-center justify-center mx-auto shadow-md">
                      <Eye className="w-5 h-5 text-[#A5A6F6]" />
                    </div>
                    <span className="text-xs font-mono text-white block">Click to inspect</span>
                  </div>
                </div>

                {/* Client Tag */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono bg-white/95 text-[#101828] border border-[#DCE3EC] backdrop-blur-md shadow-sm font-medium">
                    {item.client}
                  </span>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-4 space-y-2">
                <div className="text-[11px] font-mono text-[#101828] uppercase tracking-wide font-semibold">
                  {item.categoryLabel}
                </div>
                <h4 className="font-display font-bold text-[#101828] text-sm line-clamp-1 group-hover:text-[#6062D6] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-[#202938] line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                {/* Tools */}
                <div className="pt-2 flex flex-wrap gap-1">
                  {item.tools.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F8FAFC] text-gray-600 border border-[#DCE3EC]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
