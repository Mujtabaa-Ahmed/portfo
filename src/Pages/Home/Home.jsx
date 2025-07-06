// src/pages/Home/Home.jsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroImg from '../../assets/hero-dev.svg';



const Home = () => {

    useEffect(() => {
        document.title = 'Home | Ahmed Mujtaba';
    }, []);

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-4 pt-28 ">
      <div className="max-w-7xl mx-auto flex flex-col gap-20">

        {/* Hero Section */}
        <div className="grid md:grid-cols-2 items-center gap-10">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-extrabold mb-4 leading-tight">
              Hi, I'm <span className="text-blue-600">Ahmed Mujtaba</span>
            </h1>
            <p className="text-lg mb-6">
              A passionate Full Stack Developer building modern and responsive web applications with React and .NET.
            </p>
            <div className="flex gap-4">
              <a
                href="/AhmedMujtaba.pdf"
                download
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
              >
                Download Resume
              </a>
              <Link
                to="/contact"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src={heroImg} alt="Developer" className="w-full max-w-md mx-auto" />
          </motion.div>
        </div>

        {/* Tech Stack Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Tech Stack</h2>
          <p className="mb-6">Technologies I work with:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded">React</span>
            <span className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded">Tailwind CSS</span>
            <span className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded">C#</span>
            <span className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded">.NET</span>
            <span className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded">SQL</span>
          </div>
        </motion.div>

        {/* About Preview */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="max-w-3xl mx-auto mb-4">
            I’m a developer from Karachi, Pakistan, who loves building web apps, learning new technologies, and solving real-world problems through code.
          </p>
          <Link to="/about" className="text-blue-600 hover:underline">Read more →</Link>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="mb-6">Some of my best work:</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded shadow">
              <h3 className="font-semibold text-lg">LaptopHarbor</h3>
              <p className="text-sm">An e-commerce app for browsing and buying laptops.</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded shadow">
              <h3 className="font-semibold text-lg">TicketBooking</h3>
              <p className="text-sm">A booking system for cinema and event tickets.</p>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded shadow">
              <h3 className="font-semibold text-lg">XeroSync</h3>
              <p className="text-sm">An integration with Twinfield and Xero for accounting automation.</p>
            </div>
          </div>
          <Link to="/projects" className="inline-block mt-4 text-blue-600 hover:underline">View All Projects →</Link>
        </motion.div>

        {/* Contact Call-to-Action */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center bg-blue-600 text-white py-10 rounded-xl shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-4">Let's Work Together</h2>
          <p className="mb-4">Have an idea or opportunity? Reach out and let's make it real.</p>
          <Link to="/contact" className="bg-white text-blue-600 px-6 py-3 rounded shadow hover:bg-gray-200">Contact Me</Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Home;
