import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Librairie Papeterie Nationale (filiale HACHETTE LIVRE)',
      position: 'IT Infrastructure & Security Administrator',
      location: 'Mohammédia, Maroc',
      period: "Avril 2023 - Aujourd'hui",
      description:
        'Membre du comité SI et Sécurité, responsable de la gestion des infrastructures et de la sécurité informatique.',
      achievements: [
        'Membre du comité SI et Sécurité',
        'Gestion des sauvegardes, restaurations et tests de fiabilité',
        "Point de contact avec les fournisseurs d'accès internet",
        'Recensement annuel des besoins en matériels informatiques',
        'Implémentation des bonnes pratiques techniques pour la gestion des infrastructures',
        'Sensibilisation des utilisateurs aux enjeux de la cybersécurité',
        'Déploiement et intégration des mesures de sécurité pour le site web www.lpn.ma',
      ],
      projects: [
        'Migration du Firewall FortiGate de 100D vers 70F',
        'Optimisation du réseau avec transition de la passerelle Magnitude Maroc-France',
        'Installation et configuration de CrowdStrike EDR',
        'Déploiement de Syslog Wazuh',
        'Mise en place de DOCEBO Attribute9',
        'Participation au projet ModernIT: déploiement Cloud Azure (Intune)',
      ],
    },
    {
      company: 'Librairie Papeterie Nationale (filiale HACHETTE LIVRE)',
      position: 'System & Network Administrator',
      location: 'Maroc',
      period: 'Juillet 2019 - Avril 2023',
      description:
        'Administration et supervision des infrastructures du Datacenter.',
      achievements: [
        'Supervision et administration des infrastructures du Datacenter',
        "Interface avec les fournisseurs d'accès internet et résolution des incidents",
        'Gestion et validation des stratégies de sauvegarde',
        'Assurer le bon fonctionnement des infrastructures informatiques',
        'Implémentation de mesures de sécurité pour la protection des données',
      ],
    },
    {
      company: 'Librairie Papeterie Nationale (filiale HACHETTE LIVRE)',
      position: 'Help Desk Support Technician',
      location: 'Maroc',
      period: 'Août 2018 - Juillet 2019',
      description: 'Support technique et gestion du parc informatique.',
      achievements: [
        'Gestion du parc informatique (serveurs, PC, imprimantes, scanners, téléphonie)',
        'Support technique et assistance aux utilisateurs',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">
          Professional Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
              )}

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full">
                    <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                          {exp.position}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400">{exp.company}</p>
                        <p className="text-gray-600 dark:text-gray-400">{exp.location}</p>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle2
                                className="text-green-500 dark:text-green-400 mt-1"
                                size={16}
                              />
                              <span className="text-gray-700 dark:text-gray-300">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {exp.projects && (
                        <div>
                          <h4 className="font-semibold text-gray-700 dark:text-gray-200 mb-2">
                            Notable Projects
                          </h4>
                          <ul className="space-y-2">
                            {exp.projects.map((project, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2"></span>
                                <span className="text-gray-700 dark:text-gray-300">{project}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;