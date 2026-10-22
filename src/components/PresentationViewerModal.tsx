import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Download, Maximize2, Minimize2, ZoomIn, ZoomOut } from 'lucide-react';

interface PresentationViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialPage?: number;
}

export const PresentationViewerModal: React.FC<PresentationViewerModalProps> = ({
  isOpen,
  onClose,
  initialPage = 1,
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const totalPages = 21;

  useEffect(() => {
    setCurrentPage(initialPage);
  }, [initialPage, isOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const pageTitles: Record<number, string> = {
    1: 'Cover / Selected Work 2026',
    2: 'Profile & Philosophy (Design with a reason)',
    3: '2 Years 8 Months Experience Timeline',
    4: 'Four Stories Overview',
    5: 'Case Study 01: Mono Bioholistic',
    6: 'Mono Visual System & Brand Language',
    7: 'Mono MINO Character Design System',
    8: 'Mono Commerce & Catalogue Storytelling',
    9: 'Mono Full-Funnel Campaign Logic',
    10: 'Mono AI-Assisted Production Engine',
    11: 'Mono Measurable Business Outcome (Revenue Growth)',
    12: 'Case Study 02: Truly Beauty E-Commerce UI',
    13: 'Truly Beauty Complete Page Architecture',
    14: 'Case Study 03: FirstFlowAI Product Identity',
    15: 'FirstFlowAI Modular CRM Interface UI',
    16: 'Case Study 04: Avidator Educational Workbook',
    17: 'Avidator Publication Consistency & Grid',
    18: 'Selected Range UI & Visual Communication',
    19: 'Expanded Range Campaigns, Commerce & Print',
    20: 'Tools & AI Workflow (Human-Led Quality)',
    21: 'Thank You & Contact (Design Makes Value Visible)',
  };

  const formattedPageNum = String(currentPage).padStart(2, '0');
  const currentImageSrc = `/assets/pages/page_${formattedPageNum}.jpg`;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between animate-fadeIn">
      {/* Top Header Bar */}
      <div className="p-4 px-6 bg-[#0E1017]/90 border-b border-[#232536] flex items-center justify-between text-white z-10">
        <div className="flex items-center gap-4">
          <span className="font-display font-bold text-white text-base">
            Gazal Soni — Portfolio Deck
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#FF2A7A]"></span>
          <span className="text-xs font-mono text-gray-400 hidden sm:inline-block truncate max-w-md">
            Slide {formattedPageNum}: {pageTitles[currentPage] || 'Portfolio Slide'}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-xs font-mono bg-[#161726] border border-[#2a2c42] px-3 py-1.5 rounded-full text-gray-300">
            <span className="text-[#FF2A7A] font-bold">{formattedPageNum}</span> / {totalPages}
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#1b1c2b] hover:bg-[#FF2A7A] text-gray-300 hover:text-white transition-colors"
            title="Close presentation (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Slide Stage */}
      <div className="flex-1 relative flex items-center justify-center p-4 sm:p-8 overflow-hidden select-none">
        {/* Previous Button */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`absolute left-4 z-20 p-3 rounded-full bg-[#12131F]/90 border border-[#2a2c42] text-white backdrop-blur-md transition-all ${
            currentPage === 1
              ? 'opacity-30 cursor-not-allowed'
              : 'hover:bg-[#FF2A7A] hover:border-[#FF2A7A] hover:scale-110 shadow-xl'
          }`}
          title="Previous slide (Left Arrow)"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Slide Image Frame */}
        <div className="max-w-6xl max-h-[75vh] w-full h-full flex items-center justify-center">
          <img
            key={currentImageSrc}
            src={currentImageSrc}
            alt={pageTitles[currentPage]}
            className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl border border-[#232538] animate-fadeIn"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`absolute right-4 z-20 p-3 rounded-full bg-[#12131F]/90 border border-[#2a2c42] text-white backdrop-blur-md transition-all ${
            currentPage === totalPages
              ? 'opacity-30 cursor-not-allowed'
              : 'hover:bg-[#FF2A7A] hover:border-[#FF2A7A] hover:scale-110 shadow-xl'
          }`}
          title="Next slide (Right Arrow)"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Thumbnail Strip */}
      <div className="p-3 bg-[#0E1017]/90 border-t border-[#232536] overflow-x-auto">
        <div className="flex items-center gap-2 max-w-6xl mx-auto px-2 justify-start sm:justify-center">
          {Array.from({ length: totalPages }).map((_, i) => {
            const pageNum = i + 1;
            const isCurrent = pageNum === currentPage;
            const formatted = String(pageNum).padStart(2, '0');

            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`relative shrink-0 w-12 sm:w-16 aspect-[16/9] rounded-md overflow-hidden border transition-all ${
                  isCurrent
                    ? 'border-[#FF2A7A] ring-2 ring-[#FF2A7A]/50 scale-110'
                    : 'border-[#26283b] opacity-60 hover:opacity-100 hover:border-gray-400'
                }`}
                title={`Jump to slide ${formatted}`}
              >
                <img
                  src={`/assets/pages/page_${formatted}.jpg`}
                  alt={`Slide ${formatted}`}
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 bg-black/80 text-[8px] font-mono px-1 text-white">
                  {formatted}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
