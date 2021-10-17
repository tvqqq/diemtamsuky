import Image from 'next/image'

export default function Introduction() {
  return (
    <>
      <div className="w-80 md:w-96 p-2 animate__animated animate__zoomIn">
        <div className="grid grid-cols-2 gap-4 mt-5">
          <Image
            src="/introduction.jpeg"
            alt="Introduction"
            width="400"
            height="700"
            className="shadow-2xl rounded"
          />
          <p className="text-left">
            <p className="border-b pb-2 mb-2 border-logo border-opacity-50">
              ✅ Quán phục vụ các món dimsum truyền thống Trung Hoa: Há Cảo, Xíu
              Mại, Bánh Xếp, Bánh Bao v.v...
            </p>
            <p className="border-b pb-2 mb-2 border-logo border-opacity-50">
              🛵 GIAO HÀNG TPHCM (Sáng 6h - Chiều 15h)
            </p>
            <p className="">
              ✅ Quán đảm bảo Dimsum tươi ngon mỗi ngày, đúng vị truyền thống
            </p>
          </p>
        </div>
      </div>
    </>
  )
}
