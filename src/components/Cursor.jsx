import { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Cursor() {
  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const x  = useSpring(mx, { stiffness: 220, damping: 26 });
  const y  = useSpring(my, { stiffness: 220, damping: 26 });

  useEffect(() => {
    const move = (e) => {
      mx.set(e.clientX - 7);
      my.set(e.clientY - 7);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mx, my]);

  return (
    <motion.div
      style={{ x, y }}
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      aria-hidden="true"
    >
      {/* Outer ring */}
      <div
        style={{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          border: '1.5px solid rgba(196, 147, 74, 0.75)',
          mixBlendMode: 'normal',
        }}
      />
    </motion.div>
  );
}
