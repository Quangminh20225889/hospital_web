'use client'

import { ArrowUpIcon, CalendarCheckIcon, MessageCircleIcon, PhoneCallIcon } from 'lucide-react'
import Link from 'next/link'
import * as React from 'react'

import { Button } from '@/components/ui/button'
import { footerContent } from '@/content/home'
import { cn } from '@/lib/utils'

export function FloatingActions() {
  const [isVisible, setIsVisible] = React.useState(true)
  const [scrollProgress, setScrollProgress] = React.useState(0)

  const lastScrollY = React.useRef(0)
  const animationFrame = React.useRef<number | null>(null)

  React.useEffect(() => {
    lastScrollY.current = window.scrollY

    const updateScrollState = () => {
      const currentScrollY = window.scrollY
      const maximumScroll = document.documentElement.scrollHeight - window.innerHeight

      const nextProgress =
        maximumScroll > 0 ? Math.min(Math.max((currentScrollY / maximumScroll) * 100, 0), 100) : 0

      setScrollProgress(nextProgress)

      const scrollDifference = currentScrollY - lastScrollY.current

      if (Math.abs(scrollDifference) >= 8) {
        if (scrollDifference > 0) {
          setIsVisible(true)
        }

        if (scrollDifference < 0) {
          setIsVisible(false)
        }

        lastScrollY.current = currentScrollY
      }
    }

    const handleScroll = () => {
      if (animationFrame.current !== null) return

      animationFrame.current = window.requestAnimationFrame(() => {
        updateScrollState()
        animationFrame.current = null
      })
    }

    updateScrollState()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })
    window.addEventListener('resize', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)

      if (animationFrame.current !== null) {
        window.cancelAnimationFrame(animationFrame.current)
      }
    }
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <aside
      aria-label='Liên hệ nhanh'
      className={cn(
        'fixed bottom-[3.75rem] right-[0.75rem] z-40 flex flex-col items-center gap-[0.5rem]',
        'lg:bottom-[1rem] lg:right-[1rem] lg:z-50',
        'transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
        isVisible
          ? 'translate-x-0 opacity-100'
          : 'pointer-events-none translate-x-[5rem] opacity-0',
      )}
    >
      {}
      <Button
        asChild
        className={cn(
          'hidden size-[3.75rem] flex-col gap-[0.1875rem] rounded-full border-0 bg-brand-yellow p-0 text-white lg:flex',
          'shadow-[0_0.5rem_1.5rem_rgba(8,53,74,0.14)]',
          'transition-transform duration-300 hover:scale-[1.05] hover:bg-brand-yellow/90',
        )}
      >
        <Link
          href='/dat-lich'
          aria-label='Đặt lịch khám'
          title='Đặt lịch khám'
        >
          <CalendarCheckIcon className='size-[1.375rem]' />

          <span className='text-[0.625rem] font-semibold leading-none'>Đặt lịch</span>
        </Link>
      </Button>

      <Button
        asChild
        className={cn(
          'hidden size-[3.75rem] rounded-full border-0 bg-brand-blue p-0 text-white lg:flex',
          'shadow-[0_0.5rem_1.5rem_rgba(8,53,74,0.14)]',
          'transition-transform duration-300 hover:scale-[1.05] hover:bg-brand-blue/90',
        )}
      >
        <Link
          href={footerContent.hotline.href}
          aria-label={`Gọi ${footerContent.hotline.value}`}
          title={`Gọi ${footerContent.hotline.value}`}
        >
          <PhoneCallIcon className='size-[1.625rem]' />
        </Link>
      </Button>

      <Button
        asChild
        className={cn(
          'size-[2.75rem] rounded-full border-0 bg-brand-blue p-0 text-white lg:size-[3.75rem]',
          'shadow-[0_0.5rem_1.5rem_rgba(8,53,74,0.14)]',
          'transition-transform duration-300 hover:scale-[1.05] hover:bg-brand-blue/90',
        )}
      >
        <Link
          href='https://m.me/benhviendongtam.vn'
          target='_blank'
          rel='noreferrer'
          aria-label='Nhắn tin Messenger'
          title='Nhắn tin Messenger'
        >
          <MessageCircleIcon className='size-[1.25rem] lg:size-[1.625rem]' />
        </Link>
      </Button>

      <div className='relative size-[2.75rem] shrink-0 lg:size-[3.75rem]'>
        <svg
          aria-hidden='true'
          viewBox='0 0 60 60'
          className='pointer-events-none absolute inset-0 size-full -rotate-90'
        >
          <circle
            cx='30'
            cy='30'
            r='28'
            fill='none'
            strokeWidth='3'
            className='stroke-[#e8edf0]'
          />

          <circle
            cx='30'
            cy='30'
            r='28'
            fill='none'
            strokeWidth='3'
            strokeLinecap='round'
            pathLength='100'
            strokeDasharray='100'
            strokeDashoffset={100 - scrollProgress}
            className='stroke-brand-blue '
          />
        </svg>

        <Button
          type='button'
          onClick={handleScrollToTop}
          aria-label={`Lên đầu trang, đã cuộn ${Math.round(scrollProgress)}%`}
          title='Lên đầu trang'
          className={cn(
            'absolute left-1/2 top-1/2 size-[2.375rem] -translate-x-1/2 -translate-y-1/2',
            'lg:size-[3.375rem]',
            'rounded-full border-0 bg-white p-0 text-brand-blue',
            'shadow-[0_0.5rem_1.5rem_rgba(8,53,74,0.14)]',
            'transition-all duration-300',
            'hover:scale-[1.05] hover:bg-brand-blue hover:text-white',
          )}
        >
          <ArrowUpIcon className='size-[1.25rem] lg:size-[1.625rem]' />
        </Button>
      </div>
    </aside>
  )
}
