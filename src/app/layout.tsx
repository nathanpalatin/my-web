import { ReactNode } from 'react'
import './globals.css'

export const metadata = {
  title: 'Growfy App',
  description: 'Growfy is a simple App for developing',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
