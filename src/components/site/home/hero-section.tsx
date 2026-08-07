'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { useEffect } from 'react'

import { Carousel, CarouselContent, CarouselItem, useCarousel } from '@/components/ui/carousel'
import { bannerSlides } from '@/content/home'
import { cn } from '@/lib/utils'

const AUTOPLAY_MS = 5000

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

  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight

  return (
    <button
      type='button'
      aria-label={direction === 'prev' ? 'Banner trước' : 'Banner tiếp'}
      onClick={direction === 'prev' ? scrollPrev : scrollNext}
      className={cn(
        'group absolute inset-y-0 z-10 my-auto flex items-center justify-center rounded-full transition-all duration-300',
        // Mobile: nút nhỏ, nền trắng mờ đặt sát mép
        'size-[1.75rem] bg-white/75 text-brand-blue backdrop-blur-[2px]',
        // Desktop: nút tròn nền xanh như bản thiết kế web
        'lg:size-[3rem] lg:border lg:border-brand-blue/10 lg:bg-brand-blue lg:text-white',
        'lg:shadow-[0_0.25rem_1rem_rgba(4,24,33,0.08)]',
        'hover:bg-white lg:hover:border-brand-blue lg:hover:bg-white lg:hover:text-brand-blue',
        direction === 'prev'
          ? 'left-[0.5rem] lg:left-[1.25rem]'
          : 'right-[0.5rem] lg:right-[1.25rem]',
      )}
    >
      <Icon
        aria-hidden='true'
        className='size-[1.125rem] lg:size-[1.375rem]'
        strokeWidth={2}
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
        opts={{ loop: true, align: 'start', duration: 30 }}
        className='w-full'
      >
        <BannerAutoplay />

        <CarouselContent className='ml-0'>
          {bannerSlides.map((slide, index) => (
            <CarouselItem
              key={slide.id}
              className='pl-0'
            >
              {/* Tỉ lệ banner theo từng bản thiết kế: mobile 375x180, desktop 3600x1178 */}
              <div className='relative aspect-[375/180] w-full sm:aspect-[1024/380] lg:aspect-[3600/1178]'>
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
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
