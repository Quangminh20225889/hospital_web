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
    <div className={cn('max-w-[720px]', align === 'center' && 'mx-auto text-center', className)}>
      {label && (
        <p
          className={cn(
            'mb-[8px] inline-flex items-center gap-[6px] text-[12px] font-semibold uppercase tracking-[0.08em] text-brand-blue',
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
          'text-[28px] font-bold leading-[1.25] text-text-dark-blue md:text-[36px]',
          titleClassName,
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            'mt-[16px] text-[16px] leading-[1.75] text-text-dark-blue/70',
            descriptionClassName,
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
