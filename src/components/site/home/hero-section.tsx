'use client'

import Image from 'next/image'
import { useRef } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import { bannerSlides } from '@/content/home'
import { cn } from '@/lib/utils'

const AUTOPLAY_MS = 8000

function BannerNavButton({
  direction,
  onClick,
}: {
  direction: 'prev' | 'next'
  onClick: () => void
}) {
  const isPrevious = direction === 'prev'
  const iconSizeClassName = 'h-[1.375rem] w-[0.7639rem] xsm:h-[1.125rem] xsm:w-[0.625rem]'

  return (
    <button
      type='button'
      aria-label={direction === 'prev' ? 'Banner trước' : 'Banner tiếp'}
      onClick={onClick}
      className={cn(
        'group/hero-nav absolute inset-y-0 z-10 my-auto size-[3rem] overflow-hidden rounded-full border border-brand-blue bg-white transition-colors duration-300 ease-in-out',
        'shadow-[0_0.25rem_1rem_rgba(4,24,33,0.08)]',
        'xsm:size-[1.75rem] xsm:shadow-none',
        'min-[639.98px]:hover:bg-brand-blue',
        isPrevious ? 'left-[1.25rem] xsm:left-[0.5rem]' : 'right-[1.25rem] xsm:right-[0.5rem]',
      )}
    >
      <span
        className={cn(
          'absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out',
          isPrevious
            ? 'min-[639.98px]:group-hover/hero-nav:-translate-x-full'
            : 'min-[639.98px]:group-hover/hero-nav:translate-x-full',
        )}
      >
        <Image
          src={isPrevious ? '/icons/next (2).svg' : '/icons/next (1).svg'}
          alt=''
          width={10}
          height={18}
          className={iconSizeClassName}
        />
      </span>

      <span
        className={cn(
          'absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out min-[639.98px]:group-hover/hero-nav:translate-x-0',
          isPrevious ? 'translate-x-full' : '-translate-x-full',
        )}
      >
        <Image
          src={isPrevious ? '/icons/next_2_w.svg' : '/icons/next_1_w.svg'}
          alt=''
          width={10}
          height={18}
          className={iconSizeClassName}
        />
      </span>
    </button>
  )
}

export function HeroSection() {
  const swiperRef = useRef<SwiperType | null>(null)

  return (
    <section
      className='relative w-full overflow-hidden bg-surface-blue'
      aria-label='Banner'
    >
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper
        }}
        slidesPerView={1}
        loop={bannerSlides.length > 1}
        speed={700}
        autoplay={
          bannerSlides.length > 1
            ? {
                delay: AUTOPLAY_MS,
                disableOnInteraction: false,
              }
            : false
        }
        className='w-full'
      >
        {bannerSlides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className='relative aspect-[3600/1178] w-full xsm:aspect-[375/180]'>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                draggable={false}
                sizes='100vw'
                className='object-cover object-center'
              />
            </div>
          </SwiperSlide>
        ))}

        <BannerNavButton
          direction='prev'
          onClick={() => swiperRef.current?.slidePrev()}
        />

        <BannerNavButton
          direction='next'
          onClick={() => swiperRef.current?.slideNext()}
        />
      </Swiper>
    </section>
  )
}
