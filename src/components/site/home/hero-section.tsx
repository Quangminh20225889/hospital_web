'use client'

import Image from 'next/image'
import { useEffect } from 'react'

import { NavChevron } from '@/components/common/nav-chevron'
import { Carousel, CarouselContent, CarouselItem, useCarousel } from '@/components/ui/carousel'
import { bannerSlides } from '@/content/home'
import { cn } from '@/lib/utils'

const AUTOPLAY_MS = 8000

function BannerAutoplay() {
  const { api } = useCarousel()

  useEffect(() => {
    if (!api) return

    const id = window.setInterval(() => {
      api.scrollNext()
    }, AUTOPLAY_MS)

    return () => window.clearInterval(id)
  }, [api])

  return null
}

function BannerNavButton({ direction }: { direction: 'prev' | 'next' }) {
  const { scrollPrev, scrollNext } = useCarousel()

  return (
    <button
      type='button'
      aria-label={direction === 'prev' ? 'Banner trước' : 'Banner tiếp'}
      onClick={direction === 'prev' ? scrollPrev : scrollNext}
      className={cn(
        'group absolute inset-y-0 z-10 my-auto flex items-center justify-center rounded-full transition-all duration-300',

        'size-[1.75rem] border border-brand-blue bg-white text-brand-blue backdrop-blur-[2px]',

        'lg:size-[3rem]',
        'lg:shadow-[0_0.25rem_1rem_rgba(4,24,33,0.08)]',
        'hover:bg-brand-blue hover:text-white',
        direction === 'prev'
          ? 'left-[0.5rem] lg:left-[1.25rem]'
          : 'right-[0.5rem] lg:right-[1.25rem]',
      )}
    >
      <NavChevron
        direction={direction === 'prev' ? 'left' : 'right'}
        className='lg:h-[1.375rem] lg:w-[0.7639rem]'
      />
    </button>
  )
}

export function HeroSection() {
  return (
    <section
      className='relative w-full overflow-hidden bg-surface-blue'
      aria-label='Banner'
    >
      <Carousel
        opts={{ loop: true, align: 'start', duration: 45, watchDrag: true }}
        className='w-full'
      >
        <BannerAutoplay />

        <CarouselContent className='ml-0'>
          {bannerSlides.map((slide, index) => (
            <CarouselItem
              key={slide.id}
              className='pl-0'
            >
              {}
              <div className='relative aspect-[375/180] w-full sm:aspect-[1024/380] lg:aspect-[3600/1178]'>
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
            </CarouselItem>
          ))}
        </CarouselContent>

        <BannerNavButton direction='prev' />
        <BannerNavButton direction='next' />
      </Carousel>
    </section>
  )
}
