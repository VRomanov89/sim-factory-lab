import React from 'react';

const AnimatedBackground = ({ type = 'grid', className = '' }) => {
  switch (type) {
    case 'grid':
      return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100 opacity-30"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      );
    
    case 'dots':
      return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100 opacity-30"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
      );
    
    case 'circuit':
      return (
        <div className={`absolute inset-0 overflow-hidden ${className}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100 opacity-30"></div>
          <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M0 10h20M10 0v20" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="0.5" fill="none"/>
                <circle cx="10" cy="10" r="1" fill="rgba(59, 130, 246, 0.5)"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#circuit)"/>
          </svg>
        </div>
      );
    
    default:
      return null;
  }
};

export default AnimatedBackground; 