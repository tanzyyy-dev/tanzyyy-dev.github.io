import type { Lang } from './content';

export type Game = {
  slug: string;
  title: string;
  category: 'games';
  genre: Record<Lang, string>;
  format: 'browser' | 'download';
  devices: Array<'pc' | 'tablet' | 'smartphone'>;
  notices?: Array<{ kind: 'requirement' | 'storage' | 'info'; text: Record<Lang,string> }>;
  summary: Record<Lang, string>;
  media: Array<{ type: 'image' | 'video'; src: string; poster?: string; alt: Record<Lang, string>; placeholder?: boolean }>;
  playUrl: string;
  repositoryUrl?: string;
};

export const games: Game[] = [
  {
    slug: 'hackhackhack',
    title: 'THE HOLLYWOOD HACKER',
    category: 'games',
    genre: { ja: 'リズム・タイピング', en: 'Rhythm typing' },
    format: 'browser',
    devices: ['pc', 'tablet', 'smartphone'],
    notices: [{
      kind: 'requirement',
      text: {
        ja: '物理キーボード必須。スマホ・タブレットでは外付けキーボードを接続してください。',
        en: 'Physical keyboard required. Connect an external keyboard on phones or tablets.'
      }
    }],
    summary: {
      ja: '映画のハッカー気分で、音楽に合わせてキーボードを叩くリズムゲーム。',
      en: 'A rhythm typing game that lets you mash keys to the beat like a movie hacker.'
    },
    media: [{
      type: 'image',
      src: 'https://raw.githubusercontent.com/stellates/hackhackhack/main/public/ogp.png',
      alt: { ja: 'THE HOLLYWOOD HACKER の公式イメージ（プレイ画面は準備中）', en: 'Official artwork for THE HOLLYWOOD HACKER (gameplay capture coming soon)' },
      placeholder: true
    }],
    playUrl: 'https://stellates.github.io/hackhackhack/',
    repositoryUrl: 'https://github.com/stellates/hackhackhack'
  }
];

export const getGame = (slug: string): Game | undefined => games.find(game => game.slug === slug);
export const gameUrl = (game: Game, lang: Lang) => `${lang === 'ja' ? '' : '/en'}/projects/${game.slug}/`;
