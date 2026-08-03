import type { ReactNode } from 'react'

import ROUTES from '@/configs/routes'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'

type DocsNavProps = {
  active: 'overview' | 'how'
  overviewLabel: string
  howLabel: string
}

export function DocsNav({ active, overviewLabel, howLabel }: DocsNavProps) {
  return (
    <nav className='flex items-center gap-1 border-b border-border pb-4'>
      <DocsNavLink href={ROUTES.home} active={active === 'overview'}>
        {overviewLabel}
      </DocsNavLink>
      <DocsNavLink href={ROUTES.about} active={active === 'how'}>
        {howLabel}
      </DocsNavLink>
    </nav>
  )
}

function DocsNavLink({
  href,
  active,
  children,
}: {
  href: typeof ROUTES.home | typeof ROUTES.about
  active: boolean
  children: ReactNode
}) {
  return (
    <Link
      href={href}
      className={cn(
        'rounded-md px-3 py-1.5 text-sm transition-colors',
        active
          ? 'bg-foreground text-background'
          : 'text-muted-foreground hover:text-foreground',
      )}
    >
      {children}
    </Link>
  )
}

export function DocsShell({
  eyebrow,
  title,
  description,
  nav,
  children,
}: {
  eyebrow: string
  title: string
  description: string
  nav: ReactNode
  children: ReactNode
}) {
  return (
    <main className='mx-auto min-h-screen max-w-3xl px-6 py-12 sm:py-16'>
      <div className='mb-10 space-y-4'>
        <p className='font-mono text-xs tracking-wide text-muted-foreground uppercase'>
          {eyebrow}
        </p>
        <h1 className='text-3xl font-semibold tracking-tight sm:text-4xl'>{title}</h1>
        <p className='max-w-2xl text-base leading-relaxed text-muted-foreground'>
          {description}
        </p>
        {nav}
      </div>
      <div className='space-y-12'>{children}</div>
    </main>
  )
}

export function DocsSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className='space-y-4'>
      <h2 className='text-lg font-semibold tracking-tight'>{title}</h2>
      {children}
    </section>
  )
}

export function CodePath({ children }: { children: ReactNode }) {
  return (
    <code className='rounded bg-muted px-1.5 py-0.5 font-mono text-[0.8rem] text-foreground'>
      {children}
    </code>
  )
}
