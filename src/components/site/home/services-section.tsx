import { Container } from '@/components/common/container'
import { services } from '@/content/home'

export function ServicesSection() {
  return (
    <section
      id='dich-vu'
      className='py-[4rem] lg:py-[6rem]'
    >
      <Container>
        <div className='rounded-[1.25rem] bg-brand-blue px-[1.25rem] py-[1.5rem] text-white sm:px-[1.75rem] sm:py-[2rem]'>
          <h2 className='text-[1.5rem] font-bold leading-[1.3] sm:text-[1.875rem]'>
            Dịch vụ nổi bật - Hiệu quả điều trị
          </h2>
          <p className='mt-[0.625rem] max-w-[38rem] text-[0.9375rem] leading-[1.7] text-white/90'>
            Danh sách dịch vụ hiển thị dưới đây là dữ liệu giả lập, đủ cấu trúc để bạn thay thế bằng
            dữ liệu thật ở bước tích hợp API sau này.
          </p>
        </div>

        <div className='mt-[2rem] grid gap-[1rem] lg:grid-cols-2'>
          {services.map((service) => (
            <article
              key={service.id}
              className='rounded-[1rem] border border-brand-blue/15 bg-white p-[1.25rem] transition-transform hover:-translate-y-[0.125rem]'
            >
              <span className='inline-flex rounded-full bg-brand-yellow px-[0.75rem] py-[0.25rem] text-[0.75rem] font-semibold text-brand-dark'>
                {service.badge}
              </span>
              <h3 className='mt-[0.75rem] text-[1.125rem] font-semibold text-text-dark-blue'>
                {service.title}
              </h3>
              <p className='mt-[0.5rem] text-[0.9375rem] leading-[1.7] text-text-dark-blue/80'>
                {service.summary}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
