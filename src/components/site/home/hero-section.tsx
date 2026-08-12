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

    let timeoutId: number | null = null

    const clearAutoplay = () => {
      if (timeoutId === null) return

      window.clearTimeout(timeoutId)
      timeoutId = null
    }

    const startAutoplay = () => {
      clearAutoplay()

      if (document.hidden || api.scrollSnapList().length <= 1) return

      timeoutId = window.setTimeout(() => {
        timeoutId = null

        if (document.hidden) return

        api.scrollNext()
        startAutoplay()
      }, AUTOPLAY_MS)
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearAutoplay()

        // Finish any in-progress loop transition so Embla does not resume
        // from an intermediate position when the tab becomes visible again.
        api.scrollTo(api.selectedScrollSnap(), true)
        return
      }

      startAutoplay()
    }

    api.on('select', startAutoplay)
    api.on('reInit', startAutoplay)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    startAutoplay()

    return () => {
      clearAutoplay()
      api.off('select', startAutoplay)
      api.off('reInit', startAutoplay)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
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

        'size-[3rem] border border-brand-blue bg-white text-brand-blue backdrop-blur-[0.125rem]',
        'shadow-[0_0.25rem_1rem_rgba(4,24,33,0.08)]',
        'xsm:size-[1.75rem] xsm:shadow-none',
        'hover:bg-brand-blue hover:text-white',
        direction === 'prev'
          ? 'left-[1.25rem] xsm:left-[0.5rem]'
          : 'right-[1.25rem] xsm:right-[0.5rem]',
      )}
    >
      <NavChevron
        direction={direction === 'prev' ? 'left' : 'right'}
        className='h-[1.375rem] w-[0.7639rem] xsm:h-auto xsm:w-auto'
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
            </CarouselItem>
          ))}
        </CarouselContent>

        <BannerNavButton direction='prev' />
        <BannerNavButton direction='next' />
      </Carousel>
    </section>
  )
}
