import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LiveClientSites } from './components/LiveClientSites';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { GallerySection } from './components/GallerySection';
import { AiWorkflowSection } from './components/AiWorkflowSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { PresentationViewerModal } from './components/PresentationViewerModal';
import { LightboxModal } from './components/LightboxModal';

export const App: React.FC = () => {
  const [deckOpen, setDeckOpen] = useState(false);
  const [deckInitialPage, setDeckInitialPage] = useState(1);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<string>('mono-bioholistic');

  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    imageUrl: string;
    title: string;
  }>({
    isOpen: false,
    imageUrl: '',
    title: '',
  });

  const handleOpenDeck = (page: number = 1) => {
    setDeckInitialPage(page);
    setDeckOpen(true);
  };

  const handleOpenImage = (imageUrl: string, title: string) => {
    setLightboxState({
      isOpen: true,
      imageUrl,
      title,
    });
  };

  const handleSelectCaseStudy = (caseStudyId: string) => {
    setSelectedCaseStudy(caseStudyId);
    // Smooth scroll to case studies section
    const element = document.getElementById('case-studies');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#202938] relative selection:bg-[#A5A6F6] selection:text-[#101828]">
      {/* Navigation */}
      <Navbar onOpenDeck={() => handleOpenDeck(1)} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section */}
        <Hero onOpenDeck={() => handleOpenDeck(1)} />

        {/* Live Client Sites Section (Specifically requested by user) */}
        <LiveClientSites
          onSelectCaseStudy={handleSelectCaseStudy}
          onOpenImage={handleOpenImage}
        />

        {/* Selected Work: Four Stories Deep Dive */}
        <CaseStudiesSection
          selectedId={selectedCaseStudy}
          onSelectCaseStudy={setSelectedCaseStudy}
          onOpenImage={handleOpenImage}
        />

        {/* Filterable Range & Visual Deliverables Gallery */}
        <GallerySection onOpenImage={handleOpenImage} />

        {/* Design Craft, Accelerated by AI */}
        <AiWorkflowSection onOpenImage={handleOpenImage} />

        {/* Career Experience Timeline */}
        <ExperienceTimeline />

        {/* Profile & Design Philosophy */}
        <AboutSection />

        {/* Contact & Project Brief Submission */}
        <ContactSection onOpenDeck={() => handleOpenDeck(1)} />
      </main>

      {/* Footer in Midnight Navy #101828 */}
      <Footer onOpenDeck={() => handleOpenDeck(1)} />

      {/* Fullscreen 21-Slide Presentation Deck Viewer */}
      <PresentationViewerModal
        isOpen={deckOpen}
        onClose={() => setDeckOpen(false)}
        initialPage={deckInitialPage}
      />

      {/* High-Resolution Image Lightbox */}
      <LightboxModal
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState({ isOpen: false, imageUrl: '', title: '' })}
        imageUrl={lightboxState.imageUrl}
        title={lightboxState.title}
      />
    </div>
  );
};

export default App;
