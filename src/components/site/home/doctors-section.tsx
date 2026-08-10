'use client'

import { Check } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState, type UIEvent, type WheelEvent } from 'react'

import { ActionArrow } from '@/components/common/action-arrow'
import { NavChevron } from '@/components/common/nav-chevron'
import { doctors } from '@/content/home'
import { cn } from '@/lib/utils'

const stopWheelPropagation = (event: WheelEvent<HTMLDivElement>) => {
  event.stopPropagation()
}

export function DoctorsSection() {
  const sliderRef = useRef<HTMLDivElement>(null)

  const [visibleCount, setVisibleCount] = useState(3)
  const [activeIndex, setActiveIndex] = useState(0)

  /*
   * Desktop: 3 card
   * Tablet: 2 card
   * Mobile: 1 card
   */
  useEffect(() => {
    const updateVisibleCount = () => {
      let newVisibleCount = 1

      if (window.innerWidth >= 1025) {
        newVisibleCount = 3
      } else if (window.innerWidth >= 640) {
        newVisibleCount = 2
      }

      setVisibleCount(newVisibleCount)

      setActiveIndex((currentIndex) =>
        Math.min(currentIndex, Math.max(0, doctors.length - newVisibleCount)),
      )
    }

    updateVisibleCount()

    window.addEventListener('resize', updateVisibleCount)

    return () => {
      window.removeEventListener('resize', updateVisibleCount)
    }
  }, [])

  /*
   * Có 4 bác sĩ, desktop hiển thị 3 bác sĩ:
   *
   * Vị trí 0: bác sĩ 1, 2, 3
   * Vị trí 1: bác sĩ 2, 3, 4
   */
  const maxIndex = Math.max(0, doctors.length - visibleCount)

  const getScrollStep = () => {
    const slider = sliderRef.current

    if (!slider) {
      return 0
    }

    const firstCard = slider.querySelector<HTMLElement>('[data-doctor-card]')

    if (!firstCard) {
      return 0
    }

    const sliderStyle = window.getComputedStyle(slider)
    const gap = Number.parseFloat(sliderStyle.columnGap || sliderStyle.gap || '0')

    return firstCard.offsetWidth + gap
  }

  const scrollToIndex = (index: number) => {
    const safeIndex = Math.max(0, Math.min(index, maxIndex))
    const scrollStep = getScrollStep()

    sliderRef.current?.scrollTo({
      left: scrollStep * safeIndex,
      behavior: 'smooth',
    })

    setActiveIndex(safeIndex)
  }

  const handlePrevious = () => {
    scrollToIndex(activeIndex - 1)
  }

  const handleNext = () => {
    scrollToIndex(activeIndex + 1)
  }

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const scrollStep = getScrollStep()

    if (!scrollStep) {
      return
    }

    const newIndex = Math.round(event.currentTarget.scrollLeft / scrollStep)

    setActiveIndex(Math.max(0, Math.min(newIndex, maxIndex)))
  }

  const pageIndexes = Array.from(
    {
      length: maxIndex + 1,
    },
    (_, index) => index,
  )

  return (
    <section
      id='bac-si'
      className='relative overflow-hidden bg-white pt-[3rem] pb-[4rem] lg:pt-[3.75rem] lg:pb-[6.25rem]'
    >
      {/* Nền sáng nhẹ phía trên section */}
      <div className='pointer-events-none absolute inset-x-0 top-0 h-[10rem] bg-[linear-gradient(180deg,rgba(25,145,199,0.06),rgba(255,255,255,0))]' />

      <div className='relative mx-auto w-full px-[1rem] sm:px-[2rem] lg:px-[6.25rem]'>
        {/* Phần tiêu đề */}
        <div className='flex flex-col gap-[1.5rem] sm:flex-row sm:items-end sm:justify-between'>
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

            <h2 className='text-[1.875rem] font-bold uppercase leading-[1.15] text-title-blue lg:text-[2.125rem]'>
              Nền tảng của niềm tin
            </h2>
          </div>

          {/* Desktop: nút nằm cạnh tiêu đề. Mobile: nút chuyển xuống cuối section */}
          <button
            type='button'
            className='group hidden h-[2.625rem] w-fit shrink-0 items-center justify-center gap-[0.5rem] self-start rounded-full border border-brand-blue bg-white px-[1.25rem] text-[0.8125rem] font-medium text-brand-blue transition-colors duration-200 hover:border-brand-yellow hover:text-brand-yellow sm:self-auto lg:inline-flex'
          >
            Xem tất cả
            <ActionArrow />
          </button>
        </div>

        {/* Danh sách bác sĩ: cách tiêu đề 3rem */}
        <div className='relative mt-[3rem]'>
          {/* Nút quay lại */}
          <button
            type='button'
            aria-label='Xem các bác sĩ trước'
            disabled={activeIndex === 0}
            onClick={handlePrevious}
            className='group absolute left-[-4.375rem] top-1/2 z-30 hidden size-[2.5rem] -translate-y-1/2 items-center justify-center rounded-full border border-brand-blue bg-white text-brand-blue transition-colors duration-200 hover:bg-brand-blue hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-brand-blue lg:flex'
          >
            <NavChevron
              direction='left'
              className='h-[1.25rem] w-[0.6944rem]'
            />
          </button>

          {/* Khu vực slider */}
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className='hidden_scroll flex snap-x snap-mandatory gap-[1rem] overflow-x-auto scroll-smooth'
          >
            {doctors.map((doctor) => {
              const details = [doctor.description, ...doctor.specialties]

              return (
                <article
                  key={doctor.id}
                  data-doctor-card
                  className='group relative h-[27rem] basis-full shrink-0 snap-start overflow-hidden rounded-[0.875rem] border border-brand-blue/10 bg-[#eef7fd] sm:h-[29rem] sm:basis-[calc((100%_-_1rem)/2)] lg:h-[30.3125rem] lg:basis-[calc((100%_-_2rem)/3)] lg:rounded-[1rem] 2xl:basis-[28.333333rem] 2xl:border-0 2xl:bg-white'
                >
                  {/* Nền bệnh viện làm mờ */}
                  {/* Ảnh nền lớn của card */}
                  <div className='absolute inset-0 z-0 2xl:inset-auto 2xl:left-[-3.0625rem] 2xl:top-[-11.9375rem] 2xl:h-[44.125rem] 2xl:w-[44.2224rem]'>
                    <Image
                      src='/images/bg-to.png'
                      alt=''
                      fill
                      sizes='(max-width: 1024px) 100vw, 33vw'
                      className='object-cover object-center 2xl:object-bottom 2xl:opacity-80'
                    />

                    {/* Lớp phủ trắng nhẹ */}
                    <div className='absolute inset-0 bg-white/20 2xl:hidden' />
                  </div>

                  {/*
                   * Mobile / tablet: bố cục xếp dòng theo bản thiết kế MB.
                   * Ảnh + tên ở hàng trên, danh sách thông tin và nút ở dưới.
                   */}
                  <div className='relative z-10 flex h-full min-h-0 flex-col gap-[0.75rem] p-[0.75rem] lg:hidden'>
                    <div className='flex gap-[0.75rem]'>
                      <div className='relative h-[10rem] w-[40%] shrink-0 overflow-hidden rounded-[0.75rem] border-[0.125rem] border-white bg-white/40'>
                        <Image
                          src={doctor.image}
                          alt={doctor.name}
                          fill
                          sizes='(max-width: 1024px) 40vw, 16vw'
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
                            <span className='mt-[0.15rem] inline-flex size-[0.9375rem] shrink-0 items-center justify-center rounded-full bg-brand-mint text-white'>
                              <Check
                                aria-hidden='true'
                                className='size-[0.5625rem]'
                                strokeWidth={3}
                              />
                            </span>

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

                  {/* Desktop: giữ nguyên bố cục tuyệt đối của bản thiết kế web */}
                  <div className='hidden lg:block'>
                    {/* Nhãn chuyên khoa màu vàng */}
                    <div className='absolute right-[0.5rem] top-[0.5rem] z-20 inline-flex h-[1.625rem] max-w-[55%] items-center gap-[0.3125rem] rounded-[0.375rem] bg-brand-yellow px-[0.625rem] text-[0.625rem] font-semibold uppercase text-white 2xl:right-[0.72rem] 2xl:top-[0.625rem] 2xl:h-[2rem] 2xl:gap-[0.27rem] 2xl:rounded-[0.5rem] 2xl:p-[0.5rem] 2xl:text-[0.75rem] 2xl:leading-[1.2] 2xl:tracking-[0.0075rem]'>
                      <Image
                        aria-hidden='true'
                        src='/icons/vuesax-bold-note.svg'
                        alt=''
                        width={16}
                        height={16}
                        className='size-[0.75rem] shrink-0 2xl:size-[1rem]'
                      />
                      <span className='truncate'>{doctor.role}</span>
                    </div>
                    {/* Ảnh bác sĩ bên trái */}
                    {/* Khung chữ nhật trang trí phía sau bác sĩ */}
                    {/* Khung chữ nhật phía sau bác sĩ */}
                    {/* Hình chữ nhật trang trí phía sau bác sĩ */}
                    <div className='absolute bottom-[4.75rem] left-[0.75rem] z-[5] h-[11.5rem] w-[42%] overflow-hidden rounded-[0.75rem] border-[0.125rem] border-white shadow-[0_0.5rem_1.5rem_rgba(8,53,74,0.08)] 2xl:bottom-auto 2xl:left-[0.78125rem] 2xl:top-[10.6875rem] 2xl:h-[11.875rem] 2xl:w-[11.5625rem] 2xl:rounded-[0.628rem] 2xl:border-[0.157rem]'>
                      <Image
                        src='/images/bg_nho.png'
                        alt=''
                        fill
                        sizes='16vw'
                        className='object-cover opacity-50'
                      />
                    </div>

                    {/* Ảnh bác sĩ */}
                    <div className='absolute bottom-[4.75rem] left-[0.25rem] z-10 h-[20rem] w-[47%] 2xl:bottom-auto 2xl:left-[-0.9375rem] 2xl:top-[2.4375rem] 2xl:w-[14.6875rem]'>
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        sizes='(max-width: 639px) 47vw, (max-width: 1024px) 24vw, 16vw'
                        className={cn(
                          'origin-bottom object-contain object-bottom',
                          doctor.imageHeightClassName,
                          '2xl:h-full',
                        )}
                      />
                    </div>

                    {/* Tên bác sĩ */}
                    {/* Khối tên bác sĩ */}
                    <div className='absolute left-[42%] right-[0.75rem] top-[4.75rem] z-20 rounded-[0.75rem] bg-[linear-gradient(90deg,#075dad_0%,#199bcf_100%)] px-[1rem] py-[0.75rem] text-center text-white shadow-[0_0.5rem_1.25rem_rgba(7,94,180,0.2)] 2xl:left-[12.34375rem] 2xl:right-[0.7396rem] 2xl:top-[4.125rem] 2xl:rounded-[0.625rem] 2xl:py-[0.5rem] 2xl:shadow-none'>
                      <h3 className='truncate text-[1rem] font-bold uppercase leading-[1.2] 2xl:leading-[1.5]'>
                        {doctor.name}
                      </h3>

                      <p className='mt-[0.375rem] truncate text-[0.7rem] leading-[1.3] text-white/90 2xl:mt-[0.25rem] 2xl:text-[0.75rem] 2xl:leading-[1.5]'>
                        {doctor.position}
                      </p>
                    </div>

                    {/* Kinh nghiệm và thông tin */}
                    {/* Kinh nghiệm và nội dung bác sĩ */}
                    <div className='absolute bottom-[5.75rem] left-[47%] right-[1rem] top-[10rem] z-10 flex min-h-0 flex-col 2xl:bottom-auto 2xl:left-[12.84375rem] 2xl:right-auto 2xl:top-[8.6875rem] 2xl:h-[14rem] 2xl:w-[14.0625rem]'>
                      <p className='shrink-0 text-[1.75rem] font-bold uppercase leading-[1.12] text-text-dark-blue 2xl:text-center 2xl:leading-[1.4]'>
                        {doctor.experience}
                      </p>

                      <div
                        onWheel={stopWheelPropagation}
                        className='mt-[0.75rem] min-h-0 flex-1 touch-pan-y overflow-y-auto overscroll-contain pr-[0.75rem] [scrollbar-color:#1991c7_rgba(25,145,199,0.12)] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-[0.375rem] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-brand-blue [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-brand-blue/10 2xl:mt-0 2xl:pr-0'
                      >
                        <ul className='space-y-[0.875rem] 2xl:space-y-[0.625rem]'>
                          {details.map((detail, index) => (
                            <li
                              key={`${doctor.id}-${index}`}
                              className='flex items-start gap-[0.625rem] 2xl:gap-[0.375rem]'
                            >
                              <Image
                                aria-hidden='true'
                                src='/icons/vuesax-bold-tick-circle.svg'
                                alt=''
                                width={16}
                                height={16}
                                className='mt-[0.15rem] size-[1rem] shrink-0'
                              />

                              <span className='text-[0.8rem] leading-[1.55] text-text-dark-blue 2xl:text-[0.75rem] 2xl:leading-[1.5]'>
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Nút xem chi tiết */}
                    <button
                      type='button'
                      className='group/detail absolute bottom-[0.75rem] left-[0.75rem] right-[0.75rem] z-20 flex h-[3.25rem] items-center justify-center gap-[0.75rem] rounded-full border border-brand-blue/30 bg-[#edf4fb]/95 text-[0.9rem] font-medium text-brand-blue shadow-[inset_0_0_0_0.0625rem_rgba(255,255,255,0.9)] transition-colors duration-200 hover:border-brand-yellow hover:text-brand-yellow 2xl:bottom-[1.4375rem] 2xl:left-[0.875rem] 2xl:right-[0.8958rem] 2xl:h-[2.75rem] 2xl:gap-[0.5rem] 2xl:border-[0.0875rem] 2xl:px-[1.75rem] 2xl:py-[0.875rem] 2xl:text-[0.875rem] 2xl:leading-[1.5] 2xl:shadow-[0_0_0_0.125rem_rgba(95,205,255,0.17),0_0_0.25rem_rgba(95,205,255,0.12),0_0.0625rem_0.5rem_rgba(95,205,255,0.1)]'
                    >
                      Xem chi tiết
                      <ActionArrow
                        hoverGroup='detail'
                        className='size-[1.1rem] 2xl:size-[1.265625rem]'
                      />
                    </button>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Nút chuyển tiếp */}
          <button
            type='button'
            aria-label='Xem các bác sĩ tiếp theo'
            disabled={activeIndex === maxIndex}
            onClick={handleNext}
            className='group absolute right-[-4.375rem] top-1/2 z-30 hidden size-[2.5rem] -translate-y-1/2 items-center justify-center rounded-full border border-brand-blue bg-white text-brand-blue transition-colors duration-200 hover:bg-brand-blue hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-brand-blue lg:flex'
          >
            <NavChevron
              direction='right'
              className='h-[1.25rem] w-[0.6944rem]'
            />
          </button>
        </div>

        {/* Thanh thể hiện vị trí slider + nút điều hướng cho mobile */}
        {pageIndexes.length > 1 && (
          <div className='mt-[1.5rem] flex items-center justify-between gap-[1rem] lg:mt-[1.75rem] lg:justify-center'>
            <div className='flex items-center gap-[0.25rem]'>
              {pageIndexes.map((index) => (
                <button
                  key={index}
                  type='button'
                  aria-label={`Chuyển đến nhóm bác sĩ ${index + 1}`}
                  onClick={() => scrollToIndex(index)}
                  className={`h-[0.125rem] rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'w-[3.5rem] bg-brand-blue lg:w-[7.5rem]'
                      : 'w-[1.5rem] bg-text-dark-blue/30'
                  }`}
                />
              ))}
            </div>

            {/* Dưới lg không có chỗ cho nút hai bên slider nên đặt cạnh dots */}
            <div className='flex items-center gap-[0.5rem] lg:hidden'>
              <button
                type='button'
                aria-label='Xem các bác sĩ trước'
                disabled={activeIndex === 0}
                onClick={handlePrevious}
                className='group inline-flex size-[2.25rem] items-center justify-center rounded-full border border-brand-blue bg-white text-brand-blue transition-colors duration-200 hover:bg-brand-blue hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-brand-blue'
              >
                <NavChevron direction='left' />
              </button>

              <button
                type='button'
                aria-label='Xem các bác sĩ tiếp theo'
                disabled={activeIndex === maxIndex}
                onClick={handleNext}
                className='group inline-flex size-[2.25rem] items-center justify-center rounded-full border border-brand-blue bg-white text-brand-blue transition-colors duration-200 hover:bg-brand-blue hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-brand-blue'
              >
                <NavChevron direction='right' />
              </button>
            </div>
          </div>
        )}

        {/* Mobile: nút "Xem tất cả" nằm cuối section theo bản thiết kế MB */}
        <div className='mt-[1.5rem] flex justify-center lg:hidden'>
          <button
            type='button'
            className='group inline-flex h-[2.75rem] items-center justify-center gap-[0.5rem] rounded-full border border-brand-blue bg-white px-[1.5rem] text-[0.875rem] font-medium text-brand-blue transition-colors duration-200 hover:border-brand-yellow hover:text-brand-yellow'
          >
            Xem tất cả
            <ActionArrow />
          </button>
        </div>
      </div>
    </section>
  )
}
