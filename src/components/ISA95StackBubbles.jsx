import React from 'react';

const layers = [
  {
    name: 'Level 4: Enterprise (ERP)',
    icon: (
      <svg className="w-12 h-12 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M16 3v4M8 3v4m-5 4h18" /></svg>
    ),
    color: 'bg-blue-50',
    border: 'border-blue-200',
    description: `The Enterprise layer is responsible for business planning, resource management, and logistics. This is where Enterprise Resource Planning (ERP) systems operate, integrating business processes such as finance, HR, supply chain, and order management. Data flows from the shop floor to the boardroom, enabling data-driven decisions. Typical protocols: REST APIs, SOAP, custom integrations. Example systems: SAP ERP, Oracle, Microsoft Dynamics.`
  },
  {
    name: 'Level 3: Manufacturing Operations (MES)',
    icon: (
      <svg className="w-12 h-12 text-purple-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    ),
    color: 'bg-purple-50',
    border: 'border-purple-200',
    description: `The MES layer manages manufacturing operations, including scheduling, quality, production tracking, and performance analysis. MES bridges the gap between business systems and the plant floor, orchestrating workflows and collecting real-time data. Typical protocols: OPC UA, REST APIs, SQL. Example systems: Siemens Opcenter, Rockwell FactoryTalk, Wonderware MES.`
  },
  {
    name: 'Level 2: Supervisory Control (SCADA/HMI)',
    icon: (
      <svg className="w-12 h-12 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
    color: 'bg-green-50',
    border: 'border-green-200',
    description: `SCADA (Supervisory Control and Data Acquisition) and HMI (Human-Machine Interface) systems provide real-time monitoring, visualization, and control of plant operations. Operators use these systems to interact with processes, respond to alarms, and ensure safety. Typical protocols: OPC UA, Modbus, MQTT, proprietary drivers. Example systems: Ignition, WinCC, FactoryTalk View.`
  },
  {
    name: 'Level 1: Control Systems (PLC/DCS)',
    icon: (
      <svg className="w-12 h-12 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
    ),
    color: 'bg-yellow-50',
    border: 'border-yellow-200',
    description: `This layer includes PLCs (Programmable Logic Controllers), DCS (Distributed Control Systems), and other automation controllers. These devices execute real-time logic, manage interlocks, and directly control machinery. They are the backbone of industrial automation. Typical protocols: Ethernet/IP, Profinet, Modbus TCP, proprietary fieldbuses. Example vendors: Siemens, Allen-Bradley, Schneider Electric.`
  },
  {
    name: 'Level 0: Physical Process (Sensors/Actuators)',
    icon: (
      <svg className="w-12 h-12 text-red-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20h.01M8.111 16.404a5.5 5.5 0 017.778 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>
    ),
    color: 'bg-red-50',
    border: 'border-red-200',
    description: `The foundation of the stack, this layer consists of the actual physical equipment: sensors, actuators, motors, valves, and machines. These devices generate the raw data and perform the actions that drive manufacturing. Typical protocols: analog/digital signals, IO-Link, fieldbus. Example devices: temperature sensors, VFDs, robotic arms.`
  },
];

const ISA95StackBubbles = () => (
  <div className="w-full flex flex-col items-center my-16">
    <h2 className="text-3xl font-bold mb-10 text-gray-900 text-center">The ISA-95 Manufacturing Stack</h2>
    <div className="relative w-full max-w-2xl flex flex-col items-center">
      {/* Vertical line connecting bubbles */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-2 bg-gradient-to-b from-blue-200 via-purple-200 to-red-200 z-0" style={{top: 40, bottom: 40}} />
      {layers.map((layer, idx) => (
        <div
          key={layer.name}
          className={`relative z-10 flex flex-col md:flex-row items-center md:items-start w-full mb-12 p-8 rounded-3xl shadow-xl border-2 ${layer.color} ${layer.border}`}
          style={{ minHeight: '180px' }}
        >
          <div className="flex-shrink-0 flex items-center justify-center w-24 h-24 rounded-full bg-white shadow-md mr-0 md:mr-8 mb-6 md:mb-0">
            {layer.icon}
          </div>
          <div>
            <div className="font-bold text-xl md:text-2xl mb-2 text-gray-900">{layer.name}</div>
            <div className="text-gray-700 text-base md:text-lg leading-relaxed">{layer.description}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default ISA95StackBubbles; 