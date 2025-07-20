import React, { useState } from 'react';

const LabPanel = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const [dashboardRequests, setDashboardRequests] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      patient: `Patient ${i + 1}`,
      test: 'Blood Test',
      address: `Address ${i + 1}, City`,
      status: 'pending',
    }))
  );

  const pendingRequests = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    patient: `Pending Patient ${i + 1}`,
    test: 'COVID Test',
    date: `2025-07-${i + 10}`,
  }));

  const acceptedTests = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    patient: `Accepted Patient ${i + 1}`,
    test: 'Urine Test',
    date: `2025-07-${5 + i}`,
  }));

  const completedTests = Array.from({ length: 18 }, (_, i) => ({
    id: i + 1,
    patient: `Completed Patient ${i + 1}`,
    test: 'X-Ray',
    date: `2025-06-${i + 1}`,
    result: 'Completed',
  }));

  const handleAccept = (id) => {
    setDashboardRequests(prev =>
      prev.map(req =>
        req.id === id ? { ...req, status: 'accepted' } : req
      )
    );
    alert(`✅ Person dispatched to collect blood sample from Patient ${id}.`);
  };

  const handleReject = (id) => {
    setDashboardRequests(prev =>
      prev.map(req =>
        req.id === id ? { ...req, status: 'rejected' } : req
      )
    );
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-4 space-y-4">
        <h2 className="text-2xl font-bold mb-6">Lab Panel</h2>
        <button onClick={() => setActiveTab('dashboard')} className="text-left hover:bg-gray-800 p-2 rounded">Dashboard</button>
        <button onClick={() => setActiveTab('pending')} className="text-left hover:bg-gray-800 p-2 rounded">Pending Requests</button>
        <button onClick={() => setActiveTab('accepted')} className="text-left hover:bg-gray-800 p-2 rounded">Accepted Tests</button>
        <button onClick={() => setActiveTab('completed')} className="text-left hover:bg-gray-800 p-2 rounded">Completed Tests</button>
        <button onClick={() => setActiveTab('profile')} className="text-left hover:bg-gray-800 p-2 rounded">Profile</button>
      </aside>

      <main className="flex-1 p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-700">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
          <button className="bg-gray-800 text-white px-4 py-2 rounded">Logout</button>
        </div>

        {activeTab === 'dashboard' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Incoming Test Requests</h2>
            <div className="space-y-4">
              {dashboardRequests.map(req => (
                <div key={req.id} className="bg-white p-4 shadow rounded flex flex-col md:flex-row md:justify-between md:items-center">
                  <div>
                    <p><strong>Patient:</strong> {req.patient}</p>
                    <p><strong>Test:</strong> {req.test}</p>
                    <p><strong>Address:</strong> {req.address}</p>
                    <p><strong>Status:</strong>
                      <span className={`ml-2 font-bold ${req.status === 'accepted' ? 'text-green-600' : req.status === 'rejected' ? 'text-red-600' : 'text-yellow-600'}`}>
                        {req.status}
                      </span>
                    </p>
                  </div>
                  {req.status === 'pending' && (
                    <div className="mt-4 md:mt-0 flex space-x-2">
                      <button onClick={() => handleAccept(req.id)} className="bg-green-600 text-white px-3 py-1 rounded">Accept</button>
                      <button onClick={() => handleReject(req.id)} className="bg-red-600 text-white px-3 py-1 rounded">Reject</button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'pending' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Pending Test Requests</h2>
            <div className="space-y-2">
              {pendingRequests.map(req => (
                <div key={req.id} className="bg-white p-3 shadow rounded">
                  <p><strong>Patient:</strong> {req.patient}</p>
                  <p><strong>Test:</strong> {req.test}</p>
                  <p><strong>Date:</strong> {req.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'accepted' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Accepted Tests</h2>
            <div className="space-y-2">
              {acceptedTests.map(test => (
                <div key={test.id} className="bg-white p-3 shadow rounded">
                  <p><strong>Patient:</strong> {test.patient}</p>
                  <p><strong>Test:</strong> {test.test}</p>
                  <p><strong>Date:</strong> {test.date}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'completed' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Completed Tests</h2>
            <div className="space-y-2">
              {completedTests.map(test => (
                <div key={test.id} className="bg-white p-3 shadow rounded">
                  <p><strong>Patient:</strong> {test.patient}</p>
                  <p><strong>Test:</strong> {test.test}</p>
                  <p><strong>Date:</strong> {test.date}</p>
                  <p><strong>Status:</strong> {test.result}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Lab Profile</h2>
            <p>🏥 Lab Name: HealthPlus Diagnostics</p>
            <p>📍 Location: Mumbai, India</p>
            <p>📞 Contact: +91 98765 43210</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default LabPanel;
