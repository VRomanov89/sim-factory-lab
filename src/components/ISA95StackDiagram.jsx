import React from 'react';

const layers = [
  {
    name: 'Level 4: Enterprise',
    icon: '🏢',
    color: 'bg-blue-700',
    description: 'Business planning & logistics (ERP, cloud, analytics)'
  },
  {
    name: 'Level 3: Site/MES',
    icon: '📊',
    color: 'bg-blue-600',
    description: 'Manufacturing operations management (MES, scheduling, quality)'
  },
  {
    name: 'Level 2: Area/SCADA',
    icon: '🖥️',
    color: 'bg-blue-500',
    description: 'Supervisory control (SCADA, HMI, data collection)'
  },
  {
    name: 'Level 1: Line/Control',
    icon: '⚙️',
    color: 'bg-blue-400',
    description: 'Control systems (PLCs, DCS, batch controllers)'
  },
  {
    name: 'Level 0: Cell/Process',
    icon: '🔌',
    color: 'bg-blue-300',
    description: 'Physical process (sensors, actuators, machines)'
  },
];

const ISA95StackDiagram = () => (
  <div className="w-full flex flex-col items-center my-12">
    <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">The ISA-95 Manufacturing Stack</h2>
    <div className="flex flex-col-reverse md:flex-col w-full max-w-2xl">
      {layers.map((layer, idx) => (
        <div
          key={layer.name}
          className={`flex items-center gap-4 p-6 rounded-2xl shadow-lg mb-4 ${layer.color} text-white relative z-10`}
          style={{ marginTop: idx !== 0 ? '-24px' : 0, border: '2px solid #fff', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
        >
          <span className="text-3xl md:text-4xl">{layer.icon}</span>
          <div>
            <div className="font-semibold text-lg md:text-xl">{layer.name}</div>
            <div className="text-sm md:text-base opacity-90">{layer.description}</div>
          </div>
        </div>
      ))}
    </div>
    <svg width="0" height="0">
      <defs>
        <linearGradient id="isa95-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
    </svg>
    <div className="mt-4 text-gray-600 text-center max-w-2xl">
      <p>
        ISA-95 defines a standard for integrating enterprise and control systems. Each layer has distinct roles, technologies, and protocols, making integration a complex but essential task for modern manufacturing.
      </p>
    </div>
  </div>
);

export default ISA95StackDiagram; 