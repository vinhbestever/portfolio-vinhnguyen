import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Calendar, Briefcase } from 'lucide-react';
import { experiences } from '../../data/experience';
import { fadeInUp, slideInLeft, slideInRight } from '../../utils/animations';

const Experience = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="experience"
      className="section-padding relative z-10 bg-gray-950/30"
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">{t('experience.title')}</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 origin-top transform md:-translate-x-1/2"
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial="initial"
                animate={inView ? 'animate' : 'initial'}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                transition={{ delay: 0.2 * index }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.2 * index + 0.3, type: 'spring' }}
                  className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-gray-950 transform md:-translate-x-1/2 z-10"
                >
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-primary-500 rounded-full opacity-50"
                  />
                </motion.div>

                {/* Content Card */}
                <div
                  className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="card p-6 hover:shadow-glow-lg"
                  >
                    {/* Company & Role */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-primary-400 font-semibold flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="text-primary-400 mr-2">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-primary-600/20 border border-primary-500/30 text-primary-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
