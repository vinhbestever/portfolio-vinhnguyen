// Fade in animation
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

// Fade in up animation
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  },
};

// Fade in down animation
export const fadeInDown = {
  initial: { opacity: 0, y: -60 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  },
};

// Slide in from left
export const slideInLeft = {
  initial: { opacity: 0, x: -100 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7 }
  },
};

// Slide in from right
export const slideInRight = {
  initial: { opacity: 0, x: 100 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.7 }
  },
};

// Scale in animation
export const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  },
};

// Stagger container for child animations
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Stagger item
export const staggerItem = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

// Page transition
export const pageTransition = {
  initial: { opacity: 0, x: -20 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4 }
  },
  exit: { 
    opacity: 0, 
    x: 20,
    transition: { duration: 0.4 }
  },
};

// Hover scale animation
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3 }
};

// Hover lift animation
export const hoverLift = {
  y: -10,
  transition: { duration: 0.3 }
};

// Smooth scroll to element
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
