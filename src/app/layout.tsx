import type { Metadata } from 'next'
import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google'
import { NuqsAdapter } from 'nuqs/adapters/next/app'

import { LenisProvider } from '@/components/providers/lenis-provider'
import { QueryProvider } from '@/components/providers/query-provider'
import '@/styles/globals.css'

const ibmPlexSans = IBM_Plex_Sans({
  variable: '--font-ibm-plex-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
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
      <body className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} font-sans antialiased`}>
        <QueryProvider>
          <NuqsAdapter>
            <LenisProvider>{children}</LenisProvider>
          </NuqsAdapter>
        </QueryProvider>
      </body>
    </html>
  )
}
