import React from 'react';

const Login = () => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-6 dark:text-white">Sign In</h2>
      <div className="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 dark:bg-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
            id="username" 
            type="text" 
            placeholder="Username" 
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200 dark:bg-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
            id="password" 
            type="password" 
            placeholder="******************" 
          />
        </div>
        <div className="flex items-center justify-between">
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="button"
          >
            Sign In
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
