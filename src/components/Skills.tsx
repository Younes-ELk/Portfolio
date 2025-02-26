import React from 'react';
import { CheckCircle, Award, Cpu, Shield, Code, Palette } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  const skills = {
    infrastructure: [
      'Active Directory',
      'Microsoft Intune',
      'Crowdstrike Falcon',
      'Office 365',
      'Hyper-V',
      'FortiGate',
      'Windows Server',
      'Linux',
    ],
    development: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'React',
      'SQL Server',
      'PostgreSQL',
      'WordPress',
    ],
    aiAndDesign: [
      'AI Tools',
      'Generative AI',
      'Adobe Illustrator',
      'Adobe Photoshop',
      'Adobe XD',
      'Digital Marketing',
      'Facebook Ads',
    ],
    certifications: [
      {
        name: 'Google Digital Marketing',
        date: 'March 2022',
        id: '3KB Y7U JRL',
      },
      {
        name: 'Microsoft Programming in HTML5 with JavaScript and CSS3',
        date: 'January 2017',
        id: 'Exam 480',
      },
    ],
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Skills & Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {/* Infrastructure Skills */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover-card-effect"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Cpu className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                Infrastructure
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {skills.infrastructure.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <CheckCircle
                    className="text-green-500 dark:text-green-400 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Development Skills */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover-card-effect"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Code className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                Development
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {skills.development.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <CheckCircle
                    className="text-green-500 dark:text-green-400 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AI & Design Skills */}
          <motion.div
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover-card-effect"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Palette
                  className="text-blue-600 dark:text-blue-400"
                  size={24}
                />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                AI & Design
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {skills.aiAndDesign.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <CheckCircle
                    className="text-green-500 dark:text-green-400 flex-shrink-0"
                    size={18}
                  />
                  <span className="text-gray-700 dark:text-gray-300">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 lg:col-span-3 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover-card-effect mt-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Award className="text-blue-600 dark:text-blue-400" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                Certifications
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 p-6 border dark:border-gray-700 rounded-lg hover:border-blue-200 dark:hover:border-blue-800 transition-colors"
                >
                  <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg">
                    <Shield
                      className="text-blue-600 dark:text-blue-400"
                      size={24}
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                      {cert.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Issued: {cert.date}
                    </p>
                    <p className="text-blue-600 dark:text-blue-400 text-sm mt-1">
                      ID: {cert.id}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
