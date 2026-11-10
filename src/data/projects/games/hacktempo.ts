import type { Game } from '../../types';

export const hacktempo: Game = {
  slug: 'hacktempo',
  title: 'HACKTEMPO',
  category: 'games',
  genre: { ja: 'サイバーリズム・タイピング', en: 'Cyber rhythm typing' },
  format: 'browser',
  homeFeature: 'update',
  authRequirement: 'none',
  pricingModel: 'free',
  availabilityStatus: 'active',
  devices: ['pc', 'tablet', 'smartphone'],
  summary: {
    ja: '映画の天才ハッカー気分で猛烈打鍵！3難易度の専用楽曲に合わせて遊ぶ、PC・スマホ対応のサイバーリズムアクション。',
    en: 'Mash keys like a movie hacker in this cyber rhythm action game, featuring three difficulty-specific tracks and PC/mobile controls.'
  },
  media: [{
    type: 'image',
    src: '/images/games/hollywood-hacker-demo.gif',
    alt: {
      ja: 'HACKTEMPOのゲームプレイを紹介するアニメーション（旧バージョンの映像）',
      en: 'HACKTEMPO gameplay animation (footage from an earlier version)'
    }
  }],
  playUrl: 'https://tanzyyy-dev.github.io/hacktempo/',
  repositoryUrl: 'https://github.com/tanzyyy-dev/hacktempo',
  releasedAt: '2026-10-14',
  updatedAt: '2026-11-10',
  version: '3.0.0',
  updateNotes: [
    { ja: 'THE HOLLYWOOD HACKERからHACKTEMPOへ改称し、プレイURL・リポジトリを刷新', en: 'Renamed THE HOLLYWOOD HACKER to HACKTEMPO, with a new play URL and repository.' },
    { ja: 'スマホ向け4ボタン操作とプレイ画面を改善し、キーボードなしでもプレイ可能に', en: 'Improved the mobile play screen and four touch controls for keyboard-free play.' },
    { ja: 'ゲーム中の一時停止・再開、ミッション選択への復帰に対応', en: 'Added in-game pause/resume and return to mission selection.' },
    { ja: '結果画面を整理し、詳細成績・認定証PNG保存・X共有を使いやすく改善', en: 'Refined results, detailed stats, certificate PNG downloads, and sharing to X.' },
    { ja: 'ゲーム中の不要なキー入力やブラウザショートカットによる誤操作を軽減', en: 'Reduced accidental inputs and browser shortcut interference during gameplay.' }
  ]
};
