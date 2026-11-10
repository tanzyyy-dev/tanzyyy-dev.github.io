import type { Lang } from './content';

export type AuthRequirement = 'none' | 'optional' | 'required';
export type PricingModel = 'free' | 'freemium' | 'paid';
export type AvailabilityStatus = 'coming-soon' | 'active' | 'maintenance' | 'discontinued';

// Labels are prepared for future UI integration; existing cards/details are unchanged.
export const authRequirementLabels: Record<AuthRequirement, Record<Lang, string>> = {
  none: { ja: 'ログイン不要', en: 'No login required' },
  optional: { ja: 'ログイン不要（長期利用にはログイン推奨）', en: 'No login required (recommended for long-term use)' },
  required: { ja: 'ログイン必須', en: 'Login required' }
};
export const pricingModelLabels: Record<PricingModel, Record<Lang, string>> = {
  free: { ja: '完全無料', en: 'Completely free' },
  freemium: { ja: '基本無料（一部有料商品あり）', en: 'Free to use (some paid items available)' },
  paid: { ja: '有料', en: 'Paid' }
};
export const availabilityStatusLabels: Record<AvailabilityStatus, Record<Lang, string>> = {
  'coming-soon': { ja: '開発中', en: 'In development' },
  active: { ja: '稼働中', en: 'Live' },
  maintenance: { ja: 'メンテナンス中', en: 'Under maintenance' },
  discontinued: { ja: 'サービス終了', en: 'Discontinued' }
};

export type Game = {
  slug: string;
  title: string;
  category: 'games';
  genre: Record<Lang, string>;
  format: 'browser' | 'download';
  homeFeature?: 'new-release' | 'recommended' | 'update';
  authRequirement: AuthRequirement;
  pricingModel: PricingModel;
  availabilityStatus: AvailabilityStatus;
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
  }
];

export const getGame = (slug: string): Game | undefined => games.find(game => game.slug === slug);
export const gameUrl = (game: Game, lang: Lang) => `${lang === 'ja' ? '' : '/en'}/projects/${game.slug}/`;

// Homepage: priority first, newest release first within NEW RELEASE, stable order otherwise.
export const homepageGames = () => games
  .filter(game => game.homeFeature)
  .map((game, index) => ({ game, index }))
  .sort((a, b) => {
    const priority = { 'new-release': 0, recommended: 1, update: 2 } as const;
    const difference = priority[a.game.homeFeature!] - priority[b.game.homeFeature!];
    if (difference !== 0) return difference;
    if (a.game.homeFeature === 'new-release' && b.game.homeFeature === 'new-release') {
      const dateOrder = (b.game.releasedAt ?? '').localeCompare(a.game.releasedAt ?? '');
      if (dateOrder !== 0) return dateOrder;
    }
    return a.index - b.index;
  })
  .slice(0, 3)
  .map(({ game }) => game);
