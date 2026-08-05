export type Doctor = {
  id: string
  name: string
  role: string
  experience: string
  description: string
  image: string
  position: string
  imageHeightClassName?: string
  specialties: string[]
}

export type Service = {
  id: string
  icon: string
  image: string
  title: string
  description: string
  href: string
  iconClassName?: string
}

export type NewsItem = {
  id: string
  title: string
  excerpt: string
  publishedAt: string
}

export type NavigationItem = {
  label: string
  href: string
  hasDropdown?: boolean
}

export type BannerSlide = {
  id: string
  src: string
  alt: string
}

export const bannerSlides: BannerSlide[] = [
  {
    id: 'banner-01',
    src: '/images/banner-dng-tam1.png',
    alt: 'Hiện thực hoá ước mơ làm cha mẹ bằng y học hiện đại',
  },
  {
    id: 'banner-02',
    src: '/images/Banner-Giam-50-chi-phi-IVF-web-copy.jpg',
    alt: 'Giảm 50% chi phí IVF tại Bệnh viện Đồng Tâm',
  },
  {
    id: 'banner-03',
    src: '/images/IMG_5948-scaled.jpg',
    alt: 'Chăm sóc mẹ và bé tại Bệnh viện Đồng Tâm',
  },
]

export const navigationItems: NavigationItem[] = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Giới thiệu', href: '/gioi-thieu' },
  { label: 'Bác sĩ - Chuyên gia', href: '/#bac-si' },
  { label: 'Chuyên khoa & Dịch vụ', href: '/#dich-vu', hasDropdown: true },
  { label: 'Trang thiết bị - Công nghệ', href: '/trang-thiet-bi' },
  { label: 'Video', href: '/video' },
  { label: 'Tin tức', href: '/#tin-tuc' },
  { label: 'Phép màu Đồng Tâm', href: '/phep-mau' },
  { label: 'Hỗ trợ khách hàng', href: '/ho-tro' },
]

export const doctors: Doctor[] = [
  {
    id: 'bs-01',
    name: 'TTƯT.TS.BS Đỗ Văn Tráng',
    role: 'Ngoại khoa',
    experience: 'Gần 40 năm kinh nghiệm',
    description: 'Chuyên gia hàng đầu trong lĩnh vực Ngoại khoa tiêu hóa gan mật.',
    image: '/images/bsy1.png',
    position: 'Giám đốc Bệnh viện Đồng Tâm',
    imageHeightClassName: 'h-[20rem]',
    specialties: [
      'Tốt nghiệp thủ khoa Bác sĩ nội trú chuyên ngành Ngoại, ĐH Y Hà Nội',
      'Điều trị thành công hàng nghìn ca phẫu thuật khó, ca bệnh hiểm nghèo, giúp nhiều bệnh nhân thoát khỏi nguy kịch',
    ],
  },
  {
    id: 'bs-02',
    name: 'BSCKI NGUYỄN THỊ NHÃ',
    role: 'Hỗ trợ sinh sản',
    experience: 'Gần 40 năm kinh nghiệm',
    description: 'Chuyên gia hàng đầu trong lĩnh vực Hỗ trợ sinh sản và sản khoa',
    image: '/images/bsy2.png',
    position: 'Phó giám đốc Bệnh viện Đồng Tâm',
    imageHeightClassName: 'h-[18.875rem]',
    specialties: [
      'Đã điều trị thành công hàng nghìn ca vô sinh hiếm muộn khó, lâu năm, sinh con mắc các bệnh lý di truyền',
      'Là người góp phần đặc biệt quan trọng đưa IVF Bưu điện trở thành cơ sở y tế điều trị vô sinh hiếm muộn hàng đầu trong nước và khu vực',
    ],
  },
  {
    id: 'bs-03',
    name: 'ThS.NGUYỄN KHẮC SINH',
    role: 'Hỗ trợ sinh sản',
    experience: 'Gần 11 năm kinh nghiệm',
    description: 'Được đào tạo chuyên sâu trong và ngoài nước, đặc biệt tại Nhật Bản.',
    image: '/images/bsy3.png',
    position: 'Trưởng phòng LAB IVF Đồng Tâm',
    specialties: [
      'Thành thạo các kỹ thuật nuôi cấy phôi với yêu cầu trình độ rất cao, mang lại hiệu quả điều trị tương đương với các Lab trong khu vực và thế giới.',
      'Xử lý thành công nhiều ca IVF khó như: bệnh nhân lớn tuổi, thất bại nhiều lần...',
    ],
  },
  {
    id: 'bs-04',
    name: 'ThS.BS Trịnh Văn Du',
    role: 'Khoa phụ sản',
    experience: 'Hơn 15 năm kinh nghiệm',
    description:
      'Tốt nghiệp Thạc sĩ Sản phụ khoa ĐH Y Hà Nội, vô sinh hiếm muộn Bệnh viện Từ Dũ (TP. Hồ Chí Minh)',
    image: '/images/bsy4.png',
    position: 'Trường khoa phụ sản',
    specialties: [
      'Hơn 15 năm kinh nghiệm trong lĩnh vực Hỗ trợ sinh sản, Sản phụ khoa và Mổ nội soi vô sinh với gần 10.000 ca IVF thành công',
    ],
  },
]

