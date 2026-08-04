import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  label?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-[45rem]', align === 'center' && 'mx-auto text-center', className)}>
      {label && (
        <p className='mb-[0.5rem] text-[0.75rem] font-semibold uppercase tracking-[0.08em] text-primary'>
          {label}
        </p>
      )}

      <h2 className='text-[1.75rem] font-bold leading-[1.25] md:text-[2.25rem]'>{title}</h2>

      {description && (
        <p className='mt-[1rem] text-[1rem] leading-[1.75] text-muted-foreground'>{description}</p>
      )}
    </div>
  )
}
