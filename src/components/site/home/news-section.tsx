'use client'

import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'
import type { Swiper as SwiperInstance } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import { ActionArrow } from '@/components/common/action-arrow'
import { Container } from '@/components/common/container'
import { NavChevron } from '@/components/common/nav-chevron'
import { SectionHeading } from '@/components/common/section-heading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { newsItems } from '@/content/home'

import { NewsCompactItem } from './news-compact-item'
import { NewsItem } from './news-item'

const [featuredItem, ...compactItems] = newsItems

const DESKTOP_SLIDES_PER_VIEW = 3
const DEFAULT_ROOT_FONT_SIZE = 16

export function NewsSection() {
  const [swiper, setSwiper] = React.useState<SwiperInstance | null>(null)
  const [activeIndex, setActiveIndex] = React.useState(0)
  const [spaceBetween, setSpaceBetween] = React.useState(DEFAULT_ROOT_FONT_SIZE)

  const pageCount =
    newsItems.length > 0 ? Math.max(newsItems.length - DESKTOP_SLIDES_PER_VIEW + 1, 1) : 0

  const pageIndexes = Array.from({ length: pageCount }, (_, index) => index)

  const lastStartIndex = Math.max(newsItems.length - DESKTOP_SLIDES_PER_VIEW, 0)

  const canScrollPrevious = Boolean(swiper) && activeIndex > 0
  const canScrollNext = Boolean(swiper) && activeIndex < lastStartIndex

  React.useEffect(() => {
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

  const handleSwiper = React.useCallback((instance: SwiperInstance) => {
    setSwiper(instance)
    setActiveIndex(instance.activeIndex)
  }, [])

  const handleSlideChange = React.useCallback((instance: SwiperInstance) => {
    setActiveIndex(instance.activeIndex)
  }, [])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        swiper?.slidePrev()
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        swiper?.slideNext()
      }
    },
    [swiper],
  )

  return (
    <section
      id='tin-tuc'
      className='relative overflow-hidden bg-white py-[4rem] xsm:py-[3rem]'
    >
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-x-0 bottom-0 h-[13rem] overflow-hidden'
      >
        <div className='absolute -bottom-[9rem] left-[-8%] h-[15rem] w-[120%] rotate-[8deg] rounded-[50%] bg-[#eef7fb]' />

        <div className='absolute -bottom-[11rem] left-[10%] h-[15rem] w-[115%] rotate-[12deg] rounded-[50%] bg-[#e7f2f8]/70' />
      </div>

      <Container className='relative z-10 max-w-none'>
        <div className='flex flex-row items-end justify-between gap-[1.25rem] xsm:flex-col xsm:items-stretch'>
          <div>
            <Badge className='mb-[0.75rem] h-auto rounded-full border-0 bg-brand-yellow px-[0.875rem] py-[0.5rem] text-[0.6875rem] font-semibold uppercase leading-none tracking-normal text-white'>
              <Image
                aria-hidden='true'
                src='/icons/union.svg'
                alt=''
                width={16}
                height={16}
                className='size-[0.75rem]'
              />
              Kiến thức &amp; Tin tức
            </Badge>

            <SectionHeading
              title='Thông tin nổi bật'
              className='max-w-none'
              titleClassName='text-[2.25rem] uppercase text-brand-blue xsm:text-[2rem]'
            />
          </div>

          <Button
            asChild
            variant='outline'
            className='group inline-flex h-[2.625rem] w-fit shrink-0 rounded-full border-brand-blue bg-white px-[1.25rem] text-[0.8125rem] font-medium text-brand-blue shadow-none transition-colors duration-200 hover:border-brand-yellow hover:bg-white hover:text-brand-yellow xsm:hidden'
          >
            <Link href='/#tin-tuc'>
              Xem tất cả
              <ActionArrow />
            </Link>
          </Button>
        </div>

        <div className='mt-[1.5rem] hidden xsm:block'>
          {featuredItem ? <NewsItem item={featuredItem} /> : null}

          <div className='mt-[1.25rem] flex flex-col gap-[1.125rem]'>
            {compactItems.map((item) => (
              <NewsCompactItem
                key={item.id}
                item={item}
              />
            ))}
          </div>

          <div className='mt-[1.75rem] flex justify-center'>
            <Button
              asChild
              variant='outline'
              className='group h-[2.75rem] w-fit rounded-full border-brand-blue bg-white px-[1.5rem] text-[0.875rem] font-medium text-brand-blue shadow-none transition-colors duration-200 hover:border-brand-yellow hover:bg-white hover:text-brand-yellow'
            >
              <Link href='/#tin-tuc'>
                Xem tất cả
                <ActionArrow />
              </Link>
            </Button>
          </div>
        </div>

        <div className='block xsm:hidden'>
          <div
            role='region'
            aria-roledescription='carousel'
            className='relative mt-[2rem]'
            onKeyDownCapture={handleKeyDown}
          >
            <Swiper
              slidesPerView={DESKTOP_SLIDES_PER_VIEW}
              slidesPerGroup={1}
              spaceBetween={spaceBetween}
              loop={false}
              allowTouchMove
              onSwiper={handleSwiper}
              onSlideChange={handleSlideChange}
              className='cursor-grab select-none active:cursor-grabbing'
            >
              {newsItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <NewsItem item={item} />
                </SwiperSlide>
              ))}
            </Swiper>

            <Button
              type='button'
              variant='outline'
              size='icon-lg'
              aria-label='Xem tin trước'
              disabled={!canScrollPrevious}
              onClick={() => swiper?.slidePrev()}
              className='group absolute inset-y-0 left-[-4.375rem] z-10 my-auto inline-flex size-[2.75rem] touch-manipulation overflow-hidden rounded-full border-brand-blue bg-white shadow-none transition-colors duration-300 ease-in-out enabled:hover:bg-brand-blue disabled:cursor-not-allowed disabled:opacity-35'
            >
              <NavChevron direction='left' />
            </Button>

            <Button
              type='button'
              variant='outline'
              size='icon-lg'
              aria-label='Xem tin tiếp theo'
              disabled={!canScrollNext}
              onClick={() => swiper?.slideNext()}
              className='group absolute inset-y-0 right-[-4.375rem] z-10 my-auto inline-flex size-[2.75rem] touch-manipulation overflow-hidden rounded-full border-brand-blue bg-white shadow-none transition-colors duration-300 ease-in-out enabled:hover:bg-brand-blue disabled:cursor-not-allowed disabled:opacity-35'
            >
              <NavChevron direction='right' />
            </Button>
          </div>

          {pageCount > 1 && (
            <div
              className='mt-[2rem] flex items-center justify-center gap-[0.25rem]'
              role='tablist'
              aria-label='Chọn nhóm tin tức'
            >
              {pageIndexes.map((index) => {
                const isActive = activeIndex === index

                return (
                  <button
                    key={index}
                    type='button'
                    role='tab'
                    aria-label={`Chuyển đến nhóm tin ${index + 1}`}
                    aria-selected={isActive}
                    onClick={() => swiper?.slideTo(index)}
                    className={
                      isActive
                        ? 'h-[0.1875rem] w-[6.5rem] rounded-full bg-brand-blue transition-all duration-300'
                        : 'h-[0.1875rem] w-[1.5rem] rounded-full bg-[#aeb8bd] transition-all duration-300 hover:bg-brand-blue/60'
                    }
                  />
                )
              })}
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
