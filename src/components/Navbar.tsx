import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, BookOpen, Mail } from 'lucide-react';
import { DESIGNER_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenDeck: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDeck }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Selected Work', href: '#case-studies' },
    { label: 'Live Sites', href: '#live-sites' },
    { label: 'Range & Gallery', href: '#gallery' },
    { label: 'AI Workflow', href: '#ai-workflow' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-[#F8FAFC]/95 backdrop-blur-md border-b border-[#DCE3EC] py-3.5 shadow-sm'
          : 'bg-[#F8FAFC] py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a href="#" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#101828] text-white flex items-center justify-center font-display font-bold text-base shadow-sm group-hover:bg-[#A5A6F6] group-hover:text-[#101828] transition-colors">
              GS
            </div>
            <div>
              <div className="font-display font-bold text-lg text-[#101828] tracking-tight flex items-center gap-1.5">
                {DESIGNER_INFO.name}
                <span className="w-2 h-2 rounded-full bg-[#A5A6F6]"></span>
              </div>
              <div className="text-[11px] font-mono tracking-wider text-gray-500 uppercase -mt-0.5">
                {DESIGNER_INFO.role}
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#202938] hover:text-[#101828] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#A5A6F6] hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            {/* View Complete Deck Button */}
            <button
              onClick={onOpenDeck}
              className="px-3.5 py-2 text-xs font-mono font-medium rounded-xl bg-white hover:bg-[#EEF0FF] text-[#101828] border border-[#DCE3EC] hover:border-[#A5A6F6] transition-all flex items-center gap-2 shadow-sm"
              title="View full 21-page original presentation deck"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#A5A6F6]" />
              <span>21-Slide Deck</span>
            </button>

            {/* Direct Contact CTA (Style Guide: View My Work button style) */}
            <a
              href="#contact"
              className="px-4 py-2 text-xs font-semibold rounded-xl bg-[#101828] hover:bg-[#202938] text-white shadow-sm hover:shadow transition-all flex items-center gap-1.5"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#A5A6F6]" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenDeck}
              className="p-2 rounded-lg bg-white text-[#101828] border border-[#DCE3EC]"
              title="View 21-Slide Deck"
            >
              <BookOpen className="w-4 h-4 text-[#A5A6F6]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#101828] hover:bg-[#EEF0FF] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#DCE3EC] px-4 pt-4 pb-6 mt-3 space-y-3 shadow-lg">
          <div className="flex items-center justify-between pb-3 border-b border-[#DCE3EC]">
            <span className="text-xs font-mono text-gray-500">NAVIGATION</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#EEF0FF] text-[#101828] border border-[#A5A6F6]/40">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A5A6F6]"></span>
              Available for work
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg text-sm font-medium text-[#202938] hover:text-[#101828] hover:bg-[#EEF0FF] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#DCE3EC] flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeck();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-white border border-[#DCE3EC] text-sm font-medium text-[#101828] flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-[#A5A6F6]" />
              View Complete 21-Slide Deck
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-2.5 px-4 rounded-xl bg-[#101828] text-white font-semibold text-sm flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#A5A6F6]" />
              Contact Gazal Soni
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