export const services: Service[] = [
  {
    id: 'service-01',
    icon: '/service/thutinhnhantao_ic.svg',
    image: '/service/thutinhnhantao_im.png',
    title: 'Thụ tinh nhân tạo (IUI)',
    description:
      'Thụ tinh nhân tạo (IUI) là phương pháp hỗ trợ sinh sản tiên tiến, phổ biến và ít tốn kém. Tại Đồng Tâm, phương pháp này được thực hiện theo quy trình chuẩn xác bởi đội ngũ chuyên gia giàu kinh nghiệm.',
    href: '/dich-vu/thu-tinh-nhan-tao-iui',
  },
  {
    id: 'service-02',
    icon: '/service/thutinhtrongongnghiem_ic.svg',
    iconClassName: 'scale-[1.25]',
    image: '/service/thutinhtrongongnghiem_im.png',
    title: 'Thụ tinh trong ống nghiệm (IVF)',
    description:
      'Là phương pháp hỗ trợ sinh sản hiện đại, trong đó trứng và tinh trùng được kết hợp trong môi trường phòng thí nghiệm để tạo phôi.',
    href: '/dich-vu/thu-tinh-trong-ong-nghiem-ivf',
  },
  {
    id: 'service-03',
    icon: '/service/trulanh.svg',
    iconClassName: 'scale-[1.25]',
    image: '/service/trulanh.png',
    title: 'Trữ lạnh trứng - tinh trùng - phôi',
    description:
      'Giải pháp bảo tồn khả năng sinh sản bằng công nghệ đông lạnh hiện đại, giúp lưu giữ an toàn tế bào sinh sản và phôi trong thời gian dài.',
    href: '/dich-vu/tru-lanh-trung-tinh-trung-phoi',
  },
  {
    id: 'service-04',
    icon: '/service/nuoicay.svg',
    iconClassName: 'scale-[1.25]',
    image: '/service/nuoicay.png',
    title: 'Công nghệ nuôi cấy phôi Time-lapse tích hợp AI',
    description:
      'Công nghệ Time-lapse tích hợp AI cho phép theo dõi liên tục quá trình phát triển của phôi mà không làm xáo trộn môi trường nuôi cấy, hỗ trợ lựa chọn phôi tốt nhất.',
    href: '/dich-vu/nuoi-cay-phoi-time-lapse-ai',
  },
  {
    id: 'service-05',
    icon: '/service/sangloc.svg',
    iconClassName: 'scale-[1.25]',
    image: '/service/sangloc.png',
    title: 'Sàng lọc di truyền PGT thế hệ mới giúp sinh con khỏe mạnh',
    description:
      'Thông qua sàng lọc di truyền thế hệ mới như PGT-A và PGT-M, các phôi mang bất thường nhiễm sắc thể hoặc đột biến gây bệnh có thể được phát hiện từ giai đoạn sớm.',
    href: '/dich-vu/sang-loc-di-truyen-pgt',
  },
]

export const newsItems: NewsItem[] = [
  {
    id: 'news-01',
    title: '7 dấu hiệu nên đi khám hiếm muộn sớm',
    excerpt: 'Nhận biết sớm giúp rút ngắn thời gian điều trị và tăng tỷ lệ thành công.',
    publishedAt: '12.08.2026',
  },
  {
    id: 'news-02',
    title: 'IVF thất bại một lần, bước tiếp theo là gì?',
    excerpt: 'Đánh giá lại phác đồ và các chỉ số nền tảng để lên kế hoạch tối ưu hơn.',
    publishedAt: '09.08.2026',
  },
  {
    id: 'news-03',
    title: 'Chế độ sinh hoạt trước chuyển phôi',
    excerpt: 'Những thói quen nhỏ có thể tác động lớn đến khả năng làm tổ của phôi.',
    publishedAt: '05.08.2026',
  },
]

