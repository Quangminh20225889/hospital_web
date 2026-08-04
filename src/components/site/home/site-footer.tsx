import { Container } from '@/components/common/container'

const footerColumns = [
  {
    title: 'Chuyên khoa',
    links: ['Hỗ trợ sinh sản', 'Nam khoa', 'Ngoại tổng hợp', 'Nội tổng hợp'],
  },
  {
    title: 'Hỗ trợ khách hàng',
    links: ['Đặt lịch khám', 'Bảng giá dịch vụ', 'Hướng dẫn thanh toán', 'Câu hỏi thường gặp'],
  },
  {
    title: 'Liên hệ',
    links: ['Hotline: 0946 885 885', 'Email: cskh@dongtam.vn', '7:00 - 19:00 mỗi ngày'],
  },
]

export function SiteFooter() {
  return (
    <footer className='mt-[5rem] border-t border-brand-blue/10 bg-surface-blue/40 py-[3rem]'>
      <Container className='space-y-[2rem]'>
        <div className='flex flex-col gap-[1.25rem]'>
          <p className='text-[1.5rem] font-bold text-title-blue'>Bệnh viện Đồng Tâm</p>
          <p className='max-w-[44rem] text-[1rem] leading-[1.7] text-text-dark-blue/90'>
            Đồng hành cùng gia đình trên hành trình tìm kiếm tiếng cười trẻ thơ bằng giải pháp y
            khoa hiện đại, minh bạch và tận tâm.
          </p>
        </div>

        <div className='grid gap-[1.5rem] sm:grid-cols-2 lg:grid-cols-3'>
          {footerColumns.map((column) => (
            <div
              key={column.title}
              className='rounded-[1rem] border border-brand-blue/10 bg-white p-[1.25rem]'
            >
              <h3 className='text-[1rem] font-semibold text-title-blue'>{column.title}</h3>
              <ul className='mt-[0.75rem] space-y-[0.5rem]'>
                {column.links.map((link) => (
                  <li
                    key={link}
                    className='text-[0.9375rem] text-text-dark-blue/90'
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className='border-t border-brand-blue/10 pt-[1rem] text-[0.875rem] text-text-dark-blue/70'>
          © 2026 Bệnh viện Đồng Tâm. Nội dung trên trang hiện là mock data cho mục đích luyện tập
          giao diện.
        </p>
      </Container>
    </footer>
  )
}
