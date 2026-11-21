import type { Content } from '../../types';

export const deslopLab: Content = {
  slug: 'deslop-lab',
  title: 'DeSlop Lab',
  category: 'contents',
  categoryLabel: { ja: 'インタラクティブ教材', en: 'Interactive learning material' },
  genre: { ja: 'Webデザイン・生成AI', en: 'Web design / Generative AI' },
  homeFeature: 'new-release',
  availabilityStatus: 'active',
  devices: ['pc', 'tablet', 'smartphone'],
  summary: {
    ja: 'AIが作ったWebサイトは、AIとの対話でどこまで改善できる？ 架空のAIアイドル「天音ルミ」の公式サイトを題材に、AI Slopの改善過程をスライダーで追体験できるWebデザイン教材。実際のプロンプトや修正理由、人間によるレビューも公開しています。',
    en: "How far can an AI-generated website be improved through dialogue with AI? Explore the evolution of a fictional AI idol Lumi Amane's website through an interactive slider, complete with actual prompts, design decisions, and human feedback."
  },
  media: [{
    type: 'image',
    src: '/images/contents/deslop-lab-demo.gif',
    alt: {
      ja: 'DeSlop Labでスライダーを操作し、天音ルミの公式サイトが段階的に改善される様子',
      en: 'DeSlop Lab demo showing Lumi Amane’s website evolving step by step as the slider is moved'
    }
  }],
  url: 'https://tanzyyy-dev.github.io/deslop-lab/',
  repositoryUrl: 'https://github.com/tanzyyy-dev/deslop-lab',
  releasedAt: '2026-11-21',
  updatedAt: '2026-11-21',
  version: '1.0.0',
  updateNotes: [
    { ja: 'Ver 1.0.0リリース', en: 'Ver 1.0.0 released' }
  ],
  notes: [
    { ja: 'Claude Opus 5.5による統括、Claude Haiku 5.5による実装、Codex CLIによる画像生成。', en: 'Directed by Claude Opus 5.5, implemented by Claude Haiku 5.5, with images generated via Codex CLI.' },
    { ja: '登場するアイドル、人物、団体、イベントはすべて架空です。', en: 'The idol, people, organizations, and events featured are all fictional.' }
  ]
};
