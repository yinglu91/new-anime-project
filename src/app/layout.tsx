import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'

import './globals.css'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import { ReactNode } from 'react'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anime Vault',
  description: 'Your favorite anime, all in one place.',
}

type Props = { children: ReactNode }

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body className={dmSans.className}>
        <main className='max-w-7xl mx-auto bg-[#0F1117]'>
          <Hero />

          {children}

          <Footer />
        </main>
      </body>
    </html>
  )
}
