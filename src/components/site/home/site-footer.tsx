import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/common/container'
import {
  footerContactItems,
  footerContent,
  footerLegalLinks,
  footerMenuColumns,
  footerSocialLinks,
} from '@/content/home'

export function SiteFooter() {
  return (
    <footer className='mt-[5rem] h-[39.375rem] w-full bg-[#1598c8] p-[1.25rem] xsm:mt-[3rem] xsm:h-auto xsm:p-[0.75rem]'>
      <Container className='h-full max-w-none px-0'>
        <div className='flex h-full flex-col overflow-hidden rounded-[1.375rem] bg-white'>
          <div className='grid min-h-0 flex-1 grid-cols-[31.25rem_minmax(0,1fr)] xsm:block'>
            <div className='grid min-h-0 grid-rows-[15.75rem_1fr] border-r border-[#d9e3e8] xsm:grid-rows-none xsm:border-r-0 xsm:border-b'>
              <div className='flex items-center justify-center border-b border-[#d9e3e8] px-[1.5rem] py-[1.5rem]'>
                <Image
                  src={footerContent.logo.src}
                  alt={footerContent.logo.alt}
                  width={220}
                  height={220}
                  priority
                  className='h-auto w-[9.6875rem] object-contain'
                />
              </div>

              <div className='flex flex-col items-center justify-start px-[3rem] py-[1.5rem] xsm:px-[1.5rem] xsm:py-[1.25rem]'>
                <p className='max-w-[27rem] text-center font-serif text-[2rem] leading-[1.3] italic text-[#f0b635] xsm:text-[1.5rem]'>
                  {footerContent.slogan}
                </p>

                <div className='mt-[2rem] flex flex-wrap justify-center gap-[1.5rem] xsm:mt-[1.25rem] xsm:gap-[1rem]'>
                  {footerSocialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      target='_blank'
                      rel='noreferrer'
                      aria-label={social.label}
                      className='flex size-[4rem] shrink-0 items-center justify-center rounded-full border border-[#d4dee3] bg-white transition-colors hover:border-[#1598c8] hover:bg-[#f2fbfe] xsm:size-[2.75rem] xsm:border-transparent xsm:bg-[#1598c8]'
                    >
                      <Image
                        src={social.icon}
                        alt=''
                        width={28}
                        height={28}
                        className='size-[1.75rem] object-contain xsm:size-[1.25rem] xsm:brightness-0 xsm:invert'
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className='flex min-h-0 min-w-0 flex-col xsm:min-h-fit'>
              <div className='grid h-[15.75rem] shrink-0 grid-cols-[minmax(0,1fr)_24.5rem] border-b border-[#d9e3e8] xsm:h-auto xsm:grid-cols-1'>
                <div className='px-[3.5rem] py-[1.75rem] text-left xsm:px-[1.5rem] xsm:py-[1.5rem] xsm:text-center'>
                  <p className='text-[2rem] font-medium leading-[1.25] text-[#1598c8] xsm:text-[1.5rem]'>
                    {footerContent.hotline.label}:{' '}
                    <Link
                      href={footerContent.hotline.href}
                      className='whitespace-nowrap hover:underline'
                    >
                      {footerContent.hotline.value}
                    </Link>
                  </p>

                  <div className='mt-[1.5rem] space-y-[1rem] xsm:mt-[1.25rem] xsm:space-y-[0.75rem]'>
                    {footerContactItems.map((item) => (
                      <div
                        key={item.id}
                        className='flex items-start justify-start gap-[0.75rem] xsm:justify-center'
                      >
                        {}
                        <span className='flex size-[1.25rem] shrink-0 items-center justify-center xsm:hidden'>
                          <Image
                            src={item.icon}
                            alt=''
                            width={20}
                            height={20}
                            className='size-[1.125rem] object-contain'
                          />
                        </span>

                        <p className='text-[0.9375rem] leading-[1.55] text-[#1d4860]'>
                          <span className='font-semibold text-[#1598c8]'>{item.label}: </span>

                          {item.href ? (
                            <Link
                              href={item.href}
                              target={item.external ? '_blank' : undefined}
                              rel={item.external ? 'noreferrer' : undefined}
                              className='transition-colors hover:text-[#1598c8]'
                            >
                              {item.value}
                            </Link>
                          ) : (
                            item.value
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className='p-[1rem] xsm:border-t xsm:border-[#d9e3e8]'>
                  <div className='relative h-full overflow-hidden rounded-[0.75rem] xsm:h-[11rem]'>
                    <iframe
                      src={footerContent.map.embedUrl}
                      title='Bản đồ Bệnh viện Đồng Tâm'
                      allowFullScreen
                      loading='lazy'
                      referrerPolicy='strict-origin-when-cross-origin'
                      className='h-full w-full border-0'
                    />

                    <Link
                      href={footerContent.map.shareUrl}
                      target='_blank'
                      rel='noreferrer'
                      className='absolute bottom-[0.75rem] left-[0.75rem] rounded-[0.5rem] bg-white px-[0.875rem] py-[0.5rem] text-[0.875rem] font-medium text-[#1d4860] shadow-[0_0.25rem_1rem_rgba(0,0,0,0.12)] transition-colors hover:text-[#1598c8]'
                    >
                      Chỉ đường đến Bệnh viện
                    </Link>
                  </div>
                </div>
              </div>

              <div className='min-h-0 flex-1 px-[3.5rem] py-[1.5rem] xsm:px-[1.5rem]'>
                <div className='grid grid-cols-3 gap-x-[2rem] gap-y-[2rem] xsm:grid-cols-2 xsm:gap-x-[1.5rem] xsm:gap-y-[1.5rem]'>
                  {footerMenuColumns.map((column) => (
                    <div key={column.title}>
                      <h3 className='text-[0.9375rem] font-bold uppercase leading-[1.4] text-[#123f55]'>
                        {column.title}
                      </h3>

                      <ul className='mt-[0.75rem] space-y-[0.5rem]'>
                        {column.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              className='text-[0.875rem] leading-[1.5] text-[#5a7a89] transition-colors hover:text-[#1598c8]'
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className='flex h-[4rem] shrink-0 flex-row items-center justify-between gap-[1rem] border-t border-[#d9e3e8] px-[2rem] text-[0.8125rem] text-[#5a7a89] xsm:h-auto xsm:flex-col xsm:items-stretch xsm:px-[1.5rem] xsm:py-[1.25rem]'>
            <p>{footerContent.copyright}</p>

            <ul className='flex flex-wrap items-center gap-y-[0.5rem]'>
              {footerLegalLinks.map((link, index) => (
                <li
                  key={link.label}
                  className='flex items-center'
                >
                  {index > 0 && (
                    <span
                      aria-hidden='true'
                      className='mx-[0.75rem] h-[0.875rem] w-px bg-[#a8bac3]'
                    />
                  )}

                  <Link
                    href={link.href}
                    className='transition-colors hover:text-[#1598c8]'
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}
