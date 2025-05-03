import { useState, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, animate } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef(null);
  
  // 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const xSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 20 });
  const transform = useMotionTemplate`rotateX(${ySpring}deg) rotateY(${xSpring}deg)`;

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const rotateY = ((mouseX - width / 2) / width) * 20;
    const rotateX = ((mouseY - height / 2) / height) * -20;
    
    x.set(rotateX);
    y.set(rotateY);
  };

  const handleMouseLeave = () => {
    animate(x, 0, { type: 'spring', stiffness: 300, damping: 20 });
    animate(y, 0, { type: 'spring', stiffness: 300, damping: 20 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => setIsFlipped(!isFlipped)}
      style={{ transform, transformStyle: 'preserve-3d' }}
      className="cursor-pointer perspective-1000 h-96 w-full"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <motion.div
        className="relative w-full h-full transition-transform duration-500"
        style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Front Side */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-indigo-800 rounded-3xl p-6 backface-hidden flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-purple-200">{project.shortDescription}</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              {project.tags.slice(0, 3).map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <button className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition">
              <FiArrowRight />
            </button>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-800 to-purple-900 rounded-3xl p-6 backface-hidden flex flex-col justify-between rotate-y-180">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
            <p className="text-purple-200 mb-4">{project.fullDescription}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition"
              onClick={e => e.stopPropagation()}
            >
              <FiGithub /> Code
            </a>
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white text-purple-900 rounded-lg hover:bg-white/90 transition"
              onClick={e => e.stopPropagation()}
            >
              <FiExternalLink /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Neon Dreams",
      shortDescription: "Interactive generative art experience",
      fullDescription: "A WebGL-powered art generator that creates unique neon landscapes using procedural algorithms. Users can interact with parameters to create their own digital artworks.",
      tags: ["Three.js", "GLSL", "React", "Generative Art"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 2,
      title: "Audio Visualizer",
      shortDescription: "Real-time music visualization",
      fullDescription: "A browser-based audio analyzer that creates dynamic visual representations of music using the Web Audio API. Features multiple visualization modes and custom color schemes.",
      tags: ["Web Audio API", "Canvas", "React", "D3.js"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      id: 3,
      title: "AR Portfolio",
      shortDescription: "Augmented reality showcase",
      fullDescription: "A mobile AR experience built with AR.js that lets viewers explore my projects in 3D space by scanning QR codes placed around physical locations.",
      tags: ["AR.js", "Three.js", "A-Frame", "React"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-gray-950">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Interactive</span> Creations
          </h2>
          <p className="text-purple-200 max-w-2xl mx-auto">
            Projects that blend technology and creativity for immersive experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-purple-500/20 hover:shadow-lg transition-all">
            Explore More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;