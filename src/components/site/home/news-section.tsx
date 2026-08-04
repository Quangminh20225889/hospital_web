import { Container } from '@/components/common/container'
import { SectionHeading } from '@/components/common/section-heading'
import { newsItems } from '@/content/home'

export function NewsSection() {
  return (
    <section
      id='tin-tuc'
      className='py-[4rem] lg:py-[6rem]'
    >
      <Container>
        <SectionHeading
          label='Kiến thức & Tin tức'
          title='Thông tin nổi bật'
          description='Các bài viết mẫu để bạn hoàn thiện layout card tin tức và tương tác trước khi có backend.'
        />

        <div className='mt-[2rem] grid gap-[1rem] md:grid-cols-2 xl:grid-cols-3'>
          {newsItems.map((item) => (
            <article
              key={item.id}
              className='rounded-[1rem] border border-brand-blue/15 bg-white p-[1.25rem]'
            >
              <p className='text-[0.8125rem] font-medium uppercase tracking-[0.06em] text-brand-blue'>
                {item.publishedAt}
              </p>
              <h3 className='mt-[0.625rem] text-[1.125rem] font-semibold leading-[1.4] text-text-dark-blue'>
                {item.title}
              </h3>
              <p className='mt-[0.625rem] text-[0.9375rem] leading-[1.75] text-text-dark-blue/80'>
                {item.excerpt}
              </p>
              <button
                type='button'
                className='mt-[1rem] inline-flex items-center rounded-full border border-brand-blue/30 px-[0.875rem] py-[0.5rem] text-[0.8125rem] font-semibold text-brand-blue transition hover:bg-brand-blue/5'
              >
                Xem chi tiết
              </button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
