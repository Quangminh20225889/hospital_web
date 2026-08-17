import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/common/container'
import { ServiceItem } from '@/components/site/home/service-item'
import { ServicesMobileSlider } from '@/components/site/home/services-mobile-slider'
import { Button } from '@/components/ui/button'
import { services } from '@/content/home'

export function ServicesSection() {
  return (
    <section
      id='dich-vu'
      className='pt-[6rem] pb-[7.5rem] xsm:pt-[2.75rem] xsm:pb-[1.25rem]'
    >
      <Container className='max-w-none'>
        {}
        <div className='hidden w-full flex-col items-center gap-[1.38rem] text-center xsm:flex'>
          <p className='w-full text-[1.5rem] font-bold uppercase leading-[1.95rem] tracking-[-0.03rem] text-brand-blue'>
            Dịch vụ nổi bật
          </p>

          <p className='w-full text-[1.5rem] font-bold uppercase leading-[1.95rem] tracking-[-0.03rem] text-brand-blue'>
            Hiệu quả điều trị
          </p>
        </div>

        <div className='relative mt-[1.5rem] h-[7.3125rem] xsm:h-[5.5rem]'>
          {}
          <div className='absolute inset-0 overflow-hidden rounded-[0.875rem] bg-brand-blue'>
            <Image
              src='/images/hoavan.png'
              alt=''
              fill
              sizes='100vw'
              className='object-cover opacity-25'
            />
          </div>

          {}
          <h2 className='sr-only'>Dịch vụ nổi bật - Hiệu quả điều trị</h2>

          <div className='absolute inset-0 z-20 grid grid-cols-2 items-center xsm:hidden'>
            <p className='pl-[8rem] text-center text-[1.75rem] font-bold uppercase leading-[1.2] text-white'>
              Dịch vụ nổi bật
            </p>

            <p className='pr-[8rem] text-center text-[1.75rem] font-bold uppercase leading-[1.2] text-white'>
              Hiệu quả điều trị
            </p>
          </div>

          {}
          <div className='absolute bottom-0 left-[1.5rem] z-30 h-[10rem] w-[10rem] xsm:hidden'>
            <Image
              src='/images/bac-si-2.png'
              alt='Bác sĩ chăm sóc mẹ và bé'
              fill
              sizes='10rem'
              className='object-contain object-bottom'
            />
          </div>

          {}
          <div className='pointer-events-none absolute bottom-[-1.875rem] left-1/2 z-30 h-[9.1875rem] w-[13.5rem] -translate-x-1/2 xsm:bottom-0 xsm:h-[5.5rem] xsm:w-[8.125rem]'>
            <Image
              src='/images/ban-tay.png'
              alt=''
              fill
              sizes='(max-width: 39.9375rem) 8.125rem, 13.5rem'
              className='object-contain object-bottom'
            />
          </div>

          {}
          <div className='absolute bottom-0 right-[1.25rem] z-30 h-[10rem] w-[12rem] xsm:hidden'>
            <Image
              src='/images/family.png'
              alt='Gia đình hạnh phúc'
              fill
              sizes='12rem'
              className='object-contain object-bottom'
            />
          </div>
        </div>

        <div className='mt-[2.5rem] w-full'>
          <ServicesMobileSlider services={services} />

          <div className='block xsm:hidden'>
            {services.map((service) => (
              <ServiceItem
                key={service.id}
                service={service}
              />
            ))}
          </div>
        </div>

        <div className='mt-[2.5rem] flex justify-center'>
          <Button
            asChild
            variant='outline'
            className={[
              'group/all h-[3rem] rounded-[6.25rem] border-[1.4px] px-[1.75rem]',
              'border-brand-blue bg-transparent text-[1rem] font-medium leading-[1.5rem] text-brand-blue',

              // Mobile
              'xsm:h-[2.5rem] xsm:px-[1.75rem] xsm:py-[0.75rem]',
              'xsm:text-[0.875rem] xsm:leading-[1.3125rem]',

              'transition-[border-color,color,background-color] duration-[500ms]',
              'ease-[cubic-bezier(0.22,1,0.36,1)]',
              'hover:border-[#f8b82e] hover:bg-transparent hover:text-[#f8b82e]',
            ].join(' ')}
          >
            <Link href='/dich-vu'>
              <span>Xem tất cả</span>

              <span
                aria-hidden='true'
                className={[
                  'relative ml-[0.625rem] inline-block size-[1.25rem] shrink-0',
                  'transform-gpu transition-transform duration-[500ms]',
                  'ease-[cubic-bezier(0.22,1,0.36,1)]',
                  'group-hover/all:translate-x-[0.375rem]',
                ].join(' ')}
              >
                <Image
                  src='/icons/vuesax-outline-arrow-right.svg'
                  alt=''
                  fill
                  sizes='1.25rem'
                  className='transition-opacity duration-200 group-hover/all:opacity-0'
                />
                <Image
                  src='/icons/arrow-right.svg'
                  alt=''
                  fill
                  sizes='1.25rem'
                  className='opacity-0 transition-opacity duration-200 group-hover/all:opacity-100'
                />
              </span>
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
