'use client'

import Image from 'next/image'
import { useCallback, useEffect, useState, type WheelEvent } from 'react'

import { ActionArrow } from '@/components/common/action-arrow'
import { NavChevron } from '@/components/common/nav-chevron'
import { Carousel, type CarouselApi, CarouselContent } from '@/components/ui/carousel'
import { doctors } from '@/content/home'
import { cn } from '@/lib/utils'

const stopWheelPropagation = (event: WheelEvent<HTMLDivElement>) => {
  event.stopPropagation()
}

const DESKTOP_DOCTORS_PER_PAGE = 3
const desktopPageIndexes = Array.from(
  { length: Math.ceil(doctors.length / DESKTOP_DOCTORS_PER_PAGE) },
  (_, index) => index,
)

function DoctorsAllArrow() {
  return (
    <span
      aria-hidden='true'
      className='relative size-[1.25rem] shrink-0'
    >
      <Image
        src='/icons/vuesax-outline-arrow-right.svg'
        alt=''
        fill
        sizes='1.25rem'
        className='transition-opacity duration-200 group-hover:opacity-0'
      />
      <Image
        src='/icons/arrow-right.svg'
        alt=''
        fill
        sizes='1.25rem'
        className='opacity-0 transition-opacity duration-200 group-hover:opacity-100'
      />
    </span>
  )
}

