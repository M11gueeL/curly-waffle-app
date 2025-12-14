import React from 'react';

// Se utiliza para dar formato a todas las secciones del dashboard (tabla, form, métricas)
function Card({ title, children }) {
  return (
    <div className="
      // Clases con adaptación al tema
      bg-white p-6 rounded-lg shadow-xl transition-colors duration-300
      dark:bg-gray-800 dark:shadow-2xl dark:shadow-black/50
      border border-gray-200 dark:border-gray-700
      h-full
    ">
      {title && (
        <h2 className="text-xl font-semibold mb-4
                       text-gray-900 dark:text-white"> {/* Adaptación de texto */}
          {title}
        </h2>
      )}
      {children}
    </div>
  );
}

export default Card;