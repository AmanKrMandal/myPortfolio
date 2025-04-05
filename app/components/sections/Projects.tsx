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
    github: 'https://github.com/AmanKrMandal/myPortfolio',
    live: 'https://www.amankr.info',
    category: 'Frontend',
    stats: {
      stars: '2',
      forks: '4',
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
    tags: ['React.js', 'CSS', 'Weather API', 'SCSS', 'html'],
    github: 'https://github.com/AmanKrMandal/Weather-project',
    live: 'https://weather-aman-mandal.netlify.app/',
    category: 'Frontend',
    stats: {
      stars: '1',
      forks: '2',
      size: '1.5MB'
    }
  },
  {
    title: 'IMDB Rating App',
    description: 'IMDb rating is a score out of 10 that reflects the average user rating for a movie or show, indicating its popularity and quality.',
    image: '/images/urlshortnerv3.png',
    tags: ['React', 'api integration', 'Bootstrap', 'scss', 'html'],
    github: 'https://github.com/AmanKrMandal/IMDB-Rating',
    live: 'https://imdb-rating-aman.netlify.app/',
    category: 'Frontend',
    stats: {
      stars: '3',
      forks: '1',
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
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: [0.48, 0.15, 0.25, 0.96]
    }
  }
};

const tagVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
      ease: "easeOut"
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
      {/* Enhanced animated background */}
      <motion.div 
        className="absolute inset-0 bg-slate-900"
        style={{ opacity }}
      >
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(59,130,246,0.1) 0%, transparent 70%)',
            backgroundSize: '50px 50px',
            y: backgroundY
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(45deg, rgba(59,130,246,0.05) 25%, transparent 25%, transparent 75%, rgba(59,130,246,0.05) 75%, rgba(59,130,246,0.05)), linear-gradient(45deg, rgba(59,130,246,0.05) 25%, transparent 25%, transparent 75%, rgba(59,130,246,0.05) 75%, rgba(59,130,246,0.05))',
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px',
            opacity: 0.1,
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
                onHoverStart={() => setActiveProject(index)}
                onHoverEnd={() => setActiveProject(null)}
                className="group relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-xl overflow-hidden 
                         backdrop-blur-sm border border-slate-700/50 transition-all duration-300
                         hover:border-slate-600/50 hover:shadow-[0_0_30px_-5px_rgba(51,65,85,0.5)]"
              >
                {/* Project Image with enhanced overlay */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent
                             opacity-60 group-hover:opacity-40 transition-all duration-500"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-slate-400/10 via-slate-500/10 to-transparent
                             opacity-0 group-hover:opacity-100 transition-all duration-500
                             backdrop-blur-[1px]"
                  />
                </div>

                {/* Project Content with enhanced animations */}
                <div className="p-6 relative">
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-between mb-3"
                  >
                    <h3 className="text-xl font-bold text-white group-hover:text-slate-200 transition-colors">
                      {project.title}
                    </h3>
                    <motion.div
                      whileHover={{ rotate: -45 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiArrowRight className="w-5 h-5 text-slate-400 opacity-0 group-hover:opacity-100 
                                           transition-all duration-300 transform group-hover:translate-x-1" />
                    </motion.div>
                  </motion.div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors">
                    {project.description}
                  </p>

                  {/* Project Stats */}
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-1 text-sm text-gray-400 bg-slate-800/50 px-2 py-1 rounded-full"
                    >
                      <FiStar className="w-4 h-4 text-amber-400" />
                      <span>{project.stats.stars}</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-1 text-sm text-gray-400 bg-slate-800/50 px-2 py-1 rounded-full"
                    >
                      <FiGitBranch className="w-4 h-4 text-emerald-400" />
                      <span>{project.stats.forks}</span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-1 text-sm text-gray-400 bg-slate-800/50 px-2 py-1 rounded-full"
                    >
                      <FiFolder className="w-4 h-4 text-purple-400" />
                      <span>{project.stats.size}</span>
                    </motion.div>
                  </div>

                  {/* Tags with hover animations */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        variants={tagVariants}
                        whileHover="hover"
                        className="px-2 py-1 text-xs rounded-full text-slate-300 bg-slate-800/50
                                 border border-slate-700/50 transition-colors hover:border-slate-600/50"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links with enhanced hover effects */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-700/50">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                      <FiGithub className="w-5 h-5" />
                      <span className="text-sm">Code</span>
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                    >
                      <FiExternalLink className="w-5 h-5" />
                      <span className="text-sm">Live Demo</span>
                    </motion.a>
                  </div>

                  {/* Decorative corner accents */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-slate-400/10 to-transparent 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-slate-400/10 to-transparent 
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
