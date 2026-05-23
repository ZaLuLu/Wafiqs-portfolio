import React, { useEffect } from 'react';
import VerticalBinderViewer from './components/magazine/VerticalBinderViewer';

export default function App() {
  // Console easter egg
  useEffect(() => {
    console.log('%c Wafiq Nawaz ', 'background:#C9A96E;color:#0D0C0A;font-size:20px;font-weight:bold;padding:4px 12px;');
    console.log('%c Full-Stack Developer · Cybersecurity Student · Open to Work 2026 ', 'color:#F5F1EB;font-size:12px;font-family:monospace;');
    console.log('%c wafiqnawaz@outlook.com · github.com/ZaLuLu ', 'color:#C9A96E;font-size:11px;font-family:monospace;');
  }, []);

  return (
    <div className="w-full min-h-screen bg-[#0D0C0A] overflow-x-hidden">
      <VerticalBinderViewer />
    </div>
  );
}

