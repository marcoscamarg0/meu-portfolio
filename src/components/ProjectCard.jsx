import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = memo(({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: index * 0.1 
      }
    }
  };

  return (
    <motion.article
      variants={cardVariants}
      className="bg-white dark:bg-gray-800/50 rounded-xl overflow-hidden shadow-md dark:shadow-none group transition-colors duration-300"
      aria-label={`Project: ${project.title}`}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div 
          className="absolute inset-0 bg-primary dark:bg-blue-500 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="flex space-x-4">
            <a 
              href={project.demo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white dark:bg-gray-900 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={`View live demo of ${project.title}`}
            >
              <FiExternalLink className="w-5 h-5 text-primary dark:text-white" aria-hidden="true" />
            </a>
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white dark:bg-gray-900 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={`View source code of ${project.title} on GitHub`}
            >
              <FiGithub className="w-5 h-5 text-primary dark:text-white" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2" role="list" aria-label="Technologies used">
          {project.technologies.map((tech, techIndex) => (
            <span 
              key={techIndex}
              className="text-xs px-2 py-1 bg-primary/10 dark:bg-blue-500/20 text-primary dark:text-blue-400 rounded-md"
              role="listitem"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
});

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    demo: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;