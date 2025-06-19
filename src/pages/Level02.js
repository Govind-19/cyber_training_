import React from 'react';
import Quiz from '../components/Quiz';
import { quizQuestions } from '../questions';

const Level02 = ({ score, setScore }) => {
  return (
    <Quiz
      questions={quizQuestions.level02}
      level="02"
      score={score}
      setScore={setScore}
      nextLevelPath="/level-03"
    />
  );
};

export default Level02;