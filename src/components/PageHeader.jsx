import React from 'react';

const PageHeader = ({ 
  title, 
  subtitle, 
  backgroundType = 'gradient', 
  showFloatingElements = true,
  className = '' 
}) => {
  const backgrounds = {
    gradient: 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800',
    dark: 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900',
    light: 'bg-gradient-to-br from-gray-100 via-white to-gray-50 border-b border-gray-200',
    industrial: 'bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900'
  };

  const textColors = {
    gradient: 'text-white',
    dark: 'text-white',
    light: 'text-gray-900',
    industrial: 'text-white'
  };

  const subtitleColors = {
    gradient: 'text-blue-100',
    dark: 'text-gray-300',
    light: 'text-gray-600',
    industrial: 'text-blue-200'
  };

  const floatingElements = [
    { top: '10%', left: '15%', size: 'w-2 h-2', delay: '0s' },
    { top: '20%', right: '20%', size: 'w-3 h-3', delay: '1s' },
    { bottom: '30%', left: '10%', size: 'w-1 h-1', delay: '2s' },
    { bottom: '20%', right: '15%', size: 'w-2 h-2', delay: '0.5s' },
    { top: '50%', left: '5%', size: 'w-1 h-1', delay: '1.5s' },
    { top: '60%', right: '5%', size: 'w-3 h-3', delay: '0.8s' }
  ];

  const getFloatingElementColor = (backgroundType) => {
    switch (backgroundType) {
      case 'light':
        return 'bg-blue-400 bg-opacity-30';
      default:
        return 'bg-white bg-opacity-20';
    }
  };

  return (
    <section className={`relative py-20 overflow-hidden ${backgrounds[backgroundType]} ${className}`}>
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)
          `
        }}></div>
      </div>

      {/* Floating elements */}
      {showFloatingElements && (
        <div className="absolute inset-0 pointer-events-none">
          {floatingElements.map((element, index) => (
            <div
              key={index}
              className={`absolute ${element.size} ${getFloatingElementColor(backgroundType)} rounded-full animate-pulse`}
              style={{
                top: element.top,
                left: element.left,
                right: element.right,
                bottom: element.bottom,
                animationDelay: element.delay,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Title with subtle animation */}
        <div className="mb-6">
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight ${textColors[backgroundType]}`}>
            <span className="inline-block transform hover:scale-105 transition-transform duration-500">
              {title.split(' ').map((word, index) => (
                <span 
                  key={index} 
                  className="inline-block mr-4 last:mr-0"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>
        </div>

        {/* Subtitle with fade-in effect */}
        {subtitle && (
          <div className="max-w-3xl mx-auto">
            <p className={`text-lg md:text-xl leading-relaxed opacity-90 ${subtitleColors[backgroundType]}`}>
              {subtitle}
            </p>
          </div>
        )}

        {/* Decorative line */}
        <div className="mt-8 flex justify-center">
          <div className={`w-24 h-1 rounded-full ${backgroundType === 'light' ? 'bg-blue-400 bg-opacity-30' : 'bg-white bg-opacity-30'}`}></div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      {backgroundType !== 'light' && (
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-transparent to-black opacity-10"></div>
      )}
    </section>
  );
};

export default PageHeader; 