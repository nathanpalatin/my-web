import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
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

      <h1 className={styles.text}>Boosting people.</h1>
    </main>
  )
}
