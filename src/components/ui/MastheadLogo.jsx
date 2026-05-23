import React from 'react';

export default function MastheadLogo() {
  return (
    <div className="masthead-logo select-none pointer-events-none">
      {/* Elegant 4-pointed gold star glyph from 3.jpg */}
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 text-[#C9A96E] animate-pulse"
      >
        <path d="M12 2L14.8 9.2L22 12L14.8 14.8L12 22L9.2 14.8L2 12L9.2 9.2L12 2Z" />
      </svg>
    </div>
  );
}
