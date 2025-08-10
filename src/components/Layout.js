import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ui/ScrollToTop';
import SectionIndicator from './ui/SectionIndicator';
import ProgressBar from './ui/ProgressBar';
import { useTheme } from '../contexts/ThemeContext';

const Layout = ({ 
  children, 
  title = 'Jeevithdharanish - Software Developer',
  description = 'Portfolio of Jeevithdharanish, a passionate software developer and engineer specializing in web development, cloud technologies, and problem solving.',
  className = ''
}) => {
  const { isLoading } = useTheme();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Jeevithdharanish" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var isDark = theme === 'dark' || (!theme && systemPrefersDark);

                  if (isDark) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.style.colorScheme = 'light';
                  }
                } catch (e) {
                  console.warn('Failed to initialize theme:', e);
                }
              })();
            `,
          }}
        />
      </Head>

      <div className={`min-h-screen bg-background transition-colors duration-300 ${className}`}>
        <ProgressBar />
        <Header />

        <main className="relative">
          {children}
        </main>

        <Footer />
        <ScrollToTop />
        {/* <SectionIndicator /> */}
      </div>
    </>
  );
};

export default Layout;