export function DoctorsSection() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>()
  const [activeIndex, setActiveIndex] = useState(0)
  const [pageIndexes, setPageIndexes] = useState<number[]>([])
  const [canScrollPrevious, setCanScrollPrevious] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const desktopActiveIndex =
    pageIndexes.length <= 1 || desktopPageIndexes.length <= 1
      ? 0
      : Math.round((activeIndex / (pageIndexes.length - 1)) * (desktopPageIndexes.length - 1))

  const scrollToDesktopPage = (pageIndex: number) => {
    if (!carouselApi || pageIndexes.length <= 1 || desktopPageIndexes.length <= 1) return

    const targetSnap = Math.round(
      (pageIndex / (desktopPageIndexes.length - 1)) * (pageIndexes.length - 1),
    )
    carouselApi.scrollTo(targetSnap)
  }

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
    <section
      id='bac-si'
      className='relative overflow-hidden bg-white pt-[3.75rem] pb-[6.25rem] xsm:pt-[3rem] xsm:pb-[4rem]'
    >
      {}
      <div className='pointer-events-none absolute inset-x-0 top-0 h-[10rem] bg-[linear-gradient(180deg,rgba(25,145,199,0.06),rgba(255,255,255,0))]' />

      <div className='relative mx-auto w-full px-[6.25rem] xsm:px-[1rem]'>
        {}
        <div className='flex flex-row items-end justify-between gap-[1.5rem] xsm:flex-col xsm:items-stretch'>
          <div>
            <div className='mb-[0.75rem] inline-flex items-center gap-[0.375rem] rounded-full bg-brand-yellow px-[0.75rem] py-[0.4375rem] text-[0.6875rem] font-semibold uppercase leading-none text-white'>
              <Image
                aria-hidden='true'
                src='/icons/union.svg'
                alt=''
                width={16}
                height={16}
                className='size-[0.75rem]'
              />
              Đội ngũ bác sĩ giàu kinh nghiệm
            </div>

            <h2 className='text-[2.125rem] font-bold uppercase leading-[1.15] text-title-blue xsm:text-[1.875rem]'>
              Nền tảng của niềm tin
            </h2>
          </div>

          {}
          <button
            type='button'
            className='group inline-flex h-[2.625rem] w-fit shrink-0 items-center justify-center gap-[0.5rem] self-auto rounded-full border border-brand-blue bg-white px-[1.25rem] text-[0.8125rem] font-medium text-brand-blue transition-colors duration-200 hover:border-brand-yellow hover:text-brand-yellow xsm:hidden'
          >
            Xem tất cả
            <DoctorsAllArrow />
          </button>
        </div>

        {}
        <div className='relative mt-[3rem]'>
          {}
          <button
            type='button'
            aria-label='Xem các bác sĩ trước'
            disabled={!canScrollPrevious}
            onClick={() => carouselApi?.scrollPrev()}
            className='group absolute left-[-4.375rem] top-1/2 z-30 flex size-[2.5rem] -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border border-brand-blue bg-white transition-colors duration-300 ease-in-out enabled:hover:bg-brand-blue disabled:cursor-default disabled:opacity-30 xsm:hidden'
          >
            <NavChevron
              direction='left'
              className='h-[1.25rem] w-[0.6944rem]'
            />
          </button>

          {}
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: 'start',
              containScroll: 'trimSnaps',
              dragFree: false,
              loop: false,
              slidesToScroll: 1,
              breakpoints: {
                '(min-width: 40rem)': { slidesToScroll: 3 },
              },
            }}
            className='w-full'
          >
            <CarouselContent className='ml-0 gap-[1rem]'>
              {doctors.map((doctor) => {
                const details = [doctor.description, ...doctor.specialties]

                return (
                  <article
                    key={doctor.id}
                    data-doctor-card
                    className='group relative h-[30.3125rem] basis-[28.333333rem] shrink-0 overflow-hidden rounded-[1rem] border-0 bg-white xsm:h-[27rem] xsm:basis-full xsm:rounded-[0.875rem] xsm:border xsm:border-brand-blue/10 xsm:bg-[#eef7fd]'
                  >
                    {}
                    {}
                    <div className='absolute left-[-3.0625rem] top-[-11.9375rem] z-0 h-[44.125rem] w-[44.2224rem] xsm:inset-0 xsm:h-auto xsm:w-auto'>
                      <Image
                        src='/images/bg-to.png'
                        alt=''
                        fill
                        sizes='(max-width: 64rem) 100vw, 33vw'
                        className='object-cover object-bottom opacity-80 xsm:object-center xsm:opacity-100'
                      />

                      {}
                      <div className='absolute inset-0 hidden bg-white/20 xsm:block' />
                    </div>

                    {}
                    <div className='relative z-10 hidden h-full min-h-0 flex-col gap-[0.75rem] p-[0.75rem] xsm:flex'>
                      <div className='flex gap-[0.75rem]'>
                        <div className='relative h-[10rem] w-[40%] shrink-0 overflow-hidden rounded-[0.75rem] border-[0.125rem] border-white bg-white/40'>
                          <Image
                            src={doctor.image}
                            alt={doctor.name}
                            fill
                            sizes='(max-width: 64rem) 40vw, 16vw'
                            className='object-contain object-bottom'
                          />
                        </div>

                        <div className='flex min-w-0 flex-1 flex-col'>
                          <span className='inline-flex h-[1.5rem] w-fit max-w-full items-center gap-[0.3125rem] rounded-[0.375rem] bg-brand-yellow px-[0.5rem] text-[0.625rem] font-semibold uppercase text-white'>
                            <Image
                              aria-hidden='true'
                              src='/icons/vuesax-bold-note.svg'
                              alt=''
                              width={16}
                              height={16}
                              className='size-[0.75rem] shrink-0'
                            />

                            <span className='truncate'>{doctor.role}</span>
                          </span>

                          <div className='mt-[0.5rem] rounded-[0.625rem] bg-[linear-gradient(90deg,#075dad_0%,#199bcf_100%)] px-[0.625rem] py-[0.5rem] text-center text-white'>
                            <h3 className='text-[0.875rem] font-bold uppercase leading-[1.2]'>
                              {doctor.name}
                            </h3>

                            <p className='mt-[0.25rem] text-[0.6875rem] leading-[1.3] text-white/90'>
                              {doctor.position}
                            </p>
                          </div>

                          <p className='mt-[0.5rem] text-[1.25rem] font-bold uppercase leading-[1.1] text-text-dark-blue'>
                            {doctor.experience}
                          </p>
                        </div>
                      </div>

                      <div
                        onWheel={stopWheelPropagation}
                        className='min-h-0 flex-1 touch-pan-y overflow-y-auto overscroll-contain pr-[0.5rem] [scrollbar-color:#1991c7_rgba(25,145,199,0.12)] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-[0.25rem] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-brand-blue [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-brand-blue/10'
                      >
                        <ul className='space-y-[0.625rem]'>
                          {details.map((detail, index) => (
                            <li
                              key={`${doctor.id}-mb-${index}`}
                              className='flex items-start gap-[0.5rem]'
                            >
                              <Image
                                aria-hidden='true'
                                src='/icons/vuesax-bold-tick-circle.svg'
                                alt=''
                                width={16}
                                height={16}
                                className='mt-[0.15rem] size-[0.9375rem] shrink-0'
                              />

                              <span className='text-[0.8125rem] leading-[1.5] text-text-dark-blue'>
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        type='button'
                        className='group/detail flex h-[2.75rem] shrink-0 items-center justify-center gap-[0.5rem] rounded-full border border-brand-blue/30 bg-[#edf4fb]/95 text-[0.875rem] font-medium text-brand-blue transition-colors duration-200 hover:border-brand-yellow hover:text-brand-yellow'
                      >
                        Xem chi tiết
                        <ActionArrow hoverGroup='detail' />
                      </button>
                    </div>

                    <div className='block xsm:hidden'>
                      <div className='absolute right-[0.72rem] top-[0.625rem] z-20 inline-flex h-[2rem] max-w-[55%] items-center gap-[0.27rem] rounded-[0.5rem] bg-brand-yellow p-[0.5rem] text-[0.75rem] font-semibold uppercase leading-[1.2] tracking-[0.0075rem] text-white'>
                        <Image
                          aria-hidden='true'
                          src='/icons/vuesax-bold-note.svg'
                          alt=''
                          width={16}
                          height={16}
                          className='size-[1rem] shrink-0'
                        />
                        <span className='truncate'>{doctor.role}</span>
                      </div>

                      <div className='absolute left-[0.78125rem] top-[10.6875rem] z-[5] h-[11.875rem] w-[11.5625rem] overflow-hidden rounded-[0.628rem] border-[0.157rem] border-white shadow-[0_0.5rem_1.5rem_rgba(8,53,74,0.08)]'>
                        <Image
                          src='/images/bg_nho.png'
                          alt=''
                          fill
                          sizes='16vw'
                          className='object-cover opacity-50'
                        />
                      </div>

                      <div className='absolute left-[-0.9375rem] top-[2.4375rem] z-10 h-[20rem] w-[14.6875rem]'>
                        <Image
                          src={doctor.image}
                          alt={doctor.name}
                          fill
                          sizes='(max-width: 39.9375rem) 47vw, (max-width: 64rem) 24vw, 16vw'
                          className={cn(
                            'origin-bottom object-contain object-bottom',
                            doctor.imageHeightClassName,
                            'h-full',
                          )}
                        />
                      </div>

                      <div className='absolute left-[12.34375rem] right-[0.7396rem] top-[4.125rem] z-20 rounded-[0.625rem] bg-[linear-gradient(90deg,#075dad_0%,#199bcf_100%)] px-[1rem] py-[0.5rem] text-center text-white'>
                        <h3 className='truncate text-[1rem] font-bold uppercase leading-[1.5]'>
                          {doctor.name}
                        </h3>

                        <p className='mt-[0.25rem] truncate text-[0.75rem] leading-[1.5] text-white/90'>
                          {doctor.position}
                        </p>
                      </div>

                      <div className='absolute left-[12.84375rem] top-[8.6875rem] z-10 flex h-[14rem] w-[14.0625rem] min-h-0 flex-col'>
                        <p className='shrink-0 text-center text-[1.75rem] font-bold uppercase leading-[1.4] text-text-dark-blue'>
                          {doctor.experience}
                        </p>

                        <div
                          onWheel={stopWheelPropagation}
                          className='min-h-0 flex-1 touch-pan-y overflow-y-auto overscroll-contain [scrollbar-color:#1991c7_rgba(25,145,199,0.12)] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-[0.375rem] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-brand-blue [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-brand-blue/10'
                        >
                          <ul className='space-y-[0.625rem]'>
                            {details.map((detail, index) => (
                              <li
                                key={`${doctor.id}-${index}`}
                                className='flex items-start gap-[0.375rem]'
                              >
                                <Image
                                  aria-hidden='true'
                                  src='/icons/vuesax-bold-tick-circle.svg'
                                  alt=''
                                  width={16}
                                  height={16}
                                  className='mt-[0.15rem] size-[1rem] shrink-0'
                                />

                                <span className='text-[0.75rem] leading-[1.5] text-text-dark-blue'>
                                  {detail}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <button
                        type='button'
                        className='group/detail absolute bottom-[1.4375rem] left-[0.875rem] right-[0.8958rem] z-20 flex h-[2.75rem] items-center justify-center gap-[0.5rem] rounded-full border-[0.0875rem] border-brand-blue/30 bg-[#edf4fb]/95 px-[1.75rem] py-[0.875rem] text-[0.875rem] font-medium leading-[1.5] text-brand-blue shadow-[0_0_0_0.125rem_rgba(95,205,255,0.17),0_0_0.25rem_rgba(95,205,255,0.12),0_0.0625rem_0.5rem_rgba(95,205,255,0.1)] transition-colors duration-200 hover:border-brand-yellow hover:text-brand-yellow'
                      >
                        Xem chi tiết
                        <ActionArrow
                          hoverGroup='detail'
                          className='size-[1.265625rem]'
                        />
                      </button>
                    </div>
                  </article>
                )
              })}
            </CarouselContent>
          </Carousel>

          <button
            type='button'
            aria-label='Xem các bác sĩ tiếp theo'
            disabled={!canScrollNext}
            onClick={() => carouselApi?.scrollNext()}
            className='group absolute right-[-4.375rem] top-1/2 z-30 flex size-[2.5rem] -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border border-brand-blue bg-white transition-colors duration-300 ease-in-out enabled:hover:bg-brand-blue disabled:cursor-default disabled:opacity-30 xsm:hidden'
          >
            <NavChevron
              direction='right'
              className='h-[1.25rem] w-[0.6944rem]'
            />
          </button>
        </div>

        {pageIndexes.length > 1 && (
          <div className='mt-[1.75rem] flex items-center justify-center gap-[1rem] xsm:mt-[1.5rem] xsm:justify-between'>
            <div className='flex items-center gap-[0.25rem] xsm:hidden'>
              {desktopPageIndexes.map((index) => (
                <button
                  key={index}
                  type='button'
                  aria-label={`Chuyển đến nhóm bác sĩ ${index + 1}`}
                  onClick={() => scrollToDesktopPage(index)}
                  className={`h-[0.125rem] rounded-full transition-all duration-300 ${
                    desktopActiveIndex === index
                      ? 'w-[7.5rem] bg-brand-blue'
                      : 'w-[1.5rem] bg-text-dark-blue/30'
                  }`}
                />
              ))}
            </div>

            <div className='hidden items-center gap-[0.25rem] xsm:flex'>
              {pageIndexes.map((index) => (
                <button
                  key={index}
                  type='button'
                  aria-label={`Chuyển đến nhóm bác sĩ ${index + 1}`}
                  onClick={() => carouselApi?.scrollTo(index)}
                  className={`h-[0.125rem] rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'w-[3.5rem] bg-brand-blue'
                      : 'w-[1.5rem] bg-text-dark-blue/30'
                  }`}
                />
              ))}
            </div>

            <div className='hidden items-center gap-[0.5rem] xsm:flex'>
              <button
                type='button'
                aria-label='Xem các bác sĩ trước'
                disabled={!canScrollPrevious}
                onClick={() => carouselApi?.scrollPrev()}
                className='group relative inline-flex size-[2.25rem] items-center justify-center overflow-hidden rounded-full border border-brand-blue bg-white transition-colors duration-300 ease-in-out enabled:hover:bg-brand-blue disabled:cursor-default disabled:opacity-30'
              >
                <NavChevron direction='left' />
              </button>

              <button
                type='button'
                aria-label='Xem các bác sĩ tiếp theo'
                disabled={!canScrollNext}
                onClick={() => carouselApi?.scrollNext()}
                className='group relative inline-flex size-[2.25rem] items-center justify-center overflow-hidden rounded-full border border-brand-blue bg-white transition-colors duration-300 ease-in-out enabled:hover:bg-brand-blue disabled:cursor-default disabled:opacity-30'
              >
                <NavChevron direction='right' />
              </button>
            </div>
          </div>
        )}

        <div className='mt-[1.5rem] hidden justify-center xsm:flex'>
          <button
            type='button'
            className='group inline-flex h-[2.75rem] items-center justify-center gap-[0.5rem] rounded-full border border-brand-blue bg-white px-[1.5rem] text-[0.875rem] font-medium text-brand-blue transition-colors duration-200 hover:border-brand-yellow hover:text-brand-yellow'
          >
            Xem tất cả
            <DoctorsAllArrow />
          </button>
        </div>
      </div>
    </section>
  )
}
