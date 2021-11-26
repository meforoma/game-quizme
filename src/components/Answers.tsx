/* eslint-disable no-console */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { Dispatch, SetStateAction } from 'react';
import classNames from 'classnames';
import { decode } from 'html-entities';

type Props = {
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  userAnswers: any;
  userClickedCheckme: boolean;
  setUserAnswers: Dispatch<SetStateAction<{}>>;
}

export const Answers = React.memo(
  (props: Props) => {
    const {
      userAnswers,
      question, userClickedCheckme,
      correctAnswer, incorrectAnswers,
      setUserAnswers,
    } = props;

    const answersLayout = incorrectAnswers.concat(correctAnswer)
      .sort();

    return (
      <>
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
            onClick={() => {
              if (!userClickedCheckme) {
                // ^ prevent changing userAnswer after quiz submit
                setUserAnswers((prev: {}) => ({
                  ...prev,
                  [question]: answer,
                }));
              }
            }}
          >
            {decode(answer)}
          </div>
        ))}
      </>
    );
  },
);
