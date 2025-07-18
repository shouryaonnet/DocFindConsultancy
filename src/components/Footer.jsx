import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-6 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p>© 2025 DocFind. All rights reserved.</p>

        <div className="flex space-x-4">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
