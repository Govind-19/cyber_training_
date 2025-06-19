import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const victorySoundUrl = 'https://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3';

const Star = ({ delay }) => (
  <svg 
    className="w-12 h-12 md:w-16 md:h-16 animate-star-appear text-yellow-300" 
    style={{ animationDelay: delay }}
    fill="currentColor" 
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);


const FeedbackPage = ({ score, isMuted }) => {
  const [badgeClaimed, setBadgeClaimed] = useState(false);
  const audioRef = useRef(null);

  const totalQuestions = 15;
  const xpPercentage = (score / totalQuestions) * 100;
  let rank = 'Trainee';
  let stars = 0;
  let feedbackMessage = '';
  if (score > 12) {
    rank = 'Cyber Warrior';
    stars = 3;
    feedbackMessage = "Good job! Your security awareness is top-tier.";
  } else if (score >= 10) {
    rank = 'Cyber Scout';
    stars = 2;
    feedbackMessage = "Solid performance, but some threats got by. Stay sharp.";
  } else {
    rank = 'Trainee';
    stars = score > 0 ? 1 : 0;
    feedbackMessage = "Needs improvement. Review the training materials and try again.";
  }

  useEffect(() => {
    if (audioRef.current && !isMuted) {
      audioRef.current.play().catch(error => console.log("Audio autoplay was prevented."));
    }
    
    const savedHighScore = localStorage.getItem('cyberSecurityHighScore') || 0;
    if (score > savedHighScore) {
      localStorage.setItem('cyberSecurityHighScore', score);
      console.log('New high score saved!');
    }
  }, [score, isMuted]);


  return (
    <div className="flex justify-center items-center min-h-screen p-4 font-tech">
        <audio ref={audioRef} src={victorySoundUrl} muted={isMuted} />

        <div className="p-6 my-8 bg-gray-900/50 border-2 border-neon-cyan rounded-lg shadow-2xl shadow-neon-cyan/30 text-center max-w-lg w-full backdrop-blur-sm">
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                TRAINING COMPLETE
            </h2>

            <div className="flex justify-center items-center space-x-2 my-4">
                {[...Array(3)].map((_, i) => (
                    i < stars ? <Star key={i} delay={`${i * 0.2 + 0.5}s`} /> : <div key={i} className="w-12 h-12 md:w-16 md:h-16"></div>
                ))}
            </div>

            <p className="text-2xl font-bold text-neon-green neon-text my-2">RANK: {rank}</p>

            <p className="text-gray-300 text-sm mt-1 mb-4 h-10">{feedbackMessage}</p>

            <div className="my-6">
                <div className="flex justify-between text-sm text-gray-300 mb-1">
                    <span>XP GAINED</span>
                    <span>{score * 100} / {totalQuestions * 100}</span>
                </div>
                <div className="w-full bg-gray-800 border border-gray-700 rounded-full h-6">
                    <div 
                        className="bg-gradient-to-r from-neon-green to-neon-cyan h-full rounded-full animate-fill-xp"
                        style={{ width: `${xpPercentage}%` }}
                    ></div>
                </div>
            </div>

            <div className="mt-8 space-y-4">
                {!badgeClaimed && rank === 'Cyber Hero' && (
                    <button
                        onClick={() => setBadgeClaimed(true)}
                        className="w-full bg-neon-green text-black font-bold py-3 px-6 rounded text-lg animate-pulse-claim"
                    >
                        Claim Cyber Warrior Badge
                    </button>
                )}
                 {badgeClaimed && (
                    <p className="text-lg text-yellow-300 neon-text">Badge Claimed!</p>
                )}

                <Link
                    to="/level-01"
                    className="block w-full bg-gray-700 hover:bg-neon-cyan hover:text-black text-white font-bold py-3 px-6 rounded text-lg transition-colors"
                >
                    Train Again
                </Link>
            </div>
        </div>
    </div>
  );
};

export default FeedbackPage;
