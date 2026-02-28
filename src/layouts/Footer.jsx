import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface-light dark:bg-surface-dark border-t border-border-light dark:border-border-dark mt-auto py-8 transition-colors duration-300">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0 flex flex-col items-center md:items-start">
          <img 
            src="/texto.png" 
            alt="Curly Waffle" 
            className="h-8 mb-2 dark:brightness-200 dark:contrast-200" 
          />
          <p className="text-sm text-text-body-light dark:text-text-body-dark opacity-80">
            &copy; {new Date().getFullYear()} Todos los derechos reservados.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-text-body-light dark:text-text-body-dark hover:text-secondary transition-colors duration-300 hover:underline">Términos</a>
          <a href="#" className="text-text-body-light dark:text-text-body-dark hover:text-secondary transition-colors duration-300 hover:underline">Privacidad</a>
          <a href="#" className="text-text-body-light dark:text-text-body-dark hover:text-secondary transition-colors duration-300 hover:underline">Ayuda</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
