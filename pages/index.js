import Head from 'next/head'
import Banner from '../components/Banner'
import Menu from '../components/Menu'
import BookOrder from '../components/BookOrder'
import Location from '../components/Location'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Điểm Tâm Sú Ky - Dimsum truyền thống Trung Hoa</title>
        <meta name="description" content="Dimsum truyền thống Trung Hoa" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/diemtamsuky-logo.svg" />
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
        © 2021 diemtamsuky.com
      </footer>
    </div>
  )
}
