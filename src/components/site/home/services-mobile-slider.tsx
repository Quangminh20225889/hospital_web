'use client'

import { useCallback, useEffect, useState } from 'react'
import type { Swiper as SwiperInstance } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { NavChevron } from '@/components/common/nav-chevron'
import type { Service } from '@/content/home'

import { ServiceCard } from './service-card'

type ServicesMobileSliderProps = {
  services: Service[]
}

const DEFAULT_ROOT_FONT_SIZE = 16

export function ServicesMobileSlider({ services }: ServicesMobileSliderProps) {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [canScrollPrevious, setCanScrollPrevious] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [spaceBetween, setSpaceBetween] = useState(DEFAULT_ROOT_FONT_SIZE)

  const pageIndexes = services.map((_, index) => index)

  const updateSwiperState = useCallback((instance: SwiperInstance) => {
    setActiveIndex(instance.activeIndex)
    setCanScrollPrevious(!instance.isBeginning)
    setCanScrollNext(!instance.isEnd)
  }, [])

  const handleSwiper = useCallback(
    (instance: SwiperInstance) => {
      setSwiper(instance)
      updateSwiperState(instance)
    },
    [updateSwiperState],
  )

  useEffect(() => {
    const updateSpaceBetween = () => {
      const rootFontSize = Number.parseFloat(
        window.getComputedStyle(document.documentElement).fontSize,
      )

      if (!Number.isFinite(rootFontSize)) return

      setSpaceBetween(rootFontSize)
    }

    updateSpaceBetween()

    window.addEventListener('resize', updateSpaceBetween)

    return () => {
      window.removeEventListener('resize', updateSpaceBetween)
    }
  }, [])

  return (
    <div className='hidden xsm:block'>
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={spaceBetween}
        loop={false}
        allowTouchMove
        onSwiper={handleSwiper}
        onSlideChange={updateSwiperState}
        onResize={updateSwiperState}
        className='cursor-grab select-none active:cursor-grabbing'
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <ServiceCard service={service} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='mt-[1.25rem] flex items-center justify-between gap-[1rem]'>
        <div className='flex items-center gap-[0.25rem]'>
          {pageIndexes.map((index) => (
            <button
              key={index}
              type='button'
              aria-label={`Chuyển đến dịch vụ ${index + 1}`}
              onClick={() => swiper?.slideTo(index)}
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
            onClick={() => swiper?.slidePrev()}
            className='group relative inline-flex size-[2.25rem] items-center justify-center overflow-hidden rounded-full border border-brand-blue bg-white transition-colors duration-300 ease-in-out enabled:hover:bg-brand-blue disabled:cursor-default disabled:opacity-30'
          >
            <NavChevron direction='left' />
          </button>

          <button
            type='button'
            aria-label='Xem dịch vụ tiếp theo'
            disabled={!canScrollNext}
            onClick={() => swiper?.slideNext()}
            className='group relative inline-flex size-[2.25rem] items-center justify-center overflow-hidden rounded-full border border-brand-blue bg-white transition-colors duration-300 ease-in-out enabled:hover:bg-brand-blue disabled:cursor-default disabled:opacity-30'
          >
            <NavChevron direction='right' />
          </button>
        </div>
      </div>
    </div>
  )
}
