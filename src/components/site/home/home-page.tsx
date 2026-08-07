import { FloatingActions } from '@/components/site/floating-actions'
import { MobileCtaBar } from '@/components/site/mobile-cta-bar'

import { DoctorsSection } from './doctors-section'
import { HeroSection } from './hero-section'
import { NewsSection } from './news-section'
import { ServicesSection } from './services-section'
import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <DoctorsSection />
        <ServicesSection />
        <NewsSection />
      </main>
      <SiteFooter />

      {/* Chừa chỗ cho thanh CTA dính đáy trên mobile */}
      <div
        aria-hidden='true'
        className='h-[3rem] lg:hidden'
      />

      <FloatingActions />
      <MobileCtaBar />
    </>
  )
}
