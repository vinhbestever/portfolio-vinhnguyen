import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { fadeInUp, slideInLeft, slideInRight } from '../../utils/animations';

const About = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const stats = [
    { label: t('about.stats.experience'), value: '3+' },
    { label: t('about.stats.projects'), value: '20+' },
    { label: t('about.stats.technologies'), value: '25+' },
  ];

  return (
    <section id="about" ref={sectionRef} className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">{t('about.title')}</span>
          </h2>
          <p className="text-xl text-gray-400">{t('about.subtitle')}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar with Parallax */}
          <motion.div
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            variants={slideInLeft}
            style={{ y }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Placeholder for avatar/photo */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 glass rounded-3xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-8xl font-bold gradient-text">
                  VN
                </div>
              </div>
              
              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-10 -right-10 w-32 h-32 border-4 border-primary-500/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-10 -left-10 w-40 h-40 border-4 border-secondary-500/30 rounded-full"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="initial"
            animate={inView ? 'animate' : 'initial'}
            variants={slideInRight}
            className="space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              {t('about.description')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.2 * index, duration: 0.5 }}
                  className="text-center p-6 card"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Skills Preview */}
            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'TypeScript', 'LangChain', 'Prompt Engineering', 'Docker', 'AWS'].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-600/20 to-secondary-600/20 border border-primary-500/30 text-sm font-medium hover:scale-110 transition-transform cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

