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
  releasedAt: string | null; // Verified first public release date (YYYY-MM-DD), null if unknown
  updatedAt: string | null; // Verified last game update date (YYYY-MM-DD), null if unknown
  version: string | null; // Current public game version, null if unknown
  updateNotes: Array<Record<Lang, string>>; // Localized update entries, displayed up to three
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
      src: '/images/games/hollywood-hacker-demo.gif',
      alt: { ja: 'THE HOLLYWOOD HACKER のゲームプレイ映像', en: 'THE HOLLYWOOD HACKER gameplay animation' }
    }],
    playUrl: 'https://stellates.github.io/hackhackhack/',
    repositoryUrl: 'https://github.com/stellates/hackhackhack',
    releasedAt: '2026-10-14',
    updatedAt: '2026-10-23',
    version: '2.1.0',
    updateNotes: []
  }
];

export const getGame = (slug: string): Game | undefined => games.find(game => game.slug === slug);
export const gameUrl = (game: Game, lang: Lang) => `${lang === 'ja' ? '' : '/en'}/projects/${game.slug}/`;
