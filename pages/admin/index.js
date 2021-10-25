import Head from 'next/head'
import Dashboard from '../../components/admin/Dashboard'

const Admin = () => {
  return (
    <>
      <Head>
        <title>Admin - Điểm Tâm Sú Ky</title>
      </Head>

      <h2 className=" text-2xl font-bold text-gray-800">Dashboard</h2>
      <Dashboard />
    </>
  )
}

Admin.layout = 'admin'
export default Admin
