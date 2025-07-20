import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4 px-8 mt-12">
      <div className="flex justify-between items-center w-full">
        <p className="text-sm">&copy; 2025 DocFind. All rights reserved.</p>

        <div className="flex space-x-6">
          <a href="#" className="hover:text-white text-sm">Privacy Policy</a>
          <a href="#" className="hover:text-white text-sm">Terms of Service</a>
          <a href="#" className="hover:text-white text-sm">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
