// src/pages/Skills/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';




const skills = {
  Languages: ['JavaScript', 'TypeScript', 'C#', 'SQL'],
  Frontend: ['React', 'Tailwind CSS', 'HTML', 'CSS'],
  Backend: ['.NET Core', 'ASP.NET MVC', 'Node.js', 'Express'],
  Database: ['SQL Server', 'Firebase', 'MongoDB'],
  Tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'Chrome DevTools'],
  Learning: ['Blockchain', 'Web3', 'Flutter']
};

const SkillCategory = ({ title, items }) => (
  <div>
    <h3 className="text-xl font-semibold mb-2 text-blue-600">{title}</h3>
    <div className="flex flex-wrap gap-3 mb-6">
      {items.map((item) => (
        <span key={item} className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded text-sm">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {

    useEffect(() => {
        document.title = 'Skill | Ahmed Mujtaba';
    }, []);

  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-4 pt-28 pb-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Skills & Technologies</h1>

        {Object.entries(skills).map(([category, items]) => (
          <SkillCategory key={category} title={category} items={items} />
        ))}

        <div>
          <h3 className="text-xl font-semibold mb-2 text-blue-600">Certifications & Courses</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Aptech North Nazimabad – Web & App Development (In Progress)</li>
            <li>BSCS – Virtual University</li>
            <li>Udemy Course – React + Tailwind Projects</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
