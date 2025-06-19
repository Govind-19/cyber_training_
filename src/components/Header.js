import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onLogout, isMuted, toggleMute }) => {
  return (
    <header className="bg-black bg-opacity-50 border-b-2 border-neon-cyan shadow-lg shadow-neon-cyan/20 backdrop-blur-sm sticky top-0 z-20">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-bold text-neon-green neon-text animate-glitch">
          // Human_Firewall
        </Link>
        <div className="flex items-center gap-4">
          <button onClick={toggleMute} className="text-white p-2">
            {isMuted ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l-4-4m0 4l4-4" /></svg>
            ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
            )}
          </button>
          <button
            onClick={onLogout}
            className="bg-red-500 hover:bg-red-700 border border-red-400 text-white font-bold py-2 px-4 rounded transition-all hover:shadow-lg hover:shadow-red-500/50"
          >
            Logout
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;