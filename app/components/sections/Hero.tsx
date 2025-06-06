'use client';

import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { images } from '@/app/config/images';
import { FiMapPin, FiMail, FiPhone, FiArrowDown, FiCode, FiLayout, FiStar, FiAward, FiTrendingUp, FiTarget } from 'react-icons/fi';
import { FiGithub, FiLinkedin, FiTwitter, FiDribbble } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';
import { BsRobot } from 'react-icons/bs';

const getSkillPosition = (index: number) => {
  const positions = [
    'top-0 -right-4',    // First badge
    '-bottom-4 right-4', // Second badge
    '-left-4 bottom-12'  // Third badge
  ];
  return positions[index] || '';
};

const Hero = () => {
  // Replace mousePosition state with MotionValues
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollY } = useScroll();
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  // Enhanced parallax effects
  const y = useMotionValue(0);
  const backgroundY = useTransform(scrollY, [0, 1000], ['0%', '50%']);
  const textY = useTransform(scrollY, [0, 500], ['0%', '25%']);
  const imageScale = useTransform(scrollY, [0, 500], [1, 1.2]);
  
  // Transform mouse movement to rotation
  const rotateX = useTransform(mouseY, [-300, 300], [15, -15]);
  const rotateY = useTransform(mouseX, [-300, 300], [-15, 15]);
  
  // Mouse parallax for floating elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      mouseX.set(moveX);
      mouseY.set(moveY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });

    // Handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const roles = ['Frontend Developer', 2000, 'Full Stack Developer', 2000, 'Web Architect', 2000];

  // Enhanced spring animations
  const springConfig = { stiffness: 100, damping: 30, mass: 1 };
  const scaleSpring = useSpring(1, springConfig);
  const rotateSpring = useSpring(0, springConfig);

  // Replace window.innerWidth with windowSize.width
  const getRandomPosition = () => ({
    x: [Math.random() * (windowSize.width || 1000)],
    y: [Math.random() * (windowSize.height || 800)]
  });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Enhanced Animated Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0"
      >
        <motion.div 
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, rgba(59,130,246,0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, rgba(147,51,234,0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 100%, rgba(59,130,246,0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 0%, rgba(147,51,234,0.3) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-[100px]" />
      </motion.div>

      {/* Enhanced Grid Pattern */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-grid-pattern opacity-[0.03] animate-grid"
      />

      {/* Enhanced Floating Particles */}
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 1 + 'px',
            height: Math.random() * 4 + 1 + 'px',
            background: `rgba(${Math.random() * 100 + 156}, ${Math.random() * 100 + 156}, 255, ${Math.random() * 0.3 + 0.2})`
          }}
          animate={{
            x: [
              Math.random() * (windowSize.width || 1000),
              Math.random() * (windowSize.width || 1000),
            ],
            y: [
              Math.random() * (windowSize.height || 800),
              Math.random() * (windowSize.height || 800),
            ],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20 max-w-7xl mx-auto">
          {/* Enhanced Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left lg:max-w-xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400">
                Open to new opportunities
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mb-6 relative"
            >
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold"
                style={{ perspective: 1000 }}
              >
                <motion.span className="inline-block text-white"
                  animate={{ rotateX: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Hi, I'm{' '}
                </motion.span>
                
                {/* Animated Wave and Decorative Elements */}
                <motion.span
                  className="inline-block mx-2 relative"
                  animate={{ 
                    rotate: [0, 15, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-3xl">👋</span>
                  <motion.div
                    className="absolute -right-4 top-0 w-8 h-8"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full absolute top-0 right-0" />
                    <div className="w-1 h-1 bg-purple-400 rounded-full absolute top-2 right-2" />
                    <div className="w-1 h-1 bg-pink-400 rounded-full absolute top-4 right-4" />
                  </motion.div>
                </motion.span>

                <motion.span
                  className="inline-block relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500">
                    Aman
                  </span>
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-lg blur-xl"
                    animate={{
                      opacity: [0.5, 0.8, 0.5],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </motion.span>
              </motion.h1>
              <div className="mt-4 h-12">
                <TypeAnimation
                  sequence={roles}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="text-2xl sm:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-500"
                />
              </div>
            </motion.div>

            {/* Enhanced Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col gap-4 mb-8"
            >
              {[
                { icon: FiMapPin, text: "Bengaluru, India" },
                { icon: FiMail, text: "akmandal1103@gmail.com" },
                { icon: FiPhone, text: "+91 7477266567" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-4 justify-center lg:justify-start text-gray-300 group"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="w-5 h-5 text-blue-400 relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-blue-400/20 rounded-full blur-md"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0.2, 0.5]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  <span className="group-hover:text-blue-400 transition-colors">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Achievements Section */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
            >
              {[
                {
                  icon: SiLeetcode,
                  secondaryIcon: FiCode,
                  title: "Problem Solver",
                  description: "50+ DSA Problems Solved",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  icon: FiLayout,
                  secondaryIcon: FiTarget,
                  title: "Full Stack Expert",
                  description: "MERN Stack Specialist",
                  gradient: "from-purple-500 to-pink-500"
                }
              ].map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-4 bg-white/5 rounded-lg border border-white/10 group relative overflow-hidden"
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <motion.div
                        className="p-2 rounded-lg bg-white/5 relative z-10"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <achievement.icon className={`w-6 h-6 bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`} />
                      </motion.div>
                      <motion.div
                        className="absolute -right-3 -bottom-3 p-2 rounded-lg bg-white/5"
                        whileHover={{ rotate: -360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <achievement.secondaryIcon className={`w-4 h-4 bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`} />
                      </motion.div>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent rounded-lg blur-xl"
                        animate={{
                          opacity: [0.1, 0.3, 0.1],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1 flex items-center gap-2">
                        {achievement.title}
                        <motion.div
                          animate={{
                            rotate: [0, 10, 0],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <FiStar className="w-4 h-4 text-yellow-400" />
                        </motion.div>
                      </h3>
                      <p className="text-sm text-gray-400">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Enhanced Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: FiGithub, href: "https://github.com/AmanKrMandal", color: "from-gray-500 to-gray-700" },
                { icon: FiLinkedin, href: "https://linkedin.com/in/ak-mandal", color: "from-blue-500 to-blue-700" },
                { icon: FiTwitter, href: "https://x.com/AmanKum27826973", color: "from-sky-500 to-sky-700" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors group overflow-hidden"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-20`}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <social.icon className="w-5 h-5 relative z-10" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 lg:flex-1 flex justify-center"
            style={{ perspective: 1000 }}
          >
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80"
              style={{
                rotateX,
                rotateY,
              }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {/* Animated background effects */}
              <motion.div
                className="absolute -inset-4 rounded-[3rem] bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 blur-2xl opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Decorative shapes */}
              <motion.div
                className="absolute -inset-1 rounded-[3rem] border border-white/10"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute -inset-2 rounded-[3rem] border border-white/10"
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Main image container with custom shape */}
              <motion.div
                className="relative w-full h-full overflow-hidden"
                style={{
                  borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
                  background: 'linear-gradient(to right, rgb(59,130,246), rgb(139,92,246))',
                  padding: '3px',
                }}
                animate={{
                  borderRadius: [
                    '60% 40% 30% 70%/60% 30% 70% 40%',
                    '30% 60% 70% 40%/50% 60% 30% 60%',
                    '60% 40% 30% 70%/60% 30% 70% 40%'
                  ]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative w-full h-full overflow-hidden" style={{
                  borderRadius: 'inherit',
                }}>
                  <Image
                    src={images.hero.profile}
                    alt="Profile"
                    fill
                    className="object-cover"
                    priority
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20"
                    animate={{
                      opacity: isHovered ? 0.3 : 0,
                      scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>

              {/* Floating skill badges with updated positions */}
              {[
                { 
                  label: "React", 
                  color: "from-green-500 to-blue-600", 
                  position: "-top-6 -right-6",
                  animation: {
                    y: [0, -10, 0],
                    x: [0, 5, 0],
                    rotate: [-5, 5, -5]
                  }
                },
                { 
                  label: "Next.js", 
                  color: "from-purple-500 to-purple-600", 
                  position: "-bottom-2 right-0",
                  animation: {
                    y: [0, 10, 0],
                    x: [0, -5, 0],
                    rotate: [5, -5, 5]
                  }
                },
                { 
                  label: "TypeScript", 
                  color: "from-green-500 to-green-600", 
                  position: "-left-6 bottom-16",
                  animation: {
                    y: [0, -8, 0],
                    x: [-5, 0, -5],
                    rotate: [-3, 3, -3]
                  }
                },
                { 
                  label: "JavaScript", 
                  color: "from-yellow-500 to-yellow-600", 
                  position: "-top-2 -left-6",
                  animation: {
                    y: [0, -12, 0],
                    x: [0, -3, 0],
                    rotate: [3, -3, 3]
                  }
                },
                { 
                  label: "Redux", 
                  color: "from-yellow-600 to-indigo-600", 
                  position: "top-24 -right-8",
                  animation: {
                    y: [0, 8, 0],
                    x: [3, -3, 3],
                    rotate: [-4, 4, -4]
                  }
                }
              ].map((skill, index) => (
                <motion.div
                  key={skill.label}
                  className={`absolute ${skill.position} px-2.5 py-1.5 rounded-full backdrop-blur-sm text-sm font-medium text-white 
                             border border-white/10 overflow-hidden shadow-lg`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    ...skill.animation
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-20`}
                    animate={{
                      opacity: [0.1, 0.3, 0.1],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.div 
                    className="relative z-10 flex items-center gap-1.5"
                    animate={{
                      x: [0, 2, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${skill.color}`} />
                    <span>{skill.label}</span>
                  </motion.div>
                </motion.div>
              ))}

              {/* Decorative dots */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-blue-400/50 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-sm text-gray-400"
          >
            Scroll to explore
          </motion.span>
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-white/10 flex items-start justify-center p-2 relative overflow-hidden group"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100"
              animate={{
                y: ['-100%', '100%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <motion.div
              animate={{ 
                height: ['20%', '80%', '20%'],
                background: [
                  'linear-gradient(to bottom, #60A5FA, #A855F7)',
                  'linear-gradient(to bottom, #A855F7, #60A5FA)',
                  'linear-gradient(to bottom, #60A5FA, #A855F7)',
                ]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 rounded-full relative z-10"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 
