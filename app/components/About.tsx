"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Redux",
  "JavaScript",
  "Tailwind CSS",
  "Material UI",
  "Bootstrap",
  "Node.js",
  "MongoDB",
  "Git",
  "Express.js",
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 mb-6">
              I’m a dedicated Software Engineer with 4+ years of experience,
              currently working with Recro on projects for Mercedes-Benz and
              Tekion. I specialize in building responsive, efficient, and
              scalable frontend applications using modern web technologies.
            </p>
            <p className="text-gray-600 mb-6">
              I’ve optimized complex systems, improved load times by 30% through
              code splitting, and led the migration of legacy projects to
              Next.js. My work has directly improved performance, scalability,
              and user experience across high-impact platforms.
            </p>
            <p className="text-gray-600 mb-6">
              Passionate about clean code and continual learning, I integrate
              tools like TypeScript, Redux, and Material UI to craft intuitive
              UIs. Whether it’s developing features, reducing bugs, or boosting
              performance, I bring a user-first mindset and a love for frontend
              innovation.
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    inView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card flex items-center justify-center p-4 text-center">
                  <span className="text-gray-800 font-medium">{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
