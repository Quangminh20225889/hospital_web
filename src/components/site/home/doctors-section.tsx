'use client'

import { ArrowRight, Check, ChevronLeft, ChevronRight, ClipboardList, Plus } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState, type UIEvent } from 'react'

import { doctors } from '@/content/home'
import { cn } from '@/lib/utils'
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
              <Plus
                aria-hidden='true'
                className='size-[0.75rem]'
                strokeWidth={3}
              />
              Đội ngũ bác sĩ giàu kinh nghiệm
            </div>

            <h2 className='text-[1.875rem] font-bold uppercase leading-[1.15] text-title-blue lg:text-[2.125rem]'>
              Nền tảng của niềm tin
            </h2>
          </div>

          <button
            type='button'
            className='group inline-flex h-[2.625rem] w-fit shrink-0 items-center justify-center gap-[0.5rem] self-start rounded-full border border-brand-blue bg-white px-[1.25rem] text-[0.8125rem] font-medium text-brand-blue transition-colors duration-200 hover:border-brand-yellow hover:text-brand-yellow sm:self-auto'
          >
            Xem tất cả
            <ArrowRight
              aria-hidden='true'
              className='size-[1rem] transition-transform duration-200 group-hover:translate-x-[0.1875rem]'
              strokeWidth={1.8}
            />
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
            className='absolute left-[-4.375rem] top-1/2 z-30 hidden size-[2.5rem] -translate-y-1/2 items-center justify-center rounded-full border border-brand-blue bg-white text-brand-blue transition-colors duration-200 hover:bg-brand-blue hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-brand-blue lg:flex'
          >
            <ChevronLeft
              aria-hidden='true'
              className='size-[1.25rem]'
              strokeWidth={1.7}
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
                  className='group relative h-[31rem] basis-full shrink-0 snap-start overflow-hidden rounded-[0.875rem] border border-brand-blue/10 bg-[#eef7fd] sm:basis-[calc((100%_-_1rem)/2)] lg:h-[30.3125rem] lg:basis-[calc((100%_-_2rem)/3)]'
                >
                  {/* Nền bệnh viện làm mờ */}
                  {/* Ảnh nền lớn của card */}
                  <div className='absolute inset-0 z-0'>
                    <Image
                      src='/images/bg-to.png'
                      alt=''
                      fill
                      sizes='(max-width: 1024px) 100vw, 33vw'
                      className='object-cover object-center'
                    />

                    {/* Lớp phủ trắng nhẹ */}
                    <div className='absolute inset-0 bg-white/20' />
                  </div>

                  {/* Nhãn chuyên khoa màu vàng */}
                  <div className='absolute right-[0.5rem] top-[0.5rem] z-20 inline-flex h-[1.625rem] max-w-[55%] items-center gap-[0.3125rem] rounded-[0.375rem] bg-brand-yellow px-[0.625rem] text-[0.625rem] font-semibold uppercase text-white'>
                    <ClipboardList
                      aria-hidden='true'
                      className='size-[0.75rem] shrink-0'
                      strokeWidth={2.4}
                    />

                    <span className='truncate'>{doctor.role}</span>
                  </div>

                  {/* Ảnh bác sĩ bên trái */}
                  {/* Khung chữ nhật trang trí phía sau bác sĩ */}
                  {/* Khung chữ nhật phía sau bác sĩ */}
                  {/* Hình chữ nhật trang trí phía sau bác sĩ */}
                  <div className='absolute bottom-[4.75rem] left-[0.75rem] z-[5] h-[11.5rem] w-[42%] overflow-hidden rounded-[0.75rem] border-[0.125rem] border-white shadow-[0_0.5rem_1.5rem_rgba(8,53,74,0.08)]'>
                    <Image
                      src='/images/bg_nho.png'
                      alt=''
                      fill
                      sizes='16vw'
                      className='object-cover opacity-50'
                    />
                  </div>

                  {/* Ảnh bác sĩ */}
                  <div className='absolute bottom-[4.75rem] left-[0.25rem] z-10 h-[20rem] w-[47%]'>
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      sizes='(max-width: 639px) 47vw, (max-width: 1024px) 24vw, 16vw'
                      className={cn(
                        'origin-bottom object-contain object-bottom',
                        doctor.imageHeightClassName,
                      )}
                    />
                  </div>

                  {/* Tên bác sĩ */}
                  {/* Khối tên bác sĩ */}
                  <div className='absolute left-[42%] right-[0.75rem] top-[4.75rem] z-20 rounded-[0.75rem] bg-[linear-gradient(90deg,#075dad_0%,#199bcf_100%)] px-[1rem] py-[0.75rem] text-center text-white shadow-[0_0.5rem_1.25rem_rgba(7,94,180,0.2)]'>
                    <h3 className='truncate text-[1rem] font-bold uppercase leading-[1.2]'>
                      {doctor.name}
                    </h3>

                    <p className='mt-[0.375rem] truncate text-[0.7rem] leading-[1.3] text-white/90'>
                      {doctor.position}
                    </p>
                  </div>

                  {/* Kinh nghiệm và thông tin */}
                  {/* Kinh nghiệm và nội dung bác sĩ */}
                  <div className='absolute bottom-[5.75rem] left-[47%] right-[1rem] top-[10rem] z-10 flex min-h-0 flex-col'>
                    <p className='shrink-0 text-[1.75rem] font-bold uppercase leading-[1.12] text-text-dark-blue'>
                      {doctor.experience}
                    </p>

                    <div className='mt-[0.75rem] min-h-0 flex-1 overflow-y-auto pr-[0.75rem] [scrollbar-color:#1991c7_rgba(25,145,199,0.12)] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-[0.375rem] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-brand-blue [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-brand-blue/10'>
                      <ul className='space-y-[0.875rem]'>
                        {details.map((detail, index) => (
                          <li
                            key={`${doctor.id}-${index}`}
                            className='flex items-start gap-[0.625rem]'
                          >
                            <span className='mt-[0.15rem] inline-flex size-[1rem] shrink-0 items-center justify-center rounded-full bg-brand-mint text-white'>
                              <Check
                                aria-hidden='true'
                                className='size-[0.625rem]'
                                strokeWidth={3}
                              />
                            </span>

                            <span className='text-[0.8rem] leading-[1.55] text-text-dark-blue'>
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
                    className='group/detail absolute bottom-[0.75rem] left-[0.75rem] right-[0.75rem] z-20 flex h-[3.25rem] items-center justify-center gap-[0.75rem] rounded-full border border-brand-blue/30 bg-[#edf4fb]/95 text-[0.9rem] font-medium text-brand-blue shadow-[inset_0_0_0_0.0625rem_rgba(255,255,255,0.9)] transition-colors duration-200 hover:border-brand-yellow hover:text-brand-yellow'
                  >
                    Xem chi tiết
                    <ArrowRight
                      aria-hidden='true'
                      className='size-[1.1rem] transition-transform duration-200 group-hover/detail:translate-x-[0.2rem]'
                      strokeWidth={1.8}
                    />
                  </button>
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
            className='absolute right-[-4.375rem] top-1/2 z-30 hidden size-[2.5rem] -translate-y-1/2 items-center justify-center rounded-full border border-brand-blue bg-white text-brand-blue transition-colors duration-200 hover:bg-brand-blue hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-brand-blue lg:flex'
          >
            <ChevronRight
              aria-hidden='true'
              className='size-[1.25rem]'
              strokeWidth={1.7}
            />
          </button>
        </div>

        {/* Thanh thể hiện vị trí slider */}
        {pageIndexes.length > 1 && (
          <div className='mt-[1.75rem] flex items-center justify-center gap-[0.25rem]'>
            {pageIndexes.map((index) => (
              <button
                key={index}
                type='button'
                aria-label={`Chuyển đến nhóm bác sĩ ${index + 1}`}
                onClick={() => scrollToIndex(index)}
                className={`h-[0.125rem] rounded-full transition-all duration-300 ${activeIndex === index
                    ? 'w-[7.5rem] bg-brand-blue'
                    : 'w-[1.5rem] bg-text-dark-blue/30'
                  }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
