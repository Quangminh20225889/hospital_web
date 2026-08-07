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
          'grid grid-cols-1 items-center gap-[1.25rem]',
          'px-[1rem] py-[1.5rem]',

          'md:grid-cols-2 md:gap-x-[2rem]',

          'lg:min-h-[12.5rem]',
          'lg:grid-cols-[minmax(20rem,1.2fr)_18.75rem_minmax(18rem,1fr)_3rem]',
          'lg:gap-x-[3rem]',
          'lg:px-[2.5rem] lg:py-[1.25rem]',
        ].join(' ')}
      >
        {/* Icon và tên dịch vụ */}
        <div
          className={[
            'flex min-w-0 items-center gap-[1.25rem] order-2 lg:order-none',
            motionClassName,
            'group-hover/service:-translate-x-[0.5rem]',
          ].join(' ')}
        >
          <div className='relative size-[4.5rem] shrink-0 overflow-visible'>
            <Image
              src={iconSrc}
              alt=''
              fill
              sizes='72px'
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

            <h3 className='mt-[0.375rem] text-[1rem] font-bold uppercase leading-[1.4] text-brand-blue sm:text-[1.0625rem]'>
              <Link
                href={service.href}
                className='transition-opacity duration-300 hover:opacity-75'
              >
                {service.title}
              </Link>
            </h3>
          </div>
        </div>

        {/* Ảnh dịch vụ */}
        <Link
          href={service.href}
          aria-label={`Xem dịch vụ ${service.title}`}
          className={[
            'relative block aspect-[16/9] w-full overflow-hidden rounded-[0.75rem]',
            'order-1 lg:order-none',
            motionClassName,
            'group-hover/service:-translate-x-[0.5rem]',
            'md:aspect-[1.65/1]',
            'lg:h-[10rem] lg:w-[18.75rem] lg:aspect-auto',
          ].join(' ')}
        >
          <Image
            src={imageSrc}
            alt={service.title}
            fill
            sizes='(max-width: 767px) 100vw, (max-width: 1023px) 45vw, 208px'
            className='object-cover'
          />
        </Link>

        {/* Mô tả dịch vụ */}
        <p
          className={[
            'min-w-0 text-[0.9375rem] leading-[1.7] text-text-dark-blue/80',
            'order-3 lg:order-none',
            motionClassName,
            'group-hover/service:-translate-x-[0.5rem]',
            'md:col-span-2',
            'lg:col-span-1 lg:w-full lg:max-w-[22rem] lg:justify-self-start',
          ].join(' ')}
        >
          {service.description}
        </p>

        {/* Nút chuyển tiếp */}
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
            'overflow-hidden rounded-full p-0',
            'bg-transparent text-brand-blue hover:bg-transparent',
            'transform-gpu will-change-transform',
            'transition-transform duration-[850ms]',
            'ease-[cubic-bezier(0.22,1,0.36,1)]',
            'group-hover/service:translate-x-[0.5rem]',
            'order-4 lg:order-none',
            'md:col-span-2 lg:col-span-1',
          ].join(' ')}
        >
          <Link
            href={service.href}
            aria-label={`Xem chi tiết dịch vụ ${service.title}`}
          >
            {/* Nền tròn xanh trượt từ trái vào */}
            <span
              aria-hidden='true'
              className={[
                'pointer-events-none absolute inset-0 rounded-full bg-brand-blue',
                '-translate-x-[120%] transform-gpu',
                'transition-transform duration-[850ms]',
                'ease-[cubic-bezier(0.22,1,0.36,1)]',
                'group-hover/service:translate-x-0',
              ].join(' ')}
            />

            {/* Mũi tên xanh ban đầu trượt sang phải */}
            <span
              aria-hidden='true'
              className={[
                'pointer-events-none absolute inset-0 z-10',
                'flex items-center justify-center',
                'text-[2rem] font-light leading-none text-brand-blue',
                'transform-gpu transition-transform duration-[850ms]',
                'ease-[cubic-bezier(0.22,1,0.36,1)]',
                'group-hover/service:translate-x-[120%]',
              ].join(' ')}
            >
              ›
            </span>

            {/* Mũi tên trắng trượt từ trái vào */}
            <span
              aria-hidden='true'
              className={[
                'pointer-events-none absolute inset-0 z-20',
                'flex items-center justify-center',
                'text-[2rem] font-light leading-none text-white',
                '-translate-x-[120%] transform-gpu',
                'transition-transform duration-[850ms]',
                'ease-[cubic-bezier(0.22,1,0.36,1)]',
                'group-hover/service:translate-x-0',
              ].join(' ')}
            >
              ›
            </span>
          </Link>
        </Button>
      </div>
    </Card>
  )
}
