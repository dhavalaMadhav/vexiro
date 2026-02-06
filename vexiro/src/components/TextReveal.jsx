import React from 'react';
import { motion } from 'framer-motion';
import { unifiedVariants } from '../utils/animations';

const TextReveal = ({ children, className = "", delay = 0 }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        variants={unifiedVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10%" }}
        custom={delay} 
        // Note: unifiedVariants doesn't currently use 'custom' for delay in the 'show' variant 
        // but we can override transition if needed. 
        // For simplicity, we rely on the default duration/ease in unifiedVariants.
        // If we want stagger, we usually use staggerContainer on parent.
        // But for single text reveal, this is fine.
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TextReveal;
