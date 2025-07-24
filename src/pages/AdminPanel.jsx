import React, { useState } from 'react';

const AdminPanel = () => {
  const [view, setView] = useState('dashboard');
  const [doctorFilter, setDoctorFilter] = useState('');

  const [verificationRequests, setVerificationRequests] = useState([
    { id: 1, name: 'Dr. Sharma', type: 'Doctor' },
    { id: 2, name: 'LabCare Diagnostics', type: 'Lab' },
    { id: 3, name: 'Dr. Mehta', type: 'Doctor' },
  ]);

  const [doctors, setDoctors] = useState([
    { id: 1, name: 'Dr. Sharma', specialization: 'Cardiologist', area: 'Mumbai', status: 'Verified' },
    { id: 2, name: 'Dr. Patel', specialization: 'Dermatologist', area: 'Delhi', status: 'Unverified' },
    { id: 3, name: 'Dr. Khan', specialization: 'Neurologist', area: 'Bangalore', status: 'Verified' },
    { id: 4, name: 'Dr. Mehta', specialization: 'Orthopedic', area: 'Mumbai', status: 'Unverified' },
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: 'Rohit', area: 'Mumbai' },
    { id: 2, name: 'Priya', area: 'Delhi' },
    { id: 3, name: 'Karan', area: 'Mumbai' },
    { id: 4, name: 'Sara', area: 'Bangalore' },
  ]);

  const [feedbacks, setFeedbacks] = useState([
    { id: 1, user: 'Rohit', comment: 'Great platform, easy to book doctors!' },
    { id: 2, user: 'Priya', comment: 'The lab test service was fast and convenient.' },
    { id: 3, user: 'Sara', comment: 'Need more doctors in my city.' },
  ]);

  const filteredDoctors = doctorFilter
    ? doctors.filter(doc => doc.area.toLowerCase().includes(doctorFilter.toLowerCase()))
    : doctors;

  const handleApprove = (id) => {
    const request = verificationRequests.find(r => r.id === id);
    if (request?.type === 'Doctor') {
      setDoctors(prev =>
        prev.map(doc => doc.name === request.name ? { ...doc, status: 'Verified' } : doc)
      );
    }
    setVerificationRequests(prev => prev.filter(req => req.id !== id));
  };

  const handleReject = (id) => {
    setVerificationRequests(prev => prev.filter(req => req.id !== id));
  };

  const handleDeleteReview = (id) => {
    setFeedbacks(prev => prev.filter(fb => fb.id !== id));
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-4 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        {['dashboard', 'verify', 'doctors', 'labs', 'users', 'analytics', 'reviews', 'settings'].map(tab => (
          <button
            key={tab}
            onClick={() => setView(tab)}
            className="text-left hover:bg-gray-700 p-2 rounded capitalize"
          >
            {tab.replace('-', ' ')}
          </button>
        ))}
      </aside>

      <main className="flex-1 p-6 space-y-4">
        {view === 'dashboard' && (
          <section>
            <h1 className="text-3xl font-bold mb-4">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded shadow text-center">
                <p className="text-xl font-semibold">{users.length}</p>
                <p className="text-gray-600">Total Users</p>
              </div>
              <div className="bg-white p-4 rounded shadow text-center">
                <p className="text-xl font-semibold">{doctors.length}</p>
                <p className="text-gray-600">Total Doctors</p>
              </div>
              <div className="bg-white p-4 rounded shadow text-center">
                <p className="text-xl font-semibold">{verificationRequests.length}</p>
                <p className="text-gray-600">Pending Verifications</p>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-2">Recent Feedback</h2>
            <ul className="mb-6 space-y-2">
              {feedbacks.slice(0, 3).map(fb => (
                <li key={fb.id} className="bg-white p-3 rounded shadow">
                  <strong>{fb.user}:</strong> {fb.comment}
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mb-2">Recent Verification Requests</h2>
            <ul className="space-y-2">
              {verificationRequests.slice(0, 3).map(req => (
                <li key={req.id} className="bg-white p-3 rounded shadow">
                  <strong>{req.name}</strong> ({req.type})
                </li>
              ))}
            </ul>
          </section>
        )}

        {view === 'verify' && (
          <section>
            <h1 className="text-3xl font-bold mb-4">Verification Requests</h1>
            {verificationRequests.map(req => (
              <div key={req.id} className="bg-white p-3 shadow rounded mb-2 flex justify-between items-center">
                <div>
                  <p><strong>Name:</strong> {req.name}</p>
                  <p><strong>Type:</strong> {req.type}</p>
                </div>
                <div>
                  <button
                    className="bg-green-600 text-white px-2 py-1 rounded mr-2"
                    onClick={() => handleApprove(req.id)}
                  >
                    Approve
                  </button>
                  <button
                    className="bg-red-600 text-white px-2 py-1 rounded"
                    onClick={() => handleReject(req.id)}
                  >
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </section>
        )}

        {view === 'doctors' && (
          <section>
            <h1 className="text-3xl font-bold mb-4">Manage Doctors</h1>
            <input
              type="text"
              placeholder="Filter by Area (e.g., Mumbai)"
              className="mb-4 p-2 border rounded w-full md:w-1/3"
              value={doctorFilter}
              onChange={(e) => setDoctorFilter(e.target.value)}
            />
            {filteredDoctors.map(doc => (
              <div key={doc.id} className="bg-white p-3 shadow rounded mb-2">
                <p><strong>Name:</strong> {doc.name}</p>
                <p><strong>Specialization:</strong> {doc.specialization}</p>
                <p><strong>Area:</strong> {doc.area}</p>
                <p><strong>Status:</strong> {doc.status}</p>
              </div>
            ))}
          </section>
        )}

        {view === 'labs' && (
          <section>
            <h1 className="text-3xl font-bold mb-4">Manage Labs</h1>
            <p>List of all labs with details coming soon...</p>
          </section>
        )}

        {view === 'users' && (
          <section>
            <h1 className="text-3xl font-bold mb-4">Users</h1>
            {users.map(user => (
              <div key={user.id} className="bg-white p-3 shadow rounded mb-2">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Area:</strong> {user.area}</p>
                <button className="bg-red-500 text-white px-2 py-1 rounded mt-1">Ban User</button>
              </div>
            ))}
          </section>
        )}

        {view === 'reviews' && (
          <section>
            <h1 className="text-3xl font-bold mb-4">Feedback & Reviews</h1>
            {feedbacks.map(fb => (
              <div key={fb.id} className="bg-white p-3 shadow rounded mb-2">
                <p><strong>User:</strong> {fb.user}</p>
                <p><strong>Comment:</strong> {fb.comment}</p>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded mt-1"
                  onClick={() => handleDeleteReview(fb.id)}
                >
                  Delete Review
                </button>
              </div>
            ))}
          </section>
        )}

        {view === 'analytics' && (
          <section>
            <h1 className="text-3xl font-bold mb-4">Analytics & Reports</h1>
            <p>Graphs and statistics will appear here.</p>
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
