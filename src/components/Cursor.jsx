import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const x = useSpring(mx, { stiffness: 220, damping: 26, mass: 0.6 });
  const y = useSpring(my, { stiffness: 220, damping: 26, mass: 0.6 });
  const [cursorState, setCursorState] = useState('default'); // 'default' | 'hover' | 'view'

  useEffect(() => {
    const move = (e) => {
      mx.set(e.clientX - 7);
      my.set(e.clientY - 7);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select');
      const isProjectFrame = target.closest('.project-frame');

      if (isProjectFrame) {
        setCursorState('view');
      } else if (isInteractive) {
        setCursorState('hover');
      } else {
        setCursorState('default');
      }
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mx, my]);

  // Prevent cursor rendering on touch devices
  const isTouchDevice = typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  if (isTouchDevice) return null;

  const cursorSize = cursorState === 'view' ? 64 : cursorState === 'hover' ? 35 : 14;

  return (
    <motion.div
      style={{
        x,
        y,
        width: cursorSize,
        height: cursorSize,
        translateX: cursorState === 'view' ? -25 : cursorState === 'hover' ? -10.5 : 0,
        translateY: cursorState === 'view' ? -25 : cursorState === 'hover' ? -10.5 : 0,
      }}
      animate={{
        backgroundColor: cursorState === 'view' ? 'rgba(26, 94, 219, 0.12)' : cursorState === 'hover' ? 'rgba(201,169,110,0.12)' : 'rgba(201,169,110,0)',
        borderColor: cursorState === 'view' ? '#1A5EDB' : '#C9A96E',
        borderRadius: cursorState === 'view' ? '4px' : '50%',
      }}
      transition={{ type: 'spring', stiffness: 220, damping: 26 }}
      className="fixed top-0 left-0 z-[9999] border border-[#C9A96E] pointer-events-none flex items-center justify-center overflow-hidden"
    >
      {cursorState === 'view' && (
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          className="font-mono text-[8px] tracking-[0.2em] font-bold text-[#1A5EDB]"
        >
          + VIEW
        </motion.span>
      )}
    </motion.div>
  );
}
