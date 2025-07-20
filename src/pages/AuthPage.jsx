import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const toggleView = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!role) {
      alert('Please select a role');
      return;
    }

    if (role === 'doctor' || role === 'lab') {
      const isVerified = true; // Replace with real verification later
      if (!isVerified) {
        alert('Your account is not verified yet.');
        return;
      }
    }

    if (role === 'user') navigate('/user');
    else if (role === 'doctor') navigate('/doctor');
    else if (role === 'admin') navigate('/admin');
    else if (role === 'lab') navigate('/lab');
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (!role) {
      alert('Please select a role');
      return;
    }
    console.log('Signing up as:', { role, name, email, password });
    alert('Signed up successfully. Please login now.');
    toggleView();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {isLogin ? 'Login to DocFind' : 'Sign up to DocFind'}
        </h2>

        <form onSubmit={isLogin ? handleLogin : handleSignup} className="space-y-4">

          {!isLogin && (
            <div>
              <label className="block text-gray-700">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
          )}

          <div>
            <label className="block text-gray-700">Select Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select your role</option>
              <option value="user">User</option>
              <option value="doctor">Doctor</option>
              <option value="admin">Admin</option>
              <option value="lab">Lab</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-2 rounded hover:opacity-90 transition"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <button onClick={toggleView} className="text-blue-500 hover:underline text-sm">
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
