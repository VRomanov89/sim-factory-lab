import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ISA95StackBubbles from '../components/ISA95StackBubbles';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <PageHeader
        title="Sim Factory Lab"
        subtitle="Three engineers building a full-stack factory automation solution"
        backgroundType="gradient"
        showFloatingElements={true}
      />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Project Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Project</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're three engineers exploring modern manufacturing technologies by building a comprehensive 
            factory automation solution. Our goal is to integrate various vendor technologies into a 
            cohesive, full-stack system that demonstrates the potential of current industrial automation.
          </p>
        </div>

        {/* Project Goals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">System Integration</h3>
            <p className="text-gray-600 leading-relaxed">
              Connect and integrate multiple vendor technologies into a unified factory automation platform.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Technology Exploration</h3>
            <p className="text-gray-600 leading-relaxed">
              Research and implement cutting-edge manufacturing technologies from various industry leaders.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Full-Stack Solution</h3>
            <p className="text-gray-600 leading-relaxed">
              Build a complete factory automation system from hardware control to data analytics.
            </p>
          </div>
        </div>

        {/* Current Status */}
        <div className="bg-white rounded-3xl p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Project Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Research Phase</h3>
              <p className="text-gray-600 text-sm">Evaluating vendor technologies and integration approaches</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Prototype Development</h3>
              <p className="text-gray-600 text-sm">Building initial system components and integrations</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-400">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-400 mb-2">System Integration</h3>
              <p className="text-gray-400 text-sm">Connecting all components into unified platform</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-gray-400">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-400 mb-2">Testing & Optimization</h3>
              <p className="text-gray-400 text-sm">Full system testing and performance optimization</p>
            </div>
          </div>
        </div>

        {/* Why Manufacturing is Complex */}
        <div className="bg-white rounded-3xl p-12 shadow-lg mb-16 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 flex items-center justify-center w-32 h-32 bg-yellow-100 rounded-full mb-6 md:mb-0">
            <span className="text-6xl">🧩</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why is Manufacturing So Complex?</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><span className="font-semibold">Diverse Vendors:</span> Countless hardware and software vendors, each with unique protocols and standards.</li>
              <li><span className="font-semibold">Legacy Systems:</span> Old and new technologies must work together, often with limited documentation.</li>
              <li><span className="font-semibold">Real-Time Demands:</span> Millisecond-level control and monitoring is required for safety and efficiency.</li>
              <li><span className="font-semibold">Security & Reliability:</span> Systems must be robust against failures and cyber threats.</li>
              <li><span className="font-semibold">Data Silos:</span> Information is often trapped in isolated systems, making integration difficult.</li>
            </ul>
          </div>
        </div>

        {/* ISA-95 Stack Diagram */}
        <ISA95StackBubbles />

        {/* Project Motivation */}
        <div className="bg-white rounded-3xl p-12 shadow-lg mb-16 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 flex items-center justify-center w-32 h-32 bg-green-100 rounded-full mb-6 md:mb-0">
            <span className="text-6xl">🚀</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Are We Building This Project?</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li><span className="font-semibold">Education:</span> Demystify the manufacturing stack for engineers and decision-makers.</li>
              <li><span className="font-semibold">Integration:</span> Show how modern and legacy systems can work together using open standards.</li>
              <li><span className="font-semibold">Open Collaboration:</span> Create a vendor-agnostic, open-source demo for the community.</li>
              <li><span className="font-semibold">Innovation:</span> Explore new technologies and best practices for smart manufacturing.</li>
            </ul>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Our Project</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/technologies"
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
            >
              View Technologies
            </Link>
            <Link
              to="/about"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Meet the Team
            </Link>
            <Link
              to="/blog"
              className="border-2 border-gray-600 text-gray-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-600 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Project Updates
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 