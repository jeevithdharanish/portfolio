import React, { useState } from 'react';
import {FaCloudUploadAlt,FaProjectDiagram, FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaMoon, FaSun, FaLinkedin, FaGithub } from 'react-icons/fa';
import {SiExpress, SiTailwindcss, SiNextdotjs, SiFigma, SiMongodb } from 'react-icons/si';
import Link from 'next/link';
import Projects from './Projects';
import { AiOutlineDatabase } from 'react-icons/ai';
const icons = [
  { Icon: FaHtml5, label: 'HTML5' },
  { Icon: FaCss3Alt, label: 'CSS3' },
  { Icon: FaJs, label: 'JavaScript' },
  { Icon: FaReact, label: 'React' },
  { Icon: FaNodeJs, label: 'Node.js' },
  { Icon: SiNextdotjs, label: 'Next.js' },
  { Icon: SiTailwindcss, label: 'Tailwind CSS' },
  { Icon: SiMongodb, label: 'MongoDB' },
  { Icon: SiFigma, label: 'Figma' },
  { Icon: FaProjectDiagram, label: 'REST APIs' },
  { Icon: SiExpress, label: 'Express.js' },
  { Icon: FaCloudUploadAlt, label: 'AWS S3' },
  { Icon: AiOutlineDatabase, label: 'MySQL' },
];

const Resume = () => {
  const [isNightMode, setIsNightMode] = useState(false);
  const themeClass = isNightMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black';

  return (
    <div className={`${isNightMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}transition-colors duration-300`}>
    <div className={`p-10 ml-14 mr-14 ${isNightMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} transition-colors duration-300`}>
      <div className={`flex justify-between items-center mb-5 sticky bg-gray-100 top-0 z-10 bg-${isNightMode ? 'gray-900' : 'white'} p-3`}>
        <button onClick={() => setIsNightMode(!isNightMode)} className="p-2 border rounded-lg bg-teal-500 text-white hover:bg-teal-600 transition duration-300 flex items-center">
          {isNightMode ? <FaSun className="mr-2" /> : <FaMoon className="mr-2" />} Toggle {isNightMode ? 'Light' : 'Dark'} Mode
        </button>
        <Link href="/" className={`text-teal-500 hover:underline ${isNightMode ? 'text-white' : 'text-black'}`}>Back to Home</Link>
      </div>

      <h1 className="text-3xl font-bold text-center">My Resume</h1>

      <div className="flex ml-8 mr-8 flex-col md:flex-row mt-10">
        <div className={`md:w-1/2 p-5 rounded-lg shadow-lg transition-transform  ${themeClass}`}>
          <h2 className="text-2xl font-semibold border-b-2 border-teal-500 pb-2">Skills</h2>
          <div className="grid grid-cols-5 gap-4 mt-4">
            {icons.map(({ Icon, label }, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <Icon className="text-4xl" />
                <span className="mt-2 text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={`md:w-1/2 p-5 rounded-lg shadow-lg transition-transform  mt-5 md:mt-0 md:ml-5 ${themeClass}`}>
          <h2 className="text-2xl font-semibold border-b-2 border-teal-500 pb-2">Personal Details</h2>
          <div className="mt-4 space-y-3">
            {[
              { icon: FaLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/jeevithdharanish-m-01539328a/', text: 'Jeevith' },
              { icon: FaGithub, label: 'GitHub', url: 'https://github.com/jdking123', text: 'jdking123' },
              { icon: SiFigma, label: 'GeeksforGeeks', url: 'https://www.geeksforgeeks.org/user/jeevithdhaa1s7/', text: 'Your Profile' },
              { icon: FaJs, label: 'SDE Sheet', url: 'https://takeuforward.org/profile/Jd_07', text: 'Striver A2Z Sheet' }
            ].map(({ icon: Icon, label, url, text }, idx) => (
              <div key={idx} className="flex items-center">
                <Icon className="text-2xl mr-2" />
                <span>{label}: <a href={url} className="text-teal-600 hover:underline">{text}</a></span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col ml-8 mr-8 mb-8 md:flex-row mt-10">
        <div className={`md:w-1/2 p-5  rounded-lg shadow-lg transition-transform  ${themeClass}`}>
          <h2 className="text-2xl font-semibold border-b-2 border-teal-500 pb-2">Education</h2>
          <h3 className="font-medium">Master of Science in Software Systems</h3>
          <p className="mt-1">Sri Krishna Arts and Science, 2021-2026</p>
        </div>

        <div className={`md:w-1/2 p-5 rounded-lg shadow-lg transition-transform  mt-5 md:mt-0 md:ml-5 ${themeClass}`}>
          <h2 className="text-2xl font-semibold border-b-2 border-teal-500 pb-2">Areas of Interest</h2>
          <ul className="list-disc list-inside mt-4">
            <li>Web Development</li>
            <li>Cloud</li>
            <li>Problem Solving</li>
          </ul>
        </div>
      </div>

      
      <Projects isNightMode={isNightMode} />
    </div>
    </div>
  );
};

export default Resume;
