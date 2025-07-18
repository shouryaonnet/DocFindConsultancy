import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import UserPanel from './pages/UserPanel';
import DoctorPanel from './pages/DoctorPanel';
import AdminPanel from './pages/adminPanel';
import LabPanel from './pages/LabPanel';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserPanel />} />
        <Route path="/doctor" element={<DoctorPanel />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/lab" element={<LabPanel />} />
      </Routes>
    </Router>
  );
};

export default App;
