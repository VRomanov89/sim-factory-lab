import React from 'react';
import PageHeader from '../components/PageHeader';

const Technologies = () => {
  const technologyAreas = [
    {
      name: 'PLC Systems',
      description: 'Exploring programmable logic controllers from various manufacturers for industrial control.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      vendors: ['Siemens', 'Allen-Bradley', 'Schneider Electric', 'Mitsubishi'],
      features: ['Ladder Logic Programming', 'Function Block Diagrams', 'Structured Text', 'Sequential Function Charts'],
      color: 'blue'
    },
    {
      name: 'SCADA Platforms',
      description: 'Investigating supervisory control and data acquisition systems for real-time monitoring.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      vendors: ['Wonderware', 'FactoryTalk View', 'WinCC', 'Ignition'],
      features: ['Real-time Monitoring', 'Data Visualization', 'Alarm Management', 'Historical Data Analysis'],
      color: 'green'
    },
    {
      name: 'MES Solutions',
      description: 'Researching manufacturing execution systems for production planning and optimization.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      vendors: ['SAP ME', 'Siemens Opcenter', 'Rockwell FactoryTalk', 'Custom Solutions'],
      features: ['Production Planning', 'Quality Management', 'Inventory Tracking', 'Performance Analytics'],
      color: 'purple'
    },
    {
      name: 'Communication Protocols',
      description: 'Implementing various industrial communication standards for system integration.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      vendors: ['Modbus', 'OPC UA', 'Ethernet/IP', 'Profinet'],
      features: ['Protocol Translation', 'Data Mapping', 'Network Security', 'Real-time Communication'],
      color: 'red'
    },
    {
      name: 'Cloud & Analytics',
      description: 'Exploring cloud-based solutions and advanced analytics for manufacturing intelligence.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      vendors: ['AWS IoT', 'Azure IoT', 'Google Cloud', 'Custom Analytics'],
      features: ['Data Storage', 'Real-time Processing', 'Machine Learning', 'Predictive Analytics'],
      color: 'indigo'
    },
    {
      name: 'HMI & Visualization',
      description: 'Developing human-machine interfaces and data visualization solutions.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      vendors: ['PanelView', 'WinCC Flexible', 'Custom Web Interfaces', 'Mobile Apps'],
      features: ['Touch Interfaces', 'Responsive Design', 'Real-time Updates', 'Mobile Access'],
      color: 'yellow'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    red: 'bg-red-100 text-red-600',
    indigo: 'bg-indigo-100 text-indigo-600',
    yellow: 'bg-yellow-100 text-yellow-600'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <PageHeader
        title="Technology Exploration"
        subtitle="Researching and integrating various vendor technologies for our factory automation project"
        backgroundType="industrial"
        showFloatingElements={true}
      />

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Project Overview */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Technology Research</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We're exploring various vendor technologies to understand their capabilities and determine 
            the best integration approaches for our full-stack factory automation solution. Our goal is 
            to create a comprehensive system that leverages the strengths of different platforms.
          </p>
        </div>

        {/* Technology Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologyAreas.map((tech, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className={`w-16 h-16 ${colorClasses[tech.color]} rounded-xl flex items-center justify-center mb-6`}>
                {tech.icon}
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{tech.name}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{tech.description}</p>
              
              {/* Vendors */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Vendors We're Exploring:</h4>
                <div className="flex flex-wrap gap-2">
                  {tech.vendors.map((vendor, vendorIndex) => (
                    <span
                      key={vendorIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                    >
                      {vendor}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Features */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                {tech.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className={`w-2 h-2 ${colorClasses[tech.color].split(' ')[1]} rounded-full mr-3`}></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Integration Strategy */}
        <div className="bg-white rounded-3xl p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Integration Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Evaluate</h3>
              <p className="text-gray-600 text-sm">Assess different vendor technologies and their capabilities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Prototype</h3>
              <p className="text-gray-600 text-sm">Build proof-of-concept integrations with selected technologies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrate</h3>
              <p className="text-gray-600 text-sm">Connect multiple systems into a unified automation platform</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-red-600">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimize</h3>
              <p className="text-gray-600 text-sm">Fine-tune performance and ensure seamless operation</p>
            </div>
          </div>
        </div>

        {/* Current Research Status */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold text-center mb-8">Current Research Status</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">In Progress</h3>
              <p className="text-blue-100">PLC systems and communication protocols</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Planning</h3>
              <p className="text-blue-100">SCADA platforms and MES solutions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⏳</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Future</h3>
              <p className="text-blue-100">Cloud analytics and advanced visualization</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies; 