import React from 'react';

export type QuestionCardProps = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => (
  <div>
    <p className='number'>
      Question: {questionNumber} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer, index) => (
        <button key={index} disabled={userAnswer} onClick={callback}>
          <span dangerouslySetInnerHTML={{ __html: answer }}></span>
        </button>
      ))}
    </div>
  </div>
);

export default QuestionCard;
