import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Card = ({ children, className, onClick }: CardProps) => {
  const Component = onClick ? motion.button : motion.div;

  return (
    <Component
      className={clsx(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        "transition-colors hover:bg-accent/5",
        className
      )}
      onClick={onClick}
      whileHover={onClick && { scale: 1.02 }}
      whileTap={onClick && { scale: 0.98 }}
    >
      {children}
    </Component>
  );
};

export default Card;