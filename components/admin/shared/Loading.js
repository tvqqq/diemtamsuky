import Image from 'next/image'

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-48 text-center animate-pulse">
        <Image
          src="/diemtamsuky-logo.svg"
          alt="Điểm tâm Sú Ky Logo"
          width="100%"
          height="100%"
          layout="responsive"
        />
      </div>
    </div>
  )
}
