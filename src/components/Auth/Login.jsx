import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(email, password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-zinc-900 via-blue-300 to-slate-900">
      <div className="bg-gray-900 rounded-2xl shadow-lg p-8 max-w-md w-full transform transition-transform duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold text-center mb-6 text-zinc-300">Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2 opacity-60" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-4 bg-transparent border border-gray-600 text-zinc-400 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2 opacity-60" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-4 border bg-transparent border-gray-600 text-zinc-400 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
              placeholder="Password"
              autoComplete="password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-cyan-800 text-white p-4 rounded-lg shadow-lg hover:bg-cyan-800 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
