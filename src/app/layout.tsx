import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

import { LenisProvider } from '@/components/providers/lenis-provider'
import { QueryProvider } from '@/components/providers/query-provider'
import '@/styles/globals.css'

const googleSansFlex = localFont({
  src: '../../public/font/GoogleSansFlex-VariableFont_GRAD,ROND,opsz,slnt,wdth,wght.ttf',
  variable: '--font-google-sans-flex',
  display: 'swap',
  weight: '100 900',
  style: 'normal',
  fallback: ['Arial', 'sans-serif'],
})

const ibmPlexMono = IBM_Plex_Mono({
  variable: '--font-ibm-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Next.js 16 Template Docs',
  description: 'Source overview and how this Next.js 16 template works.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${googleSansFlex.variable} ${ibmPlexMono.variable} font-sans antialiased`}>
        <QueryProvider>
          <NuqsAdapter>
            <LenisProvider>{children}</LenisProvider>
          </NuqsAdapter>
        </QueryProvider>
      </body>
    </html>
  )
}
