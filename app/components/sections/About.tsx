'use client';

import React from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import Image from 'next/image';
import { images } from '@/app/config/images';
import { FiAward, FiCode, FiCoffee, FiBook, FiDownload, FiBriefcase, FiCalendar } from 'react-icons/fi';

const stats = [
  { label: 'Years Experience', value: '4+' },
  { label: 'Projects Completed', value: '10+' },
  { label: 'Satisfied Clients', value: '3+' },
  { label: 'Technologies', value: '15+' },
];


const skills = [
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'Tailwind CSS', level: 95 },
];

type FloatPattern = 1 | 2 | 3 | 4;

interface Highlight {
  icon: React.ElementType;
  label: string;
  gradient: string;
  iconGradient: string;
  delay: number;
  floatPattern: FloatPattern;
}

const highlights: Highlight[] = [
  { 
    icon: FiAward, 
    label: '20% Project Efficiency Boost',
    gradient: 'from-yellow-400/20 to-orange-500/20',
    iconGradient: 'from-yellow-400 to-orange-500',
    delay: 0,
    floatPattern: 1
  },
  { 
    icon: FiCode, 
    label: '8+ Github Contributions',
    gradient: 'from-blue-400/20 to-cyan-500/20',
    iconGradient: 'from-blue-400 to-cyan-500',
    delay: 0.1,
    floatPattern: 2
  },
  { 
    icon: FiCoffee, 
    label: '700+ Hours Coding',
    gradient: 'from-purple-400/20 to-pink-500/20',
    iconGradient: 'from-purple-400 to-pink-500',
    delay: 0.2,
    floatPattern: 3
  },
  { 
    icon: FiBook, 
    label: '30% Faster Load Time',
    gradient: 'from-green-400/20 to-emerald-500/20',
    iconGradient: 'from-green-400 to-emerald-500',
    delay: 0.3,
    floatPattern: 4
  },
];

const timeline = [
  {
    year: '2024 - Present',
    role: 'Software Engineer',
    company: 'Recro (Mercedes-Benz & Tekion - Client)',
    description: 'Rewrote and optimized core applications using Next.js and TypeScript, reducing load times and enhancing performance.'
  },
  {
    year: '2021 - 2024',
    role: 'Software Developer',
    company: 'Micro Technologies',
    description: 'Built responsive web applications using React, improved data handling with MongoDB, and enhanced overall user engagement and performance.'
  }
];


// Remove spring configs and replace with smooth transitions
const smoothTransition = {
  type: "tween",
  duration: 0.6,
  ease: "easeOut"
};

const imageVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.1,
      ease: "easeOut"
    },
  }),
};

