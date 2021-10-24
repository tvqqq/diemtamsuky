import Head from 'next/head'
import Dashboard from '../../components/admin/Dashboard'
import apiAdmin from '../../lib/apiAdmin'

const Admin = ({ data }) => {
  return (
    <>
      <Head>
        <title>Menu món ăn - Điểm Tâm Sú Ky</title>
      </Head>

      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Menu Món Ăn {data.title}
      </h2>
      <Dashboard />
    </>
  )
}

export async function getServerSideProps(ctx) {
  const data = await apiAdmin({
    ctx,
    method: 'get',
    url: '/products/list',
  })
  console.log('data', data)

  // Pass data to the page via props
  return { props: { data } }
}

Admin.layout = 'admin'
export default Admin
