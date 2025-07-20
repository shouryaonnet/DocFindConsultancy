import React, { useState } from 'react';

const DoctorPanel = () => {
  const [activeTab, setActiveTab] = useState('appointments');
  const [appointmentType, setAppointmentType] = useState('online');
  const [newBlog, setNewBlog] = useState('');
  const [blogs, setBlogs] = useState([
    'Understanding Diabetes: Prevention and Care Tips',
    'Importance of Regular Health Checkups',
    'Managing Stress Through Mindfulness',
    'Heart Health: Tips for a Healthy Heart',
  ]);

  const onlineAppointments = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    patient: `Online Patient ${i + 1}`,
    date: `2025-08-${(i + 1).toString().padStart(2, '0')}`,
    time: `${9 + i}:00 AM`,
    mode: i % 2 === 0 ? 'Video Call' : 'Audio Call'
  }));

  const inPersonAppointments = Array.from({ length: 10 }, (_, i) => ({
    id: i + 11,
    patient: `InPerson Patient ${i + 1}`,
    date: `2025-08-${(i + 1).toString().padStart(2, '0')}`,
    time: `${2 + i}:00 PM`,
    location: 'Clinic'
  }));

  const patients = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Patient ${i + 1}`,
    condition: ['Flu', 'Diabetes', 'Hypertension', 'Asthma'][i % 4],
    operatedOn: `2025-07-${(i + 10).toString().padStart(2, '0')}`
  }));

  const reviews = [
    { id: 1, user: 'John Doe', content: 'Great consultation experience!' },
    { id: 2, user: 'Jane Smith', content: 'Very professional and helpful.' },
  ];

  const userReviews = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    user: `User ${i + 1}`,
    content: `Feedback from User ${i + 1}`
  }));

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white p-6 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Doctor Panel</h2>
        <button onClick={() => setActiveTab('appointments')} className="block w-full text-left py-2 hover:bg-gray-700 rounded">Appointments</button>
        <button onClick={() => setActiveTab('patients')} className="block w-full text-left py-2 hover:bg-gray-700 rounded">My Patients</button>
        <button onClick={() => setActiveTab('profile')} className="block w-full text-left py-2 hover:bg-gray-700 rounded">Profile Settings</button>
        <button onClick={() => setActiveTab('reviews')} className="block w-full text-left py-2 hover:bg-gray-700 rounded">Reviews</button>
        <button onClick={() => setActiveTab('blogs')} className="block w-full text-left py-2 hover:bg-gray-700 rounded">Write Blogs</button>
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

        {activeTab === 'reviews' && (
          <div>
            

            <h3 className="text-xl font-semibold mt-6 mb-2">User Feedback</h3>
            {userReviews.map(r => (
              <div key={r.id} className="bg-white shadow rounded p-4 mb-2">
                <strong>{r.user}:</strong> {r.content}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'blogs' && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">Write a Blog</h3>
            <textarea
              value={newBlog}
              onChange={(e) => setNewBlog(e.target.value)}
              placeholder="Write your blog here..."
              className="w-full p-2 border rounded mb-2"
              rows="4"
            />
            <button
              onClick={() => {
                if (newBlog.trim()) {
                  setBlogs([newBlog, ...blogs]);
                  setNewBlog('');
                }
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
            >
              Publish Blog
            </button>
            <ul className="space-y-2">
              {blogs.map((blog, index) => (
                <li key={index} className="bg-white shadow rounded p-4">
                  {blog}
                </li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'patients' && (
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Recent Patients</h3>
            <ul className="space-y-2">
              {patients.map(p => (
                <li key={p.id} className="bg-white shadow rounded p-4">
                  Name: {p.name} <br /> Condition: {p.condition} <br /> Operated On: {p.operatedOn}
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
      </main>
    </div>
  );
};

export default DoctorPanel;
