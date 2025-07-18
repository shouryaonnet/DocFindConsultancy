import React from "react";

const HomePage = () => {
  return (
    <div className="p-6">
      <div className="bg-white shadow rounded-lg p-6 mb-4">
        <h2 className="text-2xl font-semibold mb-2">Welcome to DocFind</h2>
        <p className="text-gray-600">Find the best doctors near you.</p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-2">Features</h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Book Appointments</li>
          <li>Consult Online</li>
          <li>Rate Doctors</li>
        </ul>
      </div>
    </div>
  );
};
export default HomePage;