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
  category: string
  image: string
  imageAlt: string
  href: string
  publishedAt: {
    day: string
    monthYear: string
  }
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
    title: 'Hai lần mất con mới biết hai vợ chồng cùng mang gen lặn gây bệnh di truyền',
    excerpt:
      'Mỗi ngày trôi qua, điều day dứt nhất với anh Long, chị Hà (ở Mỹ Đức, Hà Nội) không chỉ là việc đã mất hai người con, mà là câu hỏi luôn ám ảnh: “Giá như mình biết sớm…”',
    category: 'Tin tức',
    image: '/images/banner-dng-tam1.png',
    imageAlt: 'Tin tức bệnh viện Đồng Tâm',
    href: '/tin-tuc/hai-lan-mat-con-moi-biet-hai-vo-chong-cung-mang-gen-lan-gay-benh-di-truyen',
    publishedAt: {
      day: '05',
      monthYear: '08/2026',
    },
  },
  {
    id: 'news-02',
    title: 'IUI, IVF: Ăn gì để tăng cơ hội?',
    excerpt:
      'Bài viết: Bác sĩ Nguyễn Liên Phương. Hỗ trợ sinh sản bằng các kỹ thuật như bơm tinh trùng vào buồng tử cung (IUI) và thụ tinh trong ống nghiệm (IVF) ngày càng được áp dụng rộng rãi trong điều trị vô sinh – hiếm muộn. Bên cạnh các yếu tố chuyên môn như phác đồ kích thích buồng trứng, chất lượng phôi hay kỹ thuật labo, ngày càng có nhiều bằng chứng cho thấy dinh dưỡng và lối sống đóng vai trò quan trọng trong việc cải thiện kết quả điều trị.',
    category: 'Tin tức',
    image: '/images/Banner-Giam-50-chi-phi-IVF-web-copy.jpg',
    imageAlt: 'Bài viết về IUI và IVF',
    href: '/tin-tuc/iui-ivf-an-gi-de-tang-co-hoi',
    publishedAt: {
      day: '04',
      monthYear: '08/2026',
    },
  },
  {
    id: 'news-03',
    title:
      'Đổi mới phong cách, thái độ phục vụ của cán bộ y tế hướng tới sự hài lòng của người bệnh',
    excerpt:
      'Sáng ngày 29/7, Bệnh viện Đồng Tâm đã tổ chức buổi tập huấn “Kỹ năng giao tiếp cơ bản” dành cho toàn thể cán bộ nhân viên, người lao động trong toàn viện.',
    category: 'Tin tức',
    image: '/images/IMG_5948-scaled.jpg',
    imageAlt: 'Tập huấn kỹ năng giao tiếp tại bệnh viện',
    href: '/tin-tuc/doi-moi-phong-cach-thai-do-phuc-vu-cua-can-bo-y-te-huong-toi-su-hai-long-cua-nguoi-benh',
    publishedAt: {
      day: '29',
      monthYear: '07/2026',
    },
  },
  {
    id: 'news-04',
    title: '20 năm “vô sinh không rõ nguyên nhân” và một cái kết vượt ngoài mong đợi',
    excerpt:
      'Hơn 20 năm chạy chữa trong vô vọng, nhiều lần định “bỏ cuộc”, vợ chồng chị Nguyễn Thị Chanh (xã An Khánh, thành phố Hà Nội) từng tin rằng mong muốn có con của mình sẽ không bao giờ thành hiện thực. Nhưng từ một ca được đánh giá chỉ còn 10–15% cơ hội thành công, bằng sự kiên trì của người bệnh và sự đồng hành bền bỉ của Bác sĩ Nguyễn Thị Nhã – Phó Giám đốc Bệnh viện Đồng Tâm, một cái kết trọn vẹn đã được viết tiếp.',
    category: 'Tin tức',
    image: '/images/banner-dng-tam1.png',
    imageAlt: 'Hành trình điều trị hiếm muộn thành công',
    href: '/tin-tuc/20-nam-vo-sinh-khong-ro-nguyen-nhan-va-mot-cai-ket-vuot-ngoai-mong-doi',
    publishedAt: {
      day: '27',
      monthYear: '07/2026',
    },
  },
  {
    id: 'news-05',
    title: 'Hoạt động dâng hương tưởng niệm các anh hùng liệt sỹ nhân ngày 27/7',
    excerpt:
      'Ngày 27/7 hằng năm là dịp để mỗi người dân Việt Nam thành kính tưởng nhớ, bày tỏ lòng biết ơn sâu sắc đối với các Anh hùng liệt sỹ, thương binh, bệnh binh và những người có công với cách mạng – những người đã cống hiến, hy sinh vì độc lập, tự do của Tổ quốc và hạnh phúc của Nhân dân.',
    category: 'Tin tức',
    image: '/images/Banner-Giam-50-chi-phi-IVF-web-copy.jpg',
    imageAlt: 'Hoạt động dâng hương tưởng niệm',
    href: '/tin-tuc/hoat-dong-dang-huong-tuong-niem-cac-anh-hung-liet-sy-nhan-ngay-27-7',
    publishedAt: {
      day: '27',
      monthYear: '07/2026',
    },
  },
  {
    id: 'news-06',
    title:
      'Tri ân người có công với cách mạng – Đồng hành cùng cán bộ, chiến sĩ trong lực lượng vũ trang trên hành trình tìm con yêu',
    excerpt:
      'Nhân kỷ niệm 79 năm Ngày Thương binh – Liệt sĩ (27/7/1947 – 27/7/2026), Bệnh viện Đa khoa Đồng Tâm xin bày tỏ lòng thành kính và biết ơn sâu sắc các Anh hùng liệt sĩ, thương binh, bệnh binh, người có công với cách mạng đã dũng cảm chiến đấu, anh dũng hy sinh hoặc cống hiến một phần xương máu của mình cho sự nghiệp đấu tranh giải phóng dân tộc.',
    category: 'Tin tức',
    image: '/images/IMG_5948-scaled.jpg',
    imageAlt: 'Chương trình tri ân người có công với cách mạng',
    href: '/tin-tuc/tri-an-nguoi-co-cong-voi-cach-mang-dong-hanh-cung-can-bo-chien-si-trong-luc-luong-vu-trang-tren-hanh-trinh-tim-con-yeu',
    publishedAt: {
      day: '27',
      monthYear: '07/2026',
    },
  },
  {
    id: 'news-07',
    title: 'Không khí ngày cuối của Tuần lễ khám và tư vấn vô sinh, hiếm muộn miễn phí',
    excerpt:
      'Trời vừa sáng. Một ngày mới bắt đầu cũng là lúc ngày cuối của Tuần lễ khám và tư vấn vô sinh, hiếm muộn miễn phí tại Bệnh viện Đồng Tâm. Những phòng khám đã sáng đèn. Những hồ sơ đầu tiên đã được mở.',
    category: 'Tin tức',
    image: '/images/banner-dng-tam1.png',
    imageAlt: 'Tuần lễ khám và tư vấn vô sinh hiếm muộn miễn phí',
    href: '/tin-tuc/khong-khi-ngay-cuoi-cua-tuan-le-kham-va-tu-van-vo-sinh-hiem-muon-mien-phi',
    publishedAt: {
      day: '26',
      monthYear: '07/2026',
    },
  },
  {
    id: 'news-08',
    title: 'Chúc mừng ngày chuyên viên phôi học thế giới 25/07',
    excerpt:
      'Cảm ơn những người đã góp phần viết nên những câu chuyện hạnh phúc của rất nhiều gia đình hiếm muộn.',
    category: 'Tin tức',
    image: '/images/Banner-Giam-50-chi-phi-IVF-web-copy.jpg',
    imageAlt: 'Ngày chuyên viên phôi học thế giới',
    href: '/tin-tuc/chuc-mung-ngay-chuyen-vien-phoi-hoc-the-gioi-25-07',
    publishedAt: {
      day: '25',
      monthYear: '07/2026',
    },
  },
  {
    id: 'news-09',
    title: 'Khi người trẻ trên hành trình tìm con',
    excerpt:
      'Vô sinh, hiếm muộn đang không chỉ xảy ra ở những cặp vợ chồng lớn tuổi. Số người trẻ tìm đến các cơ sở hỗ trợ sinh sản ngày càng tăng, trong đó nhiều trường hợp chỉ phát hiện bệnh lý sau nhiều năm mong con. Thăm khám sớm được xem là yếu tố quan trọng để giữ lại cơ hội làm cha, làm mẹ.',
    category: 'Tin tức',
    image: '/images/IMG_5948-scaled.jpg',
    imageAlt: 'Người trẻ trên hành trình tìm con',
    href: '/tin-tuc/khi-nguoi-tre-tren-hanh-trinh-tim-con',
    publishedAt: {
      day: '23',
      monthYear: '07/2026',
    },
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
  external?: boolean
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
    href: 'https://www.facebook.com/benhviendongtam.vn/',
    icon: '/footer/facebook.svg',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@Benhviendongtam',
    icon: '/footer/youtube.svg',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@benhviendongtam',
    icon: '/footer/tiktok.svg',
  },
  {
    label: 'Instagram',
    href: 'https://benhviendongtam.vn/#',
    icon: '/footer/insta.svg',
  },
]

