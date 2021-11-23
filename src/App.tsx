import { useState } from 'react';

import { QuizScreen } from './components/QuizScreen';
import './styles/general.scss';

export const App = () => {
  const [userQuestionsCount, setUserQuestionsCount] = useState(3);

  const [screenDisplay, setScreenDisplay] = useState({
    showStartScreen: true,
    showQuizScreen: false,
  });

  const restart = () => {
    setScreenDisplay({
      showStartScreen: true,
      showQuizScreen: false,
    });
  };

  const questionsSelect = [3, 5, 6, 7, 8, 9, 10];

  return (
    <main>
      {screenDisplay.showStartScreen && (
        <>
          <h1 className="title">QuizMe</h1>

          <section className="start-section">
            <h4>How much questions do you want to be quizzed on?</h4>

            <select
              name="userQuestionsCount"
              className="user-select-questions-count"
              value={userQuestionsCount}
              onChange={(event) => setUserQuestionsCount(+event.target.value)}
            >
              {questionsSelect.map(count => (
                <option key={count} value={count}>{count}</option>
              ))}
            </select>
          </section>

          <button
            type="button"
            className="start-button"
            onClick={() => setScreenDisplay({
              showStartScreen: false,
              showQuizScreen: true,
            })}
          >
            Quiz me!
          </button>
        </>
      )}

      {screenDisplay.showQuizScreen && (
        <QuizScreen
          userQuestionsCount={userQuestionsCount}
          restart={restart}
        />
      )}

    </main>
  );
};