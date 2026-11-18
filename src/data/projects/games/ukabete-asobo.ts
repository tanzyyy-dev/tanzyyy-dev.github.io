import type { Game } from '../../types';

export const ukabeteAsobo: Game = {
  slug: 'ukabete-asobo',
  title: 'うかべてあそぼ',
  category: 'games',
  genre: { ja: 'お絵描き・サンドボックス', en: 'Drawing sandbox' },
  format: 'browser',
  homeFeature: 'update',
  authRequirement: 'none',
  pricingModel: 'free',
  availabilityStatus: 'active',
  devices: ['pc', 'tablet', 'smartphone'],
  summary: {
    ja: '描いた絵がふわふわ浮かんで動き出す！好きな絵を描いたり、キャラクターをつかんで動かしたり、自由に遊べるお絵描きブラウザゲーム。',
    en: 'Draw your own characters and watch them float to life! A playful browser sandbox where you can create, move, and interact with your drawings.'
  },
  media: [{
    type: 'image',
    src: '/images/games/ukabete-asobo-demo.gif',
    alt: {
      ja: '「うかべてあそぼ」で描いた絵が浮かんで動くプレイ画面',
      en: 'Gameplay animation showing drawings floating and moving in Ukabete Asobo'
    }
  }],
  playUrl: 'https://tanzyyy-dev.github.io/ukabete-asobo/',
  repositoryUrl: 'https://github.com/tanzyyy-dev/ukabete-asobo',
  releasedAt: '2026-11-17',
  updatedAt: '2026-11-18',
  version: '1.1.0',
  updateNotes: [
    {
      ja: '1分ごとに強風・雨・夜のイベントが発生する機能を追加\nピンチ操作による画面の拡大・縮小を無効化',
      en: 'Added strong wind, rain, and nighttime events that occur every minute.\nDisabled pinch-to-zoom gestures.'
    },
    { ja: 'Ver 1.0.0 リリース', en: 'Ver 1.0.0 released' }
  ]
};
