import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-10 pb-6 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-10">

        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Mujtaba.dev</h3>
          <p className="text-sm">
            I’m a full-stack developer from Karachi building modern, responsive, and secure web apps using React, Tailwind CSS, and .NET.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-md font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/projects" className="hover:underline">Projects</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-md font-semibold mb-2">Contact</h4>
          <ul className="space-y-1 text-sm">
            <li>Email: <a href="mailto:mujtaba56383@gmail.com" className="hover:underline">mujtaba56383@gmail.com</a></li>
            <li>Location: Karachi, Pakistan</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-md font-semibold mb-2">Follow Me</h4>
          <div className="flex gap-4 text-xl">
            <a href="https://github.com/Mujtabaa-Ahmed" target="_blank" rel="noreferrer" className="hover:text-blue-600">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/ahmed-mujtaba-dev/" target="_blank" rel="noreferrer" className="hover:text-blue-600">
              <FaLinkedin />
            </a>
            <a href="mailto:mujtaba56383@gmail.com" className="hover:text-blue-600">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-10 text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Ahmed Mujtaba. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
