import { useState } from 'react';

import { QuizScreen } from './components/QuizScreen';
import './styles/general.scss';

export const App = () => {
  const [userQuestionsCount, setUserQuestionsCount] = useState(3);

  const [screenDisplay, setScreenDisplay] = useState({
    showStartScreen: true,
    showQuizScreen: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const restart = () => {
    setScreenDisplay({
      showStartScreen: true,
      showQuizScreen: false,
    });
  };

  const toggleScreen = () => {
    setScreenDisplay({
      showStartScreen: false,
      showQuizScreen: true,
    });
    setIsLoading(true);
  };

  return (
    <main>
      {screenDisplay.showStartScreen && (
        <>
          <h1 className="title">QuizMe</h1>

          <section className="start-section">
            <div>
              <h3>How much questions do you want to be quizzed on?</h3>
            </div>

            <div className="user-select-questions-count">
              <input
                type="number"
                min={3}
                max={20}
                name="userQuestionsCount"
                className="user-select-questions-count__input"
                value={userQuestionsCount}
                onChange={(event) => setUserQuestionsCount(+event.target.value)}
                onKeyUp={(event) => {
                  if (event.code === 'Enter') {
                    toggleScreen();
                  }
                }}
              />
            </div>
          </section>

          <button
            type="button"
            className="start-button"
            onClick={() => {
              toggleScreen();
            }}
          >
            Quiz me!
          </button>
        </>
      )}

      {isLoading && (
        <h1>
          ...Loading
        </h1>
      )}

      {screenDisplay.showQuizScreen && (
        <QuizScreen
          userQuestionsCount={userQuestionsCount}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          restart={restart}
        />
      )}

    </main>
  );
};
