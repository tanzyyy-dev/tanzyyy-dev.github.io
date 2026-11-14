import type { Game } from '../../types';

export const heroNeverWins: Game = {
  slug: 'hero-never-wins',
  title: '主人公なのにやけに勝てない',
  category: 'games',
  genre: { ja: 'パチスロシミュレーター', en: 'Pachislot simulator' },
  format: 'browser',
  homeFeature: 'new-release',
  authRequirement: 'none',
  pricingModel: 'free',
  availabilityStatus: 'active',
  devices: ['pc', 'tablet', 'smartphone'],
  summary: {
    ja: '見た目は最強、実力は最弱。常に他力本願な筋肉主人公が、仲間の助けでなぜか継続するバトルボーナス特化型ブラウザゲーム。どこでもタップでサクサク遊べます。',
    en: 'Strongest in looks, weakest in battle. A browser-based battle-bonus slot game where a helplessly reliant muscle hero keeps surviving thanks to allies—playable with simple tap-anywhere controls.'
  },
  notices: [
    {
      kind: 'info',
      text: {
        ja: '推奨年齢：18歳以上',
        en: 'Recommended age: 18+'
      }
    }
  ],
  media: [{
    type: 'image',
    src: '/images/games/hero-never-wins.gif',
    alt: {
      ja: '「主人公なのにやけに勝てない」のプレイ画面',
      en: 'Gameplay animation of HERO NEVER WINS'
    }
  }],
  playUrl: 'https://tanzyyy-dev.github.io/hero-never-wins/',
  repositoryUrl: 'https://github.com/tanzyyy-dev/hero-never-wins',
  releasedAt: '2026-11-15',
  updatedAt: null,
  version: '0.1.0',
  updateNotes: []
};
