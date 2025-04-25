import { Variant } from 'framer-motion';

// Types for animation variants
interface TransitionConfig {
  duration?: number;
  delay?: number;
  ease?: string | number[];
  type?: string;
  stiffness?: number;
  damping?: number;
  mass?: number;
}

interface VariantProps {
  hidden: Variant;
  visible: Variant;
}

// Fade in from bottom
export const fadeInUp: VariantProps = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

// Fade in from top
export const fadeInDown: VariantProps = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Header animation variant (used in most sections)
export const headerVariant: VariantProps = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Spring animation for cards and content items
export const springUpItem: VariantProps = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 80
    }
  }
};

// More pronounced spring effect
export const strongSpringUpItem: VariantProps = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100
    }
  }
};

// Container for staggered children animations
export const staggerContainer = (delayChildren: number = 0.1, staggerChildren: number = 0.1): VariantProps => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren
    }
  }
});

// Image reveal with subtle scale
export const imageReveal: VariantProps = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Simple fade in animation
export const fadeIn: VariantProps = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

// Hover animation for interactive elements
export const hoverScale = {
  scale: 1.03,
  y: -5,
  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  transition: { duration: 0.2 }
};

// Floating animation (for scroll indicators, icons)
export const floatingAnimation = {
  y: [0, 10, 0],
  transition: { 
    repeat: Infinity, 
    duration: 2,
    ease: "easeInOut" 
  }
}; 