export type FooterLink = {
  label: string
  href: string
}

export type FooterSocialLink = FooterLink & {
  icon: string
}

export type FooterContactItem = {
  id: string
  label: string
  value: string
  icon: string
  href?: string
}

export type FooterMenuColumn = {
  title: string
  links: FooterLink[]
}

export const footerContent = {
  logo: {
    src: '/footer/LOGO.png',
    alt: 'Bệnh viện Đồng Tâm',
  },
  slogan: 'Trao niềm tin - Đón hạnh phúc',
  hotline: {
    label: 'Hotline',
    value: '0946 885 885',
    href: 'tel:0946885885',
  },
  map: {
    shareUrl: 'https://share.google/gtN5dBaK7Zaoh6MA1',
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.374798125898!2d105.8429308755127!3d20.93745859090773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad003721b3ef%3A0x110a1dcb57d7313c!2zQuG7h25oIHZp4buHbiDEkOG7k25nIFTDom0!5e0!3m2!1svi!2s!4v1785923260925!5m2!1svi!2s',
  },
  copyright: 'Bản quyền © benhviendongtam2026 Bảo lưu mọi quyền',
}

export const footerSocialLinks: FooterSocialLink[] = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: '/footer/facebook.svg',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: '/footer/youtube.svg',
  },
  {
    label: 'TikTok',
    href: 'https://tiktok.com',
    icon: '/footer/tiktok.svg',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: '/footer/insta.svg',
  },
]

export const footerContactItems: FooterContactItem[] = [
  {
    id: 'address',
    label: 'Trụ sở',
    value: 'Km 12, Quốc lộ 1, Xã Thanh Trì, Thành phố Hà Nội, Việt Nam',
    icon: '/footer/truso.svg',
  },
  {
    id: 'email',
    label: 'Email',
    value: 'benhviendongtam@gmail.com',
    href: 'mailto:benhviendongtam@gmail.com',
    icon: '/footer/mail.svg',
  },
  {
    id: 'opening-hours',
    label: 'Giờ mở cửa',
    value: 'Thứ 2 - Thứ 7: 7:00 - 17:00',
    icon: '/footer/time.svg',
  },
]

export const footerMenuColumns: FooterMenuColumn[] = [
  {
    title: 'Năng lực - Dịch vụ',
    links: [
      { label: 'Bác sĩ – Chuyên gia', href: '/#bac-si' },
      { label: 'Chuyên khoa & Dịch vụ', href: '/#dich-vu' },
      { label: 'Cơ sở vật chất & Công nghệ', href: '/trang-thiet-bi' },
      { label: 'Hiệu quả điều trị', href: '/hieu-qua-dieu-tri' },
      { label: 'Phép màu Đồng Tâm', href: '/phep-mau' },
    ],
  },
  {
    title: 'Tìm hiểu thêm',
    links: [
      { label: 'Về chúng tôi', href: '/gioi-thieu' },
      { label: 'Tin tức', href: '/#tin-tuc' },
      { label: 'Tuyển dụng', href: '/tuyen-dung' },
      { label: 'Liên hệ', href: '/lien-he' },
    ],
  },
  {
    title: 'Chuyên khoa',
    links: [
      { label: 'Trung tâm Hỗ trợ sinh sản', href: '/chuyen-khoa/ho-tro-sinh-san' },
      { label: 'Khoa Phụ sản', href: '/chuyen-khoa/phu-san' },
      { label: 'Khoa Ngoại tổng hợp', href: '/chuyen-khoa/ngoai-tong-hop' },
      { label: 'Khoa Nội tổng hợp', href: '/chuyen-khoa/noi-tong-hop' },
      { label: 'Khoa Xét nghiệm', href: '/chuyen-khoa/xet-nghiem' },
      { label: 'Khoa Chẩn đoán hình ảnh', href: '/chuyen-khoa/chan-doan-hinh-anh' },
    ],
  },
]

export const footerLegalLinks: FooterLink[] = [
  { label: 'Chính sách bảo mật', href: '/chinh-sach-bao-mat' },
  { label: 'Điều khoản sử dụng', href: '/dieu-khoan-su-dung' },
  { label: 'Quyền riêng tư', href: '/quyen-rieng-tu' },
]
