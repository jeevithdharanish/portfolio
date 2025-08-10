import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaHeart } from 'react-icons/fa';
import { SiFigma } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
      icon: SiFigma,
      color: 'hover:text-green-600 dark:hover:text-green-400'
    },
    {
      name: 'Twitter',
      href: '#',
      icon: FaTwitter,
      color: 'hover:text-blue-500 dark:hover:text-blue-300'
    }
  ];

  return (
    <footer className="bg-surface border-border mt-auto">
      {/* Bottom Section */}
        <div className="mt-8 p-5 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-text-muted text-sm flex items-center">
            Made with <FaHeart className="text-red-500 mx-1 w-4 h-4" /> by Jeevithdharanish
          </p>
        </div>
    </footer>
  );
};

export default Footer;
