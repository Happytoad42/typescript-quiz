import React, { useState } from 'react';

import { fetchQuestions } from './api/api';

// import QuestionCard from './components/QuestionCard';
import { Difficulty } from './api/api';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gaveOver, setGameOver] = useState(false);

  console.log(fetchQuestions(10, Difficulty.EASY));

  const startQuiz = async () => {
    // api request and app logic
  };

  const checkAnswer = (event: React.MouseEvent<HTMLButtonElement>) => {
    // click a button to check if answer is right
  };

  const nextQuestion = () => {
    // load next question
  };

  return (
    <div className='App'>
      <div className='Quiz'>React Quiz</div>
      <button className='start' onClick={startQuiz}>
        Start
      </button>
      <p className='score'>Score:</p>
      <p>Loading Questions...</p>
      {/* <QuestionCard
        questionNumber={number + 1}
        totalQuestions={questions?.length || 0}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className='next' onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
