/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */

import { nanoid } from 'nanoid';
import {
  useEffect, useState,
  Dispatch, SetStateAction,
} from 'react';
import Confetti from 'react-confetti';
import { getQuestions } from '../api/api';
import { Question } from '../types/types';
import { QuestionDisplay } from './QuestionDisplay';

type Props = {
  userQuestionsCount: number,
  restart: () => void,
  isLoading: boolean,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
};

type UserAnswers = {
  [question: string]: string;
};

export const QuizScreen = (props: Props) => {
  const {
    userQuestionsCount, restart,
    isLoading, setIsLoading,
  } = props;

  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [userClickedCheckme, setUserClickedCheckme] = useState(false);

  // questions initialization to pass onto QuestionDisplay component
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    getQuestions(userQuestionsCount)
      .then(setQuestions);
  }, []);

  if (questions.length > 0) {
    setIsLoading(false);
  }

  // object of correct answers to evaluate against
  const correctAnswersPairs = questions.map(mapQuestion => (
    [mapQuestion.question, mapQuestion.correct_answer]
  ));
  const correctAnswers = Object.fromEntries(correctAnswersPairs);

  const countCorrectAnswers = () => {
    let result = 0;

    for (const answer in userAnswers) {
      if (correctAnswers[answer] === userAnswers[answer]) {
        result += 1;
      }
    }

    return result;
  };

  const handleCheckMe = () => {
    if (userClickedCheckme) {
      setUserClickedCheckme(false);
      setUserAnswers({});

      restart();
    } else {
      setUserClickedCheckme(true);
    }
  };

  const questionsDisplay = questions.map((question: Question) => (
    <QuestionDisplay
      key={nanoid()}
      category={question.category}
      difficulty={question.difficulty}
      question={question.question}
      correctAnswer={question.correct_answer}
      incorrectAnswers={question.incorrect_answers}
      userAnswers={userAnswers}
      userClickedCheckme={userClickedCheckme}
      setUserAnswers={setUserAnswers}
    />
  ));

  return (
    <>
      {countCorrectAnswers() === userQuestionsCount
        && userClickedCheckme
        && <Confetti />}

      {!isLoading && <span className="title">Here is your quiz:</span>}

      <div className="main-container">
        <div className="questions-container">
          {questionsDisplay}
        </div>

        {userClickedCheckme && (
          <div className="result-message">
            {userQuestionsCount === countCorrectAnswers()
              ? '🎉 Spectacular!!! You scored all the questions 🎉'
              : `You scored ${countCorrectAnswers()} of ${userQuestionsCount} questions`}
          </div>
        )}

        {userQuestionsCount
          === Object.keys(userAnswers).length && (
            <button
              className="button-validate"
              type="button"
              onClick={() => handleCheckMe()}
            >
              {userClickedCheckme
                ? 're-Quiz, please'
                : 'Check me'}
            </button>
        )}
      </div>
    </>
  );
};
