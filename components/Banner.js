import Image from 'next/image'
import { useState } from 'react'
import styles from './banner.module.css'
import Story from './Story'

export default function Banner() {
  const [story, showStory] = useState(false)
  return (
    <>
      <header
        className={`flex flex-col items-center justify-center h-screen bg-center bg-cover bg-banner-1 ${styles.bgParallax}`}
      >
        <div
          className={`px-3 bg-opacity-30 bg-white rounded-lg shadow-2xl text-center animate__animated animate__fadeIn ${
            story ? 'md:px-8 bg-opacity-60' : 'bg-opacity-30'
          }`}
        >
          {!story ? (
            <>
              <div className="w-80 md:w-96">
                <Image
                  src="/diemtamsuky-logo.svg"
                  alt="Điểm tâm Sú Ky Logo"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  className="animate__animated animate__bounceIn"
                />
              </div>
              <div className="mb-10">
                <button
                  onClick={() => showStory(true)}
                  className="z-100 cursor-pointer text-sm rounded-full shadow-lg bg-logo border-logo text-white px-4 py-2 font-bold border-2 hover:bg-transparent hover:text-logo transition ease-in-out animate__animated animate__bounceIn"
                >
                  Xem giới thiệu
                </button>
              </div>
            </>
          ) : (
            <>
              <Story />
              <div className="mb-10">
                <button
                  onClick={() => showStory(false)}
                  className="z-100 cursor-pointer text-sm rounded-full shadow-lg bg-logo border-logo text-white px-4 py-2 font-bold border-2 hover:bg-transparent hover:text-logo transition ease-in-out"
                >
                  Quay lại
                </button>
              </div>
            </>
          )}
        </div>

        {!story ? (
          <div className="mt-24">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 animate-bounce text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        ) : (
          ''
        )}
      </header>
    </>
  )
}
