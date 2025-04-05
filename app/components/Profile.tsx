'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    icon: "🎨",
    color: "from-blue-500/20 to-purple-500/20"
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "MongoDB"],
    icon: "⚡",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "AWS", "Figma"],
    icon: "🛠",
    color: "from-orange-500/20 to-red-500/20"
  }
];

const projects = [
  {
    title: "E-commerce Platform",
    description: "A modern shopping experience with real-time updates and seamless checkout",
    tech: ["Next.js", "TypeScript", "Stripe"],
    link: "#",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80"
  },
  {
    title: "AI Dashboard",
    description: "Analytics and insights platform powered by machine learning",
    tech: ["React", "D3.js", "TensorFlow.js"],
    link: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  }
];

export default function Profile() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-slow" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-grid" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        </div>
        
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-8 relative inline-block"
          >
            <span className="text-sm font-medium text-blue-400 tracking-wider uppercase">
              Full Stack Developer
            </span>
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 mt-2 rounded-full" />
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-6xl md:text-8xl font-bold mb-8 gradient-text leading-tight"
          >
            Crafting Digital
            <br />
            Experiences
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            I build beautiful, interactive websites and applications that deliver exceptional user experiences
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-6 justify-center"
          >
            <a
              href="#contact"
              className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-medium 
                         hover:opacity-90 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/25"
            >
              Let's work together
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#work"
              className="px-8 py-4 bg-white/5 text-white rounded-lg font-medium border border-white/10
                         hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              View projects
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-1 bg-white rounded-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={ref} className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
        
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Skills & Expertise</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leveraging modern technologies to build scalable and performant applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <motion.div
                key={skill.category}
                variants={fadeInUp}
                className="group relative rounded-xl overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 
                                group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative p-8 bg-slate-800/50 border border-slate-700 rounded-xl 
                               backdrop-blur-sm group-hover:border-slate-600 transition-all duration-300">
                  <span className="text-4xl mb-6 block transform group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </span>
                  <h3 className="text-2xl font-semibold mb-4 text-white">{skill.category}</h3>
                  <ul className="space-y-3">
                    {skill.items.map((item) => (
                      <li key={item} className="text-gray-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
        
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Featured Work</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A selection of my recent projects and collaborations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.a
                key={project.title}
                href={project.link}
                variants={fadeInUp}
                className="group relative block overflow-hidden rounded-xl bg-slate-800"
              >
                <div className="aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10" />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 text-sm text-gray-300 rounded-full
                                 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
        
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            variants={fadeInUp}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Let's Connect</h2>
            <p className="text-xl text-gray-300">
              Have a project in mind? Let's create something extraordinary together.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="space-y-8"
          >
            <a
              href="mailto:your.email@example.com"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white 
                        rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-blue-500/25"
            >
              Get in Touch
            </a>

            <div className="flex justify-center gap-6">
              {[
                { icon: FaGithub, href: "https://github.com/AmanKrMandal", label: "GitHub" },
                { icon: FaLinkedin, href: "http://www.linkedin.com/in/ak-mandal", label: "LinkedIn" },
                { icon: FaTwitter, href: "https://x.com/AmanKum27826973", label: "Twitter" }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 text-white rounded-lg hover:bg-white/10 
                           hover:text-blue-400 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
} 