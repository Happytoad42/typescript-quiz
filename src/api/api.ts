import { shuffleArray } from '../utils'

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
}

export type QuestionState = Question & { answers: string[] }

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hadrd',
}

/**
 * Fetch new set of questions from trivia api
 * @param {number} amount Amount of questions to load
 * @param {string} difficulty desired questions difficulty (easy, medium, hard)
 * @returns {Array} An array of quiz quiestions objects
 */
export const fetchQuestions = async (amount: number, difficulty: Difficulty ) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`;
  const data = await (await fetch(endpoint)).json();

  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
  }))
}