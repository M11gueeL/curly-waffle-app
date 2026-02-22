import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300">
          Mi Aplicación
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Home</Link>
          <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Contact</Link>
          <Link to="/login" className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">Login</Link>
        </nav>
        <button
          onClick={toggleDarkMode}
          className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
      </div>
    </header>
  );
};

export default Header;
