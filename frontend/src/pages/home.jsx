import React, { useEffect } from 'react';
import HeroSection from '../components/HomeSections/HeroSection';
import AboutSection from '../components/HomeSections/AboutSection';
import PortfolioSection from '../components/HomeSections/PortfolioSection';
import CertificationsSection from '../components/HomeSections/CertificationsSection';
import SkillsSection from '../components/HomeSections/SkillsSection';
import ContactSection from '../components/HomeSections/Offer';
import Footer from '../components/Footer';

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
      
      <ContactSection />
      <Footer />
    </div>
  );
}
