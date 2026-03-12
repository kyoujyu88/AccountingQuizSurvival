import { useState } from 'react';
import { BossChat } from './components/BossChat';
import { SenpaiDM } from './components/SenpaiDM';
import { questions } from './data/questions';

type Screen = 'boss' | 'senpai';

function App() {
  const [shuffledQuestions, setShuffledQuestions] = useState(() => {
    return [...questions].sort(() => Math.random() - 0.5);
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentScreen, setCurrentScreen] = useState<Screen>('boss');

  const handleBossComplete = () => {
    setCurrentScreen('senpai');
  };

  const handleSenpaiNext = () => {
    if (currentIndex < shuffledQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setCurrentScreen('boss');
    } else {
      // プロトタイプのため、最後の問題が終わったら再シャッフルして最初に戻る
      setShuffledQuestions([...questions].sort(() => Math.random() - 0.5));
      setCurrentIndex(0);
      setCurrentScreen('boss');
    }
  };

  const currentQuestion = shuffledQuestions[currentIndex];

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center">
      {/* 画面中央に配置されるスマホ風コンテナ */}
      <div className="w-full max-w-md mx-auto h-[100dvh] overflow-hidden flex flex-col shadow-2xl bg-white relative">
        {currentScreen === 'boss' ? (
          <BossChat 
            question={currentQuestion} 
            onComplete={handleBossComplete} 
          />
        ) : (
          <SenpaiDM 
            question={currentQuestion} 
            onNext={handleSenpaiNext} 
          />
        )}
      </div>
    </div>
  );
}

export default App;
