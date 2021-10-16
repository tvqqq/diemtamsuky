import Image from 'next/image'
import styles from './banner.module.css'

export default function Banner() {
  return (
    <>
      <header
        className={`flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover ${styles.banner1}`}
      >
        <div className="p-10 text-2xl bg-opacity-30 bg-white rounded-full shadow-2xl">
          <Image
            src="/diemtamsuky-logo.svg"
            alt="Điểm tâm Sú Ky Logo"
            width={300}
            height={300}
          />
        </div>
      </header>
    </>
  )
}
