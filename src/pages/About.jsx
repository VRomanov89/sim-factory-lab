import React from 'react';
import VisualPageHeader from '../components/VisualPageHeader';

const About = () => {
  const teamMembers = [
    {
      name: 'Vladimir Romanov',
      role: 'Manufacturing & Industrial Automation Leader',
      initials: 'VR',
      bio: 'Managing Partner at Joltek, a company dedicated to helping manufacturing leaders modernize OT systems for greater reliability, data visibility, and ROI. Joltek specializes in consulting, training, upskilling, and systems integration for manufacturing organizations, delivering tailored solutions for digital transformation and operational excellence.',
      expertise: ['PLC Programming', 'Industrial Automation', 'Manufacturing Systems'],
      social: { linkedin: 'https://www.linkedin.com/in/vladromanov/', github: 'https://github.com/VRomanov89', twitter: 'https://x.com/VRomanov89', web: 'https://www.joltek.com/' }
    },
    {
      name: 'Kudzai Manditereza',
      role: 'Software Architect & SCADA Expert',
      initials: 'KM',
      bio: 'Specializes in SCADA systems and software architecture, bridging industrial and modern web technologies.',
      expertise: ['SCADA Systems', 'Software Architecture', 'Web Technologies'],
      social: { linkedin: '#', github: '#', twitter: '#' }
    },
    {
      name: 'Justin Dean',
      role: 'Data Scientist & MES Specialist',
      initials: 'JD',
      bio: 'Focuses on data analysis and Manufacturing Execution Systems, turning industrial data into actionable insights.',
      expertise: ['Data Analysis', 'MES Systems', 'Predictive Analytics'],
      social: { linkedin: '#', github: '#', twitter: '#' }
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <VisualPageHeader
        title="About Our Project"
        subtitle="A community build for engineers and enthusiasts to learn, share, and explore the future of factory automation together."
        illustrationType="robot"
        accentColor="green"
        videoSrc={process.env.PUBLIC_URL + '/videos/factory-header3.mp4'}
      />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Project Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're three engineers passionate about industrial automation, working together to build a comprehensive 
            factory automation solution. Our project explores how different vendor technologies can be integrated 
            into a unified, full-stack system that demonstrates the potential of modern manufacturing.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">The Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Avatar */}
                {member.name === 'Vladimir Romanov' ? (
                  <img
                    src={process.env.PUBLIC_URL + '/profile_photos/vladimir-romanov.webp'}
                    alt="Vladimir Romanov"
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-4 border-blue-200 shadow-lg"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                    {member.initials}
                  </div>
                )}
                
                {/* Info */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4 text-center">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">{member.bio}</p>
                
                {/* Expertise */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Expertise:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href={member.social.github} className="text-gray-400 hover:text-gray-600 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href={member.social.twitter} className="text-gray-400 hover:text-black transition-colors" target="_blank" rel="noopener noreferrer">
                    {/* Official X logo SVG from https://about.x.com/en/who-we-are/brand-toolkit */}
                    <svg className="w-5 h-5" viewBox="0 0 120 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="120" height="122" fill="white"/>
                      <path d="M89.6 18.2H109.2L74.8 58.1L115.2 110.2H83.2L59.7 80.2L33.7 110.2H14.1L50.6 67.6L12 18.2H45.2L66.7 45.9L89.6 18.2ZM83.9 101.1H93.2L41.1 27.1H31.2L83.9 101.1Z" fill="black"/>
                    </svg>
                  </a>
                  {member.social.web && (
                    <a href={member.social.web} className="text-gray-400 hover:text-green-600 transition-colors" target="_blank" rel="noopener noreferrer">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" strokeWidth="2" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Goals */}
        <div className="bg-white rounded-3xl p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Project Goals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Research</h3>
              <p className="text-gray-600">Explore and evaluate different vendor technologies and integration approaches</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integrate</h3>
              <p className="text-gray-600">Connect multiple vendor systems into a unified automation platform</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Build</h3>
              <p className="text-gray-600">Develop a complete full-stack factory automation solution</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Validate</h3>
              <p className="text-gray-600">Test and demonstrate the effectiveness of integrated solutions</p>
            </div>
          </div>
        </div>

        {/* Technical Approach */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">Our Technical Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Hardware Integration</h3>
              <p className="text-blue-100">Connect and control industrial equipment using various PLC platforms</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Software Development</h3>
              <p className="text-blue-100">Build custom applications and interfaces for system management</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Analytics</h3>
              <p className="text-blue-100">Implement advanced analytics and predictive maintenance capabilities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 