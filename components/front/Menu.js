import MenuItem from './MenuItem'

export default function Menu() {
  const menuItems = [
    {
      name: 'Há cảo',
      price: '32.000',
      image: 'hacao.jpg',
      note: '/ 1 phần / 4 viên',
    },
    {
      name: 'Há cảo thanh cua',
      price: '32.000',
      image: 'hacaothanhcua.jpg',
      note: '/ 1 phần / 3 viên',
    },
    {
      name: 'Xíu mại khô',
      price: '32.000',
      image: 'xiumaikho.jpg',
      note: '/ 1 phần / 4 viên',
    },
    {
      name: 'Xíu mại nước',
      price: '32.000',
      image: 'xiumainuoc.jpg',
      note: '/ 1 phần / 2 viên',
    },
    {
      name: 'Bánh xếp',
      price: '32.000',
      image: 'banhxep.jpg',
      note: '/ 1 phần / 3 viên',
    },
    {
      name: 'Bánh xếp sò điệp',
      price: '32.000',
      image: 'banhxepsodiep.jpg',
      note: '/ 1 phần / 3 viên',
    },
    {
      name: 'Tàu hủ ky sốt dầu hào',
      price: '32.000',
      image: 'tauhuky.jpg',
      note: '/ 1 phần / 2 cuốn',
    },
    {
      name: 'Bánh bao kim sa',
      price: '32.000',
      image: 'banhbaokimsa.jpg',
      note: '/ 1 phần / 2 cái',
    },
    {
      name: 'Bánh bao ngọt cade',
      price: '32.000',
      image: 'banhbaocade.jpg',
      note: '/ 1 phần / 2 cái',
    },
    {
      name: 'Bánh bao thịt trứng cút',
      price: '32.000',
      image: 'banhbaothit.jpg',
      note: '/ 1 phần / 2 cái',
    },
    {
      name: 'Bánh nếp',
      price: '32.000',
      image: 'banhnep.jpg',
      note: '/ 1 phần / 1 cái',
    },
    {
      name: 'Bánh giò',
      price: '18.000',
      image: 'banhgio.jpg',
      note: '/ 1 phần / 1 cái',
    },
    {
      name: 'Bánh bao khoai môn',
      price: '24.000',
      image: 'banhbaokhoaimon.jpg',
      note: '/ 1 phần / 2 cái',
    },
    {
      name: 'Bánh flan',
      price: '10.000',
      image: 'banhflan.jpg',
      note: '/ 1 hộp (10 hộp tặng 1)',
    },
  ]
  return (
    <>
      <div className="pt-16 py-20 px-5 lg:px-32">
        <h1 className="text-center text-6xl font-serif mb-4">Menu</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {menuItems.map((item) => (
            <MenuItem
              key={item.name}
              name={item.name}
              price={item.price}
              image={item.image}
              note={item.note}
            />
          ))}
        </div>
      </div>
    </>
  )
}
