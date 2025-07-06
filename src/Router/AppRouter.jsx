// src/router/AppRouter.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home/Home';
import About from '../pages/About/About';
import Projects from '../pages/Projects/Projects';
import Skills from '../pages/Skills/Skills';
import Contact from '../Pages/Contact/Contact';
import Donate from '../Pages/Donation/Donate';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/donate" element={<Donate />} />
    </Routes>
  );
};

export default AppRouter;
