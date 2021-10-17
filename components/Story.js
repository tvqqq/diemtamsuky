import Image from 'next/image'

export default function Story() {
  return (
    <>
      <div className="w-72 text-center p-2 animate__animated animate__zoomIn">
        <Image
          src="/chef.jpg"
          alt="Chef"
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
        />
        <p className="my-2 text-sm md:text-base">
          <strong>Điểm tâm Sú Ky</strong> - nơi ẩm thực Hồng Kông được tôn vinh
          và chăm chút, Quý khách sẽ được hòa mình vào không gian ẩm thực tinh
          túy nhất với nguồn nguyên liệu hảo hạng được tuyển chọn khắt khe từ
          các sư phụ bếp. Không chỉ mang lại các món ăn chất lượng, khi đến nhà
          hàng, thực khách còn được cảm giác như đang ở xứ sở Hương Cảng, bởi
          lối thiết kế sang trọng nhưng vẫn mang đậm nét cổ điển xen lẫn hiện
          đại.
        </p>
      </div>
    </>
  )
}
