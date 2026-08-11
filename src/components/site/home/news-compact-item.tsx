import { CalendarDaysIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import type { NewsItem as NewsItemData } from '@/content/home'

type NewsCompactItemProps = {
  item: NewsItemData
}

export function NewsCompactItem({ item }: NewsCompactItemProps) {
  return (
    <article className='flex items-start gap-[0.875rem]'>
      <Link
        href={item.href}
        aria-label={item.title}
        className='relative block h-[4.5rem] w-[8rem] shrink-0 overflow-hidden rounded-[0.5rem]'
      >
        <Image
          src={item.image}
          alt={item.imageAlt}
          fill
          sizes='8rem'
          className='object-cover'
        />
      </Link>

      <div className='min-w-0 flex-1'>
        <h3 className='line-clamp-2 text-[0.9375rem] font-semibold leading-[1.4] text-text-dark-blue'>
          <Link
            href={item.href}
            className='transition-colors duration-300 hover:text-brand-blue'
          >
            {item.title}
          </Link>
        </h3>

        <p className='mt-[0.5rem] flex items-center gap-[0.375rem] text-[0.75rem] leading-none text-brand-blue'>
          <span className='font-medium uppercase'>{item.category}</span>

          <span
            aria-hidden='true'
            className='size-[0.25rem] shrink-0 rounded-full bg-brand-blue/50'
          />

          <CalendarDaysIcon
            aria-hidden='true'
            className='size-[0.875rem] shrink-0'
          />

          <span className='text-text-dark-blue/70'>
            {item.publishedAt.day}/{item.publishedAt.monthYear}
          </span>
        </p>
      </div>
    </article>
  )
}
