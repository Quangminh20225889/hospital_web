import { Container } from '@/components/common/container'
import { SectionHeading } from '@/components/common/section-heading'
import { doctors } from '@/content/home'

export function DoctorsSection() {
  return (
    <section id='bac-si' className='py-[4rem] lg:py-[6rem]'>
      <Container>
        <SectionHeading
          label='Đội ngũ bác sĩ giàu kinh nghiệm'
          title='Nền tảng của niềm tin'
          description='Thông tin bên dưới là mock data để mô phỏng danh sách bác sĩ nổi bật trên trang chủ.'
        />

        <div className='mt-[2rem] grid gap-[1rem] md:grid-cols-2 lg:grid-cols-3'>
          {doctors.map((doctor) => (
            <article key={doctor.id} className='rounded-[1rem] border border-brand-blue/15 bg-white p-[1.25rem]'>
              <div className='inline-flex size-[3.25rem] items-center justify-center rounded-full bg-surface-blue text-[1rem] font-semibold text-title-blue'>
                {doctor.name
                  .split(' ')
                  .slice(-2)
                  .map((part) => part[0])
                  .join('')}
              </div>

              <h3 className='mt-[1rem] text-[1.125rem] font-semibold text-text-dark-blue'>{doctor.name}</h3>
              <p className='mt-[0.25rem] text-[0.9375rem] text-brand-blue'>{doctor.role}</p>
              <p className='mt-[0.5rem] text-[0.875rem] text-text-dark-blue/80'>{doctor.experience}</p>

              <ul className='mt-[0.75rem] space-y-[0.5rem]'>
                {doctor.specialties.map((specialty) => (
                  <li key={specialty} className='text-[0.875rem] text-text-dark-blue/80'>
                    - {specialty}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
