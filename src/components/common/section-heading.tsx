import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  label?: string
  labelIcon?: ReactNode
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
  labelClassName?: string
  titleClassName?: string
  descriptionClassName?: string
}

export function SectionHeading({
  label,
  labelIcon,
  title,
  description,
  align = 'left',
  className,
  labelClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-[45rem]', align === 'center' && 'mx-auto text-center', className)}>
      {label && (
        <p
          className={cn(
            'mb-[0.5rem] inline-flex items-center gap-[0.375rem] text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-brand-blue',
            align === 'center' && 'justify-center',
            labelClassName,
          )}
        >
          {labelIcon}
          {label}
        </p>
      )}

      <h2
        className={cn(
          'text-[1.75rem] font-bold leading-[1.25] text-text-dark-blue md:text-[2.25rem]',
          titleClassName,
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            'mt-[1rem] text-[1rem] leading-[1.75] text-text-dark-blue/70',
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
