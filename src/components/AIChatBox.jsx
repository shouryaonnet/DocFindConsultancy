import React from 'react';

const AIChatBox = ({ onClose, isVisible }) => {
  return (
    <div
      className={`fixed bottom-4 right-4 bg-white shadow-lg border rounded-lg w-80 h-96 flex flex-col z-50
      transform transition-all duration-300 ease-in-out
      ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}
      `}
    >
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white p-2 flex justify-between items-center rounded-t-lg">
        <span>AI Symptom Checker</span>
        <button onClick={onClose} className="text-white font-bold">X</button>
      </div>

      <div className="flex-1 p-3 overflow-y-auto text-gray-700">
        <p>👋 Hi! Describe your symptoms and I'll try to help you.</p>
      </div>

      <div className="p-2 border-t">
        <input
          type="text"
          placeholder="Type your symptoms..."
          className="w-full border rounded px-2 py-1 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default AIChatBox;
