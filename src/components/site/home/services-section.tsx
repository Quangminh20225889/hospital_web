import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/common/container'
import { ServiceItem } from '@/components/site/home/service-item'
import { Button } from '@/components/ui/button'
import { services } from '@/content/home'

export function ServicesSection() {
  return (
    <section
      id='dich-vu'
      className='py-[4rem] lg:py-[6rem]'
    >
      <Container className='max-w-none'>
        <div className='relative mt-[1.5rem] h-[5.5rem] sm:h-[6.25rem] lg:h-[7.3125rem]'>
          {/* Nền xanh và hoa văn */}
          <div className='absolute inset-0 overflow-hidden rounded-[0.875rem] bg-brand-blue'>
            <Image
              src='/images/hoavan.png'
              alt=''
              fill
              sizes='100vw'
              className='object-cover opacity-25'
            />
          </div>

          {/* Nội dung chữ */}
          <h2 className='sr-only'>Dịch vụ nổi bật - Hiệu quả điều trị</h2>

          <div className='absolute inset-0 z-20 grid grid-cols-2 items-center'>
            <p className='pl-[1rem] text-center text-[1rem] font-bold uppercase leading-[1.2] text-white sm:pl-[5rem] sm:text-[1.375rem] lg:pl-[8rem] lg:text-[1.75rem]'>
              Dịch vụ nổi bật
            </p>

            <p className='pr-[1rem] text-center text-[1rem] font-bold uppercase leading-[1.2] text-white sm:pr-[5rem] sm:text-[1.375rem] lg:pr-[8rem] lg:text-[1.75rem]'>
              Hiệu quả điều trị
            </p>
          </div>

          {/* Bác sĩ bên trái */}
          <div className='absolute bottom-0 left-[1rem] z-30 hidden h-[8.75rem] w-[9rem] sm:block lg:left-[1.5rem] lg:h-[10rem] lg:w-[10rem]'>
            <Image
              src='/images/bac-si-2.png'
              alt='Bác sĩ chăm sóc mẹ và bé'
              fill
              sizes='160px'
              className='object-contain object-bottom'
            />
          </div>

          {/* Bàn tay ở giữa */}
          {/* Bàn tay ở giữa */}
          <div className='pointer-events-none absolute bottom-[-1.5rem] left-1/2 z-30 hidden h-[9.75rem] w-[11.5rem] -translate-x-1/2 md:block lg:h-[11rem] lg:w-[13rem]'>
            <Image
              src='/images/ban-tay.png'
              alt=''
              fill
              sizes='208px'
              className='object-contain object-bottom'
            />
          </div>

          {/* Gia đình bên phải */}
          <div className='absolute bottom-0 right-[0.75rem] z-30 hidden h-[8.5rem] w-[10rem] sm:block lg:right-[1.25rem] lg:h-[10rem] lg:w-[12rem]'>
            <Image
              src='/images/family.png'
              alt='Gia đình hạnh phúc'
              fill
              sizes='192px'
              className='object-contain object-bottom'
            />
          </div>
        </div>

        <div className='mt-[2rem] w-full'>
          {services.map((service) => (
            <ServiceItem
              key={service.id}
              service={service}
            />
          ))}
        </div>

        <div className='mt-[2rem] flex justify-center'>
          <Button
            asChild
            variant='outline'
            className={[
              'group/all h-[3.5rem] rounded-full px-[2rem]',
              'border-brand-blue bg-transparent text-[1rem] font-normal text-brand-blue',
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
                  'ml-[0.625rem] inline-block text-[1.5rem] font-light leading-none',
                  'transform-gpu transition-transform duration-[500ms]',
                  'ease-[cubic-bezier(0.22,1,0.36,1)]',
                  'group-hover/all:translate-x-[0.375rem]',
                ].join(' ')}
              >
                →
              </span>
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  )
}
