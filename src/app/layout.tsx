import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Growfy Digital',
  description: 'Growfy is boosting people everyday and every time.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
