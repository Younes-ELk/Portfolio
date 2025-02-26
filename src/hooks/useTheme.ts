import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check if there's a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    // Return true only if the saved theme is explicitly 'dark'
    return savedTheme === 'dark';
  });

  useEffect(() => {
    // Remove any existing theme class first
    document.documentElement.classList.remove('dark', 'light');
    
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return { isDark, toggleTheme };
};