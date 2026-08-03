import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import {
  CodePath,
  DocsNav,
  DocsSection,
  DocsShell,
} from '@/components/site/docs/docs-ui'
import { FOLDERS, STACK } from '@/content/template-docs'

type Props = {
  params: Promise<{ locale: string }>
}

export default function HomePage({ params }: Props) {
  const { locale } = use(params)
  setRequestLocale(locale)

  const t = useTranslations('DocsOverview')
  const tFolders = useTranslations('DocsOverview.folders')

  return (
    <DocsShell
      eyebrow={t('eyebrow')}
      title={t('title')}
      description={t('description')}
      nav={
        <DocsNav
          active='overview'
          overviewLabel={t('navOverview')}
          howLabel={t('navHow')}
        />
      }
    >
      <DocsSection title={t('stackTitle')}>
        <ul className='flex flex-wrap gap-2'>
          {STACK.map((item) => (
            <li
              key={item}
              className='rounded-md border border-border px-2.5 py-1 font-mono text-xs text-foreground'
            >
              {item}
            </li>
          ))}
        </ul>
      </DocsSection>

      <DocsSection title={t('foldersTitle')}>
        <p className='text-sm text-muted-foreground'>{t('foldersIntro')}</p>
        <ul className='divide-y divide-border rounded-lg border border-border'>
          {FOLDERS.map((folder) => (
            <li
              key={folder.path}
              className='grid gap-1 px-4 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4'
            >
              <CodePath>{folder.path}</CodePath>
              <span className='text-sm text-muted-foreground'>
                {tFolders(folder.purposeKey)}
              </span>
            </li>
          ))}
        </ul>
      </DocsSection>

      <DocsSection title={t('conventionsTitle')}>
        <ul className='space-y-3 text-sm leading-relaxed text-muted-foreground'>
          <li>
            <span className='font-medium text-foreground'>{t('c1Label')} </span>
            {t('c1')}
          </li>
          <li>
            <span className='font-medium text-foreground'>{t('c2Label')} </span>
            {t('c2')}
          </li>
          <li>
            <span className='font-medium text-foreground'>{t('c3Label')} </span>
            {t('c3')}
          </li>
          <li>
            <span className='font-medium text-foreground'>{t('c4Label')} </span>
            {t('c4')}
          </li>
        </ul>
      </DocsSection>
    </DocsShell>
  )
}
