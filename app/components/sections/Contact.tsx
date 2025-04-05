'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init("kUSxdZ7Ykk2z7ERo8"); // Replace with your actual public key from EmailJS dashboard
  }, []);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    email: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Email validation function
  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  // Handle input change with validation
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (name === 'email') {
      setErrors(prev => ({
        ...prev,
        email: ''
      }));
    }
  };

  // Handle email blur for validation
  const handleEmailBlur = () => {
    if (formState.email && !validateEmail(formState.email)) {
      setErrors(prev => ({
        ...prev,
        email: 'Please enter a valid email address'
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate email before submission
    if (!validateEmail(formState.email)) {
      setErrors(prev => ({
        ...prev,
        email: 'Please enter a valid email address'
      }));
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      to_name: "Aman Mandal",
      message: formState.message,
      reply_to: formState.email,
    };

    try {
      await emailjs.send(
        "service_roi6rvb",
        "template_ft06z0n",
        templateParams,
        "kUSxdZ7Ykk2z7ERo8"
      );

      setSubmitStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setErrors({ email: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/AmanKrMandal', label: 'GitHub' },
    { icon: FiLinkedin, href: 'http://www.linkedin.com/in/ak-mandal', label: 'LinkedIn' },
    { icon: FiTwitter, href: 'https://x.com/AmanKum27826973', label: 'Twitter' },
    { icon: FiMail, href: 'mailto:akmandal1103@gmail.com', label: 'Email' },
  ];

  return (
    <section className="relative py-32 bg-slate-900 overflow-hidden" id="contact">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(59,130,246,0.1),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {' '}Connect
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out through
            the form below or connect with me on social media.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 p-8 rounded-2xl border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                           text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                           focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  onBlur={handleEmailBlur}
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg 
                           text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                           focus:ring-blue-500 focus:border-transparent transition-all duration-300
                           ${errors.email ? 'border-red-500' : 'border-white/10'}`}
                  placeholder="your@email.com"
                  required
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-sm mt-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg 
                           text-white placeholder-gray-400 focus:outline-none focus:ring-2 
                           focus:ring-blue-500 focus:border-transparent transition-all duration-300 
                           resize-none"
                  placeholder="Your message..."
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || !!errors.email}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 
                         text-white rounded-lg font-medium relative overflow-hidden 
                         transform hover:scale-[1.02] transition-all duration-300
                         disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className={`${isSubmitting ? 'opacity-0' : 'opacity-100'}`}>
                  Send Message
                </span>
                {isSubmitting && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  </div>
                )}
              </button>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm mt-2 text-center"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-400 text-sm mt-2 text-center"
                >
                  Failed to send message. Please try again later.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Social links and additional info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Connect section */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Connect with me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-lg 
                             hover:bg-white/10 transition-all duration-300 group"
                  >
                    <link.icon className="w-5 h-5 text-gray-400 group-hover:text-white 
                                       transition-colors duration-300" />
                    <span className="text-gray-400 group-hover:text-white 
                                   transition-colors duration-300">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Location and availability */}
            <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4">Location & Availability</h3>
              <div className="space-y-4 text-gray-400">
              <p>📍 Based in Bengaluru, India</p>
<p>🌍 Open to remote work and hybrid work</p>
<p>⏰ Not available for freelance projects</p>
<p>💼 Open to full-time opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 