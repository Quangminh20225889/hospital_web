export type Doctor = {
  id: string
  name: string
  role: string
  experience: string
  specialties: string[]
}

export type Service = {
  id: string
  title: string
  summary: string
  badge: string
}

export type NewsItem = {
  id: string
  title: string
  excerpt: string
  publishedAt: string
}

export const navigationItems = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Giới thiệu', href: '/gioi-thieu' },
  { label: 'Bác sĩ - Chuyên gia', href: '/#bac-si' },
  { label: 'Chuyên khoa & Dịch vụ', href: '/#dich-vu' },
  { label: 'Tin tức', href: '/#tin-tuc' },
]

export const doctors: Doctor[] = [
  {
    id: 'bs-01',
    name: 'BS.CKII Trần Thị Minh Anh',
    role: 'Sản phụ khoa',
    experience: 'Hơn 20 năm kinh nghiệm',
    specialties: ['Tư vấn hiếm muộn', 'Theo dõi thai kỳ nguy cơ cao'],
  },
  {
    id: 'bs-02',
    name: 'ThS.BS Lê Quốc Hùng',
    role: 'Nam khoa',
    experience: 'Gần 15 năm kinh nghiệm',
    specialties: ['Điều trị vô sinh nam', 'Can thiệp vi phẫu'],
  },
  {
    id: 'bs-03',
    name: 'BS Nguyễn Hà My',
    role: 'Chẩn đoán hình ảnh',
    experience: 'Hơn 11 năm kinh nghiệm',
    specialties: ['Siêu âm thai chuyên sâu', 'Theo dõi phát triển bào thai'],
  },
]

export const services: Service[] = [
  {
    id: 'service-01',
    title: 'Khám và tư vấn hiếm muộn',
    summary: 'Lộ trình cá nhân hóa, theo dõi rõ từng mốc và tối ưu theo thể trạng.',
    badge: 'Nổi bật',
  },
  {
    id: 'service-02',
    title: 'Thụ tinh ống nghiệm IVF',
    summary: 'Ứng dụng công nghệ lab hiện đại và quy trình chuẩn quốc tế.',
    badge: 'Công nghệ cao',
  },
  {
    id: 'service-03',
    title: 'Sàng lọc di truyền PGT',
    summary: 'Hỗ trợ giảm nguy cơ bất thường di truyền trước chuyển phôi.',
    badge: 'Chuyên sâu',
  },
  {
    id: 'service-04',
    title: 'Trữ lạnh trứng - tinh trùng - phôi',
    summary: 'Bảo toàn khả năng sinh sản với hệ thống lưu trữ chuẩn hóa.',
    badge: 'Bảo tồn',
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
