import Image from 'next/image'
import Link from 'next/link'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import type { Service } from '@/content/home'

type ServiceItemProps = {
  service: Service
}

const motionClassName = [
  'transform-gpu will-change-transform',
  'transition-transform duration-[850ms]',
  'ease-[cubic-bezier(0.22,1,0.36,1)]',
].join(' ')

export function ServiceItem({ service }: ServiceItemProps) {
  const iconSrc = service.icon?.trim() || '/images/file.svg'
  const imageSrc = service.image?.trim() || '/images/IMG_5948-scaled.jpg'

  return (
    <Card
      className={[
        'group/service w-full gap-0 overflow-hidden',
        'rounded-none border-b border-brand-blue/15 bg-transparent py-0 ring-0',
        'transition-[background-color,border-radius] duration-[850ms]',
        'ease-[cubic-bezier(0.22,1,0.36,1)]',
        'hover:rounded-[1rem] hover:bg-[#eef8fd]',
        'last:border-b-0',
      ].join(' ')}
    >
      <div
        className={[
          'grid min-h-[12.5rem] grid-cols-[minmax(20rem,1.2fr)_18.75rem_minmax(18rem,1fr)_3rem] items-center gap-x-[3rem]',
          'px-[2.5rem] py-[1.25rem]',
        ].join(' ')}
      >
        {}
        <div
          className={[
            'flex min-w-0 items-center gap-[1.25rem]',
            motionClassName,
            'group-hover/service:-translate-x-[0.5rem]',
          ].join(' ')}
        >
          <div className='relative size-[4.5rem] shrink-0 overflow-visible'>
            <Image
              src={iconSrc}
              alt=''
              fill
              sizes='4.5rem'
              className={[
                'object-contain',
                'transform-gpu',
                service.iconClassName ?? 'scale-100',
              ].join(' ')}
            />
          </div>

          <div className='min-w-0'>
            <Badge
              variant='ghost'
              className='h-auto rounded-none px-0 py-0 text-[0.6875rem] font-medium uppercase text-text-dark-blue/70 hover:bg-transparent'
            >
              Dịch vụ
            </Badge>

            <h3 className='mt-[0.375rem] text-[1.0625rem] font-bold uppercase leading-[1.4] text-brand-blue'>
              <Link
                href={service.href}
                className='transition-opacity duration-300 hover:opacity-75'
              >
                {service.title}
              </Link>
            </h3>
          </div>
        </div>

        {}
        <Link
          href={service.href}
          aria-label={`Xem dịch vụ ${service.title}`}
          className={[
            'relative block h-[10rem] w-[18.75rem] overflow-hidden rounded-[0.75rem]',
            motionClassName,
            'group-hover/service:-translate-x-[0.5rem]',
          ].join(' ')}
        >
          <Image
            src={imageSrc}
            alt={service.title}
            fill
            sizes='(max-width: 47.9375rem) 100vw, (max-width: 63.9375rem) 45vw, 13rem'
            className='object-cover'
          />
        </Link>

        <p
          className={[
            'min-w-0 text-[0.9375rem] leading-[1.7] text-text-dark-blue/80',
            'w-full max-w-[22rem] justify-self-start',
            motionClassName,
            'group-hover/service:-translate-x-[0.5rem]',
          ].join(' ')}
        >
          {service.description}
        </p>

        <Button
          asChild
          variant='ghost'
          size='icon-lg'
          className={[
            'relative aspect-square',
            'h-[3rem] w-[3rem]',
            'min-h-[3rem] min-w-[3rem]',
            'max-h-[3rem] max-w-[3rem]',
            'shrink-0 self-center justify-self-end',
            'overflow-hidden rounded-full bg-transparent p-0',
            'hover:bg-transparent',
            'transform-gpu will-change-transform',
            'transition-transform duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
            'group-hover/service:translate-x-[0.5rem]',
          ].join(' ')}
        >
          <Link
            href={service.href}
            aria-label={`Xem chi tiết dịch vụ ${service.title}`}
          >
            <span
              aria-hidden='true'
              className='pointer-events-none absolute inset-0 rounded-full bg-brand-blue opacity-0 transition-opacity duration-300 ease-in-out group-hover/service:opacity-100'
            />

            <span
              aria-hidden='true'
              className='pointer-events-none absolute inset-0 flex items-center justify-center'
            >
              <Image
                src='/icons/next (1).svg'
                alt=''
                width={10}
                height={18}
                className='absolute h-[1.125rem] w-[0.625rem] transition-opacity duration-300 group-hover/service:opacity-0'
              />
              <Image
                src='/icons/next_1_w.svg'
                alt=''
                width={10}
                height={18}
                className='absolute h-[1.125rem] w-[0.625rem] opacity-0 transition-opacity duration-300 group-hover/service:opacity-100'
              />
            </span>
          </Link>
        </Button>
      </div>
    </Card>
  )
}
