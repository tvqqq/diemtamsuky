import Image from 'next/image'
import styles from './banner.module.css'

export default function BookOrder() {
  return (
    <>
      <div
        className={`flex items-center justify-center bg-center bg-cover bg-banner-2 ${styles.bgParallax}`}
      >
        <div className="my-20 p-10 bg-opacity-60 bg-white rounded-xl shadow-2xl text-center">
          <h1 className="font-serif text-4xl md:text-6xl mb-3">Đặt hàng</h1>
          <h2 className="text-xl mb-3">- GIAO HÀNG TP.HCM -</h2>
          <a
            href="tel:0903812733"
            className="flex flex-row items-center justify-center my-1 p-3 transition duration-500 ease-in-out hover:bg-white hover:bg-opacity-70 transform hover:-translate-y-1 hover:scale-105"
          >
            <div className="w-16 h-16 mr-2">
              <Image
                src="/icons/icons8-phone.svg"
                alt="Hotline"
                layout="responsive"
                width={16}
                height={16}
              />
            </div>
            <div className="text-lg md:text-2xl text-left">
              <p className="font-bold">Hotline</p>
              <p className="text-logo font-bold">090 3812 733</p>
            </div>
          </a>

          <a
            href="https://zalo.me/0903812733"
            target="_blank"
            className="flex flex-row items-center justify-center my-1 p-3 transition duration-500 ease-in-out hover:bg-white hover:bg-opacity-70 transform hover:-translate-y-1 hover:scale-105"
            rel="noreferrer"
          >
            <div className="w-16 h-16 mr-2">
              <Image
                src="/icons/icons8-zalo.svg"
                alt="Zalo"
                layout="responsive"
                width={16}
                height={16}
              />
            </div>
            <div className="text-lg md:text-2xl text-left">
              <p className="font-bold">Zalo</p>
              <p className="text-logo font-bold">090 3812 733</p>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
