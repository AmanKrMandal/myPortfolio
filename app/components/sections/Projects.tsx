'use client';

import React, { useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FiGithub, FiExternalLink, FiFolder, FiStar, FiGitBranch, FiArrowRight } from 'react-icons/fi';
import { RiBrainLine } from 'react-icons/ri';
import { images } from '@/app/config/images';

const projects = [
  {
    title: 'Todio - E-Commerce Platform',
    description: 'A modern e-commerce platform built with React.js and Bootstrap.',
    image: '/images/todo.png',
    tags: ['React.js', 'JavaScript', 'Bootstrap', 'jQuery', 'css', 'html'],
    github: 'https://github.com/AmanKrMandal/todio_app',
    live: 'https://todio-app.netlify.app/',
    category: 'Frontend',
    stats: {
      stars: '3',
      forks: '1',
      size: '2.4MB'
    }
  },
  {
    title: 'Blog App',
    description: 'Blog app manages all the posts by user and admin where file upload, likes & dislikes of a post, Number Views of a post, create a category, comments on a post, Image Resizing, block & unblock of a user, profile dashboard',
    image: '/images/blogApp.png',
    tags: ['React', 'Node.js', 'JWT', 'Material-UI', 'css', 'Redux', 'MongoDB', 'Express'],
    github: 'https://github.com/AmanKrMandal/mern-Blog-App-cient',
    live: 'https://aman-mern-blog-website.netlify.app/',
    category: 'Full Stack',
    stats: {
      stars: '2',
      forks: '1',
      size: '1.8MB'
    }
  },
  {
    title: 'Portfolio Dashboard',
    description: 'Creative frontend engineer crafting high-performance, scalable web apps with React, Next.js, and modern UI for seamless user experiences.',
    image: '/images/portfolio.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer-motion', 'HTML', 'CSS'],
    github: 'https://github.com',
    live: 'https://project.com',
    category: 'Frontend',
    stats: {
      stars: '156',
      forks: '42',
      size: '3.1MB'
    }
  },
  {
    title: 'Gullar App',
    description: 'Gullar is a single-vendor B2C e-commerce app with admin dashboard and user interface for product management, orders, cart, and order history.',
    image: '/images/gullar.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Bootstrap', 'Redux', 'JWT', 'Razorpay'],
    github: 'https://github.com/deepakmp444/gullar-ecommerce',
    live: 'https://gullar.in/',
    category: 'Full Stack',
    stats: {
      stars: '4',
      forks: '1',
      size: '4.2MB'
    }
  },
  {
    title: 'Weather Application',
    description: 'Beautiful weather app with animated visualizations.',
    image: 'https://picsum.photos/800/600?random=5',
    tags: ['React.js', 'CSS', 'Weather API', 'SCSS'],
    github: 'https://github.com/AmanKrMandal/Weather-project',
    live: 'https://weather-aman-mandal.netlify.app/',
    category: 'Frontend',
    stats: {
      stars: '95',
      forks: '28',
      size: '1.5MB'
    }
  },
  {
    title: 'IMDB Rating App',
    description: 'IMDb rating is a score out of 10 that reflects the average user rating for a movie or show, indicating its popularity and quality.',
    image: '/images/urlshortnerv3.png',
    tags: ['React', 'api integration', 'Bootstrap', 'scss'],
    github: 'https://github.com/AmanKrMandal/IMDB-Rating',
    live: 'https://imdb-rating-aman.netlify.app/',
    category: 'Frontend',
    stats: {
      stars: '178',
      forks: '47',
      size: '2.9MB'
    }
  }
];

