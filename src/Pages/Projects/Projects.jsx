// src/pages/Projects/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';



const projects = [
  {
    title: 'LaptopHarbor',
    description: 'An e-commerce platform for browsing and purchasing laptops.',
    tech: ['React', '.NET Web API', 'SQL', 'Tailwind CSS'],
    github: 'https://github.com/Mujtabaa-Ahmed/laptopharbor',
    demo: '#',
  },
  {
    title: 'TicketBooking System',
    description: 'A ticket booking platform for cinema and event reservations.',
    tech: ['React', 'C#', 'SQL Server'],
    github: 'https://github.com/Mujtabaa-Ahmed/ticketbooking',
    demo: '#',
  },
  {
    title: 'XeroSync',
    description: 'Integration with Twinfield and Xero for accounting automation.',
    tech: ['.NET MVC', 'Twinfield API', 'SQL Server'],
    github: 'https://github.com/Mujtabaa-Ahmed/xerosync',
    demo: '#',
  },
];

const Projects = () => {

    useEffect(() => {
        document.title = 'Projects | Ahmed Mujtaba';
    }, []);

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-4 pt-28 pb-16">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h1>

        <motion.p
          className="text-center mb-12 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Here are some of the projects I've built using modern technologies. Each project demonstrates different skills from UI to backend integration.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 text-sm mb-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a href={project.github} target="_blank" className="text-blue-600 hover:underline text-sm">Source Code</a>
                <a href={project.demo} target="_blank" className="text-blue-600 hover:underline text-sm">Live Demo</a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://github.com/Mujtabaa-Ahmed"
            target="_blank"
            className="text-blue-600 hover:underline text-lg"
          >
            View more on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
