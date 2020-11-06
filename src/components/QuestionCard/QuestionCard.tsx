import React from 'react';

import { AnswerObject } from '../../App';

export type QuestionCardProps = {
  question: string;
  answers: string[];
  callback: (event: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
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
        <button
          key={index}
          value={answer}
          disabled={!!userAnswer}
          onClick={callback}
        >
          <span dangerouslySetInnerHTML={{ __html: answer }}></span>
        </button>
      ))}
    </div>
  </div>
);

export default QuestionCard;
