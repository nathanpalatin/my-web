import { ReactNode } from 'react'
import './globals.css'

type Metadata = {
  authors: string
  title: string
  description: string
  themeColor: string
  keywords: string
  viewport: string
  lang: string
}

export const metadata: Metadata = {
  title: 'Growfy Digital',
  description: 'Growfy is boosting people everyday and every time.',
  themeColor: 'dark',
  authors: 'Nathan Palatin',
  keywords:
    'growfy digital, growfy, growfy balneario camboriu, growfy sc, growfy gestora',
  viewport:
    'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  lang: 'pt-BR',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={metadata.lang}>
      <body>{children}</body>
    </html>
  )
}
