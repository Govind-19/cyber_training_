import React from 'react';
import Quiz from '../components/Quiz';
import { quizQuestions } from '../questions';

const Level03 = ({ score, setScore }) => {
  return (
    <Quiz
      questions={quizQuestions.level03}
      level="03"
      score={score}
      setScore={setScore}
      nextLevelPath="/feedback"
    />
  );
};

export default Level03;