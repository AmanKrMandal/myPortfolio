'use client';

import React from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import Image from 'next/image';
import { images } from '@/app/config/images';
import { FiAward, FiCode, FiCoffee, FiBook, FiDownload, FiBriefcase, FiCalendar, FiZap, FiDatabase, FiCloud } from 'react-icons/fi';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiTailwindcss, 
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiRedux,
  SiGit,
  SiBootstrap,
  SiMysql,
  SiExpress,
  SiPostman,
  SiGithub
} from 'react-icons/si';
import { BsRobot } from 'react-icons/bs';

const stats = [
  { label: 'Years Experience', value: '4+' },
  { label: 'Projects Completed', value: '10+' },
  { label: 'Satisfied Clients', value: '3+' },
  { label: 'Technologies', value: '15+' },
];


const skills = [
  { 
    name: 'React', 
    level: 90,
    icon: SiReact,
    gradient: 'from-cyan-400 to-blue-500',
    description: 'Component architecture, Hooks'
  },
  { 
    name: 'Next.js', 
    level: 85,
    icon: SiNextdotjs,
    gradient: 'from-gray-600 to-gray-900',
    description: 'SSR, API routes'
  },
  { 
    name: 'TypeScript', 
    level: 80,
    icon: SiTypescript,
    gradient: 'from-blue-400 to-blue-600',
    description: 'Type safety, Interfaces'
  },
  { 
    name: 'JavaScript', 
    level: 90,
    icon: SiJavascript,
    gradient: 'from-yellow-400 to-yellow-600',
    description: 'ES6+, Async/Await'
  },
  { 
    name: 'Node.js', 
    level: 75,
    icon: SiNodedotjs,
    gradient: 'from-green-400 to-green-600',
    description: 'Express, REST APIs'
  },
  { 
    name: 'MongoDB', 
    level: 80,
    icon: SiMongodb,
    gradient: 'from-green-500 to-green-700',
    description: 'CRUD, Aggregation'
  },
  { 
    name: 'Redux', 
    level: 85,
    icon: SiRedux,
    gradient: 'from-purple-400 to-purple-600',
    description: 'State Management'
  },
  { 
    name: 'HTML5', 
    level: 95,
    icon: SiHtml5,
    gradient: 'from-orange-400 to-orange-600',
    description: 'Semantic Markup'
  },
  { 
    name: 'CSS3', 
    level: 90,
    icon: SiCss3,
    gradient: 'from-blue-500 to-blue-700',
    description: 'Flexbox, Grid'
  },
  { 
    name: 'Tailwind', 
    level: 95,
    icon: SiTailwindcss,
    gradient: 'from-teal-400 to-teal-600',
    description: 'Responsive Design'
  },
  { 
    name: 'Git', 
    level: 85,
    icon: SiGit,
    gradient: 'from-orange-500 to-red-500',
    description: 'Version Control'
  },
  { 
    name: 'Bootstrap', 
    level: 90,
    icon: SiBootstrap,
    gradient: 'from-purple-500 to-purple-700',
    description: 'UI Components'
  },
  { 
    name: 'MySQL', 
    level: 75,
    icon: SiMysql,
    gradient: 'from-blue-600 to-blue-800',
    description: 'SQL, Database Design'
  },
  { 
    name: 'Express', 
    level: 80,
    icon: SiExpress,
    gradient: 'from-gray-500 to-gray-700',
    description: 'Middleware, Routing'
  },
  { 
    name: 'Postman', 
    level: 85,
    icon: SiPostman,
    gradient: 'from-orange-600 to-orange-800',
    description: 'API Testing'
  },
  { 
    name: 'GitHub', 
    level: 90,
    icon: SiGithub,
    gradient: 'from-gray-700 to-gray-900',
    description: 'Collaboration'
  }
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
    description: 'Rewritten and optimized core applications using Next.js and TypeScript, reducing load times and enhancing performance.'
  },
  {
    year: '2021 - 2024',
    role: 'Software Developer',
    company: 'Micro Technologies',
    description: 'Built responsive web applications using React, improved data handling with MongoDB, and enhanced overall user engagement and performance.'
  }
];

const education = [
  {
    school: 'Sagar Institute of Science and Technology',
    degree: 'B.Tech',
    duration: '07/2017 - 06/2021',
    description: 'Bachelor of Technology'
  },
  {
    school: 'Kendriya Vidyalaya Deeptinagar, NTPC',
    degree: 'Class X & XII',
    duration: '01/2014 - 06/2017',
    description: 'Higher Secondary Education'
  }
];

const certifications = [
  {
    title: 'SQL Database',
    provider: 'Coursera',
    link: 'https://www.coursera.org/account/accomplishments/verify/MV8ML4W9FPVD'
  },
  {
    title: 'AWS Lambda',
    provider: 'Udemy',
    link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-a0ad0134-a381-430a-9691-cad891d2f931.pdf'
  },
  {
    title: 'Generative AI',
    provider: 'Udemy',
    link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-239177a9-cabf-469a-809c-3b5db2a11969.pdf'
  },
  {
    title: 'JavaScript: ES6',
    provider: 'Coursera',
    link: 'https://www.coursera.org/account/accomplishments/verify/5YFG2AMQUZY2'
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

const skillVariants = {
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
      duration: 0.2,
      ease: "easeInOut"
    }
  }
};

