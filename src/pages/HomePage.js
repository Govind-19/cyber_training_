import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4 sm:p-6">
      <div className="text-center my-6 md:my-10">
        <h1 
          className="text-2xl sm:text-4xl md:text-5xl font-bold text-neon-green neon-text overflow-hidden whitespace-nowrap border-r-2 border-r-neon-green pr-2 mx-auto w-[33ch] animate-typing"
        >
          Cybersecurity Awareness Training
        </h1>
        <p className="text-md md:text-lg text-neon-cyan mt-4">
          Building a Human Firewall to Protect Our Digital Assets
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-4 bg-black bg-opacity-60 border border-neon-cyan rounded-lg shadow-lg shadow-neon-cyan/20 backdrop-blur-sm">
          <h2 className="text-xl md:text-2xl font-bold text-neon-green neon-text mb-2">&gt; What is Social Engineering?</h2>
          <p className="text-sm text-gray-300 mb-2">
            Social engineering is the art of manipulating people to give up confidential information. Criminals use it to trick you into giving them your passwords, bank information, or access to your computer to install malicious software.
          </p>
          <div className="flex items-center text-sm text-green-400">
            <span>// Stay vigilant, stay safe.</span>
          </div>
        </div>
        <div className="p-4 bg-black bg-opacity-60 border border-neon-cyan rounded-lg shadow-lg shadow-neon-cyan/20 backdrop-blur-sm">
          <h2 className="text-xl md:text-2xl font-bold text-neon-green neon-text mb-2">&gt; Why is this Training Important?</h2>
          <p className="text-sm text-gray-300">
            You are the first line of defense. This training equips you to recognize threats like phishing and baiting. Understanding attacker tactics protects you and the organization from breaches. Let's build a strong human firewall together!
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
      <Link
        to="/level-01"
        className="bg-neon-green text-black font-bold py-3 px-8 rounded text-lg neon-glow-button"
      >
        Start Training
      </Link>
    </div>
    </div>
  );
};

export default HomePage;