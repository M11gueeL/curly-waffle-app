import React from 'react';

const Login = () => {
  return (
    <div className="max-w-md mx-auto mt-10 animate-fade-in">
      <div className="text-center mb-8 flex flex-col items-center">
        <img 
          src="/logo-texto.png" 
          alt="Curly Waffle Logo" 
          className="h-24 md:h-28 mb-4 hover:scale-105 transition-transform duration-500 dark:brightness-200 dark:contrast-200" 
        />
        <p className="text-text-body-light dark:text-text-body-dark opacity-80 text-lg">Bienvenido de nuevo</p>
      </div>
      
      <div className="bg-surface-light dark:bg-surface-dark shadow-xl rounded-2xl border border-border-light dark:border-border-dark px-8 pt-8 pb-10 mb-4 transform hover:shadow-2xl transition-all duration-300">
        <h2 className="text-2xl font-bold text-center mb-8 text-text-heading-light dark:text-text-heading-dark">Iniciar Sesión</h2>
        <div className="mb-6">
          <label className="block text-text-heading-light dark:text-text-heading-dark text-sm font-bold mb-2" htmlFor="username">
            Usuario
          </label>
          <input 
            className="shadow-sm appearance-none border border-border-light dark:border-border-dark rounded-lg w-full py-3 px-4 text-text-body-light dark:text-text-body-dark bg-background-light dark:bg-background-dark leading-tight focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" 
            id="username" 
            type="text" 
            placeholder="Usuario" 
          />
        </div>
        <div className="mb-8">
          <label className="block text-text-heading-light dark:text-text-heading-dark text-sm font-bold mb-2" htmlFor="password">
            Contraseña
          </label>
          <input 
            className="shadow-sm appearance-none border border-border-light dark:border-border-dark rounded-lg w-full py-3 px-4 text-text-body-light dark:text-text-body-dark bg-background-light dark:bg-background-dark mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all" 
            id="password" 
            type="password" 
            placeholder="******************" 
          />
        </div>
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center text-sm text-text-body-light dark:text-text-body-dark">
            <input type="checkbox" className="mr-2 rounded text-primary focus:ring-primary" />
            Recuérdame
          </label>
          <a className="font-bold text-sm text-secondary hover:text-opacity-80 transition-colors" href="#">
            ¿Olvidaste tu contraseña?
          </a>
        </div>
        <button 
          className="w-full bg-primary hover:bg-opacity-90 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline shadow-lg transform active:scale-95 transition-all" 
          type="button"
        >
          Entrar a Wafflear
        </button>
      </div>
      <p className="text-center text-text-body-light dark:text-text-body-dark text-sm opacity-70">
        ¿Aún no tienes cuenta? <a href="#" className="text-primary font-bold hover:underline">Regístrate</a>
      </p>
    </div>
  );
};

export default Login;