const progressVariants = {
  initial: { width: 0 },
  animate: (level: number) => ({
    width: `${level}%`,
    transition: {
      duration: 1,
      ease: [0.48, 0.15, 0.25, 0.96],
      delay: 0.2
    }
  })
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
            Passionate about creating impactful solutions with 4 years of experience in full-stack development, specializing in building high-performance, scalable frontend applications using React.js, Next.js, and TypeScript. Adept at optimizing user experiences, improving performance, and collaborating with cross-functional teams to deliver robust solutions.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={smoothTransition}
            className="flex flex-col gap-6"
          >
            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
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
              className="relative w-full max-w-2xl mx-auto aspect-[4/3] rounded-xl overflow-hidden 
                       group hover:scale-105 transition-all duration-500"
            >
              <Image
                src={images.about.main}
                alt="About Me"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
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

            {/* Education and Certification Section */}
            <div className="grid grid-cols-1 gap-6 mt-auto">
              {/* Education Timeline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={smoothTransition}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <FiBook className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-bold text-white">Education</h3>
                </div>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ delay: index * 0.2 }}
                      className="relative pl-6 border-l border-gray-700"
                    >
                      <div className="absolute w-2 h-2 bg-blue-500 rounded-full -left-[4.5px] top-2" />
                      <h4 className="text-base font-semibold text-white">{edu.school}</h4>
                      <p className="text-blue-400 text-sm mt-0.5">{edu.degree}</p>
                      <div className="flex items-center gap-2 text-gray-400 mt-0.5 text-sm">
                        <FiCalendar className="w-3.5 h-3.5" />
                        <span>{edu.duration}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Certifications */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-2 text-xl font-semibold text-white">
                  <FiAward className="text-amber-400" />
                  <h2>Certifications</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "SQL Database",
                      platform: "Coursera",
                      date: "2023",
                      link: "https://coursera.org/share/e0d1f89e1f4c44e0d5c8a4a8b0b3f8c0",
                      icon: FiDatabase,
                      gradient: "from-amber-400 to-orange-500"
                    },
                    {
                      title: "AWS Lambda",
                      platform: "Udemy",
                      date: "2023",
                      link: "https://udemy.com/certificate/UC-f8c0b3f8-e0d1-4f89-1f4c-44e0d5c8a4a8",
                      icon: FiCloud,
                      gradient: "from-amber-400 to-orange-500"
                    },
                    {
                      title: "Generative AI",
                      platform: "Udemy",
                      date: "2023",
                      link: "https://udemy.com/certificate/UC-a4a8b0b3-f8c0-e0d1-4f89-1f4c44e0d5c8",
                      icon: BsRobot,
                      gradient: "from-amber-400 to-orange-500"
                    },
                    {
                      title: "JavaScript: ES6",
                      platform: "Coursera",
                      date: "2023",
                      link: "https://coursera.org/share/44e0d5c8a4a8b0b3f8c0e0d1f89e1f4c",
                      icon: FiCode,
                      gradient: "from-amber-400 to-orange-500"
                    }
                  ].map((cert, index) => (
                    <motion.a
                      key={cert.title}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-4 bg-white/5 rounded-lg border border-white/10 hover:border-amber-400/50 transition-colors"
                      whileHover={{ y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400/10 to-orange-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-white/5">
                          <cert.icon className="w-6 h-6 text-amber-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-white group-hover:text-amber-400 transition-colors">{cert.title}</h3>
                          <div className="flex items-center gap-2 mt-1 text-sm text-gray-400">
                            <span>{cert.platform}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-400" />
                            <span>{cert.date}</span>
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={smoothTransition}
            className="flex flex-col gap-6"
          >
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

            {/* Technical Skills */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FiZap className="w-6 h-6 text-amber-400" />
                <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    custom={index}
                    variants={skillVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    className="group relative bg-slate-800/50 rounded-xl p-2.5 backdrop-blur-sm
                             border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <div className={`p-2.5 rounded-lg bg-gradient-to-br ${skill.gradient} 
                                    group-hover:shadow-lg group-hover:shadow-${skill.gradient.split(' ')[1]}/20 transition-all duration-300`}>
                        <skill.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-center">
                        <h4 className="text-sm font-semibold text-white group-hover:text-slate-200 transition-colors">
                          {skill.name}
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5 group-hover:text-slate-300">
                          {skill.description}
                        </p>
                      </div>
                      <div className="w-full h-1 bg-slate-700/50 rounded-full overflow-hidden mt-1">
                        <motion.div
                          variants={progressVariants}
                          initial="initial"
                          animate="animate"
                          custom={skill.level}
                          className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full`}
                        />
                      </div>
                      <span className="text-xs font-medium text-slate-400 group-hover:text-slate-300">
                        {skill.level}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <FiBriefcase className="w-6 h-6 text-blue-400" />
                <h3 className="text-2xl font-bold text-white">Experience</h3>
              </div>
              <div className="space-y-6">
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
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About; 