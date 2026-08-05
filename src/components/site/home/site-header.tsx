'use client'

import { ChevronDown, Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { navigationItems } from '@/content/home'
import { Link } from '@/i18n/navigation'

const HOTLINE = '0946 885 885'
const HOTLINE_TEL = 'tel:0946885885'

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className='sticky top-0 z-40 bg-white'>
        {/* Top bar */}
        <div className='flex h-[3rem] items-center justify-end bg-brand-blue px-[1rem] sm:px-[1.5rem] lg:pr-[6.25rem] lg:pl-0'>
          <div className='flex items-center gap-[0.75rem]'>
            <a
              href={HOTLINE_TEL}
              className='inline-flex h-[2rem] w-[13.5rem] items-center gap-[0.375rem] rounded-full bg-white px-[0.75rem] text-[0.875rem] font-medium text-brand-blue transition hover:bg-white/95'
            >
              <Image
                src='/icons/vuesax-bold-call1.svg'
                alt=''
                width={16}
                height={16}
                className='size-[1rem] shrink-0'
              />
              <span>Tổng đài {HOTLINE}</span>
            </a>

            <Link
              href={'/lien-he' as any}
              className='inline-flex h-[2rem] items-center justify-center rounded-full border border-white px-[1.25rem] text-[0.875rem] font-medium text-white transition hover:bg-white/10'
            >
              Liên hệ
            </Link>
          </div>
        </div>

        {/* Logo + actions */}
        <div className='flex items-center justify-between px-[1rem] py-[0.75rem] sm:px-[1.5rem] lg:px-[6.25rem]'>
          <Link
            href='/'
            className='shrink-0'
          >
            <Image
              src='/images/frame2147263310.svg'
              alt='Bệnh viện Đồng Tâm'
              width={392}
              height={67}
              className='h-[3.5rem] w-auto'
              priority
            />
          </Link>

          <Image
            src='/images/iao-mam-hp3.svg'
            alt='Gieo mầm hạnh phúc'
            width={300}
            height={52}
            className='hidden h-[2.75rem] w-auto xl:block'
            priority
          />

          <div className='flex items-center gap-[0.75rem]'>
            <button
              type='button'
              aria-label='Tìm kiếm'
              className='hidden size-[2.5rem] items-center justify-center rounded-full bg-surface-blue transition hover:bg-brand-blue/10 sm:inline-flex'
            >
              <Image
                src='/icons/Search Icon.svg'
                alt=''
                width={18}
                height={18}
                className='size-[1.125rem]'
              />
            </button>

            <Link
              href={'/dat-lich' as any}
              className='hidden items-center gap-[0.5rem] rounded-full bg-brand-blue px-[1.25rem] py-[0.625rem] text-[0.9375rem] font-semibold text-white shadow-[0_0_0_0.25rem_rgba(25,145,199,0.18)] transition hover:bg-brand-blue/90 sm:inline-flex'
            >
              <Image
                src='/icons/vuesax-bold-calendar-tick.svg'
                alt=''
                width={20}
                height={20}
                className='size-[1.25rem]'
              />
              Đặt lịch khám
            </Link>

            <button
              type='button'
              aria-label='Mở menu'
              onClick={() => setIsOpen(true)}
              className='inline-flex size-[2.5rem] items-center justify-center rounded-full border border-brand-blue/20 text-brand-blue lg:hidden'
            >
              <Menu className='size-[1.25rem]' />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className='hidden border-t border-black/5 px-[1rem] sm:px-[1.5rem] lg:block lg:px-[6.25rem]'>
          <ul className='flex items-center justify-between gap-[0.5rem] py-[0.75rem]'>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href as any}
                  className='inline-flex items-center gap-[0.25rem] whitespace-nowrap text-[0.9375rem] font-medium text-text-dark-blue transition-colors hover:text-brand-blue'
                >
                  {item.label}
                  {item.hasDropdown ? (
                    <ChevronDown
                      className='size-[0.875rem] opacity-60'
                      aria-hidden
                    />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {isOpen ? (
        <div
          className='fixed inset-0 z-50 bg-brand-dark/35 lg:hidden'
          role='presentation'
          onClick={() => setIsOpen(false)}
        >
          <div
            className='ml-auto flex h-full w-[85%] max-w-[22rem] flex-col bg-white p-[1rem]'
            role='dialog'
            aria-modal='true'
            onClick={(event) => event.stopPropagation()}
          >
            <div className='mb-[1rem] flex items-center justify-between'>
              <span className='text-[1rem] font-semibold text-title-blue'>Menu</span>
              <button
                type='button'
                aria-label='Đóng menu'
                onClick={() => setIsOpen(false)}
                className='inline-flex size-[2.25rem] items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue'
              >
                <X className='size-[1.125rem]' />
              </button>
            </div>

            <nav className='flex flex-1 flex-col divide-y divide-brand-blue/10 overflow-y-auto'>
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href as any}
                  onClick={() => setIsOpen(false)}
                  className='py-[0.875rem] text-[1rem] font-medium text-text-dark-blue'
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className='mt-[1rem] flex flex-col gap-[0.75rem]'>
              <a
                href={HOTLINE_TEL}
                className='inline-flex items-center justify-center gap-[0.5rem] rounded-full bg-white px-[1rem] py-[0.75rem] text-[0.9375rem] font-semibold text-brand-blue ring-1 ring-brand-blue'
              >
                <Image
                  src='/icons/vuesax-bold-call1.svg'
                  alt=''
                  width={16}
                  height={16}
                  className='size-[1rem]'
                />
                Tổng đài {HOTLINE}
              </a>
              <Link
                href={'/dat-lich' as any}
                onClick={() => setIsOpen(false)}
                className='inline-flex items-center justify-center gap-[0.5rem] rounded-full bg-brand-blue px-[1rem] py-[0.75rem] text-[0.9375rem] font-semibold text-white'
              >
                <Image
                  src='/icons/vuesax-bold-calendar-tick.svg'
                  alt=''
                  width={20}
                  height={20}
                  className='size-[1.25rem]'
                />
                Đặt lịch khám
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
