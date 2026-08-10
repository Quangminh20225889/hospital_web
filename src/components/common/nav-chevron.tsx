import Image from 'next/image'

import { cn } from '@/lib/utils'

type NavChevronProps = {
  direction: 'left' | 'right'
  className?: string
}

export function NavChevron({ direction, className }: NavChevronProps) {
  const isLeft = direction === 'left'

  return (
    <span
      aria-hidden='true'
      className={cn('relative block h-[1.125rem] w-[0.625rem] shrink-0', className)}
    >
      <Image
        src={isLeft ? '/icons/next (2).svg' : '/icons/next (1).svg'}
        alt=''
        width={10}
        height={18}
        className='absolute inset-0 size-full transition-opacity duration-200 group-hover:opacity-0 group-disabled:opacity-100'
      />
      <Image
        src={isLeft ? '/icons/next_2_w.svg' : '/icons/next_1_w.svg'}
        alt=''
        width={10}
        height={18}
        className='absolute inset-0 size-full opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-disabled:opacity-0'
      />
    </span>
  )
}
