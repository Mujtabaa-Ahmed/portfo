// src/pages/Contact/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';



const Contact = () => {

    useEffect(() => {
        document.title = 'Contact | Ahmed Mujtaba';
    }, []);

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-4 pt-28 pb-10">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold mb-2">Let's Connect</h1>
          <p className="text-lg">Have a question or want to work together? I'd love to hear from you.</p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              className="w-full p-3 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full p-3 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Subject</label>
            <input
              type="text"
              className="w-full p-3 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Subject (optional)"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows="5"
              className="w-full p-3 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Your Message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition font-medium"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400"
        >
          <p>Email: <a href="mailto:mujtaba56383@gmail.com" className="text-blue-600 hover:underline">mujtaba56383@gmail.com</a></p>
          <p className="mt-1">Location: Karachi, Pakistan</p>
          <div className="mt-2 space-x-4">
            <a href="https://github.com/Mujtabaa-Ahmed" target="_blank" className="text-blue-600 hover:underline">GitHub</a>
            <a href="https://www.linkedin.com/in/ahmed-mujtaba-dev/" target="_blank" className="text-blue-600 hover:underline">LinkedIn</a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
