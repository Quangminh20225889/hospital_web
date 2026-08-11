'use client'

import { ChevronDown, Menu, Search, X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { megaMenuData, navigationItems } from '@/content/home'
import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'

import { MegaMenu } from './mega-menu'

const HOTLINE = '0946 885 885'
const HOTLINE_TEL = 'tel:0946885885'

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [isAtTop, setIsAtTop] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isSearchOpen) {
      searchInputRef.current?.focus()
    }
  }, [isSearchOpen])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setIsAtTop(currentScrollY < 50)

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  const closeMenu = () => {
    setIsOpen(false)
    setOpenSubmenu(null)
  }

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-white transition-transform duration-300 ease-in-out ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div
          className={`hidden overflow-hidden transition-all duration-300 ease-in-out lg:block ${
            isAtTop ? 'h-[3rem] opacity-100' : 'h-0 opacity-0'
          }`}
        >
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
        </div>

        <div className='flex items-center justify-between px-[1rem] py-[0.5rem] sm:px-[1.5rem] lg:px-[6.25rem] lg:py-[0.75rem]'>
          <Link
            href='/'
            className='min-w-0 shrink'
          >
            <Image
              src='/images/frame2147263310.svg'
              alt='Bệnh viện Đồng Tâm'
              width={392}
              height={67}
              className='h-[2.125rem] w-auto max-w-full sm:h-[2.75rem] lg:h-[3.5rem]'
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

          <div className='flex shrink-0 items-center gap-[0.5rem] lg:gap-[0.75rem]'>
            <div className='relative block xsm:hidden'>
              <div
                className={cn(
                  'invisible absolute right-[3rem] top-1/2 z-10 h-[2.5rem] w-0 -translate-y-1/2 overflow-hidden opacity-0 transition-[width,opacity,visibility] duration-300 ease-out lg:right-[3.25rem]',
                  isSearchOpen && 'visible w-[min(15rem,35vw)] opacity-100',
                )}
              >
                <form
                  role='search'
                  onSubmit={(event) => event.preventDefault()}
                  className='absolute right-0 flex h-[2.5rem] w-[min(15rem,35vw)] items-center gap-[0.625rem] rounded-full bg-surface-blue px-[1.25rem]'
                >
                  <Image
                    src='/icons/Search Icon.svg'
                    alt=''
                    width={18}
                    height={18}
                    className='size-[1.125rem] shrink-0'
                  />

                  <input
                    ref={searchInputRef}
                    type='search'
                    aria-label='Tìm kiếm dịch vụ'
                    placeholder='Tìm kiếm dịch vụ...'
                    onKeyDown={(event) => {
                      if (event.key === 'Escape') {
                        setIsSearchOpen(false)
                      }
                    }}
                    className='min-w-0 flex-1 bg-transparent text-[0.9375rem] text-text-dark-blue outline-none placeholder:text-text-dark-blue/45 [&::-webkit-search-cancel-button]:hidden'
                  />
                </form>
              </div>

              <button
                type='button'
                aria-label={isSearchOpen ? 'Đóng tìm kiếm' : 'Tìm kiếm'}
                aria-expanded={isSearchOpen}
                onClick={() => setIsSearchOpen((isOpen) => !isOpen)}
                className='inline-flex size-[2.5rem] items-center justify-center rounded-full bg-surface-blue text-text-dark-blue/35 transition-colors hover:bg-brand-blue/10 hover:text-brand-blue'
              >
                {isSearchOpen ? (
                  <X
                    aria-hidden='true'
                    className='size-[1.125rem]'
                    strokeWidth={1.8}
                  />
                ) : (
                  <Image
                    src='/icons/Search Icon.svg'
                    alt=''
                    width={18}
                    height={18}
                    className='size-[1.125rem]'
                  />
                )}
              </button>
            </div>

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
              aria-expanded={isOpen}
              onClick={() => setIsOpen(true)}
              className='hidden size-[2.25rem] items-center justify-center rounded-[0.5rem] text-brand-blue transition hover:bg-surface-blue tablet:inline-flex tablet:size-[2.5rem] tablet:rounded-full tablet:border tablet:border-brand-blue/20 xsm:inline-flex'
            >
              <Menu className='size-[1.5rem]' />
            </button>
          </div>
        </div>

        <nav className='hidden border-t border-black/5 px-[1rem] sm:px-[1.5rem] lg:block lg:px-[6.25rem]'>
          <ul className='flex items-center justify-between gap-[0.5rem]'>
            {navigationItems.map((item) => (
              <li
                key={item.href}
                className={item.hasDropdown ? 'group static' : ''}
              >
                <Link
                  href={item.href as any}
                  className='inline-flex h-full items-center gap-[0.25rem] whitespace-nowrap py-[0.75rem] text-[0.9375rem] font-medium text-text-dark-blue transition-colors hover:text-brand-blue'
                >
                  {item.label}
                  {item.hasDropdown ? (
                    <ChevronDown
                      className='size-[0.875rem] opacity-60 transition-transform duration-200 group-hover:rotate-180'
                      aria-hidden
                    />
                  ) : null}
                </Link>
                {item.hasDropdown && <MegaMenu />}
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {isOpen ? (
        <div
          className='fixed inset-0 z-50 hidden flex-col bg-white tablet:flex xsm:flex'
          role='dialog'
          aria-modal='true'
          aria-label='Menu'
        >
          <div className='flex shrink-0 items-center justify-between border-b border-brand-blue/10 px-[1rem] py-[0.5rem]'>
            <Image
              src='/images/frame2147263310.svg'
              alt='Bệnh viện Đồng Tâm'
              width={392}
              height={67}
              className='h-[2.125rem] w-auto sm:h-[2.5rem]'
            />

            <button
              type='button'
              aria-label='Đóng menu'
              onClick={closeMenu}
              className='inline-flex size-[2.25rem] shrink-0 items-center justify-center rounded-full bg-surface-blue text-brand-blue'
            >
              <X className='size-[1.25rem]' />
            </button>
          </div>

          <div className='shrink-0 px-[1rem] py-[0.875rem]'>
            <div className='flex items-center gap-[0.625rem] rounded-full bg-surface-blue px-[1rem] py-[0.75rem]'>
              <Search
                aria-hidden='true'
                className='size-[1.125rem] shrink-0 text-brand-blue'
              />

              <input
                type='search'
                placeholder='Tìm kiếm dịch vụ...'
                aria-label='Tìm kiếm dịch vụ'
                className='min-w-0 flex-1 bg-transparent text-[0.9375rem] text-text-dark-blue outline-none placeholder:text-text-dark-blue/45'
              />
            </div>
          </div>

          <nav className='min-h-0 flex-1 overflow-y-auto px-[1rem]'>
            <ul className='divide-y divide-brand-blue/10'>
              {navigationItems.map((item) => {
                if (!item.hasDropdown) {
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href as any}
                        onClick={closeMenu}
                        className='block py-[0.9375rem] text-[1rem] font-medium text-text-dark-blue'
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                }

                const isExpanded = openSubmenu === item.href

                return (
                  <li key={item.href}>
                    <button
                      type='button'
                      aria-expanded={isExpanded}
                      onClick={() => setOpenSubmenu(isExpanded ? null : item.href)}
                      className='flex w-full items-center justify-between gap-[0.75rem] py-[0.9375rem] text-left text-[1rem] font-medium text-text-dark-blue'
                    >
                      {item.label}

                      <ChevronDown
                        aria-hidden='true'
                        className={cn(
                          'size-[1.125rem] shrink-0 text-brand-blue transition-transform duration-200',
                          isExpanded && 'rotate-180',
                        )}
                      />
                    </button>

                    {isExpanded ? (
                      <ul className='pb-[0.75rem] pl-[0.75rem]'>
                        {megaMenuData.map((department) => (
                          <li key={department.id}>
                            <Link
                              href={`/chuyen-khoa/${department.id}` as any}
                              onClick={closeMenu}
                              className='block py-[0.625rem] text-[0.9375rem] text-text-dark-blue/75'
                            >
                              {department.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                )
              })}
            </ul>
          </nav>

          <div className='shrink-0 border-t border-brand-blue/10 p-[1rem] pb-[calc(1rem+env(safe-area-inset-bottom))]'>
            <Link
              href={'/dat-lich' as any}
              onClick={closeMenu}
              className='flex items-center justify-center gap-[0.5rem] rounded-full bg-brand-blue px-[1rem] py-[0.875rem] text-[1rem] font-semibold text-white'
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

            <a
              href={HOTLINE_TEL}
              className='mt-[0.75rem] flex items-center justify-center gap-[0.5rem] rounded-full border border-brand-blue px-[1rem] py-[0.875rem] text-[1rem] font-semibold text-brand-blue'
            >
              <Image
                src='/icons/vuesax-bold-call1.svg'
                alt=''
                width={18}
                height={18}
                className='size-[1.125rem]'
              />
              Gọi tổng đài: {HOTLINE}
            </a>
          </div>
        </div>
      ) : null}
    </>
  )
}
