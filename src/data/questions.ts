export interface Question {
  id: number;
  bossMessage: string;
  options: { id: string; text: string; isCorrect: boolean }[];
  senpaiExplanation: string;
}

export const questions: Question[] = [
  {
    id: 1,
    bossMessage: "おい、明日の訓練で使う特殊な工具セット、急ぎで必要になった！カタログ見たら140万円だ。すぐ〇〇商会に行って買ってきてくれ！",
    options: [
      { id: "A", text: "了解しました！150万円以下なので、随意契約（少額随契）で処理します！", isCorrect: true },
      { id: "B", text: "100万円を超えているので、一般競争入札にしないと買えません！", isCorrect: false },
      { id: "C", text: "私が自腹で立て替えて買ってきます！", isCorrect: false }
    ],
    senpaiExplanation: "今回はAが正解だ。予算決算及び会計令第99条第2号の規定で、物品の購入は『予定価格が150万円を超えない場合』は随意契約にできるんだ。ただし、業者の選定理由はしっかり残しておけよ！"
  }
];
