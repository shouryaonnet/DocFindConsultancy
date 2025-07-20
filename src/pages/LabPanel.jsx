import React, { useState } from 'react';

const LabPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-4 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Lab Panel</h2>
        <button onClick={() => setActiveTab('dashboard')} className="text-left hover:bg-gray-800 p-2 rounded">Dashboard</button>
        <button onClick={() => setActiveTab('pending')} className="text-left hover:bg-gray-800 p-2 rounded">Pending Requests</button>
        <button onClick={() => setActiveTab('accepted')} className="text-left hover:bg-gray-800 p-2 rounded">Accepted Tests</button>
        <button onClick={() => setActiveTab('completed')} className="text-left hover:bg-gray-800 p-2 rounded">Completed Tests</button>
        <button onClick={() => setActiveTab('profile')} className="text-left hover:bg-gray-800 p-2 rounded">Profile</button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-700">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
          <button className="bg-gray-800 text-white px-4 py-2 rounded">Logout</button>
        </div>

        {/* Dynamic Content */}
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-4 shadow rounded">Total Requests: <strong>12</strong></div>
            <div className="bg-white p-4 shadow rounded">Completed Tests: <strong>8</strong></div>
            <div className="bg-white p-4 shadow rounded">Pending Requests: <strong>4</strong></div>
          </div>
        )}

        {activeTab === 'pending' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Pending Test Requests</h2>
            <p>🧪 List of pending test requests will appear here.</p>
          </div>
        )}

        {activeTab === 'accepted' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Accepted Tests</h2>
            <p>✔️ List of accepted test requests will appear here.</p>
          </div>
        )}

        {activeTab === 'completed' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Completed Tests</h2>
            <p>📄 History of completed tests will appear here.</p>
          </div>
        )}

        {activeTab === 'profile' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Lab Profile</h2>
            <p>🏥 Lab details and settings will be shown here.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default LabPanel;
