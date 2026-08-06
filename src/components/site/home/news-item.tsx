import Image from 'next/image'
import Link from 'next/link'

import { Card } from '@/components/ui/card'
import type { NewsItem as NewsItemData } from '@/content/home'

type NewsItemProps = {
  item: NewsItemData
}

export function NewsItem({ item }: NewsItemProps) {
  return (
    <article className='h-full'>
      <Card className='flex h-[22.5rem] gap-0 overflow-hidden rounded-[0.875rem] bg-white py-0 shadow-none ring-1 ring-[#e2e8ec]'>
        <Link
          href={item.href}
          className='group/image relative block h-[14.25rem] shrink-0 overflow-hidden'
        >
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            sizes='(max-width: 47.9375rem) 100vw, (max-width: 79.9375rem) 50vw, 33vw'
            className='object-cover transition-transform duration-500 ease-out group-hover/image:scale-[1.06]'
          />
        </Link>

        <div className='grid min-h-0 flex-1 grid-cols-[6rem_minmax(0,1fr)]'>
          <div className='flex h-full flex-col items-center justify-center bg-brand-yellow px-[0.5rem] text-center text-white'>
            <span className='text-[2.25rem] font-bold leading-none'>{item.publishedAt.day}</span>

            <span className='mt-[0.5rem] text-[0.6875rem] leading-none'>
              {item.publishedAt.monthYear}
            </span>
          </div>

          <div className='min-w-0 overflow-hidden px-[0.875rem] py-[0.625rem]'>
            <p className='text-[0.625rem] font-medium leading-[1.3] text-brand-blue'>
              {item.category}
            </p>

            <h3 className='mt-[0.25rem] line-clamp-2 text-[0.8125rem] font-semibold leading-[1.45] text-text-dark-blue'>
              <Link
                href={item.href}
                className='transition-colors duration-300 hover:text-brand-blue'
              >
                {item.title}
              </Link>
            </h3>

            <p className='mt-[0.375rem] line-clamp-2 text-[0.625rem] leading-[1.5] text-text-dark-blue/65'>
              {item.excerpt}
            </p>
          </div>
        </div>
      </Card>
    </article>
  )
}
