import type { Game } from '../../types';

export const hackhackhack: Game = {
    slug: 'hackhackhack',
    title: 'THE HOLLYWOOD HACKER',
    category: 'games',
    genre: { ja: 'リズム・タイピング', en: 'Rhythm typing' },
    format: 'browser',
    homeFeature: 'recommended',
    authRequirement: 'none',
    pricingModel: 'free',
    availabilityStatus: 'active',
    devices: ['pc', 'tablet', 'smartphone'],
    notices: [{
      kind: 'requirement',
      text: {
        ja: '物理キーボード必須（スマホ・タブレットでは外付けキーボードを接続してください）',
        en: 'Physical keyboard required. Connect an external keyboard on phones or tablets.'
      }
    }],
    summary: {
      ja: '新感覚ハッキング×リズムゲーム、音楽に合わせてキーボードを叩いて気分は天才ハッカー。',
      en: 'A fresh hacking-meets-rhythm game. Tap your keyboard to the music and feel like a genius hacker.'
    },
    media: [{
      type: 'image',
      src: '/images/games/hollywood-hacker-demo.gif',
      alt: { ja: 'THE HOLLYWOOD HACKER のゲームプレイ映像', en: 'THE HOLLYWOOD HACKER gameplay animation' }
    }],
    playUrl: 'https://stellates.github.io/hackhackhack/',
    repositoryUrl: 'https://github.com/stellates/hackhackhack',
    releasedAt: '2026-10-14',
    updatedAt: '2026-10-23',
    version: '2.1.0',
    updateNotes: [
      { ja: '全体的に見やすさを改善（叩くべき色とキーの対応を示す凡例の追加など）', en: 'Improved overall readability, including a legend matching colors to keys.' },
      { ja: 'Easy / Normal / Hardにオリジナル曲を採用', en: 'Added original music for Easy, Normal, and Hard.' },
      { ja: 'X投稿機能追加', en: 'Added sharing to X.' }
    ]
  };
