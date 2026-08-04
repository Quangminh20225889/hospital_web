import { ArrowUpRight, CalendarCheck2, PhoneCall } from 'lucide-react'

import { Container } from '@/components/common/container'

export function HeroSection() {
  return (
    <section className='relative overflow-hidden bg-[linear-gradient(120deg,#eaf8ff_0%,#f6fdff_55%,#fff5dd_100%)] py-[4rem] lg:py-[5.5rem]'>
      <Container className='grid items-center gap-[2rem] lg:grid-cols-[1.1fr_0.9fr]'>
        <div className='space-y-[1.25rem]'>
          <p className='inline-flex rounded-full bg-brand-yellow px-[0.875rem] py-[0.375rem] text-[0.75rem] font-semibold uppercase tracking-[0.05em] text-brand-dark'>
            Trung tâm hỗ trợ sinh sản
          </p>

          <h1 className='max-w-[42rem] text-[2rem] font-bold leading-[1.2] text-title-blue md:text-[2.875rem]'>
            Hiện thực hóa ước mơ làm cha mẹ bằng y học hiện đại
          </h1>

          <p className='max-w-[34rem] text-[1rem] leading-[1.8] text-text-dark-blue/85'>
            Trang demo một trang duy nhất. Toàn bộ dữ liệu hiển thị đang dùng mock data để bạn luyện
            tập build giao diện trước khi kết nối API.
          </p>

          <div className='flex flex-wrap gap-[0.75rem] pt-[0.25rem]'>
            <button
              type='button'
              className='inline-flex items-center gap-[0.5rem] rounded-full bg-brand-blue px-[1.25rem] py-[0.75rem] text-[0.9375rem] font-semibold text-white transition hover:bg-brand-blue/90'
            >
              <CalendarCheck2 className='size-[1rem]' />
              Đặt lịch khám
              <ArrowUpRight className='size-[1rem]' />
            </button>
            <a
              href='tel:0946885885'
              className='inline-flex items-center gap-[0.5rem] rounded-full border border-brand-blue/30 bg-white px-[1.25rem] py-[0.75rem] text-[0.9375rem] font-semibold text-brand-blue transition hover:bg-brand-blue/5'
            >
              <PhoneCall className='size-[1rem]' />
              Gọi tổng đài
            </a>
          </div>
        </div>

        <div className='rounded-[1.5rem] border border-brand-blue/15 bg-white p-[1.25rem] shadow-[0_1.25rem_3rem_rgba(8,151,216,0.12)]'>
          <div className='grid gap-[0.75rem] sm:grid-cols-2'>
            <div className='rounded-[1rem] bg-surface-blue p-[1rem]'>
              <p className='text-[0.8125rem] text-text-dark-blue/70'>Tỷ lệ hài lòng</p>
              <p className='mt-[0.375rem] text-[1.75rem] font-bold text-title-blue'>97.4%</p>
            </div>
            <div className='rounded-[1rem] bg-surface-blue p-[1rem]'>
              <p className='text-[0.8125rem] text-text-dark-blue/70'>Ca tư vấn/tháng</p>
              <p className='mt-[0.375rem] text-[1.75rem] font-bold text-title-blue'>1,280+</p>
            </div>
            <div className='rounded-[1rem] bg-surface-blue p-[1rem]'>
              <p className='text-[0.8125rem] text-text-dark-blue/70'>Bác sĩ chuyên sâu</p>
              <p className='mt-[0.375rem] text-[1.75rem] font-bold text-title-blue'>24</p>
            </div>
            <div className='rounded-[1rem] bg-surface-blue p-[1rem]'>
              <p className='text-[0.8125rem] text-text-dark-blue/70'>Giờ hỗ trợ</p>
              <p className='mt-[0.375rem] text-[1.75rem] font-bold text-title-blue'>7:00-19:00</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
