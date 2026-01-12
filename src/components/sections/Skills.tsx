import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Server } from 'lucide-react';
import { skillCategories } from '../../data/skills';
import { fadeInUp, staggerContainer, staggerItem } from '../../utils/animations';

const Skills = () => {
  const { t, i18n } = useTranslation();
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categoryIcons = {
    frontend: Code,
    ai: Brain,
    system: Server,
  };

  return (
    <section id="skills" className="section-padding relative z-10">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">{t('skills.title')}</span>
          </h2>
          <p className="text-xl text-gray-400">{t('skills.subtitle')}</p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => {
            const Icon = categoryIcons[category.id as keyof typeof categoryIcons];
            const title = i18n.language === 'vi' ? category.titleVi : category.title;
            const description = i18n.language === 'vi' ? category.descriptionVi : category.description;

            return (
              <motion.div
                key={category.id}
                variants={staggerItem}
                whileHover={{ y: -10 }}
                className="card p-6"
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ delay: 0.2 * categoryIndex, type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-secondary-600 flex items-center justify-center mb-6"
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold mb-3 gradient-text">
                  {title}
                </h3>
                <p className="text-gray-400 mb-6">{description}</p>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.1 * categoryIndex + 0.05 * skillIndex }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            delay: 0.1 * categoryIndex + 0.05 * skillIndex,
                            duration: 1,
                            ease: 'easeOut',
                          }}
                          className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Floating Tech Icons */}
        <div className="relative mt-20 h-32 overflow-hidden">
          <div className="flex gap-8 animate-marquee">
            {['React', 'TypeScript', 'Python', 'Docker', 'AWS', 'TensorFlow', 'Kubernetes', 'Node.js', 
              'Vue', 'Next.js', 'PyTorch', 'Linux', 'Redux', 'FastAPI', 'Terraform', 'Git'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 0.5, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.05 * index }}
                whileHover={{ opacity: 1, scale: 1.1 }}
                className="flex-shrink-0 px-6 py-3 rounded-full glass text-sm font-medium cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

