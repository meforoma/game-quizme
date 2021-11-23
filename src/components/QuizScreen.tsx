/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */

import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { getQuestions } from '../api/api';
import { Question } from '../types/types';
import { QuestionDisplay } from './QuestionDisplay';

type Props = {
  userQuestionsCount: number,
  restart: () => void,
};

export const QuizScreen = (props: Props) => {
  console.log('mount QuizScreen');

  const { userQuestionsCount, restart } = props;

  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    getQuestions(userQuestionsCount)
      .then(setQuestions);
  }, []);

  const correctAnswersPairs = questions.map(mapQuestion => (
    [mapQuestion.question, mapQuestion.correct_answer]
  ));
  const correctAnswers = Object.fromEntries(correctAnswersPairs);

  const [userAnswers, setUserAnswers] = useState({});

  console.log('correctAnswersObj', correctAnswers);
  console.log('userAnswers', userAnswers, Object.keys(userAnswers).length);

  const [userClickedCheckme, setUserClickedCheckme] = useState(false);

  const evaluateAnswers = () => {
    let result = 0;

    for (const answer in userAnswers) {
      if (correctAnswers[answer] === userAnswers[answer]) {
        result += 1;
      }
    }

    return result;
  };

  console.log('evaluateAnswers', evaluateAnswers());

  const questionsToShow = questions.map((question: Question) => (
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

  const handleCheckMe = () => {
    if (userClickedCheckme) {
      setUserClickedCheckme(false);
      setUserAnswers({});

      restart();
    } else {
      setUserClickedCheckme(true);
    }
  };

  return (
    <>
      {evaluateAnswers() === userQuestionsCount
        && userClickedCheckme
        && <Confetti />}

      <div className="questions-container">
        {questionsToShow}
      </div>

      {userClickedCheckme && (
        <div className="result-message">
          {userQuestionsCount === evaluateAnswers()
            ? '🎉 Spectacular!!! You scored all the questions 🎉'
            : `You scored ${evaluateAnswers()} of ${userQuestionsCount} questions`}
        </div>
      )}

      {userQuestionsCount
        === Object.keys(userAnswers).length && (
          <button
            className="button-validate"
            type="button"
            onClick={() => handleCheckMe()}
          >
            {userClickedCheckme ? 're-Quiz, please' : 'Check me'}
          </button>
      )}
    </>
  );
};
