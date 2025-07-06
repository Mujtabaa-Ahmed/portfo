// src/pages/About/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';




const About = () => {

    useEffect(() => {
        document.title = 'About | Ahmed Mujtaba';
    }, []);

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-4 pt-28">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-2">About Me</h1>
          <p className="text-lg">I'm Ahmed Mujtaba, a passionate Full Stack Developer from Karachi, Pakistan.</p>
        </motion.div>

        {/* Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-2">My Journey</h2>
          <p className="text-base leading-relaxed">
            I started my coding journey during university, but my passion for development truly sparked when I started building real-world projects. Since then, I’ve worked on e-commerce platforms like LaptopHarbor, ticket booking systems, and accounting tools like XeroSync. I enjoy architecting scalable apps and learning new frameworks that improve developer experience.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {['React', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'C#', '.NET', 'SQL', 'Git', 'Firebase'].map((tech) => (
              <span key={tech} className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Personality Traits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Who I Am</h2>
          <p className="text-base leading-relaxed">
            I’m a curious, self-driven learner who believes in collaboration and clean code. I value teamwork and communication and enjoy breaking down complex problems into elegant solutions. Outside of work, I explore financial markets and blockchain innovations.
          </p>
        </motion.div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-blue-50 dark:bg-blue-900 p-6 rounded-xl shadow"
        >
          <h2 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-300">What I'm Up To</h2>
          <p className="text-base">
            Currently, I’m focused on improving my backend skills in .NET Core and diving deeper into React animations and performance optimization. I'm open to freelance opportunities and full-time roles.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-lg font-medium">Want to work together or have a project in mind?</p>
          <a href="/contact" className="text-blue-600 hover:underline">Contact Me →</a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
