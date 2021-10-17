import Image from 'next/image'
import styles from './banner.module.css'

export default function BookOrder() {
  return (
    <>
      <header
        className={`flex items-center justify-center bg-center bg-cover bg-banner-2 ${styles.bgParallax}`}
      >
        <div className="my-20 p-10 bg-opacity-60 bg-white rounded-xl shadow-2xl text-center">
          <h1 className="font-serif text-4xl md:text-6xl">Đặt hàng</h1>
          <div className="flex items-center flex-col sm:flex-row mt-2">
            <div className="flex-1">
              {/* SDT */}
              <a
                href="tel:0772292374"
                className="flex flex-row items-center my-1 p-3 transition duration-500 ease-in-out hover:bg-white hover:bg-opacity-70 transform hover:-translate-y-1 hover:scale-105"
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
                  <p className="text-logo font-bold">077.229.2364</p>
                </div>
              </a>

              {/* Facebook */}
              <a
                href="tel:0772292374"
                className="flex flex-row items-center my-1 p-3 transition duration-500 ease-in-out hover:bg-white hover:bg-opacity-70 transform hover:-translate-y-1 hover:scale-105"
              >
                <div className="w-16 h-16 mr-2">
                  <Image
                    src="/icons/icons8-facebook.svg"
                    alt="Facebook"
                    layout="responsive"
                    width={16}
                    height={16}
                  />
                </div>
                <div className="text-lg md:text-2xl text-left">
                  <p className="font-bold">Facebook</p>
                  <p className="text-logo font-bold">077.229.2364</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="tel:0772292374"
                className="flex flex-row items-center my-1 p-3 transition duration-500 ease-in-out hover:bg-white hover:bg-opacity-70 transform hover:-translate-y-1 hover:scale-105"
              >
                <div className="w-16 h-16 mr-2">
                  <Image
                    src="/icons/icons8-instagram.svg"
                    alt="Instagram"
                    layout="responsive"
                    width={16}
                    height={16}
                  />
                </div>
                <div className="text-lg md:text-2xl text-left">
                  <p className="font-bold">Instagram</p>
                  <p className="text-logo font-bold">077.229.2364</p>
                </div>
              </a>
            </div>

            <div className="flex-1 sm:ml-12 border-t-4 sm:border-l-4 sm:border-t-0 border-opacity-40 sm:pl-3 md:pl-12">
              <a
                href="tel:0772292374"
                className="flex flex-row items-center p-3 transition duration-500 ease-in-out hover:bg-white hover:bg-opacity-70 transform hover:-translate-y-1 hover:scale-105"
              >
                <div className="text-2xl text-center">
                  <p className="font-bold">
                    <Image
                      src="/icons/icons8-zalo.svg"
                      alt="Instagram"
                      width={16}
                      height={16}
                    />{' '}
                    Zalo
                  </p>
                  <p className="text-logo font-bold">077.229.2364</p>
                </div>
              </a>
              <Image
                src="/zaloqr.png"
                alt="Zalo"
                layout="responsive"
                width={26}
                height={26}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
