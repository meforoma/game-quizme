/* eslint-disable no-console */

import { decode } from 'html-entities';
import {
  Dispatch, SetStateAction,
  useMemo,
} from 'react';
import { Answers } from './Answers';

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

  const answers = useMemo(() => (
    <Answers
      incorrectAnswers={incorrectAnswers}
      correctAnswer={correctAnswer}
      userAnswers={userAnswers}
      question={question}
      userClickedCheckme={userClickedCheckme}
      setUserAnswers={setUserAnswers}
    />
  ), []);

  return (
    <div className="question">
      <div className="question__header">
        <span className={`question__difficulty question__difficulty--${difficulty}`}>
          {`Difficulty: ${difficulty}`}
        </span>
        <span className="question__category">
          {` Category: ${decode(category)}`}
        </span>
      </div>

      <div className="question__body">
        <span>{decode(question)}</span>
      </div>

      <div className="question__answers">
        {answers}
      </div>

    </div>
  );
};
