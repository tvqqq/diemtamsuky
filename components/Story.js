import Image from 'next/image'

export default function Story() {
  return (
    <>
      <div className="flex flex-row sm:px-20 items-center">
        <div className="w-1/2 mr-2 md:w-1/3">
          <Image
            src="/chef.jpg"
            alt="Chef"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </div>
        <div className="w-1/2 md:w-2/3">
          <h1 className="text-4xl md:text-6xl font-mono">
            Câu chuyện của chúng tôi
          </h1>
          <p className="text-base md:text-lg mt-1">
            Baoz Dimsum, nơi ẩm thực Hồng Kông được tôn vinh và chăm chút, Quý
            khách sẽ được hòa mình vào không gian ẩm thực tinh túy nhất với
            nguồn nguyên liệu hảo hạng được tuyển chọn khắt khe từ các sư phụ
            bếp. Không chỉ mang lại các món ăn chất lượng, khi đến nhà hàng,
            thực khách còn được cảm giác như đang ở xứ sở Hương Cảng, bởi lối
            thiết kế sang trọng nhưng vẫn mang đậm nét cổ điển xen lẫn hiện đại.
          </p>
        </div>
      </div>
    </>
  )
}
