import React from 'react';
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { SiFigma, SiGeeksforgeeks } from 'react-icons/si';

const Hero = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/jeevithdharanish-m-01539328a/',
      icon: FaLinkedin,
      color: 'hover:text-blue-600 dark:hover:text-blue-400'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/jdking123',
      icon: FaGithub,
      color: 'hover:text-gray-900 dark:hover:text-gray-100'
    },
    {
      name: 'GeeksforGeeks',
      href: 'https://www.geeksforgeeks.org/user/jeevithdhaa1s7/',
      icon: SiGeeksforgeeks,
      color: 'hover:text-green-600 dark:hover:text-green-400'
    }
  ];

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-20">
      <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8 animate-fade-in">
        {/* Profile Image */}
        <div className="relative mx-auto w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse"></div>
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-surface-elevated shadow-xl hover:scale-105 transition-transform duration-300">
            <Image
              src="/mypic.jpg"
              fill={true}
              style={{ objectFit: "cover" }}
              alt="Jeevithdharanish - Software Developer"
              priority
              className="rounded-full"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4 md:space-y-6 animate-slide-up">
          <div className="space-y-3 md:space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gradient">Jeevithdharanish</span>
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-text-secondary font-medium">
              Web and Software Developer
            </h2>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Passionate about building innovative software solutions with modern technologies.
            I create efficient, scalable applications that solve real-world problems.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 pt-4">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 sm:p-3 rounded-full bg-surface hover:bg-surface-elevated border border-border ${link.color} transition-all duration-300 hover:scale-110 hover:shadow-lg touch-manipulation`}
                  aria-label={link.name}
                >
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4 sm:pt-6 px-4 sm:px-0">
            <button
              onClick={scrollToAbout}
              className="btn btn-primary btn-md sm:btn-lg w-full sm:w-auto touch-manipulation"
            >
              Learn More About Me
            </button>
            
          </div>
        </div>


      </div>
    </section>
  );
};

export default Hero;
