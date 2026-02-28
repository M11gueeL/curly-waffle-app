import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header className="bg-surface-light dark:bg-surface-dark shadow-md border-b border-border-light dark:border-border-dark sticky top-0 z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="group flex items-center space-x-2">
          <img 
            src="/logo-texto.png" 
            alt="Curly Waffle Logo" 
            className="h-10 w-auto transform transition-transform duration-300 group-hover:scale-105 filter dark:brightness-200 dark:contrast-200" 
          />
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="relative text-text-heading-light dark:text-text-heading-dark font-medium hover:text-primary dark:hover:text-primary transition-colors duration-300 group">
            Inicio
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/contact" className="relative text-text-heading-light dark:text-text-heading-dark font-medium hover:text-primary dark:hover:text-primary transition-colors duration-300 group">
            Contacto
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/login" className="relative text-text-heading-light dark:text-text-heading-dark font-medium hover:text-primary dark:hover:text-primary transition-colors duration-300 group">
            Login
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-border-light dark:bg-border-dark text-text-heading-light dark:text-text-heading-dark hover:bg-secondary hover:text-white transition-all duration-300 transform hover:scale-105"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
