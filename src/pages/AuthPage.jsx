import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AuthPage.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const toggleView = () => setIsLogin(!isLogin);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!role) return alert('Please select a role');
    if (role === 'user') navigate('/user');
    else if (role === 'doctor') navigate('/doctor');
    else if (role === 'admin') navigate('/admin');
    else if (role === 'lab') navigate('/lab');
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!role) return alert('Please select a role');
    alert('Signed up successfully. Please login now.');
    toggleView();
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 pt-20">
      <div className="relative w-96 h-[520px] perspective">
        <div
          className={`transition-transform duration-700 transform-style-preserve-3d w-full h-full relative ${
            isLogin ? '' : 'rotate-y-180'
          }`}
        >
          {/* Login Side */}
          <div className="auth-face glass-card z-10">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Login to DocFind</h2>
            <form onSubmit={handleLogin} className="space-y-4 px-6">
              <RoleSelector role={role} setRole={setRole} />
              <Input label="Email" value={email} setValue={setEmail} type="email" placeholder="Enter your email" />
              <Input label="Password" value={password} setValue={setPassword} type="password" placeholder="Enter your password" />
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Login</button>
            </form>
            <p className="mt-6 text-center text-sm">
              Don&apos;t have an account?{' '}
              <button onClick={toggleView} className="text-blue-500 hover:underline">Sign Up</button>
            </p>
          </div>

          {/* Signup Side */}
          <div className="auth-face auth-back glass-card z-10">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Sign Up for DocFind</h2>
            <form onSubmit={handleSignup} className="space-y-4 px-6">
              <Input label="Name" value={name} setValue={setName} type="text" placeholder="Enter your name" />
              <RoleSelector role={role} setRole={setRole} />
              <Input label="Email" value={email} setValue={setEmail} type="email" placeholder="Enter your email" />
              <Input label="Password" value={password} setValue={setPassword} type="password" placeholder="Create a password" />
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Sign Up</button>
            </form>
            <p className="mt-6 text-center text-sm">
              Already have an account?{' '}
              <button onClick={toggleView} className="text-blue-500 hover:underline">Login</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Input = ({ label, value, setValue, type, placeholder }) => (
  <div>
    <label className="block text-gray-700 mb-1">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
      required
      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
    />
  </div>
);

const RoleSelector = ({ role, setRole }) => (
  <div>
    <label className="block text-gray-700 mb-1">Select Role</label>
    <select
      value={role}
      onChange={(e) => setRole(e.target.value)}
      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
      required
    >
      <option value="">Select your role</option>
      <option value="user">User</option>
      <option value="doctor">Doctor</option>
      <option value="admin">Admin</option>
      <option value="lab">Lab</option>
    </select>
  </div>
);

export default AuthPage;
