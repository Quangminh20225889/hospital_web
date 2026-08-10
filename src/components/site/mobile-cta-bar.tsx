import Image from 'next/image'
import Link from 'next/link'

import { footerContent } from '@/content/home'

export function MobileCtaBar() {
  return (
    <div className='fixed inset-x-0 bottom-0 z-40 bg-brand-blue pb-[env(safe-area-inset-bottom)] lg:hidden'>
      <div className='flex h-[3rem] items-stretch text-[0.8125rem] font-medium text-white'>
        <a
          href={footerContent.hotline.href}
          className='flex flex-1 items-center justify-center gap-[0.375rem] px-[0.5rem] text-center'
        >
          <Image
            src='/icons/vuesax-bold-call1.svg'
            alt=''
            width={16}
            height={16}
            className='size-[1rem] shrink-0 brightness-0 invert'
          />
          Gọi tổng đài
        </a>

        <span
          aria-hidden='true'
          className='my-[0.75rem] w-px shrink-0 bg-white/35'
        />

        <Link
          href='/lien-he'
          className='flex flex-1 items-center justify-center px-[0.5rem] text-center'
        >
          Liên hệ
        </Link>

        <span
          aria-hidden='true'
          className='my-[0.75rem] w-px shrink-0 bg-white/35'
        />

        <Link
          href='/dat-lich'
          className='flex flex-1 items-center justify-center gap-[0.375rem] px-[0.5rem] text-center'
        >
          <Image
            src='/icons/vuesax-bold-calendar-tick.svg'
            alt=''
            width={16}
            height={16}
            className='size-[1rem] shrink-0 brightness-0 invert'
          />
          Đặt lịch khám
        </Link>
      </div>
    </div>
  )
}
