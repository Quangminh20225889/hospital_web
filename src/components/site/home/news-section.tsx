'use client'

import Image from 'next/image'
import Link from 'next/link'
import * as React from 'react'

import { ActionArrow } from '@/components/common/action-arrow'
import { Container } from '@/components/common/container'
import { SectionHeading } from '@/components/common/section-heading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { newsItems } from '@/content/home'

import { NewsCompactItem } from './news-compact-item'
import { NewsItem } from './news-item'

const [featuredItem, ...compactItems] = newsItems

export function NewsSection() {
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>()

  const subscribe = React.useCallback(
    (onStoreChange: () => void) => {
      if (!carouselApi) {
        return () => {}
      }

      carouselApi.on('select', onStoreChange)
      carouselApi.on('reInit', onStoreChange)

      return () => {
        carouselApi.off('select', onStoreChange)
        carouselApi.off('reInit', onStoreChange)
      }
    },
    [carouselApi],
  )

  const selectedIndex = React.useSyncExternalStore(
    subscribe,
    () => carouselApi?.selectedScrollSnap() ?? 0,
    () => 0,
  )

  const scrollSnaps = carouselApi?.scrollSnapList() ?? []

  return (
    <section
      id='tin-tuc'
      className='relative overflow-hidden bg-white pb-[3rem] pt-[3rem] lg:pb-[4rem] lg:pt-[4rem]'
    >
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-x-0 bottom-0 h-[13rem] overflow-hidden'
      >
        <div className='absolute -bottom-[9rem] left-[-8%] h-[15rem] w-[120%] rotate-[8deg] rounded-[50%] bg-[#eef7fb]' />

        <div className='absolute -bottom-[11rem] left-[10%] h-[15rem] w-[115%] rotate-[12deg] rounded-[50%] bg-[#e7f2f8]/70' />
      </div>

      <Container className='relative z-10 max-w-[100rem]'>
        <div className='flex flex-col gap-[1.25rem] md:flex-row md:items-end md:justify-between'>
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
              titleClassName='text-[2rem] uppercase text-brand-blue md:text-[2.25rem]'
            />
          </div>

          {}
          <Button
            asChild
            variant='outline'
            className='group hidden h-[2.625rem] w-fit shrink-0 rounded-full border-brand-blue bg-white px-[1.25rem] text-[0.8125rem] font-medium text-brand-blue shadow-none transition-colors duration-200 hover:border-brand-yellow hover:bg-white hover:text-brand-yellow lg:inline-flex'
          >
            <Link href='/#tin-tuc'>
              Xem tất cả
              <ActionArrow />
            </Link>
          </Button>
        </div>

        {}
        <div className='mt-[1.5rem] hidden tablet:block xsm:block'>
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

        <div className='block tablet:hidden xsm:hidden'>
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: 'start',
              loop: false,
              slidesToScroll: 1,
              containScroll: 'trimSnaps',
            }}
            className='mt-[2rem]'
          >
            <CarouselContent className='-ml-[1rem]'>
              {newsItems.map((item) => (
                <CarouselItem
                  key={item.id}
                  className='basis-full pl-[1rem] md:basis-1/2 lg:basis-1/3'
                >
                  <NewsItem item={item} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious
              size='icon-lg'
              aria-label='Xem tin trước'
              className='left-[-4.75rem] hidden size-[2.75rem] border-brand-blue bg-white text-brand-blue shadow-none transition-colors duration-300 hover:border-brand-blue hover:bg-brand-blue hover:text-white disabled:cursor-not-allowed disabled:opacity-35 lg:inline-flex'
            />

            <CarouselNext
              size='icon-lg'
              aria-label='Xem tin tiếp theo'
              className='right-[-4.75rem] hidden size-[2.75rem] border-brand-blue bg-white text-brand-blue shadow-none transition-colors duration-300 hover:border-brand-blue hover:bg-brand-blue hover:text-white disabled:cursor-not-allowed disabled:opacity-35 lg:inline-flex'
            />
          </Carousel>

          {scrollSnaps.length > 1 && (
            <div
              className='mt-[2rem] flex items-center justify-center gap-[0.25rem]'
              role='tablist'
              aria-label='Chọn nhóm tin tức'
            >
              {scrollSnaps.map((_, index) => {
                const isActive = selectedIndex === index

                return (
                  <button
                    key={index}
                    type='button'
                    role='tab'
                    aria-label={`Chuyển đến nhóm tin ${index + 1}`}
                    aria-selected={isActive}
                    onClick={() => carouselApi?.scrollTo(index)}
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
