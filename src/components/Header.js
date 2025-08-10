import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';

const Header = () => {
  const router = useRouter();
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { name: 'Home', href: '/', section: 'home' },
    { name: 'About', href: '#about', section: 'about' },
    { name: 'Skills', href: '#skills', section: 'skills' },
    { name: 'Projects', href: '#projects', section: 'projects' },
    { name: 'Contact', href: '#contact', section: 'contact' },
  ];

  // Track active section based on scroll position
  useEffect(() => {
    if (router.pathname !== '/') {
      setActiveSection('resume');
      return;
    }

    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    // Set initial active section
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [router.pathname]);

  const handleNavClick = (href, section) => {
    if (href.startsWith('#')) {
      // Smooth scroll to section
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(href);
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto section-padding">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="text-2xl font-bold text-gradient cursor-pointer transition-transform hover:scale-105"
            onClick={() => router.push('/')}
          >
            Jeevithdharanish
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href, item.section)}
                className={`font-medium transition-all duration-300 relative ${
                  activeSection === item.section
                    ? 'text-primary'
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                {item.name}
                {activeSection === item.section && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-surface hover:bg-surface-elevated border border-border transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <FaSun className="w-5 h-5 text-yellow-500" />
              ) : (
                <FaMoon className="w-5 h-5 text-text-muted" />
              )}
            </button>

            {/* Resume Button */}
            <Link
              href="/resume"
              className={`btn btn-md ${
                router.pathname === '/resume' ? 'btn-primary' : 'btn-secondary'
              }`}
            >
              Resume
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-surface hover:bg-surface-elevated border border-border transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <FaSun className="w-4 h-4 text-yellow-500" />
              ) : (
                <FaMoon className="w-4 h-4 text-text-muted" />
              )}
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg bg-surface hover:bg-surface-elevated border border-border transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-5 h-5 text-text-primary" />
              ) : (
                <FaBars className="w-5 h-5 text-text-primary" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border animate-slide-up">
            <div className="flex flex-col space-y-1 pt-4">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href, item.section)}
                  className={`text-left font-medium py-3 px-2 rounded-lg touch-manipulation transition-all duration-200 relative ${
                    activeSection === item.section
                      ? 'text-primary bg-primary/10 border-l-2 border-primary'
                      : 'text-text-secondary hover:text-primary hover:bg-surface'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4">
                <Link
                  href="/resume"
                  className={`btn btn-md w-full touch-manipulation ${
                    router.pathname === '/resume' ? 'btn-primary' : 'btn-secondary'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Resume
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
