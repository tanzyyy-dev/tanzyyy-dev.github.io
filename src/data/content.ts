export type Lang = 'ja' | 'en';

export const project = {
  id: 'hackhackhack',
  title: 'THE HOLLYWOOD HACKER',
  summary: {
    ja: 'リズムに合わせてキーを叩く、ハッカー気分のアクションゲーム。',
    en: 'A rhythm-action typing game with a Hollywood hacker feel.',
  },
  description: {
    ja: 'リズムと勢いで楽しむブラウザゲーム。難易度を選んでプレイできます。',
    en: 'A browser rhythm-action game. Choose a difficulty and play.',
  },
  // Keep this link until the project has actually moved to tanzyyy-dev.
  repositoryUrl: 'https://github.com/stellates/hackhackhack',
  demoUrl: null as string | null,
};

interface SiteCopy {
  projects: string;
  about: string;
  intro: string;
  detail: string;
  back: string;
  source: string;
  play: string;
  demoUnavailable: string;
  projectAbout: string;
  game: string;
  browser: string;
  artworkDescription: string;
  aboutLead: string;
  aboutBody: string;
}

export const copy: Record<Lang, SiteCopy> = {
  ja: {
    projects: '作品一覧',
    about: 'このサイトについて',
    intro: '制作した作品を紹介しています。',
    detail: '詳細を見る',
    back: '作品一覧に戻る',
    source: 'GitHubでソースを見る',
    play: 'プレイする',
    demoUnavailable: 'ゲームの公開URLは準備中です。',
    projectAbout: 'この作品について',
    game: 'ゲーム',
    browser: 'ブラウザ',
    artworkDescription: '仮のタイポグラフィ画像（ゲーム画面ではありません）',
    aboutLead: 'tanzyyy-dev は、制作したソフトウェアやゲームを紹介するサイトです。',
    aboutBody: '各作品の詳細ページで概要を紹介し、ソースコードなど利用可能なリンクを掲載しています。',
  },
  en: {
    projects: 'Projects',
    about: 'About',
    intro: 'A catalog of projects I have built.',
    detail: 'View details',
    back: 'Back to projects',
    source: 'View source on GitHub',
    play: 'Play',
    demoUnavailable: 'The game URL is not available yet.',
    projectAbout: 'About this project',
    game: 'Game',
    browser: 'Browser',
    artworkDescription: 'Temporary typographic artwork (not a game screenshot)',
    aboutLead: 'tanzyyy-dev is a catalog of software and games I have built.',
    aboutBody: 'Each project page gives an overview and links to available resources, such as source code.',
  },
};
