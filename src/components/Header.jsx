import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md text-gray-900 dark:text-white">
      <div className="w-full px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 pl-2">
          <span className="text-3xl">🩺</span>
          <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-300">DocFind</h1>
        </div>

        <nav className="space-x-8">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/login" className="hover:text-blue-500">Login</Link>
          <Link to="/user" className="hover:text-blue-500">User Panel</Link>
          <Link to="/doctor" className="hover:text-blue-500">Doctor Panel</Link>
          <Link to="/admin" className="hover:text-blue-500">Admin Panel</Link>
          <Link to="/lab" className="hover:text-blue-500">Lab Panel</Link>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded transition"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
