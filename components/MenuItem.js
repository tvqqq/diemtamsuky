import Image from 'next/image'

export default function MenuItem(props) {
  return (
    <div className="shadow rounded-xl p-4 text-center bg-white bg-opacity-50">
      <Image
        src={`/menu/${props.image}`}
        alt={props.name}
        width={300}
        height={300}
        className="rounded-xl shadow-sm"
      />
      <h2 className="font-serif leading-8 text-3xl text-logo my-1">
        {props.name}
      </h2>
      <p className="text-xl">{props.price} VNĐ</p>
      <p className="text-gray-700 text-sm">{props.note}</p>
    </div>
  )
}
