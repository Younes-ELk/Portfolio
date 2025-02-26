import React from 'react';
import { GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education: React.FC = () => {
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

  const education = [
    {
      school: 'Alx_Africa',
      degree: 'Software Engineer',
      period: 'mai 2023 - mai 2024',
    },
    {
      school: 'Faculté des sciences Ain Chock',
      degree: 'Licence professionnelle, Developpement mobile et Multimédia',
      period: 'sept. 2017 - juil. 2018',
    },
    {
      school:
        'Office de la Formation Professionnelle et de la Promotion du Travail',
      degree: 'Technicien Spécialisé, Développement Informatique',
      period: '2015 - 2017',
    },
    {
      school: 'Ecole Professionnelle de Gestion Informatique et Commerciale',
      degree:
        'Technicien Spécialisé, Développement Informatique | Base Commerce',
      period: '2015 - 2016',
    },
    {
      school: 'Lycée Ibnou Al Haitam',
      degree: 'Baccalauréat, Sciences Physique',
      period: '2014 - 2015',
    },
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-3xl mx-auto"
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index !== education.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-2 bg-blue-600 dark:bg-blue-500 rounded-full p-2">
                <GraduationCap className="text-white" size={16} />
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 ml-4 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  {edu.school}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{edu.degree}</p>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <Calendar size={16} className="mr-2" />
                  <span>{edu.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;