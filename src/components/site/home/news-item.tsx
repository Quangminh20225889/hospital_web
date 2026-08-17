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
      {}
      <Card className='flex h-[22.375rem] gap-0 overflow-hidden rounded-[1rem] bg-white py-0 shadow-none ring-1 ring-[#e2e8ec] xsm:h-[18.5rem] xsm:rounded-[0.875rem]'>
        <Link
          href={item.href}
          draggable={false}
          className='group/image relative block h-[14.375rem] shrink-0 overflow-hidden xsm:h-[10.75rem]'
        >
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            draggable={false}
            sizes='(max-width: 47.9375rem) 100vw, (max-width: 79.9375rem) 50vw, 33vw'
            className='object-cover transition-transform duration-500 ease-out group-hover/image:scale-[1.06]'
          />
        </Link>

        <div className='grid min-h-0 flex-1 grid-cols-[6.1875rem_minmax(0,1fr)] xsm:grid-cols-[4.75rem_minmax(0,1fr)]'>
          <div className='flex h-full flex-col items-center justify-center bg-brand-yellow px-[1.5rem] py-[0.75rem] text-center text-white'>
            <span className='text-[2.5rem] font-bold leading-[120%] text-white xsm:text-[1.75rem]'>
              {item.publishedAt.day}
            </span>

            <span className='text-[0.875rem] font-normal leading-[150%] text-white xsm:text-[0.6875rem]'>
              {item.publishedAt.monthYear}
            </span>
          </div>

          {}
          <div className='min-w-0 overflow-hidden px-[1rem] pt-[0.5rem] pb-[0.625rem] xsm:px-[0.875rem] xsm:py-[0.75rem]'>
            <p className='text-[0.75rem] font-medium leading-[120%] text-brand-blue xsm:text-[0.6875rem]'>
              {item.category}
            </p>

            <h3 className='mt-[0.5rem] line-clamp-2 text-[1rem] font-medium leading-[150%] text-text-dark-blue xsm:mt-[0.25rem] xsm:text-[0.875rem] xsm:font-semibold xsm:leading-[1.45]'>
              <Link
                href={item.href}
                draggable={false}
                className='transition-colors duration-300 hover:text-brand-blue'
              >
                {item.title}
              </Link>
            </h3>

            <p className='mt-[0.5rem] h-[2.25rem] line-clamp-2 overflow-hidden text-[0.75rem] font-normal leading-[150%] tracking-[0.0075rem] text-text-dark-blue/70'>
              {item.excerpt}
            </p>
          </div>
        </div>
      </Card>
    </article>
  )
}
