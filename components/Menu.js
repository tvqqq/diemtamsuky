import Image from 'next/image'

export default function Menu() {
  return (
    <>
      <div className="my-20">
        <h1 className="text-center text-6xl md:text-8xl font-mono">
          Các món ăn điểm tâm
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          <div className="shadow-lg rounded-lg p-3 text-center">
            <Image src="/dimsum.webp" alt="Dimsum" width={300} height={300} />
            <h2 className="font-serif font-bold leading-6 text-2xl md:text-4xl text-logo">
              Há cảo
            </h2>
            <p className="text-base md:text-lg">32.000 VNĐ</p>
            <p className="text-sm md:text-base text-gray-700">
              / 1 phần / 4 viên
            </p>
          </div>

          <div className="shadow-lg rounded-lg p-3 text-center">
            <Image src="/dimsum.webp" alt="Dimsum" width={300} height={300} />
            <h2 className="font-serif font-bold leading-6 text-2xl md:text-4xl text-logo">
              Há cảo
            </h2>
            <p className="text-base md:text-lg">32.000 VNĐ</p>
            <p className="text-sm md:text-base text-gray-700">
              / 1 phần / 4 viên
            </p>
          </div>

          <div className="shadow-lg rounded-lg p-3 text-center">
            <Image src="/dimsum.webp" alt="Dimsum" width={300} height={300} />
            <h2 className="font-serif font-bold leading-6 text-2xl md:text-4xl text-logo">
              Há cảo
            </h2>
            <p className="text-base md:text-lg">32.000 VNĐ</p>
            <p className="text-sm md:text-base text-gray-700">
              / 1 phần / 4 viên
            </p>
          </div>

          <div className="shadow-lg rounded-lg p-3 text-center">
            <Image src="/dimsum.webp" alt="Dimsum" width={300} height={300} />
            <h2 className="font-serif font-bold leading-6 text-2xl md:text-4xl text-logo">
              Bánh bao khoai môn
            </h2>
            <p className="text-base md:text-lg">32.000 VNĐ</p>
            <p className="text-sm md:text-base text-gray-700">
              / 1 phần / 4 viên
            </p>
          </div>

          <div className="shadow-lg rounded-lg p-3 text-center">
            <Image src="/dimsum.webp" alt="Dimsum" width={300} height={300} />
            <h2 className="font-serif font-bold leading-6 text-2xl md:text-4xl text-logo">
              Há cảo
            </h2>
            <p className="text-base md:text-lg">32.000 VNĐ</p>
            <p className="text-sm md:text-base text-gray-700">
              / 1 phần / 4 viên
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
