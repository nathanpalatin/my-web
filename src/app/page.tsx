import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}></div>

      <div className={styles.center}>
        <div className={styles.thirteen}>
          <Image
            src="/ico-white.png"
            alt="Growfy App"
            width={110}
            height={151}
          />
        </div>
      </div>

      <div className={styles.grid}>
        <a
          href="https://instagram.com/olagrowfy"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Boosting people.<span></span>
          </h2>
          <p className={inter.className}>Coming soon...</p>
        </a>
      </div>
    </main>
  )
}
