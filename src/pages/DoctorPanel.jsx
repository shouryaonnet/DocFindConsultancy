import React, { useState } from 'react';

const DoctorPanel = () => {
  const [activeTab, setActiveTab] = useState('appointments');
  const [appointmentType, setAppointmentType] = useState('online');

  const onlineAppointments = [
    { id: 1, patient: 'John Doe', date: '2025-08-01', time: '10:00 AM', mode: 'Video Call' },
    { id: 2, patient: 'Emily Clark', date: '2025-08-03', time: '3:00 PM', mode: 'Audio Call' }
  ];

  const inPersonAppointments = [
    { id: 3, patient: 'Jane Smith', date: '2025-08-02', time: '2:00 PM', location: 'Clinic' }
  ];

  const patients = [
    { id: 1, name: 'John Doe', condition: 'Flu' },
    { id: 2, name: 'Jane Smith', condition: 'Diabetes' }
  ];

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Doctor Panel</h2>
        <button onClick={() => setActiveTab('appointments')} className="block w-full text-left py-2 hover:bg-gray-700 rounded">Appointments</button>
        <button onClick={() => setActiveTab('patients')} className="block w-full text-left py-2 hover:bg-gray-700 rounded">My Patients</button>
        <button onClick={() => setActiveTab('profile')} className="block w-full text-left py-2 hover:bg-gray-700 rounded">Profile Settings</button>
        <button onClick={() => setActiveTab('reviews')} className="block w-full text-left py-2 hover:bg-gray-700 rounded">Reviews</button>
      </aside>

      <main className="flex-1 p-8 bg-gray-50">
        {activeTab === 'appointments' && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Appointments</h3>
            <div className="flex space-x-4 mb-4">
              <button onClick={() => setAppointmentType('online')} className={`px-4 py-2 rounded ${appointmentType === 'online' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>Online</button>
              <button onClick={() => setAppointmentType('inPerson')} className={`px-4 py-2 rounded ${appointmentType === 'inPerson' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>In Person</button>
            </div>

            {appointmentType === 'online' ? (
              <ul className="space-y-2">
                {onlineAppointments.map(app => (
                  <li key={app.id} className="bg-white shadow rounded p-4">
                    Patient: {app.patient} <br /> Date: {app.date} <br /> Time: {app.time} <br /> Mode: {app.mode}
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="space-y-2">
                {inPersonAppointments.map(app => (
                  <li key={app.id} className="bg-white shadow rounded p-4">
                    Patient: {app.patient} <br /> Date: {app.date} <br /> Time: {app.time} <br /> Location: {app.location}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {activeTab === 'patients' && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Patients</h3>
            <ul className="space-y-2">
              {patients.map(patient => (
                <li key={patient.id} className="bg-white shadow rounded p-4">
                  Name: {patient.name} <br /> Condition: {patient.condition}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'profile' && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Profile Settings</h3>
            <p>Update your profile info here.</p>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Reviews</h3>
            <p>Patient feedback will be shown here.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default DoctorPanel;
