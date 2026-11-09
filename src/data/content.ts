export type Lang = 'ja' | 'en';
export const project = {
 id: 'hackhackhack',
 title: 'THE HOLLYWOOD HACKER',
 version: '2.1',
 category: 'games',
 summary: {
  ja: '正しく打つな、激しく叩け！ 映画のハッカー気分を味わえる、ブラウザ向けサイバーリズム・タイピングアクション。',
  en: 'Type fast, stay on beat. A browser-based cyber rhythm typing game inspired by Hollywood hackers.'
 },
 description: {
  ja: 'ひたすらキーボードを叩くだけでは終わらない。音楽に合わせた打鍵、Space・Shift・Enterの入力、難易度別の楽曲でハリウッドのハッカーになりきるゲームです。',
  en: 'More than random keyboard mashing: type in rhythm, hit Space, Shift and Enter, and play along to a different track for each difficulty.'
 },
 imageUrl: 'https://raw.githubusercontent.com/stellates/hackhackhack/main/public/ogp.png',
 repositoryUrl: 'https://github.com/stellates/hackhackhack',
 demoUrl: 'https://stellates.github.io/hackhackhack/',
 features: {
  ja: [
   {title:'リズムでハッキング',body:'ノーツのタイミングに合わせてキー入力。PERFECTからMISSまで、打鍵の精度を判定します。'},
   {title:'2段式のレーン',body:'通常の打鍵に加えて、ShiftやSpace、Enterを使い分けるサイバー・ハイウェイ。'},
   {title:'プレイ結果をシェア',body:'打鍵速度や同期率などを集計。認定証のPNG出力とXへの共有に対応。'}
  ],
  en: [
   {title:'Hack to the beat',body:'Hit keys in time with incoming notes, with accuracy ratings from PERFECT to MISS.'},
   {title:'Dual highway',body:'Switch between typing, Shift, Space and Enter inputs across two lanes.'},
   {title:'Share your results',body:'Review speed and sync stats, export a certificate PNG and share on X.'}
  ]
 },
 difficulties: [
  {name:'EASY',bpm:118,duration:35,style:'Chillout Synthwave'},
  {name:'NORMAL',bpm:134,duration:48,style:'Electro Cyberpunk'},
  {name:'HARD',bpm:165,duration:56,style:'Drum & Bass'}
 ],
 stack:['TypeScript','Vite','HTML5 Canvas','Web Audio API','Vanilla CSS']
};
export const copy={
 ja:{projects:'作品一覧',about:'このサイトについて',intro:'ゲームやWebサービスなど、制作した作品を紹介しています。',detail:'作品を見る',back:'作品一覧に戻る',source:'GitHubでソースを見る',empty:'このカテゴリの作品はまだありません。',categories:['すべて','ゲーム','サービス','コンテンツ','スキル']},
 en:{projects:'Projects',about:'About',intro:'A collection of games, web services, and other projects.',detail:'View project',back:'Back to projects',source:'View source on GitHub',empty:'No projects in this category yet.',categories:['All','Games','Services','Contents','Skills']}
};
