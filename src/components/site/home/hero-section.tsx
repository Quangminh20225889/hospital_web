'use client'

import Image from 'next/image'
import { useEffect } from 'react'

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
  const isPrevious = direction === 'prev'
  const iconSizeClassName = 'h-[1.375rem] w-[0.7639rem] xsm:h-[1.125rem] xsm:w-[0.625rem]'

  return (
    <button
      type='button'
      aria-label={direction === 'prev' ? 'Banner trước' : 'Banner tiếp'}
      onClick={direction === 'prev' ? scrollPrev : scrollNext}
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