export const footerContactItems: FooterContactItem[] = [
  {
    id: 'address',
    label: 'Trụ sở',
    value: 'Km 12, Quốc lộ 1, Xã Thanh Trì, Thành phố Hà Nội, Việt Nam',
    icon: '/footer/truso.svg',
    href: 'https://share.google/gtN5dBaK7Zaoh6MA1',
    external: true,
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

export type MegaMenuService = {
  name: string
  href: string
}

export type MegaMenuDepartment = {
  id: string
  name: string
  services: MegaMenuService[]
  promoImage: string
}

export const megaMenuData: MegaMenuDepartment[] = [
  {
    id: 'ho-tro-sinh-san',
    name: 'Trung tâm Hỗ trợ sinh sản',
    services: [
      { name: 'Khám và tư vấn hiếm muộn', href: '#' },
      { name: 'Thụ tinh nhân tạo (IUI)', href: '#' },
      { name: 'Thụ tinh ống nghiệm IVF', href: '#' },
      { name: 'Tiêm tinh trùng vào bào tương trứng (ICSI)', href: '#' },
      { name: 'Công nghệ nuôi phôi Time - lapse tích hợp trí tuệ AI', href: '#' },
      { name: 'Trữ lạnh trứng - tinh trùng - phôi', href: '#' },
      { name: 'Sàng lọc di truyền PGT thế hệ mới', href: '#' },
      { name: 'Kỹ thuật điều trị vô sinh nam', href: '#' },
    ],
    promoImage: '/images/banner-dng-tam1.png',
  },
  {
    id: 'phu-san',
    name: 'Khoa Phụ sản',
    services: [
      { name: 'Khám phụ khoa và điều trị các bệnh lý phụ khoa', href: '#' },
      { name: 'Phát hiện sớm ung thư cổ tử cung', href: '#' },
      { name: 'Các thủ thuật phụ khoa', href: '#' },
      { name: 'Quản lí thai nghén', href: '#' },
    ],
    promoImage: '/images/banner-dng-tam1.png',
  },
  {
    id: 'ngoai-tong-hop',
    name: 'Khoa Ngoại tổng hợp',
    services: [
      { name: 'Ngoại tiêu hóa gan mật', href: '#' },
      { name: 'Ngoại chấn thương - chỉnh hình', href: '#' },
    ],
    promoImage: '/images/banner-dng-tam1.png',
  },
  {
    id: 'noi-tong-hop',
    name: 'Khoa Nội tổng hợp',
    services: [
      { name: 'Khám nội tim mạch', href: '#' },
      { name: 'Khám nội hô hấp', href: '#' },
      { name: 'Khám nội tiêu hóa', href: '#' },
    ],
    promoImage: '/images/banner-dng-tam1.png',
  },
  {
    id: 'xet-nghiem',
    name: 'Khoa Xét nghiệm',
    services: [],
    promoImage: '/images/banner-dng-tam1.png',
  },
  {
    id: 'chan-doan-hinh-anh',
    name: 'Khoa Chẩn đoán hình ảnh',
    services: [],
    promoImage: '/images/banner-dng-tam1.png',
  },
  {
    id: 'da-khoa',
    name: 'Hệ thống Phòng khám đa khoa',
    services: [],
    promoImage: '/images/banner-dng-tam1.png',
  },
  {
    id: 'cham-soc-suc-khoe',
    name: 'Trung tâm Chăm sóc sức khỏe',
    services: [],
    promoImage: '/images/banner-dng-tam1.png',
  },
  {
    id: 'dich-vu-dac-biet',
    name: 'Dịch vụ đặc biệt',
    services: [],
    promoImage: '/images/banner-dng-tam1.png',
  },
]
