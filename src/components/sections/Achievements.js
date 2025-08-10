import React from 'react';
import { FaTrophy, FaCertificate, FaCode, FaStar } from 'react-icons/fa';

const Achievements = () => {
  const achievements = [
    {
      icon: FaCode,
      title: 'Problem Solving',
      description: 'Active on coding platforms with consistent problem-solving practice',
      metric: '100+',
      metricLabel: 'Problems Solved',
      color: 'text-blue-500'
    },
    {
      icon: FaTrophy,
      title: 'Project Completion',
      description: 'Successfully delivered multiple full-stack web applications',
      metric: '3+',
      metricLabel: 'Projects Completed',
      color: 'text-yellow-500'
    },
    {
      icon: FaCertificate,
      title: 'Continuous Learning',
      description: 'Committed to staying updated with latest technologies',
      metric: '5+',
      metricLabel: 'Technologies Mastered',
      color: 'text-green-500'
    },
    {
      icon: FaStar,
      title: 'Code Quality',
      description: 'Focus on writing clean, maintainable, and efficient code',
      metric: '100%',
      metricLabel: 'Commitment',
      color: 'text-purple-500'
    }
  ];

  return (
    <section id="achievements" className="section-margin section-padding bg-surface">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Achievements & <span className="text-gradient">Milestones</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Key accomplishments and metrics that showcase my growth as a developer
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div
                key={index}
                className="card p-6 text-center hover:scale-105 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-surface-elevated mb-4 ${achievement.color}`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold text-gradient mb-1">
                    {achievement.metric}
                  </div>
                  <div className="text-sm font-medium text-text-secondary">
                    {achievement.metricLabel}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {achievement.title}
                </h3>
                
                <p className="text-sm text-text-secondary leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="card p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Ready to Collaborate?
            </h3>
            <p className="text-text-secondary mb-6">
              I&apos;m always excited to work on new projects and challenges. 
              Let&apos;s build something amazing together!
            </p>
            <a
              href="#contact"
              className="btn btn-primary btn-md"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
