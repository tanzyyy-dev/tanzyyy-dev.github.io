import type { Lang } from './content';
import { games } from './projects/games';
import type { Game } from './types';
export type { Game, AuthRequirement, PricingModel, AvailabilityStatus } from './types';
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


export { games };
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
