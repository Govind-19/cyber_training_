import React, { useEffect } from 'react';
import Quiz from '../components/Quiz';
import { quizQuestions } from '../questions';

const Level01 = ({ setScore }) => {
    useEffect(() => {
        setScore(0);
      }, [setScore]);
      
  return (
    <Quiz
      questions={quizQuestions.level01}
      level="01"
      score={0}
      setScore={setScore}
      nextLevelPath="/level-02"
    />
  );
};

export default Level01;