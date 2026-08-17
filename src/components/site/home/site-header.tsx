'use client'

import { ChevronDown, Menu, X } from 'lucide-react'
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
          className={`block overflow-hidden transition-all duration-300 ease-in-out xsm:hidden ${
            isAtTop ? 'h-[3rem] opacity-100' : 'h-0 opacity-0'
          }`}
        >
          <div className='flex h-[3rem] w-full items-center justify-end bg-brand-blue pr-[6.25rem] pl-0'>
            <div className='flex items-center gap-[0.75rem]'>
              <a
                href={HOTLINE_TEL}
                className='inline-flex h-[2rem] w-[13.5rem] shrink-0 items-center justify-center gap-[0.375rem] whitespace-nowrap rounded-full bg-white px-[0.75rem] text-[1rem] font-medium leading-[1.5rem] text-brand-blue transition hover:bg-white/95'
              >
                <Image
                  src='/icons/vuesax-bold-call1.svg'
                  alt=''
                  width={16}
                  height={16}
                  className='size-[1rem] shrink-0'
                />

                <span className='whitespace-nowrap'>Tổng đài {HOTLINE}</span>
              </a>

              <Link
                href={'/lien-he' as any}
                className='inline-flex h-[2rem] items-center justify-center rounded-full border border-white px-[0.75rem] text-[0.875rem] font-normal leading-[1.3125rem] text-white transition hover:bg-white/10'
              >
                Liên hệ
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop header */}
        <div className='flex h-[4.5625rem] items-center justify-between px-[6.25rem] xsm:hidden'>
          <Link
            href='/'
            className='min-w-0 shrink'
          >
            <Image
              src='/images/frame2147263310.svg'
              alt='Bệnh viện Đồng Tâm'
              width={392}
              height={67}
              className='h-[3.875rem] w-auto max-w-full xsm:h-[2.125rem]'
              priority
            />
          </Link>

          <Image
            src='/images/iao-mam-hp3.svg'
            alt='Gieo mầm hạnh phúc'
            width={300}
            height={52}
            className='block h-[3.27425rem] w-[18.75rem] shrink-0 xsm:hidden'
            priority
          />

          <div className='flex shrink-0 items-center gap-[0.75rem] xsm:gap-[0.5rem]'>
            <div className='relative block xsm:hidden'>
              <div
                className={cn(
                  'invisible absolute right-[3.25rem] top-1/2 z-10 h-[2.5rem] w-0 -translate-y-1/2 overflow-hidden opacity-0 transition-[width,opacity,visibility] duration-300 ease-out',
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
              className='inline-flex items-center gap-[0.5rem] rounded-full bg-brand-blue px-[1.25rem] py-[0.625rem] text-[1rem] font-normal text-white shadow-[0_0_0_0.25rem_rgba(25,145,199,0.18)] transition-[background-color,box-shadow] duration-300 hover:bg-brand-yellow hover:shadow-[0_0_0_0.25rem_rgba(252,202,69,0.3)] xsm:hidden'
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
              className='hidden size-[2.25rem] items-center justify-center rounded-[0.5rem] text-brand-blue transition hover:bg-surface-blue xsm:inline-flex'
            >
              <Menu className='size-[1.5rem]' />
            </button>
          </div>
        </div>

        {/* Mobile header */}
        <div className='hidden w-full items-center justify-between bg-white px-[0.75rem] py-[0.375rem] shadow-[0_3px_8px_0_rgba(0,0,0,0.06)] xsm:flex'>
          {/* Logo */}
          <Link
            href='/'
            className='shrink-0'
          >
            <Image
              src='/images/logo.png'
              alt='Bệnh viện Đồng Tâm'
              width={39}
              height={42}
              className='h-[2.625rem] w-[2.4375rem] shrink-0'
              priority
            />
          </Link>

          {/* Text */}
          <span className="whitespace-nowrap font-['Bitter'] text-[1.26319rem] font-[800] leading-normal text-[#1991C7]">
            BỆNH VIỆN ĐỒNG TÂM
          </span>

          {/* Hamburger */}
          <button
            type='button'
            aria-label='Mở menu'
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
            className='inline-flex size-[1.5rem] shrink-0 items-center justify-center text-[#1991C7]'
          >
            <Menu
              aria-hidden='true'
              className='size-[1.5rem]'
            />
          </button>
        </div>

        <nav className='block border-t border-black/5 px-[6.25rem] xsm:hidden'>
          <ul className='flex items-center justify-center gap-[1.1875rem]'>
            {navigationItems.map((item) => (
              <li
                key={item.href}
                className={item.hasDropdown ? 'group static' : ''}
              >
                <Link
                  href={item.href as any}
                  className='inline-flex items-center gap-[0.375rem] whitespace-nowrap p-[1rem] text-[0.875rem] font-normal leading-[120%] tracking-[-0.0175rem] text-text-dark-blue transition-colors hover:text-brand-blue'
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

      <div
        className={cn(
          'fixed inset-0 z-50 hidden flex-col bg-white transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] xsm:flex',
          isOpen ? 'translate-x-0' : 'pointer-events-none translate-x-full',
        )}
        role='dialog'
        aria-modal={isOpen ? 'true' : undefined}
        aria-hidden={!isOpen}
        aria-label='Menu'
        inert={!isOpen}
      >
        <div className='flex shrink-0 items-center justify-between border-b border-brand-blue/10 px-[1rem] py-[0.5rem]'>
          <Image
            src='/images/frame2147263310.svg'
            alt='Bệnh viện Đồng Tâm'
            width={392}
            height={67}
            className='h-[2.125rem] w-auto'
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
            <Image
              aria-hidden='true'
              src='/icons/Search Icon.svg'
              alt=''
              width={18}
              height={18}
              className='size-[1.125rem] shrink-0'
            />

            <input
              type='search'
              placeholder='Tìm kiếm dịch vụ...'
              aria-label='Tìm kiếm dịch vụ'
              className='min-w-0 flex-1 bg-transparent text-[0.9375rem] text-text-dark-blue outline-none placeholder:text-text-dark-blue/45'
            />
          </div>
        </div>

        <div
          data-lenis-prevent
          className='min-h-0 flex-1 touch-pan-y overflow-y-auto overscroll-contain [-webkit-overflow-scrolling:touch]'
        >
          <nav className='px-[1rem]'>
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

          <div className='border-t border-brand-blue/10 p-[1rem] pb-[calc(1rem+env(safe-area-inset-bottom))]'>
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
      </div>
    </>
  )
}
