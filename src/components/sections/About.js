import Link from 'next/link';
import React from 'react';
import { FaGraduationCap, FaCode, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: FaGraduationCap,
      title: 'Education',
      description: 'Master of Science in Software Systems from Sri Krishna Arts and Science College (2021-2026)'
    },
    {
      icon: FaCode,
      title: 'Development',
      description: 'Passionate about web development, cloud technologies, and creating efficient software solutions'
    },
    {
      icon: FaLightbulb,
      title: 'Problem Solving',
      description: 'Love tackling complex challenges and finding innovative solutions through code'
    },
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'Always exploring new technologies and best practices to build better applications'
    }
  ];

  const stats = [
    { number: '3+', label: 'Projects Completed' },
    { number: '5+', label: 'Technologies Mastered' },
    { number: '2+', label: 'Years Learning' },
    { number: '100%', label: 'Passion for Code' }
  ];

  return (
    <section id="about" className="section-margin section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Get to know more about my journey, passion, and what drives me as a developer
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text Content */}
          <div className="space-y-6 animate-slide-up">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-text-primary">
                Hello! I&apos;m Jeevithdharanish
              </h3>
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  I&apos;m a passionate software developer currently pursuing my Master&apos;s in Software Systems. 
                  My journey in technology began with curiosity about how things work behind the scenes, 
                  and it has evolved into a deep love for creating meaningful digital experiences.
                </p>
                <p>
                  I specialize in full-stack web development with a focus on modern technologies like 
                  React, Next.js, Node.js, and cloud platforms. I believe in writing clean, efficient 
                  code that not only works but is also maintainable and scalable.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to 
                  open-source projects, or solving algorithmic challenges. I&apos;m always eager to learn 
                  and take on new challenges that push me to grow as a developer.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Link
                href="/resume"
                className="btn btn-primary btn-md"
              >
                View My Resume
              </Link>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-scale-in">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="card p-6 text-center hover:scale-105 transition-transform duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-text-primary mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
