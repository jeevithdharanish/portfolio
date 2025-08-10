import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'jeevithdharanish98@gmail.com',
      link: 'mailto:jeevithdharanish98@gmail.com',
      color: 'text-red-500'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/jeevithdharanish-m-01539328a/',
      color: 'text-blue-600'
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      value: 'View my code',
      link: 'https://github.com/jdking123',
      color: 'text-black dark:text-gray-100'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'India',
      link: null,
      color: 'text-green-500'
    }
  ];



  return (
    <section id="contact" className="section-margin section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Find me on these platforms and let us start a conversation!
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 animate-slide-up">
            <div className="text-center">
              <p className="text-text-secondary leading-relaxed mb-8">
                I am always open to discussing new opportunities, interesting projects,
                or just having a chat about technology. Feel free to reach out through
                any of the channels below.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                const content = (
                  <div className="flex flex-col items-center p-6 rounded-lg bg-surface hover:bg-surface-elevated border border-border transition-all duration-300 hover:scale-105 text-center">
                    <div className={`p-4 rounded-full bg-surface-elevated mb-4 ${item.color}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary mb-2">
                        {item.title}
                      </h4>
                      
                    </div>
                  </div>
                );

                return item.link ? (
                  <a
                    key={index}
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : '_self'}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
