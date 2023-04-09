import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Growfy Digital',
  description: 'Growfy is boosting people everyday and every time.',
}

const fontsLoaded = Inter({
  subsets: ['latin'],
  weight: ['100', '700'],
  variable: '--font-inter',
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={fontsLoaded.variable}>{children}</body>
    </html>
  )
}
