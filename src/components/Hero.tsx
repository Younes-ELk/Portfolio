import React from 'react';
import { Download, Linkedin, Github, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative bg-gradient-to-br from-blue-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0">
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-center md:text-left z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 font-medium mb-6"
            >
              <span className="wave-emoji mr-2">👋</span> Welcome to my
              portfolio
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-gray-100 mb-6 leading-tight">
              <span className="gradient-text">I'm a</span>{' '}
              <TypeAnimation
                sequence={[
                  'IT Infrastructure',
                  1000,
                  'Security Administrator',
                  1000,
                  'Network Specialist',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-blue-600 dark:text-blue-400"
              />
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Passionate about building secure and scalable infrastructure
              solutions, with expertise in system administration and network
              security.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/pdf/cv.pdf"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-blue-500/25"
              >
                <Download size={20} />
                Download CV
              </motion.a>

              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.linkedin.com/in/elkortih-younes-709a47215/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <Linkedin size={24} className="text-[#0A66C2]" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                  href="https://github.com/Younes-ELk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  <Github
                    size={24}
                    className="text-gray-800 dark:text-gray-100"
                  />
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-600/10 dark:bg-blue-400/10 rounded-full blur-2xl"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden glass-morphism dark:bg-gray-800/50 p-2">
                <img
                  src="https://images.unsplash.com/photo-1603969409447-ba86143a03f6?auto=format&fit=crop&q=80&w=600"
                  alt="Network Infrastructure"
                  className="rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white p-6 rounded-2xl shadow-xl z-20"
              >
                <p className="font-bold text-2xl">5+ Years</p>
                <p>Experience</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer"
          >
            <ChevronDown
              size={32}
              className="text-blue-600 dark:text-blue-400"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
