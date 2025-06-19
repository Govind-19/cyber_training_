import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { playSound, sounds } from '../services/soundService';

const Quiz = ({ questions, level, score, setScore, nextLevelPath, isMuted  }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleOptionSelect = (option) => {
     playSound(sounds.select, isMuted); 
      setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    playSound(sounds.next, isMuted);
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(prevScore => prevScore + 1);
    }
    setSelectedOption(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate(nextLevelPath);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex justify-center items-start min-h-screen p-4">
      <div className="p-4 my-8 sm:p-8 bg-black bg-opacity-70 border border-neon-cyan rounded-lg shadow-2xl shadow-neon-cyan/50 text-center max-w-2xl w-full backdrop-blur-sm">
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold text-neon-green neon-text animate-glitch">
            Level {level} - Transmission {currentQuestionIndex + 1} of {questions.length}
          </h2>
          <div className="w-full bg-gray-800 border border-neon-cyan/50 rounded-full h-2.5 mt-2">
              <div className="bg-neon-green h-2 rounded-full" style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}></div>
          </div>
        </div>
        <h3 className="text-lg md:text-xl text-gray-200 mb-6">{currentQuestion.question}</h3>
        <div className="space-y-4">
          {currentQuestion.options.map((option) => (
            <button
              key={option}
              onClick={() => handleOptionSelect(option)}
              className={`w-full text-left p-4 rounded border transition-all duration-300 text-sm md:text-base
                ${selectedOption === option 
                  ? 'bg-neon-green text-black shadow-lg shadow-neon-green/50' 
                  : 'bg-gray-800 border-gray-700 hover:bg-gray-700 hover:border-neon-cyan'}`}
            >
              <span className="mr-2 text-neon-cyan">{`>`}</span>{option}
            </button>
          ))}
        </div>
        <div className="mt-8 text-right">
          <button
            onClick={handleNextQuestion}
            disabled={!selectedOption}
            className="bg-neon-green text-black font-bold py-2 px-6 rounded neon-glow-button disabled:bg-gray-600 disabled:text-gray-400 disabled:shadow-none"
          >
            Transmit Answer
          </button>
        </div>
      </div>
    </div>
  );
};
Quiz.propTypes = {
  questions: PropTypes.array.isRequired,
  level: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
  nextLevelPath: PropTypes.string.isRequired,
  isMuted: PropTypes.bool.isRequired,
};

export default Quiz;
