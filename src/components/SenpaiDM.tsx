import { Smile } from 'lucide-react';
import type { Question } from '../data/questions';

interface SenpaiDMProps {
  question: Question;
  onNext: () => void;
}

export const SenpaiDM: React.FC<SenpaiDMProps> = ({ question, onNext }) => {
  const shareText = encodeURIComponent("上司の140万円のムチャぶりを随契で乗り切りました！ #公務員会計サバイバル");
  const shareUrl = `https://twitter.com/intent/tweet?text=${shareText}`;

  return (
    <div className="flex-col flex h-full bg-teal-50">
      {/* Header */}
      <div className="flex items-center p-4 bg-white shadow-sm border-b border-teal-100">
        <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center text-white mr-3">
          <Smile size={24} />
        </div>
        <div className="font-bold text-teal-900">先輩</div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex items-start">
          <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white mr-2 flex-shrink-0">
            <Smile size={16} />
          </div>
          <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] text-slate-800 leading-relaxed whitespace-pre-wrap">
            {question.senpaiExplanation}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-white p-4 border-t border-teal-100 shadow-lg flex flex-col gap-3">
        <button
          onClick={onNext}
          className="w-full py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-xl font-bold transition-colors shadow-sm"
        >
          次の問題へ
        </button>
        <a
          href={shareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-3 bg-black hover:bg-gray-800 text-white rounded-xl font-bold transition-colors shadow-sm flex items-center justify-center gap-2"
        >
          {/* X Logo (Simplified SVG) */}
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 24.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 5.925H5.022z" />
          </svg>
          Xで結果をシェア
        </a>
      </div>
    </div>
  );
};
