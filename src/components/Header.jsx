import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const links = [
  { to: '/', label: 'Home' },
  { to: '/auth', label: 'Login / Signup' },
  { to: '/user', label: 'User Panel' },
  { to: '/doctor', label: 'Doctor Panel' },
  { to: '/admin', label: 'Admin Panel' },
  { to: '/lab', label: 'Lab Panel' },
];


  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 shadow-md">
      <div className="w-full px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 pl-2">
          <span className="text-3xl">🩺</span>
          <h1 className="text-2xl font-bold text-white">DocFind</h1>
        </div>

        <nav className="space-x-8">
          {links.map((link) =>
            link.to === currentPath ? (
              <span
                key={link.to}
                className="text-gray-400 cursor-not-allowed"
              >
                {link.label}
              </span>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-300 hover:text-white transition font-medium"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
