import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2 } }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 dark:bg-gray-900">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 mt-12 md:mt-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <h4 className="text-lg text-blue-600 dark:text-purple-400 font-medium mb-2">
              Hello, I'm
            </h4>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ahmed Mujtaba
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-6">
              .Net & React Developer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
              I create beautiful, responsive websites and applications with modern technologies. 
              Currently specializing in React, Next.js, and Tailwind CSS.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>
              
              <motion.a
                href="/resume.pdf"
                download
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiDownload /> Download CV
              </motion.a>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              {[
                { icon: <FiGithub size={20} />, url: "https://github.com" },
                { icon: <FiLinkedin size={20} />, url: "https://linkedin.com" },
                { icon: <FiTwitter size={20} />, url: "https://twitter.com" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  whileHover={{ y: -3 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Image/Illustration */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            {/* Replace with your actual image */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-20"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQG9GrJ1Vt0yiQ/profile-displayphoto-shrink_800_800/B56ZYbCXBuH0Ao-/0/1744210326785?e=1751500800&v=beta&t=UJML3YJjinuoMxmakPUCu6o5fRj00tDqQ5BhLCcDHZ0" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -bottom-5 -left-5 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                React.js
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -top-5 -right-5 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg"
              animate={{ 
                y: [0, -15, 0],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <div className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ASP.Net
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;