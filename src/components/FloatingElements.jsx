import React from 'react';

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating circles */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-200 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-blue-300 rounded-full opacity-40 animate-bounce" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-20 w-3 h-3 bg-blue-400 rounded-full opacity-50 animate-ping" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating squares */}
      <div className="absolute top-60 left-1/4 w-2 h-2 bg-gray-300 opacity-40 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-gray-400 opacity-30 animate-bounce" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Floating triangles */}
      <div className="absolute top-1/3 right-10 w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-blue-200 opacity-40 animate-pulse" style={{ animationDelay: '0.8s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-0 h-0 border-l-3 border-r-3 border-b-6 border-transparent border-b-gray-300 opacity-30 animate-bounce" style={{ animationDelay: '1.2s' }}></div>
    </div>
  );
};

export default FloatingElements; 