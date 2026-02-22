import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 dark:text-white">Contact Us</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Have questions? We'd love to hear from you.
      </p>
      
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
          <input 
            type="email" 
            id="email" 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm p-2 border" 
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
          <textarea 
            id="message" 
            rows="4" 
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white sm:text-sm p-2 border"
            placeholder="Your message..."
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
