import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { use } from 'react'

import {
  CodePath,
  DocsNav,
  DocsSection,
  DocsShell,
} from '@/components/site/docs/docs-ui'
import { DATA_FLOW, FLOW_STEPS } from '@/content/template-docs'

type Props = {
  params: Promise<{ locale: string }>
}

export default function AboutPage({ params }: Props) {
  const { locale } = use(params)
  setRequestLocale(locale)

  const t = useTranslations('DocsHow')
  const tFlow = useTranslations('DocsHow.flow')
  const tData = useTranslations('DocsHow.data')

  return (
    <DocsShell
      eyebrow={t('eyebrow')}
      title={t('title')}
      description={t('description')}
      nav={
        <DocsNav
          active='how'
          overviewLabel={t('navOverview')}
          howLabel={t('navHow')}
        />
      }
    >
      <DocsSection title={t('requestTitle')}>
        <p className='text-sm text-muted-foreground'>{t('requestIntro')}</p>
        <ol className='space-y-3'>
          {FLOW_STEPS.map((step, index) => (
            <li
              key={step.file}
              className='flex gap-3 rounded-lg border border-border px-4 py-3'
            >
              <span className='font-mono text-xs text-muted-foreground'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className='space-y-1'>
                <CodePath>{step.file}</CodePath>
                <p className='text-sm text-muted-foreground'>{tFlow(step.purposeKey)}</p>
              </div>
            </li>
          ))}
        </ol>
      </DocsSection>

      <DocsSection title={t('i18nTitle')}>
        <ul className='space-y-3 text-sm leading-relaxed text-muted-foreground'>
          <li>{t('i18n1')}</li>
          <li>{t('i18n2')}</li>
          <li>{t('i18n3')}</li>
          <li>{t('i18n4')}</li>
        </ul>
      </DocsSection>

      <DocsSection title={t('dataTitle')}>
        <p className='text-sm text-muted-foreground'>{t('dataIntro')}</p>
        <ol className='space-y-3'>
          {DATA_FLOW.map((item, index) => (
            <li
              key={item.layer}
              className='flex gap-3 rounded-lg border border-border px-4 py-3'
            >
              <span className='font-mono text-xs text-muted-foreground'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className='space-y-1'>
                <CodePath>{item.layer}</CodePath>
                <p className='text-sm text-muted-foreground'>{tData(item.purposeKey)}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className='text-sm text-muted-foreground'>
          {t('dataExampleBefore')} <CodePath>tourService.getTours()</CodePath>{' '}
          {t('dataExampleAfter')}
        </p>
      </DocsSection>

      <DocsSection title={t('providersTitle')}>
        <ul className='space-y-3 text-sm leading-relaxed text-muted-foreground'>
          <li>{t('providers1')}</li>
          <li>{t('providers2')}</li>
          <li>{t('providers3')}</li>
        </ul>
      </DocsSection>

      <DocsSection title={t('addPageTitle')}>
        <ol className='list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground'>
          <li>{t('add1')}</li>
          <li>{t('add2')}</li>
          <li>{t('add3')}</li>
          <li>{t('add4')}</li>
        </ol>
      </DocsSection>
    </DocsShell>
  )
}
