import React from 'react';

function SampleForm() {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium
                                          text-gray-700 dark:text-gray-300"> {/* Texto adaptado */}
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="user@example.com"
          className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm
                     // Estilos adaptados: fondo, borde y color de texto/placeholder
                     bg-white dark:bg-gray-700 
                     border-gray-300 dark:border-gray-600
                     text-gray-900 dark:text-white
                     placeholder-gray-400 dark:placeholder-gray-500
                     focus:ring-blue-500 focus:border-blue-500" // El enfoque mantiene el mismo color
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium
                                             text-gray-700 dark:text-gray-300">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="********"
          className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm
                     bg-white dark:bg-gray-700
                     border-gray-300 dark:border-gray-600
                     text-gray-900 dark:text-white
                     placeholder-gray-400 dark:placeholder-gray-500
                     focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium
                   text-white bg-blue-600 // Botón primario
                   hover:bg-blue-700
                   focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                   dark:focus:ring-offset-gray-800" // Adaptación del offset del foco
      >
        Submit
      </button>
    </form>
  );
}

export default SampleForm;