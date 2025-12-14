import React from 'react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

function DashboardLayout({ children }) {
  const { theme } = useTheme();

  return (
    // Fondo principal de toda la aplicación y transición
    <div className="min-h-screen transition-colors duration-300
                    bg-gray-100 dark:bg-gray-900">
      {/* Encabezado/Navbar adaptado */}
      <header className="
        w-full p-4 shadow-md flex justify-between items-center transition-colors duration-300
        bg-white dark:bg-gray-800
        border-b border-gray-200 dark:border-gray-700
      ">
        <h1 className="text-2xl font-bold
                       text-gray-900 dark:text-white">
          Admin Dashboard
        </h1>
        <div className="flex items-center space-x-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {theme === 'light' ? 'Modo Claro' : 'Modo Oscuro'}
          </p>
          <ThemeToggle /> {/* El control de tema */}
        </div>
      </header>

      {/* Área de Contenido */}
      <main className="flex">
        <div className="flex-1 w-full">
            {children}
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;