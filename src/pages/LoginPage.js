import React, { useState } from 'react';
import { playSound, sounds } from '../services/soundService';

const LoginPage = ({ onLogin, isMuted }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    playSound(sounds.login, isMuted);
    onLogin();
  };


  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="p-8 bg-black bg-opacity-70 border border-neon-cyan rounded-lg shadow-2xl shadow-neon-cyan/20 w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-neon-green neon-text animate-glitch mb-8">
          [ Authenticate ]
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-neon-cyan text-sm mb-2" htmlFor="email">
              &gt; User ID / Email
            </label>
            <input
              className="cyber-input w-full py-2 px-3 leading-tight rounded"
              id="email"
              type="email"
              placeholder="user@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-8">
            <label className="block text-neon-cyan text-sm mb-2" htmlFor="password">
              &gt; Passkey
            </label>
            <input
              className="cyber-input w-full py-2 px-3 mb-3 leading-tight rounded"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-neon-green text-black font-bold py-2 px-4 rounded w-full neon-glow-button"
              type="submit"
            >
              Initiate Session
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;