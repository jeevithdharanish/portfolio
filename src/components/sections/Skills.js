import React, { useState } from 'react';
import {
  FaJs,
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
  FaDatabase,
  FaJava,
  FaPlug
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiPostman
} from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    Languages: {
      title: 'Programming Languages',
      skills: [
        { name: 'JavaScript', icon: FaJs, level: 88, color: 'text-yellow-500' },
        { name: 'Java', icon: FaJava, level: 85, color: 'text-blue-400' },
        { name: 'SQL', icon: FaDatabase, level: 80, color: 'text-black dark:text-white' }
      ]
    },
    frontend: {
      title: 'Frontend Development',
      skills: [
        { name: 'React', icon: FaReact, level: 85, color: 'text-blue-400' },
        { name: 'Next.js', icon: SiNextdotjs, level: 80, color: 'text-black dark:text-white' }
      ]
    },
    backend: {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, level: 82, color: 'text-green-500' },
        { name: 'Express.js', icon: SiExpress, level: 80, color: 'text-gray-600' },
        { name: 'MongoDB', icon: SiMongodb, level: 75, color: 'text-green-600' },
        { name: 'MySQL', icon: SiMysql, level: 70, color: 'text-blue-600' },
        { name: 'REST APIs', icon: FaPlug, level: 85, color: 'text-purple-500' }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      skills: [
        { name: 'AWS S3', icon: FaAws, level: 75, color: 'text-orange-400' },
        { name: 'Git', icon: FaGitAlt, level: 85, color: 'text-red-500' },
        { name: 'Postman', icon: SiPostman, level: 80, color: 'text-orange-500' }
      ]
    }
  };

  const categories = Object.keys(skillCategories);

  return (
    <section id="skills" className="section-margin section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base touch-manipulation ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-surface hover:bg-surface-elevated text-text-secondary hover:text-text-primary border border-border'
              }`}
            >
              <span className="hidden sm:inline">{skillCategories[category].title}</span>
              <span className="sm:hidden">{skillCategories[category].title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-semibold text-center mb-8 text-text-primary">
            {skillCategories[activeCategory].title}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="card p-4 sm:p-6 hover:scale-105 transition-all duration-300 animate-scale-in touch-manipulation"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className={`p-2 sm:p-3 rounded-lg bg-surface mr-3 sm:mr-4 ${skill.color}`}>
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-text-primary mb-1 text-sm sm:text-base truncate">
                        {skill.name}
                      </h4>
                      <div className="text-xs sm:text-sm text-text-secondary">
                        {skill.level}% Proficiency
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-border rounded-full h-1.5 sm:h-2">
                    <div
                      className="bg-gradient-primary h-1.5 sm:h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
