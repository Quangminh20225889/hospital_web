import Image from 'next/image'
import Link from 'next/link'

import type { Service } from '@/content/home'

type ServiceCardProps = {
  service: Service
}

export function ServiceCard({ service }: ServiceCardProps) {
  const iconSrc = service.icon?.trim() || '/images/file.svg'
  const imageSrc = service.image?.trim() || '/images/IMG_5948-scaled.jpg'

  return (
    <article className='flex h-full flex-col rounded-[0.875rem] bg-[#eef8fd] p-[0.75rem]'>
      <Link
        href={service.href}
        aria-label={`Xem dịch vụ ${service.title}`}
        className='relative block aspect-[16/9] w-full overflow-hidden rounded-[0.625rem]'
      >
        <Image
          src={imageSrc}
          alt={service.title}
          fill
          sizes='(max-width: 1024px) 100vw, 33vw'
          className='object-cover'
        />
      </Link>

      <div className='mt-[0.875rem] flex items-center gap-[0.75rem]'>
        <div className='relative size-[3rem] shrink-0'>
          <Image
            src={iconSrc}
            alt=''
            fill
            sizes='48px'
            className={['object-contain', service.iconClassName ?? ''].join(' ')}
          />
        </div>

        <div className='min-w-0'>
          <p className='text-[0.6875rem] font-medium uppercase text-text-dark-blue/70'>Dịch vụ</p>

          <h3 className='mt-[0.125rem] text-[0.9375rem] font-bold uppercase leading-[1.35] text-brand-blue'>
            <Link
              href={service.href}
              className='transition-opacity duration-300 hover:opacity-75'
            >
              {service.title}
            </Link>
          </h3>
        </div>
      </div>

      <div className='mt-[0.75rem] flex-1'>
        <p className='line-clamp-3 text-[0.8125rem] leading-[1.6] text-text-dark-blue/80'>
          {service.description}
        </p>
      </div>

      <Link
        href={service.href}
        className='mt-[0.75rem] self-end text-[0.8125rem] font-medium text-brand-blue transition-opacity duration-300 hover:opacity-75'
      >
        Xem chi tiết&#8594;
      </Link>
    </article>
  )
}
