import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg border border-border-light dark:border-border-dark p-8">
        <h2 className="text-3xl font-bold mb-2 text-text-heading-light dark:text-text-heading-dark">Contáctanos</h2>
        <p className="text-text-body-light dark:text-text-body-dark mb-8 opacity-80">
          ¿Tienes preguntas o sugerencias para mejorar Curly Waffle? ¡Escríbenos!
        </p>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-text-heading-light dark:text-text-heading-dark mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-body-light dark:text-text-body-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-3 border transition-colors" 
              placeholder="tu@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-text-heading-light dark:text-text-heading-dark mb-2">Mensaje</label>
            <textarea 
              id="message" 
              rows="4" 
              className="w-full rounded-lg border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-text-body-light dark:text-text-body-dark shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-3 border transition-colors resize-none"
              placeholder="Cuéntanos qué piensas..."
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full flex justify-center py-3 px-4 border border-transparent shadow-md text-sm font-bold rounded-lg text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all transform active:scale-95"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
