import React from 'react';
import { motion } from 'framer-motion';

export default function GoldRule({ label = '◆' }) {
  return (
    <div className="flex items-center gap-4 w-full select-none my-6">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'right' }}
        className="flex-1 h-[0.5px] bg-gradient-to-r from-transparent to-[#C9A96E]/25"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.4 }}
        className="font-mono text-[9px] tracking-[0.2em] text-[#C9A96E]"
      >
        {label}
      </motion.span>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: 'left' }}
        className="flex-1 h-[0.5px] bg-gradient-to-r from-[#C9A96E]/25 to-transparent"
      />
    </div>
  );
}
