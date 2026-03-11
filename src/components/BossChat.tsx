import { useState, useEffect } from 'react';
import { Briefcase } from 'lucide-react';
import type { Question } from '../data/questions';

interface BossChatProps {
  question: Question;
  onComplete: () => void;
}

export const BossChat: React.FC<BossChatProps> = ({ question, onComplete }) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  useEffect(() => {
    // Reset state when question changes
    setSelectedOptionId(null);
  }, [question.id]);

  const handleOptionClick = (id: string) => {
    if (selectedOptionId !== null) return; // Prevent multiple clicks

    setSelectedOptionId(id);

    // Wait 2-3 seconds then proceed to SenpaiDM
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);

    // If component unmounts for some reason, cleanup timer
    return () => clearTimeout(timer);
  };

  return (
    <div className="flex-col flex h-full bg-slate-100">
      {/* Header */}
      <div className="flex items-center p-4 bg-white shadow-sm border-b border-slate-200">
        <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white mr-3">
          <Briefcase size={24} />
        </div>
        <div className="font-bold border-slate-800">上司</div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex items-start">
          <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-white mr-2 flex-shrink-0">
            <Briefcase size={16} />
          </div>
          <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] text-slate-800 leading-relaxed whitespace-pre-wrap">
            {question.bossMessage}
          </div>
        </div>
      </div>

      {/* Footer / Options */}
      <div className="bg-white p-4 border-t border-slate-200 shadow-lg">
        <div className="text-sm font-semibold text-slate-500 mb-3 text-center">対応を選択してください</div>
        <div className="space-y-2">
          {question.options.map((option) => {
            let bgColor = "bg-slate-100 hover:bg-slate-200 text-slate-800";
            if (selectedOptionId !== null) {
              if (option.id === selectedOptionId) {
                bgColor = option.isCorrect 
                  ? "bg-green-500 text-white" 
                  : "bg-red-500 text-white";
              } else if (option.isCorrect) {
                // 正解を目立たせる（間違えた場合でも正解がわかるように）
                bgColor = "bg-green-100 text-green-800 border-green-500";
              } else {
                bgColor = "bg-slate-50 text-slate-400 opacity-50";
              }
            }

            return (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option.id)}
                disabled={selectedOptionId !== null}
                className={`w-full p-3 rounded-xl text-left transition-colors duration-300 font-medium border border-transparent ${bgColor}`}
              >
                <span className="font-bold mr-2">{option.id}.</span>
                {option.text}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
