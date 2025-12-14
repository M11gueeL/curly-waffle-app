import React from 'react';
import { useTheme } from '../context/ThemeContext';

// Iconos SVG simplificados para el modo claro/oscuro
const SunIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
  </svg>
);
const MoonIcon = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0111.25 21.75c-5.105 0-9.718-3.042-9.718-9.718.002-5.105 3.042-9.718 9.718-9.718a9.718 9.718 0 0110.502 6.756z" />
  </svg>
);


function ThemeToggle() {
  const { theme, toggleTheme } = useTheme(); // Acceso a la función de toggle y el estado actual

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-colors duration-300
                 bg-gray-200 text-gray-800
                 dark:bg-gray-700 dark:text-gray-200
                 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <MoonIcon className="h-6 w-6" />
      ) : (
        <SunIcon className="h-6 w-6" />
      )}
    </button>
  );
}

export default ThemeToggle;