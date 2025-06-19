import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import Level01 from './pages/Level01';
import Level02 from './pages/Level02';
import Level03 from './pages/Level03';
import FeedbackPage from './pages/FeedbackPage';
import Header from './components/Header';

const MatrixRain = () => {
  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array.from({ length: columns }).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(13, 2, 33, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#39ff14'; 
      ctx.font = `${fontSize}px Share Tech Mono`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);
    
    const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return <canvas id="matrix-canvas" className="matrix-rain"></canvas>;
};


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [score, setScore] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const handleLogin = () => setIsAuthenticated(true);
  const handleLogout = () => {
    setIsAuthenticated(false);
    setScore(0);
  };
  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <Router>
      <MatrixRain />
      <div className="font-tech relative z-10">
        {isAuthenticated && <Header onLogout={handleLogout} isMuted={isMuted} toggleMute={toggleMute} />}
        <main>
          <Routes>
            <Route path="/login" element={!isAuthenticated ? <LoginPage onLogin={handleLogin} isMuted={isMuted} /> : <Navigate to="/" />} />
            <Route path="/" element={isAuthenticated ? <HomePage isMuted={isMuted} /> : <Navigate to="/login" />} />
            <Route path="/level-01" element={isAuthenticated ? <Level01 setScore={setScore} isMuted={isMuted} /> : <Navigate to="/login" />} />
            <Route path="/level-02" element={isAuthenticated ? <Level02 score={score} setScore={setScore} isMuted={isMuted} /> : <Navigate to="/login" />} />
            <Route path="/level-03" element={isAuthenticated ? <Level03 score={score} setScore={setScore} isMuted={isMuted} /> : <Navigate to="/login" />} />
            <Route path="/feedback" element={isAuthenticated ? <FeedbackPage score={score} isMuted={isMuted} /> : <Navigate to="/login" />} />
            <Route path="*" element={<Navigate to={isAuthenticated ? "/" : "/login"} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;