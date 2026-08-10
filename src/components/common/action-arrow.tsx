import Image from 'next/image'

import { cn } from '@/lib/utils'

type ActionArrowProps = {
  className?: string
  hoverGroup?: 'default' | 'detail'
}

export function ActionArrow({ className, hoverGroup = 'default' }: ActionArrowProps) {
  const isDetail = hoverGroup === 'detail'

  return (
    <span
      aria-hidden='true'
      data-icon='inline-end'
      className={cn(
        'relative block size-[1rem] shrink-0 transition-transform duration-200',
        isDetail
          ? 'group-hover/detail:translate-x-[0.2rem]'
          : 'group-hover:translate-x-[0.1875rem]',
        className,
      )}
    >
      <Image
        src='/icons/vuesax-outline-arrow-right.svg'
        alt=''
        width={21}
        height={21}
        className={cn(
          'absolute inset-0 size-full transition-opacity duration-200',
          isDetail ? 'group-hover/detail:opacity-0' : 'group-hover:opacity-0',
        )}
      />
      <Image
        src='/icons/vuesax-arrow-right.svg'
        alt=''
        width={21}
        height={21}
        className={cn(
          'absolute inset-0 size-full opacity-0 transition-opacity duration-200',
          isDetail ? 'group-hover/detail:opacity-100' : 'group-hover:opacity-100',
        )}
      />
    </span>
  )
}
