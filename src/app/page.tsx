import { Inter } from 'next/font/google'
import Image from 'next/image'

import styles from './page.module.css'

const fontsLoaded = Inter({
  subsets: ['latin'],
  weight: ['100', '400', '700'],
  variable: '--font-inter',
})

export default function Home() {
  return (
    <main className={`${fontsLoaded.variable} ${styles.main}`}>
      <div className={styles.center}>
        <div className={styles.thirteen}>
          <Image
            src="/ico-white.png"
            alt="Growfy App"
            width={40}
            height={61}
            priority
          />
        </div>
      </div>

      <h3 className={styles.text}>Boosting people.</h3>
    </main>
  )
}