// Update moving animation to be smoother
const moveVariants = {
  initial: (index: number) => ({
    y: 0,
    opacity: 0
  }),
  animate: (index: number) => ({
    y: [0, -5, 0],
    opacity: 1,
    transition: {
      y: {
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut",
        delay: index * 0.2
      },
      opacity: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  })
};

interface FloatingAnimation {
  y: number[];
  x: number[];
  rotate: number[];
}

const floatingAnimations: Record<FloatPattern, FloatingAnimation> = {
  1: {
    y: [0, -8, 0],
    x: [0, 5, 0],
    rotate: [0, 2, 0]
  },
  2: {
    y: [0, 8, 0],
    x: [0, -5, 0],
    rotate: [0, -2, 0]
  },
  3: {
    y: [0, -8, 0],
    x: [0, -5, 0],
    rotate: [0, 2, 0]
  },
  4: {
    y: [0, 8, 0],
    x: [0, 5, 0],
    rotate: [0, -2, 0]
  }
};

const About = () => {
  const ref = React.useRef(null);
  const inView = useInView(ref, {
    amount: 0.2,
    once: true
  });

  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section id="about" ref={ref} className="relative py-32 bg-slate-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(59,130,246,0.1),transparent)]" />

      <motion.div
        style={{ scale, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={smoothTransition}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-gradient">
              {' '}Me
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
          Passionate about creating impactful solutions with 4 years of experience in full-stack development, specializing in building high-performance, scalable frontend applications using React.js, Next.js, and TypeScript. Adept at optimizing user experiences, improving performance, and collaborating with cross-functional teams to deliver robust solutions.          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={smoothTransition}
            className="space-y-8"
          >
            {/* Main image with highlights */}
            <div className="relative">
              {/* Highlights above image */}
              <div className="grid grid-cols-2 gap-6 mb-12">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      opacity: { duration: 0.4, delay: highlight.delay },
                      y: { duration: 0.4, delay: highlight.delay }
                    }}
                    className={`group relative overflow-hidden rounded-xl backdrop-blur-sm 
                              border border-white/10 transition-all duration-300
                              hover:border-white/20 shadow-lg shadow-blue-500/5
                              bg-gradient-to-r ${highlight.gradient}`}
                  >
                    <motion.div 
                      className="relative z-10 flex items-center gap-4 p-4"
                      animate={{
                        y: floatingAnimations[highlight.floatPattern].y,
                        x: floatingAnimations[highlight.floatPattern].x,
                        rotate: floatingAnimations[highlight.floatPattern].rotate
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut"
                      }}
                    >
                      <div className={`p-2.5 rounded-lg bg-gradient-to-r ${highlight.iconGradient}
                                    transition-transform duration-300 group-hover:scale-110`}
                      >
                        <highlight.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="space-y-1">
                        <motion.span 
                          className="block text-base text-white font-medium tracking-wide"
                          animate={{ 
                            opacity: [0.9, 1],
                            textShadow: [
                              "0 0 0px rgba(255,255,255,0)",
                              "0 0 8px rgba(255,255,255,0.3)",
                              "0 0 0px rgba(255,255,255,0)"
                            ]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          {highlight.label}
                        </motion.span>
                      </div>
                    </motion.div>

                    {/* Animated glow effect */}
                    <motion.div
                      animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                        delay: highlight.delay
                      }}
                      className={`absolute inset-0 bg-gradient-to-r ${highlight.iconGradient} blur-2xl`}
                      style={{ opacity: 0.1 }}
                    />

                    {/* Animated background effect */}
                    <motion.div
                      className="absolute inset-0 opacity-30"
                      animate={{
                        background: [
                          `radial-gradient(circle at ${index % 2 === 0 ? '0% 0%' : '100% 100%'}, rgba(255,255,255,0.2) 0%, transparent 50%)`,
                          `radial-gradient(circle at ${index % 2 === 0 ? '100% 100%' : '0% 0%'}, rgba(255,255,255,0.2) 0%, transparent 50%)`
                        ]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                        delay: highlight.delay
                      }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Main image */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full max-w-md mx-auto aspect-square rounded-2xl overflow-hidden 
                         group hover:scale-105 transition-all duration-500"
              >
                <Image
                  src={images.about.main}
                  alt="About Me"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Experience badge */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="absolute top-4 right-4 bg-blue-500/90 backdrop-blur-sm 
                           rounded-full px-4 py-2 flex items-center gap-2"
                >
                  <FiCode className="w-4 h-4 text-white" />
                  <span className="text-sm font-medium text-white">4+ Years Exp.</span>
                </motion.div>
              </motion.div>

              {/* Decorative circles */}
              <motion.div
                animate={{
                  opacity: [0.1, 0.15, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -top-4 -left-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  opacity: [0.1, 0.15, 0.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 2
                }}
                className="absolute -bottom-4 -right-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
              />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group cursor-pointer"
                >
                  <div className="relative p-4 rounded-lg bg-white/5 border border-white/10 
                                hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 
                                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                    <div className="relative">
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={inView ? { scale: 1 } : { scale: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="text-3xl font-bold text-white mb-1"
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mini gallery */}
            {/* <div className="grid grid-cols-3 gap-4">
              {images.about.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  variants={imageVariants}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  custom={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative aspect-square rounded-lg overflow-hidden group"
                >
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div> */}
          </motion.div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* About text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="prose prose-invert"
            >
              <p className="text-lg text-gray-400 leading-relaxed">
                I specialize in building scalable web applications that combine elegant design with robust functionality.
                My approach focuses on creating intuitive user experiences while ensuring clean, maintainable code.
              </p>
            </motion.div>

            {/* Skills with progress bars */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-4">Technical Skills</h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Experience Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-bold text-white">Experience Timeline</h3>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative pl-8 pb-8 border-l-2 border-blue-500/20 last:pb-0"
                  >
                    {/* Timeline dot */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.2 }}
                      className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full 
                               bg-gradient-to-r from-blue-500 to-purple-500"
                    />
                    
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-blue-400">
                        <FiCalendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{item.year}</span>
                      </div>
                      <h4 className="text-lg font-bold text-white">{item.role}</h4>
                      <div className="flex items-center gap-2 text-gray-400">
                        <FiBriefcase className="w-4 h-4" />
                        <span>{item.company}</span>
                      </div>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About; 