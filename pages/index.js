import Head from 'next/head'
import Banner from '../components/front/Banner'
import Menu from '../components/front/Menu'
import BookOrder from '../components/front/BookOrder'
import Location from '../components/front/Location'
import { Link } from '@chakra-ui/react'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Điểm Tâm Sú Ky - Dimsum truyền thống Trung Hoa</title>
        <meta
          name="description"
          content="Quán phục vụ các món dimsum truyền thống Trung Hoa: Há Cảo, Xíu Mại, Bánh Xếp, Bánh Bao v.v..."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/card-visit.png" />
        <meta property="og:image:width" content="1000" />
        <meta property="og:image:height" content="600" />
      </Head>

      <main>
        <Banner />

        <div className="bg-back">
          <div className="container mx-auto">
            <Menu />
          </div>
        </div>

        <BookOrder />

        <div className="container mx-auto px-5 md:px-32">
          <Location />
        </div>
      </main>

      <footer className="text-center my-10 text-sm text-gray-700">
        © {new Date().getFullYear()}{' '}
        <Link href="https://g.page/diemtamsuky?share" noLinkClass>
          diemtamsuky
        </Link>
      </footer>

      <div
        className="zalo-chat-widget"
        data-oaid="1953750963713130800"
        data-welcome-message="Điểm tâm Sú Ky xin chào! Bạn muốn quán hỗ trợ thông tin gì ạ?"
        data-autopopup="0"
        data-width=""
        data-height=""
      ></div>
    </div>
  )
}

Home.layout = 'front'
export default Home
