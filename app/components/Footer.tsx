"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiHeart,
} from "react-icons/fi";

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const socialLinks = [
  { icon: FiGithub, href: "https://github.com/AmanKrMandal", label: "GitHub" },
  {
    icon: FiLinkedin,
    href: "http://www.linkedin.com/in/ak-mandal",
    label: "LinkedIn",
  },
  { icon: FiTwitter, href: "https://x.com/AmanKum27826973", label: "Twitter" },
  { icon: FiMail, href: "mailto:akmandal1103@gmail.com", label: "Email" },
];

const quickLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-slate-900 text-white py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(59,130,246,0.1),transparent)]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={footerVariants}
        className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h3
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}>
              Aman Kumar Mandal
            </motion.h3>
            <p className="text-gray-400 leading-relaxed">
              Frontend Developer specializing in creating beautiful and
              functional web experiences. Turning ideas into reality through
              clean code and modern design.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.label}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2">
                    <span className="h-px w-4 bg-blue-500/50" />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 
                           transition-all duration-300 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}>
                  <link.icon
                    className="w-5 h-5 text-gray-400 group-hover:text-blue-400 
                                     transition-colors duration-300"
                  />
                  <span
                    className="text-gray-400 group-hover:text-white 
                                 transition-colors duration-300">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="border-t border-white/10 pt-8 mt-12 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <span>&copy; {currentYear} Aman Mandal. Made with</span>
            <motion.span
              animate={{
                scale: [1, 1.2, 1],
                color: ["#ef4444", "#ec4899", "#ef4444"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}>
              <FiHeart className="w-4 h-4 fill-current" />
            </motion.span>
            <span>in React & Next.js</span>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
