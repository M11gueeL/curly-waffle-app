import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-400">
        <p>&copy; {new Date().getFullYear()} Mi Aplicación. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