const categories = ['All', 'Full Stack', 'Frontend', 'AI/ML'];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.48, 0.15, 0.25, 0.96]
    }
  }),
  hover: {
    y: -10,
    transition: {
      duration: 0.3,
      ease: [0.48, 0.15, 0.25, 0.96]
    }
  }
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const ref = React.useRef(null);
  const inView = useInView(ref, { amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const filteredProjects = projects.filter(project => 
    selectedCategory === 'All' ? true : project.category === selectedCategory
  );

  return (
    <section className="relative py-32 overflow-hidden" id="projects" ref={ref}>
      {/* Animated background */}
      <motion.div 
        className="absolute inset-0 bg-slate-900"
        style={{ opacity }}
      >
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(59,130,246,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.1) 1px, transparent 1px)',
            backgroundSize: '4rem 4rem',
            y: backgroundY
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured
            <span className="relative inline-block ml-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Projects
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore my latest projects showcasing modern web development and creative solutions.
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${selectedCategory === category
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
                }`}
            >
              {selectedCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </motion.button>
          ))}
        </div>

        {selectedCategory === 'AI/ML' ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-xl p-8 max-w-3xl mx-auto text-center"
          >
            <div className="mb-6">
              <RiBrainLine className="w-16 h-16 text-amber-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-amber-100 mb-4">
                AI/ML Projects Coming Soon
              </h3>
              <p className="text-amber-200/80 mb-6">
                Exciting artificial intelligence and machine learning projects are currently in learning and development. 
                Stay tuned for innovative solutions in:
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-xl mx-auto">
              {[
                'Natural Language Processing',
                'Computer Vision',
                'Deep Learning',
                'Neural Networks'
              ].map((tech) => (
                <div
                  key={tech}
                  className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20"
                >
                  <span className="text-amber-300">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="group relative"
              >
                {/* Project Card */}
                <div className="relative bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50
                              backdrop-blur-sm transition-all duration-500 group-hover:border-amber-200/30
                              group-hover:shadow-[0_0_30px_-5px_rgba(252,211,77,0.3)]">
                
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent 
                                  opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-100/10 via-orange-100/10 to-transparent 
                                  opacity-0 group-hover:opacity-100 transition-all duration-500
                                  backdrop-blur-[2px] group-hover:backdrop-blur-[1px]" />
                  </div>

                  {/* Project Info */}
                  <div className="p-6 relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-500">
                        {project.title}
                      </h3>
                      <motion.div
                        whileHover={{ rotate: -45 }}
                        transition={{ duration: 0.2 }}
                      >
                        <FiArrowRight className="w-5 h-5 text-blue-400 opacity-0 group-hover:opacity-100 
                                               transition-all duration-500 group-hover:translate-x-1" />
                      </motion.div>
                    </div>

                    <p className="text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors duration-500">
                      {project.description}
                    </p>

                  {/* Project Stats */}
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-1 text-sm text-gray-400 bg-slate-700/30 px-2 py-1 rounded-full
                               group-hover:bg-yellow-500/10 group-hover:text-yellow-300 transition-all duration-500"
                    >
                      <FiStar className="w-4 h-4 text-yellow-400" />
                      <span>{project.stats.stars}</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-1 text-sm text-gray-400 bg-slate-700/30 px-2 py-1 rounded-full
                               group-hover:bg-green-500/10 group-hover:text-green-300 transition-all duration-500"
                    >
                      <FiGitBranch className="w-4 h-4 text-green-400" />
                      <span>{project.stats.forks}</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-1 text-sm text-gray-400 bg-slate-700/30 px-2 py-1 rounded-full
                               group-hover:bg-purple-500/10 group-hover:text-purple-300 transition-all duration-500"
                    >
                      <FiFolder className="w-4 h-4 text-purple-400" />
                      <span>{project.stats.size}</span>
                    </motion.div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-300 rounded-full
                                 transition-all duration-500 hover:bg-blue-500/20 
                                 group-hover:shadow-[0_0_10px_-2px_rgba(59,130,246,0.3)]"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50 group-hover:border-blue-500/20">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-500
                               group-hover:text-blue-300"
                    >
                      <FiGithub className="w-5 h-5" />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-500
                               group-hover:text-blue-300"
                    >
                      <FiExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>

                  {/* Card glow effect */}
                  <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 
                                group-hover:opacity-20 blur-md transition-all duration-500 -z-10" />
                  
                  {/* Animated corner accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-purple-500/20 to-transparent 
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 