'use client'

import { useCallback, useEffect, useState } from 'react'

import { NavChevron } from '@/components/common/nav-chevron'
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import type { Service } from '@/content/home'

import { ServiceCard } from './service-card'

type ServicesMobileSliderProps = {
  services: Service[]
}

export function ServicesMobileSlider({ services }: ServicesMobileSliderProps) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [activeIndex, setActiveIndex] = useState(0)
  const [pageIndexes, setPageIndexes] = useState<number[]>([])
  const [canScrollPrevious, setCanScrollPrevious] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const updateCarouselState = useCallback((api: NonNullable<CarouselApi>) => {
    setActiveIndex(api.selectedScrollSnap())
    setPageIndexes(api.scrollSnapList().map((_, index) => index))
    setCanScrollPrevious(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  useEffect(() => {
    if (!carouselApi) return

    const handleCarouselChange = () => updateCarouselState(carouselApi)

    handleCarouselChange()
    carouselApi.on('select', handleCarouselChange)
    carouselApi.on('reInit', handleCarouselChange)

    return () => {
      carouselApi.off('select', handleCarouselChange)
      carouselApi.off('reInit', handleCarouselChange)
    }
  }, [carouselApi, updateCarouselState])

  return (
    <div className='hidden xsm:block'>
      <Carousel
        setApi={setCarouselApi}
        opts={{
          align: 'start',
          containScroll: 'trimSnaps',
          dragFree: false,
          loop: false,
          watchDrag: true,
        }}
        className='cursor-grab select-none active:cursor-grabbing'
      >
        <CarouselContent className='ml-0 gap-[1rem]'>
          {services.map((service) => (
            <CarouselItem
              key={service.id}
              className='basis-full pl-0'
            >
              <ServiceCard service={service} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className='mt-[1.25rem] flex items-center justify-between gap-[1rem]'>
        <div className='flex items-center gap-[0.25rem]'>
          {pageIndexes.map((index) => (
            <button
              key={index}
              type='button'
              aria-label={`Chuyển đến dịch vụ ${index + 1}`}
              onClick={() => carouselApi?.scrollTo(index)}
              className={`h-[0.125rem] rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? 'w-[2.5rem] bg-brand-blue'
                  : 'w-[1.25rem] bg-text-dark-blue/30'
              }`}
            />
          ))}
        </div>

        <div className='flex items-center gap-[0.5rem]'>
          <button
            type='button'
            aria-label='Xem dịch vụ trước'
            disabled={!canScrollPrevious}
            onClick={() => carouselApi?.scrollPrev()}
            className='group relative inline-flex size-[2.25rem] items-center justify-center overflow-hidden rounded-full border border-brand-blue bg-white transition-colors duration-300 ease-in-out enabled:hover:bg-brand-blue disabled:cursor-default disabled:opacity-30'
          >
            <NavChevron direction='left' />
          </button>

          <button
            type='button'
            aria-label='Xem dịch vụ tiếp theo'
            disabled={!canScrollNext}
            onClick={() => carouselApi?.scrollNext()}
            className='group relative inline-flex size-[2.25rem] items-center justify-center overflow-hidden rounded-full border border-brand-blue bg-white transition-colors duration-300 ease-in-out enabled:hover:bg-brand-blue disabled:cursor-default disabled:opacity-30'
          >
            <NavChevron direction='right' />
          </button>
        </div>
      </div>
    </div>
  )
}
