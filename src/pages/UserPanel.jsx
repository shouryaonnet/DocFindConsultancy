import React, { useState } from 'react';
import { BellIcon } from '@heroicons/react/24/solid';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const UserPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [reports, setReports] = useState([]);
  const [rating, setRating] = useState({});
  const [showNotifications, setShowNotifications] = useState(false);

  const appointments = [
    { id: 1, doctor: 'Dr. Mehta', date: '2025-08-01', type: 'Physical' },
    { id: 2, doctor: 'Dr. Roy', date: '2025-08-05', type: 'Video' },
  ];

  const pastConsultations = [
    { id: 1, doctor: 'Dr. Ahuja', date: '2025-07-01', rated: true, rating: 4 },
    { id: 2, doctor: 'Dr. Khan', date: '2025-06-21', rated: false },
  ];

  const prescriptions = [
    { id: 1, doctor: 'Dr. Ahuja', date: '2025-07-01', details: 'Paracetamol 500mg, Vitamin C' },
    { id: 2, doctor: 'Dr. Khan', date: '2025-06-21', details: 'Ibuprofen 200mg' },
  ];

  const notifications = [
    '🔔 Appointment with Dr. Mehta tomorrow at 5 PM.',
    '🔔 New prescription available from Dr. Ahuja.',
    '🔔 Your report has been reviewed.',
  ];

  const progressStats = {
    appointmentsCompleted: 75,
    reportsUploaded: 50,
    ratingsGiven: 60,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">

        <aside className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 space-y-4">
          <h2 className="text-2xl font-bold mb-6">User Panel</h2>
          <button onClick={() => setActiveTab('dashboard')} className="block w-full text-left py-2 hover:bg-gray-700 rounded">Dashboard</button>
          <button onClick={() => setActiveTab('appointments')} className="block w-full text-left py-2 hover:bg-gray-700 rounded">Appointments</button>
          <button onClick={() => setActiveTab('reports')} className="block w-full text-left py-2 hover:bg-gray-700 rounded">Reports</button>
          <button onClick={() => setActiveTab('ratings')} className="block w-full text-left py-2 hover:bg-gray-700 rounded">Ratings</button>
          <button onClick={() => setActiveTab('prescriptions')} className="block w-full text-left py-2 hover:bg-gray-700 rounded">Prescriptions</button>
        </aside>

        <main className="flex-1 p-8 bg-gray-50">
          <div className="flex justify-end mb-4">
            <button className="relative bg-white shadow rounded-full p-2 hover:bg-gray-200" onClick={() => setShowNotifications(!showNotifications)}>
              <BellIcon className="h-6 w-6 text-gray-700" />
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
              <h3 className="text-3xl font-bold mb-4">Welcome back, Rohit! 👋</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="font-semibold text-lg">Total Appointments</h4>
                  <p className="text-2xl">{appointments.length}</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="font-semibold text-lg">Reports Uploaded</h4>
                  <p className="text-2xl">{reports.length}</p>
                </div>
                <div className="bg-white p-4 rounded shadow">
                  <h4 className="font-semibold text-lg">Prescriptions</h4>
                  <p className="text-2xl">{prescriptions.length}</p>
                </div>
              </div>

              <h4 className="text-xl font-semibold mb-2">Upcoming Appointment</h4>
              {appointments.length > 0 ? (
                <div className="bg-white p-4 rounded shadow mb-6">
                  <p><strong>Doctor:</strong> {appointments[0].doctor}</p>
                  <p><strong>Date:</strong> {appointments[0].date}</p>
                  <p><strong>Type:</strong> {appointments[0].type}</p>
                </div>
              ) : (
                <p>No upcoming appointments. Book one now!</p>
              )}

              <h4 className="text-xl font-semibold mb-2">💡 Health Tip</h4>
              <div className="bg-green-100 p-4 rounded shadow text-green-700">
                Remember to stay hydrated! Drinking enough water improves your skin health, boosts energy, and keeps your organs functioning properly.
              </div>
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
              <input type="file" onChange={(e) => {
                const file = e.target.files[0];
                if (file) setReports([...reports, file.name]);
              }} className="mb-4" />
              <ul className="space-y-2">
                {reports.map((r, i) => (
                  <li key={i} className="bg-white shadow rounded p-4 flex justify-between">
                    <span>📄 {r}</span>
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
                        onChange={(e) => setRating({ ...rating, [consult.id]: e.target.value })}
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

          {activeTab === 'prescriptions' && (
            <div>
              <h3 className="text-2xl font-semibold mb-4">Prescription History</h3>
              <ul className="space-y-2">
                {prescriptions.map(p => (
                  <li key={p.id} className="bg-white shadow rounded p-4">
                    <strong>Doctor:</strong> {p.doctor} <br />
                    <strong>Date:</strong> {p.date} <br />
                    <strong>Details:</strong> {p.details}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default UserPanel;
