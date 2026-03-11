import React, { useState } from 'react';
import { BossChat } from './components/BossChat';
import { SenpaiDM } from './components/SenpaiDM';
import { questions } from './data/questions';

type Screen = 'boss' | 'senpai';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentScreen, setCurrentScreen] = useState<Screen>('boss');

  const handleBossComplete = () => {
    setCurrentScreen('senpai');
  };

  const handleSenpaiNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setCurrentScreen('boss');
    } else {
      // プロトタイプのため、最後の問題が終わったら最初に戻る
      setCurrentQuestionIndex(0);
      setCurrentScreen('boss');
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

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
