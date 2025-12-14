import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

// 1. Creación del Contexto
const ThemeContext = createContext(null);

// 2. Hook personalizado para fácil consumo
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe usarse dentro de un ThemeProvider');
  }
  return context;
};

// 3. Componente Proveedor
export const ThemeProvider = ({ children }) => {
  // Inicialización: busca en localStorage o usa la preferencia del sistema operativo (por defecto 'light')
  const [theme, setTheme] = useState(() => {
    try {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        return storedTheme;
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
      return 'light';
    } catch (error) {
      console.error("Error accessing localStorage", error);
      return 'light'; // Fallback
    }
  });

  // Efecto para aplicar la clase 'dark' al elemento <html>
  useEffect(() => {
    const root = window.document.documentElement;
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Función para alternar el tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  
  // Memoizar el valor del contexto
  const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};