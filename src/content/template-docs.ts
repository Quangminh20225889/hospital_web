export const STACK = [
  'Next.js 16',
  'React 19',
  'TypeScript',
  'Tailwind 4',
  'shadcn/ui',
  'next-intl',
  'TanStack Query',
  'nuqs',
  'GSAP',
] as const

export const FOLDERS = [
  { path: 'src/app/', purposeKey: 'app' },
  { path: 'src/components/', purposeKey: 'components' },
  { path: 'src/configs/', purposeKey: 'configs' },
  { path: 'src/fetches/', purposeKey: 'fetches' },
  { path: 'src/services/', purposeKey: 'services' },
  { path: 'src/i18n/', purposeKey: 'i18n' },
  { path: 'src/hooks/', purposeKey: 'hooks' },
  { path: 'src/lib/', purposeKey: 'lib' },
  { path: 'src/utils/', purposeKey: 'utils' },
  { path: 'src/styles/', purposeKey: 'styles' },
  { path: 'messages/', purposeKey: 'messages' },
  { path: 'src/proxy.ts', purposeKey: 'proxy' },
] as const

export const FLOW_STEPS = [
  { file: 'src/proxy.ts', purposeKey: 'proxy' },
  { file: 'src/app/layout.tsx', purposeKey: 'rootLayout' },
  { file: 'src/app/[locale]/layout.tsx', purposeKey: 'localeLayout' },
  { file: 'page.tsx', purposeKey: 'page' },
] as const

export const DATA_FLOW = [
  { layer: 'configs/', purposeKey: 'configs' },
  { layer: 'fetches/', purposeKey: 'fetches' },
  { layer: 'services/', purposeKey: 'services' },
  { layer: 'page / component', purposeKey: 'consume' },
] as const
