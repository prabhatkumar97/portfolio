import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassMorphicCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const GlassMorphicCard: React.FC<GlassMorphicCardProps> = ({ 
  children, 
  className = '',
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`backdrop-blur-sm bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 rounded-xl shadow-lg p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassMorphicCard;