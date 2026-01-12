import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { projects } from '../../data/projects';
import { fadeInUp, staggerContainer } from '../../utils/animations';

type FilterType = 'all' | 'frontend' | 'ai' | 'system';

const Projects = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filters: { id: FilterType; label: string }[] = [
    { id: 'all', label: t('projects.filter.all') },
    { id: 'frontend', label: t('projects.filter.frontend') },
    { id: 'ai', label: t('projects.filter.ai') },
    { id: 'system', label: t('projects.filter.system') },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative z-10 bg-gray-950/30">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="gradient-text">{t('projects.title')}</span>
          </h2>
          <p className="text-xl text-gray-400">{t('projects.subtitle')}</p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-glow'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => {
              const title = i18n.language === 'vi' ? project.titleVi : project.title;
              const description = i18n.language === 'vi' ? project.descriptionVi : project.description;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="card p-0 overflow-hidden cursor-pointer group"
                  onClick={() => navigate(`/project/${project.id}`)}
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full flex items-center justify-center text-6xl font-bold text-white/10"
                    >
                      {project.category === 'frontend' && '⚛️'}
                      {project.category === 'ai' && '🤖'}
                      {project.category === 'system' && '⚙️'}
                    </motion.div>
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent-500 text-white text-xs font-semibold">
                        Featured
                      </div>
                    )}

                    {/* Overlay on Hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent flex items-end justify-center pb-4 gap-4"
                    >
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                          className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-primary-600 transition-colors"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={(e) => e.stopPropagation()}
                          className="p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-primary-600 transition-colors"
                          aria-label="GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                      )}
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">
                      {title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-full bg-primary-600/20 border border-primary-500/30 text-primary-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Show message if no projects found */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400 py-20"
          >
            <p className="text-xl">No projects found in this category.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;

