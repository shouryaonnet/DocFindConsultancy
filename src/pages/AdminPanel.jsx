import React, { useState } from 'react';

const AdminPanel = () => {
  const [view, setView] = useState('dashboard');

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-4 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <button onClick={() => setView('dashboard')} className="text-left hover:bg-gray-700 p-2 rounded">Dashboard</button>
        <button onClick={() => setView('verify')} className="text-left hover:bg-gray-700 p-2 rounded">Verification Requests</button>
        <button onClick={() => setView('doctors')} className="text-left hover:bg-gray-700 p-2 rounded">Manage Doctors</button>
        <button onClick={() => setView('labs')} className="text-left hover:bg-gray-700 p-2 rounded">Manage Labs</button>
        <button onClick={() => setView('users')} className="text-left hover:bg-gray-700 p-2 rounded">Users</button>
        <button onClick={() => setView('analytics')} className="text-left hover:bg-gray-700 p-2 rounded">Analytics</button>
        <button onClick={() => setView('reviews')} className="text-left hover:bg-gray-700 p-2 rounded">Feedback & Reviews</button>
        <button onClick={() => setView('settings')} className="text-left hover:bg-gray-700 p-2 rounded">Site Settings</button>
      </aside>

      <main className="flex-1 p-6">
        {view === 'dashboard' && (
          <section>
            <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded shadow">Total Users: 120</div>
              <div className="bg-white p-4 rounded shadow">Total Doctors: 30</div>
              <div className="bg-white p-4 rounded shadow">Total Labs: 10</div>
            </div>
          </section>
        )}

        {view === 'verify' && (
          <section>
            <h1 className="text-3xl font-bold mb-4">Verification Requests</h1>
            <p>Pending Doctor and Lab verifications will appear here with Approve/Reject options.</p>
          </section>
        )}

        {view === 'doctors' && (
          <section>
            <h1 className="text-3xl font-bold mb-4">Manage Doctors</h1>
            <p>List of all doctors, filter by location, specialization, and status (verified/unverified).</p>
          </section>
        )}

        {view === 'labs' && (
          <section>
            <h1 className="text-3xl font-bold mb-4">Manage Labs</h1>
            <p>List of all labs with their details, services provided, and approval status.</p>
          </section>
        )}

        {view === 'users' && (
          <section>
            <h1 className="text-3xl font-bold mb-4">Users</h1>
            <p>All registered users, option to view their appointments, activity, and ban/suspend.</p>
          </section>
        )}

        {view === 'analytics' && (
          <section>
            <h1 className="text-3xl font-bold mb-4">Analytics & Reports</h1>
            <p>Graphs and statistics of usage, revenue, popular specializations, etc.</p>
          </section>
        )}

        {view === 'reviews' && (
          <section>
            <h1 className="text-3xl font-bold mb-4">Feedback & Reviews</h1>
            <p>View and moderate user reviews and feedback for doctors, labs, and the platform.</p>
          </section>
        )}

        {view === 'settings' && (
          <section>
            <h1 className="text-3xl font-bold mb-4">Site Settings</h1>
            <p>Update Privacy Policy, Terms of Service, and publish site-wide announcements.</p>
          </section>
        )}
      </main>
    </div>
  );
};

export default AdminPanel;
