import React, { useState } from 'react';
import AIChatBox from '../components/AIChatBox';

const knownCities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata'];

const HomePage = () => {
  const [location, setLocation] = useState('');
  const [disease, setDisease] = useState('');
  const [showChat, setShowChat] = useState(false);
  const [availableDoctors, setAvailableDoctors] = useState([]);
  const [filters, setFilters] = useState({ minFee: 0, maxFee: 2000, minRating: 0 });

  const handleCheckAvailability = () => {
    if (!knownCities.includes(location.trim())) {
      alert('Sorry, we do not serve this city yet.');
      return;
    }
    setAvailableDoctors([
      { name: 'Dr. Rohan Sharma', specialization: 'Neurologist', fee: 1200, rating: 4.7 },
      { name: 'Dr. Priya Mehta', specialization: 'Cardiologist', fee: 900, rating: 4.5 },
      { name: 'Dr. Ananya Singh', specialization: 'Dermatologist', fee: 750, rating: 4.3 },
    ]);
  };

  const filteredDoctors = availableDoctors.filter(doc =>
    doc.fee >= filters.minFee &&
    doc.fee <= filters.maxFee &&
    doc.rating >= filters.minRating
  );

  return (
    <div className="p-6 md:p-12 space-y-8 bg-gray-50 min-h-screen">
     <section className="text-center py-14 px-4 rounded-lg shadow-md bg-gradient-to-r from-gray-800 to-gray-700 text-white">
  <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to DocFind 🩺</h1>
  <p className="text-lg mb-6">Find top doctors & consult in-person or online seamlessly.</p>

  <button
    onClick={() => document.getElementById('find-doctor-section').scrollIntoView({ behavior: 'smooth' })}
    className="bg-white text-gray-900 font-semibold px-6 py-3 rounded hover:bg-gray-200 transition shadow"
  >
    Find Doctors
  </button>
</section>




      {/* LOCATION & DISEASE INPUT */}
      <section id="find-doctor-section" className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Start Your Consultation</h2>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Enter Your City (e.g., Mumbai)"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="px-4 py-2 rounded border w-full md:w-1/3"
          />
          <input
            type="text"
            placeholder="Enter Disease or Specialty"
            value={disease}
            onChange={(e) => setDisease(e.target.value)}
            className="px-4 py-2 rounded border w-full md:w-1/3"
          />
         <button
  onClick={handleCheckAvailability}
  className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-2 rounded hover:from-gray-700 hover:to-gray-600 transition duration-300"
>
  Check Availability
</button>


        </div>
      </section>

      {availableDoctors.length > 0 && (
        <section className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Filter Doctors</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="number"
              placeholder="Min Fee"
              value={filters.minFee}
              onChange={(e) => setFilters({ ...filters, minFee: Number(e.target.value) })}
              className="border rounded px-3 py-2"
            />
            <input
              type="number"
              placeholder="Max Fee"
              value={filters.maxFee}
              onChange={(e) => setFilters({ ...filters, maxFee: Number(e.target.value) })}
              className="border rounded px-3 py-2"
            />
            <input
              type="number"
              placeholder="Min Rating"
              value={filters.minRating}
              onChange={(e) => setFilters({ ...filters, minRating: Number(e.target.value) })}
              className="border rounded px-3 py-2"
            />
          </div>
        </section>
      )}
      {filteredDoctors.length > 0 && (
        <section className="bg-white shadow-md rounded-lg p-6 space-y-4">
          <h3 className="text-2xl font-semibold mb-4 text-gray-800">Available Doctors</h3>
          {filteredDoctors.map((doc, idx) => (
            <div key={idx} className="border rounded p-4 bg-gray-100 space-y-1">
              <h4 className="text-xl font-bold">{doc.name}</h4>
              <p>Specialization: {doc.specialization}</p>
              <p>Consultation Fee: ₹{doc.fee}</p>
              <p>Rating: ⭐ {doc.rating}</p>
              <button className="mt-2 bg-green-500 px-3 py-1 rounded text-white hover:bg-green-600">
                Book Appointment
              </button>
            </div>
          ))}
        </section>
      )}
      <section className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Use AI Symptom Checker</h3>
        <p className="text-gray-600">Not sure about your condition? Let our AI assist you!</p>
        <button
  onClick={() => setShowChat(true)}
  className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-2 rounded hover:from-gray-700 hover:to-gray-600 transition duration-300"
>
  Start AI Symptom Checker
</button>


      </section>

      {showChat && (
        <div className="fixed bottom-4 right-4 w-72">
          <AIChatBox onClose={() => setShowChat(false)} isVisible={showChat} />

        </div>
      )}
    </div>
  );
};

export default HomePage;
