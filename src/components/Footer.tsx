import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 mb-4">
            Made with{' '}
            <Heart className="text-red-500 dark:text-red-400" size={20} fill="currentColor" /> by
            Younes-Dev
          </div>
          <p className="text-gray-500 dark:text-gray-400">© {currentYear} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;