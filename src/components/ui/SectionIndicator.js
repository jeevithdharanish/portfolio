import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const SectionIndicator = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'skills', name: 'Skills' },
    { id: 'projects', name: 'Projects' },
    { id: 'contact', name: 'Contact' }
  ];

  useEffect(() => {
    if (router.pathname !== '/') {
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [router.pathname, sections, setActiveSection]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Don't show on resume page
  if (router.pathname !== '/') {
    return null;
  }

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`group relative w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-primary scale-125'
                : 'bg-border hover:bg-primary/50'
            }`}
            aria-label={`Go to ${section.name} section`}
          >
            {/* Tooltip */}
            <div className={`absolute right-6 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-surface-elevated border border-border rounded-lg text-sm font-medium text-text-primary whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none ${
              activeSection === section.id ? 'opacity-100' : ''
            }`}>
              {section.name}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-surface-elevated border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SectionIndicator;
