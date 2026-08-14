import Image from 'next/image'

import { cn } from '@/lib/utils'

type NavChevronProps = {
  direction: 'left' | 'right'
  className?: string
  hoverGroup?: 'default' | 'service'
}

export function NavChevron({ direction, className, hoverGroup = 'default' }: NavChevronProps) {
  const isPrevious = direction === 'left'
  const isService = hoverGroup === 'service'
  const iconClassName = cn('h-[1.125rem] w-[0.625rem] shrink-0', className)

  return (
    <span
      aria-hidden='true'
      className='pointer-events-none absolute inset-0 overflow-hidden rounded-full'
    >
      <span
        className={cn(
          'absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out',
          isService
            ? isPrevious
              ? 'group-hover/service:-translate-x-full'
              : 'group-hover/service:translate-x-full'
            : isPrevious
              ? 'group-hover:-translate-x-full group-disabled:translate-x-0'
              : 'group-hover:translate-x-full group-disabled:translate-x-0',
        )}
      >
        <Image
          src={isPrevious ? '/icons/next (2).svg' : '/icons/next (1).svg'}
          alt=''
          width={10}
          height={18}
          className={iconClassName}
        />
      </span>

      <span
        className={cn(
          'absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out',
          isService ? 'group-hover/service:translate-x-0' : 'group-hover:translate-x-0',
          isPrevious
            ? cn('translate-x-full', !isService && 'group-disabled:translate-x-full')
            : cn('-translate-x-full', !isService && 'group-disabled:-translate-x-full'),
        )}
      >
        <Image
          src={isPrevious ? '/icons/next_2_w.svg' : '/icons/next_1_w.svg'}
          alt=''
          width={10}
          height={18}
          className={iconClassName}
        />
      </span>
    </span>
  )
}
