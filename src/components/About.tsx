import React from 'react';
import { Server, Shield, Network, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              With over 5 years of experience in system and network
              administration, I specialize in designing, implementing, and
              maintaining robust IT infrastructure solutions. My expertise spans
              across various domains including server management, network
              security, and cloud computing.
            </p>
            <div className="space-y-6">
              <div className="hover-card-effect bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md">
                <div className="flex items-start gap-4">
                  <Server
                    className="text-blue-600 dark:text-blue-400 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-lg">
                      Infrastructure Management
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Expert in managing and optimizing server infrastructure
                      with focus on performance and reliability.
                    </p>
                  </div>
                </div>
              </div>

              <div className="hover-card-effect bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md">
                <div className="flex items-start gap-4">
                  <Shield
                    className="text-blue-600 dark:text-blue-400 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-lg">
                      Security Focus
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Implementing comprehensive security measures to protect
                      critical infrastructure and data.
                    </p>
                  </div>
                </div>
              </div>

              <div className="hover-card-effect bg-white dark:bg-gray-700 p-4 rounded-xl shadow-md">
                <div className="flex items-start gap-4">
                  <Network
                    className="text-blue-600 dark:text-blue-400 mt-1"
                    size={24}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-lg">
                      Network Architecture
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Designing and implementing scalable network solutions for
                      optimal performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-blue-600/10 dark:bg-blue-400/10 rounded-3xl blur-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=600"
              alt="Professional Portrait"
              className="rounded-2xl shadow-xl relative z-10 transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white p-6 rounded-2xl shadow-xl z-20">
              <div className="flex items-center gap-3">
                <Award size={24} />
                <div>
                  <p className="font-bold text-2xl">5+ Years</p>
                  <p>Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
