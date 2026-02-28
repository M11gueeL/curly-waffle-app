import React from 'react';

const PostCard = ({ username, handle, time, content, likes, comments, delay }) => (
  <div 
    className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-border-light dark:border-border-dark p-5 mb-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer animate-fade-in-delayed"
    style={{ animationDelay: delay }}
  >
    <div className="flex items-start">
      <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex-shrink-0 animate-pulse"></div>
      <div className="ml-3 w-full">
        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold text-text-heading-light dark:text-text-heading-dark text-base block md:inline hover:text-primary transition-colors">{username}</span>
            <span className="text-sm text-text-body-light dark:text-text-body-dark opacity-70 md:ml-2">@{handle}</span>
          </div>
          <span className="text-xs text-text-body-light dark:text-text-body-dark opacity-60 hover:underline">{time}</span>
        </div>
        
        <p className="mt-2 text-text-body-light dark:text-text-body-dark leading-relaxed">
          {content}
        </p>

        <div className="mt-4 flex items-center space-x-6 border-t border-border-light dark:border-border-dark pt-3">
          <button className="flex items-center space-x-2 text-text-body-light dark:text-text-body-dark hover:text-primary transition-colors group">
            <div className="p-2 rounded-full group-hover:bg-primary/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <span className="text-sm font-medium">{likes}</span>
          </button>
          
          <button className="flex items-center space-x-2 text-text-body-light dark:text-text-body-dark hover:text-secondary transition-colors group">
            <div className="p-2 rounded-full group-hover:bg-secondary/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <span className="text-sm font-medium">{comments}</span>
          </button>
          
          <button className="flex items-center space-x-2 text-text-body-light dark:text-text-body-dark hover:text-primary transition-colors ml-auto group">
            <div className="p-2 rounded-full group-hover:bg-primary/10 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:rotate-12 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Create Post Input */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-xl shadow-lg border border-border-light dark:border-border-dark p-4 mb-8 animate-fade-in hover:shadow-xl transition-shadow duration-300">
        <div className="flex space-x-4">
          <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-gray-200 to-gray-400 dark:from-gray-700 dark:to-gray-600 flex-shrink-0"></div>
          <div className="flex-grow">
            <textarea 
              className="w-full bg-transparent border-none focus:ring-0 text-text-heading-light dark:text-text-heading-dark placeholder-gray-400 dark:placeholder-gray-500 resize-none h-20 focus:outline-none"
              placeholder="¿Qué está pasando? ¡Comparte tu Waffle!"
            ></textarea>
            <div className="flex justify-between items-center mt-2 border-t border-border-light dark:border-border-dark pt-3">
              <div className="flex space-x-2">
                <button className="text-secondary hover:bg-yellow-50 dark:hover:bg-gray-800 p-2 rounded-full transition-all duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </button>
                <button className="text-secondary hover:bg-yellow-50 dark:hover:bg-gray-800 p-2 rounded-full transition-all duration-300 hover:scale-110">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
              <button className="bg-primary hover:bg-red-500 text-white px-6 py-2 rounded-full font-bold shadow-md transform active:scale-95 transition-all duration-200 hover:shadow-lg">
                Wafflear
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Feed */}
      <h3 className="text-xl font-bold text-text-heading-light dark:text-text-heading-dark mb-6 px-2 border-l-4 border-secondary pl-3 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        Últimos Waffles
      </h3>

      <PostCard 
        username="María González" 
        handle="mariag" 
        time="2h" 
        content="¡Acabo de probar los nuevos waffles de la esquina! Están increíbles 🧇🥞 #Foodie #WaffleLove" 
        likes={24} 
        comments={5} 
        delay="0.2s"
      />

      <PostCard 
        username="Carlos Rodriguez" 
        handle="charlyr" 
        time="5h" 
        content="Trabajando en mi nuevo proyecto de React. ¡La comunidad es asombrosa! 💻✨ ¿Alguien tiene consejos para optimizar contextos?" 
        likes={156} 
        comments={42} 
        delay="0.3s"
      />

      <PostCard 
        username="Ana Smith" 
        handle="ana_dev" 
        time="1d" 
        content="El modo oscuro de esta aplicación es súper relajante para la vista. Gran elección de paleta de colores. 🎨🌙" 
        likes={89} 
        comments={12} 
        delay="0.4s"
      />
    </div>
  );
};

export default Home;
