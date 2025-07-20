import React, { useState } from "react";
import AIChatBox from "../components/AIChatBox";
import "../styles/scrollAnimation.css";

const knownCities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];

const HomePage = () => {
  const [location, setLocation] = useState("");
  const [disease, setDisease] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [availableDoctors, setAvailableDoctors] = useState([]);
  const [filters, setFilters] = useState({ minFee: 0, maxFee: 2000, minRating: 0 });
  const [requestedTest, setRequestedTest] = useState("");
  const [nearestLabs, setNearestLabs] = useState([]);

  const healthPackages = [
    { name: "Full Body Checkup", price: 1999 },
    { name: "Heart Health Package", price: 2499 },
    { name: "Diabetes Screening", price: 999 },
    { name: "Liver Function Test", price: 1299 },
    { name: "Kidney Health Panel", price: 1499 },
    { name: "Thyroid Check", price: 799 },
    { name: "Bone Density Test", price: 1199 },
    { name: "Cancer Screening", price: 2999 },
    { name: "Allergy Panel", price: 899 },
    { name: "Women's Wellness Panel", price: 1699 },
  ];

  const healthBlogs = [
    { title: "5 Tips for a Healthy Heart", author: "Dr. Priya Mehta" },
    { title: "Skin Care Myths Busted", author: "Dr. Ananya Singh" },
    { title: "Managing Stress for Better Health", author: "Dr. Rohan Sharma" },
    { title: "Balanced Diet for Busy Professionals", author: "Dr. Mehta" },
    { title: "Exercise Routines for Seniors", author: "Dr. Khan" },
    { title: "Boosting Immunity Naturally", author: "Dr. Ahuja" },
    { title: "Sleep Hygiene Tips", author: "Dr. Roy" },
    { title: "Preventing Diabetes Early", author: "Dr. Mehta" },
    { title: "Essential Vitamins & Minerals", author: "Dr. Singh" },
  ];

  const userReviews = [
    { text: "DocFind made it so easy to find a specialist near me. I booked my appointment in minutes!", user: "Priya, Mumbai" },
    { text: "The AI symptom checker was surprisingly accurate. It guided me to the right doctor without confusion.", user: "Rajesh, Delhi" },
    { text: "I loved the video consultation option, especially when I couldn’t travel. Highly recommend!", user: "Ananya, Bangalore" },
  ];

  const handleRequestTest = () => {
    if (requestedTest.trim()) {
      setNearestLabs([
        { name: "PathCare Labs", price: 500 },
        { name: "HealthPlus Diagnostics", price: 600 },
        { name: "City Lab", price: 550 },
      ]);
    }
  };

  const sendTestRequestToLab = (labName) => {
    alert(`Test request for ${requestedTest} sent to ${labName}`);
    setRequestedTest("");
    setNearestLabs([]);
  };

  return (
    <div className="p-6 md:p-12 space-y-8 bg-gray-50 min-h-screen">
    

      <section className="text-center py-14 px-4 rounded-lg shadow-md bg-gradient-to-r from-gray-800 to-gray-700 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to DocFind 🩺</h1>
        <p className="text-lg mb-6">Find top doctors & consult in-person or online seamlessly.</p>
        <button onClick={() => document.getElementById("find-doctor-section").scrollIntoView({ behavior: "smooth" })} className="bg-white text-gray-900 font-semibold px-6 py-3 rounded hover:bg-gray-200 transition shadow">Find Doctors</button>
      </section>

      <section id="find-doctor-section" className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Start Your Consultation</h2>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <input type="text" placeholder="Enter Your City (e.g., Mumbai)" value={location} onChange={(e) => setLocation(e.target.value)} className="px-4 py-2 rounded border w-full md:w-1/4" />
          <input type="text" placeholder="Enter Disease or Specialty" value={disease} onChange={(e) => setDisease(e.target.value)} className="px-4 py-2 rounded border w-full md:w-1/4" />
          <input type="text" placeholder="Filter by Specialization" value={specialization} onChange={(e) => setSpecialization(e.target.value)} className="px-4 py-2 rounded border w-full md:w-1/4" />
          <button className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-2 rounded hover:from-gray-700 hover:to-gray-600 transition duration-300">Check Availability</button>
        </div>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Find Pathology & Tests</h3>
        <input type="text" placeholder="Enter Test Name" value={requestedTest} onChange={(e) => setRequestedTest(e.target.value)} className="border rounded px-3 py-2 mr-2" />
        <button onClick={handleRequestTest} className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-2 rounded">Find Pathologies</button>
        <div className="space-y-2">
          {nearestLabs.map((lab, index) => (
            <div key={index} className="flex justify-between bg-gray-100 p-2 rounded">
              <span>{lab.name} - ₹{lab.price}</span>
              <button onClick={() => sendTestRequestToLab(lab.name)} className="bg-green-500 text-white px-2 py-1 rounded">Send Request</button>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Health Packages</h3>
        <div className="overflow-hidden">
          <div className="flex space-x-4 animate-scroll">
            {healthPackages.map((pkg, index) => (
              <div key={index} className="min-w-max border rounded p-4 bg-gray-100">
                <p className="font-bold">{pkg.name}</p>
                <p>Price: ₹{pkg.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Health Blog</h3>
        <div className="overflow-hidden">
          <div className="flex space-x-4 animate-scroll">
            {healthBlogs.map((blog, index) => (
              <div key={index} className="min-w-max border rounded p-4 bg-gray-100">
                <p className="font-bold">{blog.title}</p>
                <p>By: {blog.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Use AI Symptom Checker</h3>
        <button onClick={() => setShowChat(true)} className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 py-2 rounded hover:from-gray-700 hover:to-gray-600 transition duration-300">Start AI Symptom Checker</button>
      </section>

      <section className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800">Recent User Reviews</h3>
        {userReviews.map((review, index) => (
          <div key={index} className="border rounded-lg p-4 bg-gray-50">
            <p className="text-gray-700 italic">"{review.text}"</p>
            <p className="text-sm text-gray-500 mt-2">— {review.user}</p>
          </div>
        ))}
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
