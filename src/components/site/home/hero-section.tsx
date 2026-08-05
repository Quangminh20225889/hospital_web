'use client'

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

  return (
    <button
      type='button'
      aria-label={direction === 'prev' ? 'Banner trước' : 'Banner tiếp'}
      onClick={direction === 'prev' ? scrollPrev : scrollNext}
      className={cn(
        'group absolute inset-y-0 z-10 my-auto flex size-[3rem] items-center justify-center rounded-full border border-brand-blue/10 bg-brand-blue text-white shadow-[0_0.25rem_1rem_rgba(4,24,33,0.08)] transition-all duration-300',
        'hover:border-brand-blue hover:bg-white hover:text-brand-blue',
        direction === 'prev' ? 'left-[1.25rem]' : 'right-[1.25rem]',
      )}
    >
      <Image
        src='/icons/next.svg'
        alt=''
        width={10}
        height={18}
        className={cn(
          'h-[1.125rem] w-auto transition duration-300 brightness-0 invert group-hover:brightness-100 group-hover:invert-0',
          direction === 'prev' && 'rotate-180',
        )}
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
              <div className='relative aspect-[3600/1178] w-full'>
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
