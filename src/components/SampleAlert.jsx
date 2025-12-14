import React, { useState } from 'react';

function InfoIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041.021m-2.584 1.25a.75.75 0 010-1.5h11.378a.75.75 0 010 1.5H8.653zm1.144 3.75a.75.75 0 010-1.5h11.378a.75.75 0 010 1.5H9.797zm-.005 3.75a.75.75 0 010-1.5h11.378a.75.75 0 010 1.5H9.792z" />
        </svg>
    )
}

function SampleAlert() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="p-4 rounded-lg shadow-lg flex items-center justify-between w-full
                    // Fondo y borde adaptados
                    bg-blue-50 border border-blue-400
                    dark:bg-blue-900/50 dark:border-blue-700"
    >
      <div className="flex items-center">
        <InfoIcon className="h-6 w-6 mr-3 text-blue-600 dark:text-blue-400" /> {/* Icono adaptado */}
        <p className="text-sm font-medium
                      text-blue-800 dark:text-blue-200"> {/* Texto adaptado */}
          New data is available! Please refresh your dashboard for the latest metrics.
        </p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="ml-4 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
        aria-label="Close notification"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

export default SampleAlert;