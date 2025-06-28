import React from 'react';

const illustrations = {
  factory: (
    <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-72 md:h-[400px] lg:h-[500px]">
      {/* Ground */}
      <rect x="0" y="170" width="400" height="30" fill="#e5e7eb" />
      {/* Factory buildings */}
      <rect x="30" y="120" width="60" height="50" fill="#9ca3af" />
      <rect x="100" y="80" width="80" height="90" fill="#6b7280" />
      <rect x="190" y="120" width="40" height="50" fill="#9ca3af" />
      <rect x="240" y="60" width="100" height="110" fill="#4b5563" />
      <rect x="350" y="150" width="30" height="20" fill="#9ca3af" />
      {/* Chimney */}
      <rect x="260" y="30" width="16" height="40" fill="#9ca3af" />
      <ellipse cx="268" cy="30" rx="12" ry="6" fill="#d1d5db" className="animate-pulse" />
      {/* Conveyor belt */}
      <rect x="60" y="160" width="280" height="10" rx="5" fill="#374151" />
      <g className="animate-move-belt" style={{ animation: 'moveBelt 3s linear infinite' }}>
        {[...Array(10)].map((_, i) => (
          <circle key={i} cx={80 + i * 28} cy="165" r="4" fill="#fbbf24" />
        ))}
      </g>
      {/* Gears */}
      <g className="animate-spin-slow" style={{ transformOrigin: '60px 190px' }}>
        <circle cx="60" cy="190" r="14" fill="#fbbf24" />
        <rect x="58" y="176" width="4" height="10" fill="#f59e42" />
        <rect x="58" y="194" width="4" height="10" fill="#f59e42" />
      </g>
      <g className="animate-spin-slower" style={{ transformOrigin: '120px 195px' }}>
        <circle cx="120" cy="195" r="10" fill="#fbbf24" />
        <rect x="118" y="187" width="4" height="7" fill="#f59e42" />
        <rect x="118" y="198" width="4" height="7" fill="#f59e42" />
      </g>
      {/* Blinking lights */}
      <circle cx="140" cy="100" r="5" fill="#22d3ee" className="animate-pulse" />
      <circle cx="320" cy="80" r="5" fill="#f87171" className="animate-pulse" />
      <style>{`
        @keyframes moveBelt {
          0% { transform: translateX(0); }
          100% { transform: translateX(-28px); }
        }
        .animate-move-belt { animation: moveBelt 3s linear infinite; }
        .animate-spin-slow { animation: spin 8s linear infinite; }
        .animate-spin-slower { animation: spin 16s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </svg>
  ),
  robot: (
    <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-72 md:h-[400px] lg:h-[500px]">
      <rect x="0" y="170" width="400" height="30" fill="#e5e7eb" />
      <rect x="170" y="120" width="60" height="50" rx="10" fill="#6b7280" />
      <circle cx="200" cy="100" r="40" fill="#9ca3af" />
      <rect x="190" y="60" width="20" height="20" fill="#fbbf24" />
      <rect x="180" y="170" width="10" height="30" fill="#4b5563" />
      <rect x="210" y="170" width="10" height="30" fill="#4b5563" />
      <circle cx="200" cy="100" r="10" fill="#fbbf24" className="animate-pulse" />
      {/* Animated arm */}
      <rect x="240" y="120" width="40" height="10" rx="5" fill="#fbbf24" className="animate-move-arm" style={{ animation: 'moveArm 2s ease-in-out infinite alternate' }} />
      <style>{`
        @keyframes moveArm {
          0% { transform: translateY(0); }
          100% { transform: translateY(-20px); }
        }
        .animate-move-arm { animation: moveArm 2s ease-in-out infinite alternate; }
        .animate-spin-slow { animation: spin 8s linear infinite; }
        .animate-spin-slower { animation: spin 16s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </svg>
  ),
  data: (
    <svg viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-72 md:h-[400px] lg:h-[500px]">
      <rect x="0" y="170" width="400" height="30" fill="#e5e7eb" />
      <rect x="40" y="120" width="320" height="20" fill="#60a5fa" />
      <circle cx="60" cy="130" r="10" fill="#2563eb" className="animate-pulse" />
      <circle cx="120" cy="130" r="10" fill="#2563eb" className="animate-pulse" />
      <circle cx="200" cy="130" r="10" fill="#2563eb" className="animate-pulse" />
      <circle cx="300" cy="130" r="10" fill="#2563eb" className="animate-pulse" />
      <rect x="100" y="80" width="40" height="30" fill="#fbbf24" />
      <rect x="260" y="80" width="40" height="30" fill="#fbbf24" />
      {/* Animated data lines */}
      <polyline points="60,130 120,90 200,110 300,70" fill="none" stroke="#22d3ee" strokeWidth="4" className="animate-dash" style={{ animation: 'dash 2s linear infinite' }} />
      <style>{`
        @keyframes dash {
          to { stroke-dashoffset: 100; }
        }
        .animate-dash { stroke-dasharray: 20; stroke-dashoffset: 0; animation: dash 2s linear infinite; }
      `}</style>
    </svg>
  )
};

const accentColors = {
  blue: 'from-blue-600 via-blue-700 to-blue-800',
  green: 'from-green-600 via-green-700 to-green-800',
  yellow: 'from-yellow-400 via-yellow-500 to-yellow-600',
  gray: 'from-gray-700 via-gray-800 to-gray-900'
};

const VisualPageHeader = ({
  title,
  subtitle,
  illustrationType = 'factory',
  accentColor = 'blue',
  videoSrc = '',
  className = ''
}) => (
  <section className={`relative min-h-[500px] flex flex-col justify-center overflow-hidden bg-gradient-to-br ${accentColors[accentColor]} ${className}`}>
    {/* Video Background */}
    {videoSrc ? (
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        poster=""
      />
    ) : (
      <div className="absolute inset-x-0 bottom-0 z-0 pointer-events-none">
        {illustrations[illustrationType]}
      </div>
    )}
    {/* Overlay for contrast */}
    <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
    {/* Content */}
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col justify-center items-center min-h-[500px]">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 drop-shadow-2xl">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed drop-shadow-xl font-semibold">
          {subtitle}
        </p>
      )}
      <div className="mt-8 flex justify-center">
        <div className="w-24 h-1 rounded-full bg-white bg-opacity-30"></div>
      </div>
    </div>
  </section>
);

export default VisualPageHeader; 