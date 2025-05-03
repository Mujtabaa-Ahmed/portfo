import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode, FiServer } from "react-icons/fi";

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      className="w-full sm:w-[350px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
      whileHover={{ y: -5 }}
      onClick={onClick}
    >
      {/* Header with accent bar */}
      <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
      
      <div className="p-6">
        {/* Tech stack indicator */}
        <div className="flex gap-2 mb-3">
          {project.backend && (
            <span className="flex items-center gap-1 px-2 py-1 bg-blue-900/30 text-blue-400 rounded text-xs">
              <FiServer size={12} /> Backend
            </span>
          )}
          {project.frontend && (
            <span className="flex items-center gap-1 px-2 py-1 bg-purple-900/30 text-purple-400 rounded text-xs">
              <FiCode size={12} /> Frontend
            </span>
          )}
        </div>
        
        {/* Project title */}
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        
        {/* Description with fade effect */}
        <p className="text-gray-400 text-sm line-clamp-3 mb-4">
          {project.shortDescription}
        </p>
        
        {/* Tech tags with hover effect */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map(tag => (
            <motion.span 
              key={tag}
              className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
              whileHover={{ scale: 1.05 }}
            >
              {tag}
            </motion.span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2 py-1 bg-gray-800 text-gray-500 text-xs rounded">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Microservices Architecture",
      shortDescription: "Distributed .NET Core system with Docker containers and Kubernetes orchestration.",
      fullDescription: "Built a scalable microservices architecture using CQRS pattern, Event Sourcing, and gRPC for inter-service communication.",
      tags: [".NET 7", "Kubernetes", "Docker", "gRPC", "CQRS", "Event Sourcing"],
      backend: true,
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Enterprise ERP Solution",
      shortDescription: "Full-stack business management system with Blazor WASM frontend.",
      shortDescription: "Modern ERP system with role-based access, reporting dashboard, and inventory management.",
      tags: ["Blazor", ".NET 6", "EF Core", "SQL Server", "Azure AD"],
      backend: true,
      frontend: true,
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "AI Document Processor",
      shortDescription: "ML.NET service for automated document classification and data extraction.",
      fullDescription: "Implemented machine learning pipeline for processing PDF/Word documents with 92% accuracy using custom-trained models.",
      tags: ["ML.NET", "Azure Functions", "Cognitive Services", "C#"],
      backend: true,
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-950">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Enterprise Solutions
          </span>
        </motion.h2>

        {/* Projects Grid - Responsive Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-gray-900 border border-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={e => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-gray-900 p-6 border-b border-gray-800 flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedProject.title}</h3>
                    <div className="flex gap-2 mt-2">
                      {selectedProject.backend && (
                        <span className="flex items-center gap-1 px-2 py-1 bg-blue-900/30 text-blue-400 rounded text-xs">
                          <FiServer size={12} /> Backend
                        </span>
                      )}
                      {selectedProject.frontend && (
                        <span className="flex items-center gap-1 px-2 py-1 bg-purple-900/30 text-purple-400 rounded text-xs">
                          <FiCode size={12} /> Frontend
                        </span>
                      )}
                    </div>
                  </div>
                  <button 
                    className="p-2 text-gray-400 hover:text-white transition"
                    onClick={() => setSelectedProject(null)}
                  >
                    <FiX size={24} />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  <p className="text-gray-300 mb-6">{selectedProject.fullDescription}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
                    >
                      <FiGithub /> View Code
                    </a>
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg transition"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}