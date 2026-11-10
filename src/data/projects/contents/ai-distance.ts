import type { Content } from '../../types';

export const aiDistance: Content = {
  slug: 'ai-distance',
  title: 'AIとのちょうどいい距離感',
  category: 'contents',
  summary: {
    ja: '生成AIとの日常的なやり取りで感じる「あるある」や違和感を、短い漫画と文章で紹介するシリーズ。AIを活用したコンテンツ制作の試行錯誤も記録しています。',
    en: 'A series of short comics and articles about the quirks and surprises of everyday interactions with generative AI, including experiments in AI-assisted content creation.'
  },
  media: [{
    type: 'image',
    src: '/images/contents/ai-distance-thumbnail.webp',
    alt: {
      ja: '「AIとのちょうどいい距離感」のサムネイル画像',
      en: 'Thumbnail for Finding the Right Distance from AI'
    }
  }],
  url: 'https://stellates.github.io/ai-distance/index.html',
  repositoryUrl: 'https://github.com/stellates/ai-distance',
  availabilityStatus: 'active',
  releasedAt: '2026-05-05',
  updatedAt: '2026-10-17',
  version: null,
  categoryLabel: { ja: '漫画', en: 'Comics' },
  genre: { ja: '4コマ漫画', en: 'Four-panel comics' },
  devices: ['pc', 'tablet', 'smartphone'],
  updateNotes: [
    { ja: '2026年10月までに167本の記事を公開', en: 'Published 167 articles by October 2026' },
    { ja: 'ChatGPTやCodexを使った半自動化など、制作工程を試行錯誤', en: 'Experimented with AI-assisted workflows using ChatGPT and Codex' },
    { ja: '現在は定期更新を設けず、アイデアが浮かんだときに記事を追加', en: 'Now publishes occasionally when new ideas emerge' }
  ],
  notes: [
    { ja: '個人制作の実験的な漫画・記事シリーズ', en: 'An experimental personal comics and articles series' },
    { ja: '画像生成を含む制作工程にも生成AIを活用', en: 'Generative AI is also used in the production process' }
  ]
};
