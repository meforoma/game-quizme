/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { decode } from 'html-entities';
import classNames from 'classnames';
import {
  Dispatch, SetStateAction,
  useEffect, useState,
} from 'react';

type Props = {
  category: string;
  difficulty: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  userAnswers: any;
  userClickedCheckme: boolean;
  setUserAnswers: Dispatch<SetStateAction<{}>>;
};

export const QuestionDisplay = (props: Props) => {
  const {
    category, difficulty,
    question, correctAnswer,
    incorrectAnswers,
    userAnswers, userClickedCheckme,
    setUserAnswers,
  } = props;

  const [answersLayout, setAnswersLayout] = useState<string[]>([]);

  useEffect(() => {
    const answers = incorrectAnswers.concat(correctAnswer);

    setAnswersLayout(answers.sort());
  }, []);

  return (
    <div className="question">
      <span className={`question__difficulty question__difficulty--${difficulty}`}>
        {`Difficulty: ${difficulty}`}
      </span>
      <span className="question__category">
        {` Category: ${decode(category)}`}
      </span>
      <div className="question__body">
        <h3>{decode(question)}</h3>
      </div>

      <div className="question__answers">
        {answersLayout.map((answer: string) => (
          <div
            key={answer}
            className={classNames({
              answer,
              'answer--selected': userAnswers[question] === answer,
              'answer--correct': userClickedCheckme
                && correctAnswer === answer,
              'answer--incorrect': userClickedCheckme
                && correctAnswer !== answer
                && userAnswers[question] === answer,
            })}
            onClick={() => setUserAnswers((prev: {}) => ({
              ...prev,
              [question]: answer,
            }))}
          >
            {decode(answer)}
          </div>
        ))}
      </div>
    </div>
  );
};
