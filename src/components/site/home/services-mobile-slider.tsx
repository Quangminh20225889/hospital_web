'use client'

import { useRef, useState, type UIEvent } from 'react'

import { NavChevron } from '@/components/common/nav-chevron'
import type { Service } from '@/content/home'

import { ServiceCard } from './service-card'

type ServicesMobileSliderProps = {
  services: Service[]
}

export function ServicesMobileSlider({ services }: ServicesMobileSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const maxIndex = Math.max(0, services.length - 1)

  const getScrollStep = () => {
    const slider = sliderRef.current

    if (!slider) {
      return 0
    }

    const firstCard = slider.querySelector<HTMLElement>('[data-service-card]')

    if (!firstCard) {
      return 0
    }

    const sliderStyle = window.getComputedStyle(slider)
    const gap = Number.parseFloat(sliderStyle.columnGap || sliderStyle.gap || '0')

    return firstCard.offsetWidth + gap
  }

  const scrollToIndex = (index: number) => {
    const safeIndex = Math.max(0, Math.min(index, maxIndex))

    sliderRef.current?.scrollTo({
      left: getScrollStep() * safeIndex,
      behavior: 'smooth',
    })

    setActiveIndex(safeIndex)
  }

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const scrollStep = getScrollStep()

    if (!scrollStep) {
      return
    }

    const newIndex = Math.round(event.currentTarget.scrollLeft / scrollStep)

    setActiveIndex(Math.max(0, Math.min(newIndex, maxIndex)))
  }

  return (
    <div className='hidden tablet:block xsm:block'>
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className='hidden_scroll flex snap-x snap-mandatory gap-[1rem] overflow-x-auto scroll-smooth'
      >
        {services.map((service) => (
          <div
            key={service.id}
            data-service-card
            className='shrink-0 basis-full snap-start sm:basis-[calc((100%_-_1rem)/2)]'
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>

      <div className='mt-[1.25rem] flex items-center justify-between gap-[1rem]'>
        <div className='flex items-center gap-[0.25rem]'>
          {services.map((service, index) => (
            <button
              key={service.id}
              type='button'
              aria-label={`Chuyển đến dịch vụ ${index + 1}`}
              onClick={() => scrollToIndex(index)}
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
            disabled={activeIndex === 0}
            onClick={() => scrollToIndex(activeIndex - 1)}
            className='group inline-flex size-[2.25rem] items-center justify-center rounded-full border border-brand-blue bg-white text-brand-blue transition-colors duration-200 hover:bg-brand-blue hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-brand-blue'
          >
            <NavChevron direction='left' />
          </button>

          <button
            type='button'
            aria-label='Xem dịch vụ tiếp theo'
            disabled={activeIndex === maxIndex}
            onClick={() => scrollToIndex(activeIndex + 1)}
            className='group inline-flex size-[2.25rem] items-center justify-center rounded-full border border-brand-blue bg-white text-brand-blue transition-colors duration-200 hover:bg-brand-blue hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-brand-blue'
          >
            <NavChevron direction='right' />
          </button>
        </div>
      </div>
    </div>
  )
}
