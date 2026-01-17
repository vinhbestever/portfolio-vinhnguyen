import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import { fadeInUp, pageTransition } from '../utils/animations';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [imageError, setImageError] = useState(false);

  const project = projects.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Project not found</h2>
          <button
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const title = i18n.language === 'vi' ? project.titleVi : project.title;
  const description = i18n.language === 'vi' ? project.descriptionVi : project.description;
  const longDescription = i18n.language === 'vi' ? project.longDescriptionVi : project.longDescription;

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen pt-32 pb-20 px-6 lg:px-12"
    >
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.button
          variants={fadeInUp}
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </motion.button>

        {/* Project Header */}
        <motion.div variants={fadeInUp}>
          <div className="mb-6">
            {project.featured && (
              <span className="inline-block px-3 py-1 rounded-full bg-accent-500 text-white text-xs font-semibold mb-4">
                Featured Project
              </span>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-4">
              {title}
            </h1>
            <p className="text-xl text-gray-300">{description}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-12">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary flex items-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                Live Demo
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                View Code
              </motion.a>
            )}
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div
          variants={fadeInUp}
          className="relative h-96 rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-primary-600/20 to-secondary-600/20"
        >
          {imageError ? (
            <div className="w-full h-full flex items-center justify-center text-9xl">
              {project.category === 'enterprise' && '🏢'}
              {project.category === 'personal' && '💡'}
            </div>
          ) : (
            <img
              src={project.image}
              alt={title}
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          )}
        </motion.div>

        {/* Demo Video (YouTube/External) */}
        {project.videoUrl && (
          <motion.div
            variants={fadeInUp}
            className="relative rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 p-4"
          >
            <h2 className="text-2xl font-bold mb-4">Product Demo</h2>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={project.videoUrl}
                title={`${title} - Demo Video`}
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}

        {/* Local Demo Video */}
        {project.localVideoUrl && (
          <motion.div
            variants={fadeInUp}
            className="relative rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 p-4"
          >
            <h2 className="text-2xl font-bold mb-4">Product Demo</h2>
            <video
              controls
              className="w-full rounded-lg"
              preload="metadata"
            >
              <source src={project.localVideoUrl} type="video/mp4" />
              <source src={project.localVideoUrl} type="video/quicktime" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        )}

        {/* Project Details */}
        <motion.div variants={fadeInUp} className="space-y-8">
          {/* Description */}
          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-4">About the Project</h2>
            <div 
              className="text-gray-300 leading-relaxed prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: longDescription }}
            />
          </div>

          {/* Technologies */}
          <div className="card p-8">
            <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-primary-600/20 to-secondary-600/20 border border-primary-500/30 font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Back Button (Bottom) */}
        <motion.div variants={fadeInUp} className="mt-12 text-center">
          <motion.button
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
          >
            Back to All Projects
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;

