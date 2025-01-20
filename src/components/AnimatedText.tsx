import { motion, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useMotionPreferences } from '../hooks/useMotionPreferences';
import { useState, useEffect } from 'react';

interface AnimatedTextProps {
  scrollPosition: number;
  className?: string;
}

export function AnimatedText({ scrollPosition, className }: AnimatedTextProps) {
  const prefersReducedMotion = useMotionPreferences();
  const [currentText, setCurrentText] = useState("[SYNTHRUS]//");
  
  // Smooth scroll progress
  const smoothProgress = useSpring(scrollPosition, {
    stiffness: 200, // Increased stiffness for snappier response
    damping: 20,    // Reduced damping for more dynamic movement
    restDelta: 0.001
  });

  // Get text based on scroll position
  useEffect(() => {
    let text = "[SYNTHRUS]//";
    if (scrollPosition < 45) {
      text = "[SYNTHRUS]//";
    } else if (scrollPosition < 100) {
      text = "[SYN]//";
    } else {
      text = "//renocrypt";
    }
    
    if (text !== currentText) {
      setCurrentText(text);
    }
  }, [scrollPosition]);

  // Dynamic scale and blur effects
  const scale = useTransform(smoothProgress,
    [0, 30, 100],
    [1, 1.02, 0.98]
  );

  const blur = useTransform(smoothProgress,
    [0, 30, 100],
    ["0px", "1px", "0px"]
  );

  if (prefersReducedMotion) {
    return <span className={className}>{currentText}</span>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={currentText}
        className={className}
        style={{
          scale,
          filter: blur as any,
          display: 'inline-block',
          position: 'relative',
          perspective: '1000px'
        }}
        initial={{ 
          x: -50,
          opacity: 0,
          rotateY: -80
        }}
        animate={{ 
          x: 0,
          opacity: 1,
          rotateY: 0
        }}
        exit={{ 
          x: 50,
          opacity: 0,
          rotateY: 80
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.5
        }}
      >
        {/* Glitch effect container */}
        <motion.div
          animate={{
            x: [-1, 1, -1],
            transition: {
              repeat: Infinity,
              repeatType: "mirror",
              duration: 0.1,
              ease: "linear"
            }
          }}
        >
          {/* Text shadow effect */}
          <motion.span
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              color: 'var(--ifm-color-primary)',
              opacity: 0.5,
              clipPath: 'inset(10% 0% 90% 0%)',
              transform: 'translateX(-2px)',
              filter: 'blur(1px)'
            }}
          >
            {currentText}
          </motion.span>
          
          {/* Main text */}
          <motion.span
            style={{
              position: 'relative',
              zIndex: 1
            }}
          >
            {currentText}
          </motion.span>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 