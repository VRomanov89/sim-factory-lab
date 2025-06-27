import React from "react";

const SimFactoryLogo = ({ size = 64, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Sim Factory Lab Logo"
  >
    {/* Simple square with rounded corners - clean and modern */}
    <rect x="12" y="12" width="40" height="40" rx="8" fill="#2563eb" />
    
    {/* Simple geometric accent */}
    <rect x="20" y="20" width="24" height="4" fill="white" />
    <rect x="20" y="28" width="16" height="4" fill="white" />
    <rect x="20" y="36" width="12" height="4" fill="white" />
  </svg>
);

export default SimFactoryLogo; 