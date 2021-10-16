import Image from 'next/image'

export default function Menu() {
  return (
    <>
      <div className="py-20 px-5 lg:px-32">
        <h1 className="text-center text-5xl md:text-7xl font-mono mb-4">
          Các món điểm tâm
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="shadow-sm rounded-xl p-4 text-center bg-white bg-opacity-50">
            <Image
              src="/dimsum.webp"
              alt="Dimsum"
              width={300}
              height={300}
              className="rounded-xl shadow"
            />
            <h2 className="font-serif leading-8 text-3xl text-logo my-1">
              Há cảo Há cảo Xíu mại
            </h2>
            <p className="text-xl">32.000 VNĐ</p>
            <p className="text-base text-gray-700">/ 1 phần / 4 viên</p>
          </div>

          <div className="shadow-sm rounded-xl p-4 text-center bg-white bg-opacity-50">
            <Image
              src="/dimsum.webp"
              alt="Dimsum"
              width={300}
              height={300}
              className="rounded-xl shadow"
            />
            <h2 className="font-serif leading-8 text-3xl text-logo my-1">
              Há cảo Há cảo Xíu mại
            </h2>
            <p className="text-xl">32.000 VNĐ</p>
            <p className="text-base text-gray-700">/ 1 phần / 4 viên</p>
          </div>

          <div className="shadow-sm rounded-xl p-4 text-center bg-white bg-opacity-50">
            <Image
              src="/dimsum.webp"
              alt="Dimsum"
              width={300}
              height={300}
              className="rounded-xl shadow"
            />
            <h2 className="font-serif leading-8 text-3xl text-logo my-1">
              Há cảo Há cảo Xíu mại
            </h2>
            <p className="text-xl">32.000 VNĐ</p>
            <p className="text-base text-gray-700">/ 1 phần / 4 viên</p>
          </div>

          <div className="shadow-sm rounded-xl p-4 text-center bg-white bg-opacity-50">
            <Image
              src="/dimsum.webp"
              alt="Dimsum"
              width={300}
              height={300}
              className="rounded-xl shadow"
            />
            <h2 className="font-serif leading-8 text-3xl text-logo my-1">
              Há cảo Há cảo Xíu mại
            </h2>
            <p className="text-xl">32.000 VNĐ</p>
            <p className="text-base text-gray-700">/ 1 phần / 4 viên</p>
          </div>
        </div>
      </div>
    </>
  )
}
