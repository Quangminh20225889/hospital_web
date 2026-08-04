'use client'

import { Menu, Phone, Search, X } from 'lucide-react'
import { useState } from 'react'

import { Container } from '@/components/common/container'
import { navigationItems } from '@/content/home'
import { Link } from '@/i18n/navigation'

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header className='sticky top-0 z-40 border-b border-brand-blue/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90'>
        <Container className='flex h-[5.5rem] items-center justify-between gap-[1rem]'>
          <Link
            href='/'
            className='flex items-center gap-[0.625rem] text-[1.125rem] font-bold text-title-blue'
          >
            <span className='inline-flex size-[2.5rem] items-center justify-center rounded-full bg-brand-blue text-[0.875rem] font-semibold text-white'>
              ĐT
            </span>
            Bệnh viện Đồng Tâm
          </Link>

          <nav className='hidden items-center gap-[1.5rem] lg:flex'>
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='text-[0.9375rem] font-medium text-text-dark-blue transition-colors hover:text-brand-blue'
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className='hidden items-center gap-[0.75rem] lg:flex'>
            <button
              type='button'
              aria-label='Tìm kiếm'
              className='inline-flex size-[2.5rem] items-center justify-center rounded-full border border-brand-blue/20 text-brand-blue transition hover:bg-brand-blue/10'
            >
              <Search className='size-[1.125rem]' />
            </button>
            <a
              href='tel:0946885885'
              className='inline-flex items-center gap-[0.5rem] rounded-full bg-brand-blue px-[1rem] py-[0.625rem] text-[0.875rem] font-semibold text-white transition hover:bg-brand-blue/90'
            >
              <Phone className='size-[1rem]' />
              0946 885 885
            </a>
          </div>

          <button
            type='button'
            aria-label='Mở menu'
            onClick={() => setIsOpen(true)}
            className='inline-flex size-[2.5rem] items-center justify-center rounded-full border border-brand-blue/20 text-brand-blue lg:hidden'
          >
            <Menu className='size-[1.25rem]' />
          </button>
        </Container>
      </header>

      {isOpen && (
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

            <nav className='flex flex-1 flex-col divide-y divide-brand-blue/10'>
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className='py-[0.875rem] text-[1rem] font-medium text-text-dark-blue'
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <a
              href='tel:0946885885'
              className='mt-[1rem] inline-flex items-center justify-center gap-[0.5rem] rounded-full bg-brand-blue px-[1rem] py-[0.75rem] text-[0.9375rem] font-semibold text-white'
            >
              <Phone className='size-[1rem]' />
              Gọi tổng đài
            </a>
          </div>
        </div>
      )}
    </>
  )
}
