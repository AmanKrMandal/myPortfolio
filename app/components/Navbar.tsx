'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiTwitter, FiCode } from 'react-icons/fi';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/AmanKrMandal', label: 'GitHub' },
  { icon: FiLinkedin, href: 'http://www.linkedin.com/in/ak-mandal', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://x.com/AmanKum27826973', label: 'Twitter' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          backgroundColor:  'rgba(0, 0, 0, 0.85)' ,
        }}
        style={{
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20"
          animate={{
            opacity: 0.8
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% -20%, rgba(59,130,246,0.15), transparent 70%)',
          }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto">
        <nav className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo Design */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation('#home');
              }}
              className="relative group"
              whileHover="hover"
            >
              <div className="relative flex items-center gap-4">
                {/* Modern Minimalist Logo */}
                <div className="relative w-12 h-12">
                  {/* Animated Background Shapes */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      background: [
                        'radial-gradient(circle at 30% 30%, rgba(59,130,246,0.3), transparent 50%)',
                        'radial-gradient(circle at 70% 70%, rgba(139,92,246,0.3), transparent 50%)',
                        'radial-gradient(circle at 30% 30%, rgba(59,130,246,0.3), transparent 50%)',
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  {/* Geometric Shapes */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-8 h-8 border-2 border-emerald-500/30 rounded-lg"
                      animate={{
                        rotate: [0, 90, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute w-8 h-8 border-2 border-violet-500/30 rounded-lg"
                      animate={{
                        rotate: [45, -45, 45],
                        scale: [1.1, 1, 1.1],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  {/* Central Icon */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-violet-500">
                      A
                    </span>
                  </motion.div>
                </div>

                {/* Name and Title with Minimal Design */}
                <div className="relative">
                  <motion.div
                    className="flex flex-col"
                    variants={{
                      hover: {
                        x: 5,
                        transition: { duration: 0.3 }
                      }
                    }}
                  >
                    {/* Name */}
                    <div className="relative overflow-hidden">
                      <motion.div
                        className="relative z-10 text-xl font-medium tracking-wide"
                        variants={{
                          hover: {
                            letterSpacing: "0.05em",
                            transition: { duration: 0.3 }
                          }
                        }}
                      >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                          Aman Kumar Mandal
                        </span>
                      </motion.div>
                      
                      {/* Sliding Highlight */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-emerald-500/50 via-violet-500/50 to-emerald-500/50"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>

                    {/* Title with Dot Decoration */}
                    <div className="flex items-center gap-2 mt-0.5">
                      <motion.span 
                        className="text-sm text-zinc-400 tracking-wider"
                        variants={{
                          hover: {
                            color: "#fff",
                            transition: { duration: 0.3 }
                          }
                        }}
                      >
                        Full Stack Developer
                      </motion.span>
                      <motion.div
                        className="w-1 h-1 rounded-full bg-emerald-500"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors duration-300"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 5,
                      color: ['#10B981', '#0EA5E9', '#8B5CF6']
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>

              {/* Navigation Items */}
              <ul className="flex items-center gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <motion.li key={item.label}>
                      <button
                        onClick={() => handleNavigation(item.href)}
                        className="relative px-4 py-2 text-sm font-medium group"
                      >
                        <span className={`relative z-10 ${
                          isActive ? 'text-white' : 'text-zinc-400 group-hover:text-white'
                        } transition-colors duration-300`}>
                          {item.label}
                        </span>
                        {isActive && (
                          <motion.span
                            layoutId="activeNavItem"
                            className="absolute inset-0 rounded-lg"
                            style={{
                              background: 'linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(139,92,246,0.2) 50%, rgba(59,130,246,0.2) 100%)',
                              boxShadow: '0 0 20px rgba(59,130,246,0.15)',
                            }}
                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                          />
                        )}
                        <motion.span
                          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{
                            background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(139,92,246,0.1) 50%, rgba(59,130,246,0.1) 100%)',
                          }}
                        />
                      </button>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <motion.a
                  href="https://drive.google.com/file/d/1QyL64Fa71RUnp2FhJEm56TdX5eGo33Sv/view?usp=drivesdk"
                  download
                  className="relative px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white rounded-lg group overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-50 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: 'linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(14,165,233,0.2) 50%, rgba(139,92,246,0.2) 100%)',
                      border: '1px solid rgba(16,185,129,0.2)',
                    }}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Resume
                    <motion.div
                      animate={{
                        y: [0, -2, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <FiDownload className="text-base opacity-60 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </span>
                </motion.a>

                <motion.button
                  onClick={() => handleNavigation('#contact')}
                  className="relative overflow-hidden px-5 py-2 text-sm font-medium rounded-lg group"
                  whileHover="hover"
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, rgb(59,130,246) 0%, rgb(139,92,246) 50%, rgb(59,130,246) 100%)',
                    }}
                    variants={{
                      hover: { 
                        scale: 1.2,
                        rotate: 3,
                      }
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.span
                    className="relative z-10 flex items-center gap-2 text-white"
                    variants={{
                      hover: { gap: '0.75rem' }
                    }}
                  >
                    Let's Talk
                    <motion.div
                      variants={{
                        hover: { x: 4, rotate: 45 }
                      }}
                    >
                      <FiArrowRight className="text-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                  </motion.span>
                </motion.button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 md:hidden"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="text-white"
                >
                  {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative border-t border-white/10 md:hidden overflow-hidden"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.95), rgba(0,0,0,0.9))',
              backdropFilter: 'blur(12px)',
            }}
          >
            <nav className="max-w-7xl mx-auto px-4 py-4">
              <ul className="space-y-1">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.substring(1);
                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        transition: { delay: index * 0.1 }
                      }}
                    >
                      <button
                        onClick={() => handleNavigation(item.href)}
                        className={`w-full px-4 py-3 rounded-lg flex items-center justify-between ${
                          isActive 
                            ? 'bg-gradient-to-r from-emerald-500/20 via-sky-500/20 to-violet-500/20 text-white' 
                            : 'text-zinc-400 hover:text-white'
                        }`}
                      >
                        <span className="text-sm font-medium">{item.label}</span>
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                          >
                            <FiArrowRight className="text-emerald-400" />
                          </motion.div>
                        )}
                      </button>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Mobile Social Links */}
              <div className="mt-4 flex justify-center gap-6 px-4 py-3 border-t border-white/10">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors duration-300"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 5,
                      color: ['#10B981', '#0EA5E9', '#8B5CF6']
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>

              <div className="mt-4 grid gap-3 px-4">
                <motion.a
                  href="https://drive.google.com/file/d/1QyL64Fa71RUnp2FhJEm56TdX5eGo33Sv/view?usp=drivesdk"
                  download
                  className="block py-3 text-center text-sm font-medium text-zinc-300 rounded-lg group relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(14,165,233,0.2) 50%, rgba(139,92,246,0.2) 100%)',
                      border: '1px solid rgba(16,185,129,0.2)',
                    }}
                  />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Download Resume
                    <FiDownload className="text-emerald-400" />
                  </span>
                </motion.a>

                <motion.button
                  onClick={() => handleNavigation('#contact')}
                  className="w-full py-3 text-sm font-medium text-white rounded-lg relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(135deg, rgb(59,130,246) 0%, rgb(139,92,246) 50%, rgb(59,130,246) 100%)',
                    }}
                  />
                  <span className="relative z-10">Let's Talk</span>
                </motion.button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;