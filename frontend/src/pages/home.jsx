import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import PortfolioSection from '../components/PortfolioSection';
import CertificationsSection from '../components/CertificationsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F3]">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <CertificationsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}