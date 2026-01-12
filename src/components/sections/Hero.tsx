import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations';
import { scrollToElement } from '../../utils/animations';

const Hero = () => {
  const { t } = useTranslation();
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const fullTitle = t('hero.title');

  // Typing effect
  useEffect(() => {
    if (currentTitleIndex < fullTitle.length) {
      const timeout = setTimeout(() => {
        setDisplayedTitle(fullTitle.slice(0, currentTitleIndex + 1));
        setCurrentTitleIndex(currentTitleIndex + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentTitleIndex, fullTitle]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="text-center"
        >
          {/* Greeting */}
          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-gray-400 mb-4"
          >
            {t('hero.greeting')}
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={staggerItem}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="gradient-text">{t('hero.name')}</span>
          </motion.h1>

          {/* Animated Title with Typing Effect */}
          <motion.div
            variants={staggerItem}
            className="h-20 md:h-24 mb-8 flex items-center justify-center"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300">
              {displayedTitle}
              <span className="animate-pulse">|</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12"
          >
            {t('hero.description')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToElement('projects')}
              className="btn-primary text-lg px-8 py-4"
            >
              {t('hero.cta1')}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToElement('contact')}
              className="btn-secondary text-lg px-8 py-4"
            >
              {t('hero.cta2')}
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { delay: 1.5 }
            }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              onClick={() => scrollToElement('about')}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Scroll Down"
            >
              <ChevronDown className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-600/20 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
};

export default Hero;

