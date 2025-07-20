import React, { useState } from 'react';
import { BellIcon } from '@heroicons/react/24/solid';

const UserPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [reports, setReports] = useState([]);
  const [rating, setRating] = useState({});
  const [selectedReport, setSelectedReport] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);

  const appointments = [
    { id: 1, doctor: 'Dr. Mehta', date: '2025-08-01', type: 'Physical' },
    { id: 2, doctor: 'Dr. Roy', date: '2025-08-05', type: 'Video' },
  ];

  const pastConsultations = [
    { id: 1, doctor: 'Dr. Ahuja', date: '2025-07-01', rated: true, rating: 4 },
    { id: 2, doctor: 'Dr. Khan', date: '2025-06-21', rated: false },
  ];

  const notifications = [
    '🔔 Appointment with Dr. Mehta tomorrow at 5 PM.',
    '🔔 New prescription available from Dr. Ahuja.',
    '🔔 Your report has been reviewed.',
  ];

  const doctorsList = ['Dr. Mehta', 'Dr. Roy', 'Dr. Ahuja', 'Dr. Khan'];

  const handleReportUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setReports([...reports, file.name]);
    }
  };

  const handleRating = (doctorId, value) => {
    setRating({ ...rating, [doctorId]: value });
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-6">User Panel</h2>
        <button onClick={() => setActiveTab('dashboard')} className="block w-full text-left py-2 hover:bg-gray-700 rounded">Dashboard</button>
        <button onClick={() => setActiveTab('appointments')} className="block w-full text-left py-2 hover:bg-gray-700 rounded">Appointments</button>
        <button onClick={() => setActiveTab('reports')} className="block w-full text-left py-2 hover:bg-gray-700 rounded">Reports</button>
        <button onClick={() => setActiveTab('ratings')} className="block w-full text-left py-2 hover:bg-gray-700 rounded">Ratings</button>
      </aside>

      <main className="flex-1 p-8 bg-gray-50">
        <div className="flex justify-end mb-4">
          <button className="relative bg-white shadow rounded-full p-2 hover:bg-gray-200" onClick={() => setShowNotifications(!showNotifications)}>
            <BellIcon className="h-6 w-6 text-gray-700"/>
            {showNotifications && (
              <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded p-3 text-sm z-50">
                <h4 className="font-semibold mb-2">Notifications</h4>
                <ul className="space-y-1 text-gray-600">
                  {notifications.map((note, index) => (<li key={index}>{note}</li>))}
                </ul>
              </div>
            )}
          </button>
        </div>

        {activeTab === 'dashboard' && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Welcome to Your Dashboard</h3>
            <p>Manage your appointments, reports, and interactions with doctors here.</p>
          </div>
        )}

        {activeTab === 'appointments' && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Your Appointments</h3>
            <ul className="space-y-2">
              {appointments.map(appt => (
                <li key={appt.id} className="bg-white shadow rounded p-4">
                  <strong>Doctor:</strong> {appt.doctor} <br />
                  <strong>Date:</strong> {appt.date} <br />
                  <strong>Type:</strong> {appt.type}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'reports' && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Upload & Share Reports</h3>
            <input type="file" onChange={handleReportUpload} className="mb-4" />
            <ul className="space-y-2">
              {reports.map((r, i) => (
                <li key={i} className="bg-white shadow rounded p-4 flex justify-between">
                  <span>📄 {r}</span>
                  <select className="ml-2 border rounded" defaultValue="" onChange={(e) => console.log(`Shared ${r} with ${e.target.value}`)}>
                    <option value="">Share with Doctor</option>
                    {doctorsList.map((doc, idx) => (
                      <option key={idx} value={doc}>{doc}</option>
                    ))}
                  </select>
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'ratings' && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Past Consultations & Ratings</h3>
            <ul className="space-y-2">
              {pastConsultations.map(consult => (
                <li key={consult.id} className="bg-white shadow rounded p-4 flex justify-between">
                  <span>{consult.doctor} - {consult.date}</span>
                  {consult.rated ? (
                    <span className="text-green-500 text-xs">Rated: {consult.rating} ⭐</span>
                  ) : (
                    <select
                      value={rating[consult.id] || ''}
                      onChange={(e) => handleRating(consult.id, e.target.value)}
                      className="text-xs border rounded p-1"
                    >
                      <option value="">Rate</option>
                      {[1,2,3,4,5].map(r => (
                        <option key={r} value={r}>{r} ⭐</option>
                      ))}
                    </select>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

      </main>
    </div>
  );
};

export default UserPanel;
