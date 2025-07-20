import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import UserPanel from './pages/UserPanel';
import DoctorPanel from './pages/DoctorPanel';
import AdminPanel from './pages/AdminPanel';
import LabPanel from './pages/LabPanel';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/user" element={<UserPanel />} />
        <Route path="/doctor" element={<DoctorPanel />} />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/lab" element={<LabPanel />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
