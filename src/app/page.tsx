import { Inter } from 'next/font/google'
import Image from 'next/image'
import styles from './page.module.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
})

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <div className={styles.thirteen}>
          <Image src="/ico-white.png" alt="Growfy App" width={40} height={61} />
        </div>
      </div>

      <h1 className={inter.className}>Boosting people.</h1>
    </main>
  )
}
