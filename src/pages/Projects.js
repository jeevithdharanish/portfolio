import React from 'react';

const projects = [
  {
    title: 'Epique-Caps',
    techStack: 'React, Tailwind CSS, AWS S3, AWS Transcription, FFmpeg, Next.js',
    details: [
      'User-Friendly Video Captioning: Enables users to easily upload videos and automatically add clear, readable captions.',
      'Leveraging AWS S3 and Transcription: Utilizes AWS S3 for secure video storage and AWS Transcription for accurate caption generation.',
      'Editable Captions for Accuracy: Allows users to edit auto-generated captions for improved accuracy and flexibility.'
    ]
  },
  {
    title: 'Blog-App',
    techStack: 'React, Tailwind CSS, AWS S3, Express.js, Node.js, MongoDB',
    details: ['A platform for users to create and share blogs with an intuitive interface and robust backend support.']
  },
  {
    title: 'LinkMatrix',
    techStack: 'React, Tailwind CSS, Next.js, NextAuth, AWS S3, MongoDB',
    details: ['A Linktree clone that provides analytics for users to track their link performance effectively.']
  }
];

const Projects = ({ isNightMode }) => (
  <div className={`p-5 ml-8 mr-8 rounded-lg shadow-lg transition-transform  ${isNightMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-black'} mt-4`}>
    <h2 className="text-2xl font-semibold border-b-2 border-teal-500 pb-2">Projects</h2>
    <div className="mt-4">
      {projects.map(({ title, techStack, details }, idx) => (
        <div key={idx} className="mt-4">
          <h3 className="font-medium text-lg">{title}</h3>
          <p className="mt-1"><span className="font-semibold">Tech Stack:</span> {techStack}</p>
          <ul className="list-disc list-inside mt-1">
            {details.map((detail, i) => <li key={i}>{detail}</li>)}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
