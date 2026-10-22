import React, { useEffect } from 'react';
import { X, ZoomIn, Download } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
}) => {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !imageUrl) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-fadeIn">
      {/* Top Bar */}
      <div className="flex items-center justify-between text-white pb-4 border-b border-[#232536]">
        <div>
          <h3 className="font-display font-bold text-base sm:text-lg text-white">{title}</h3>
          <span className="text-xs font-mono text-gray-400">High-Resolution Visual Inspection</span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-[#181928] hover:bg-[#FF2A7A] text-gray-300 hover:text-white transition-colors"
          title="Close (Esc)"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image View */}
      <div className="flex-1 flex items-center justify-center p-2 sm:p-6 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="max-h-[82vh] max-w-full object-contain rounded-2xl shadow-2xl border border-[#27293d]"
        />
      </div>

      {/* Footer Details */}
      <div className="flex items-center justify-between pt-3 border-t border-[#232536] text-xs font-mono text-gray-400">
        <span>GAZAL SONI / VISUAL DESIGN PORTFOLIO</span>
        <span>PRESS ESC TO CLOSE</span>
      </div>
    </div>
  );
};
