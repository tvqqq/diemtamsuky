import Head from 'next/head'
import Dashboard from '../../components/admin/Dashboard'

const Admin = () => {
  return (
    <>
      <Head>
        <title>Admin - Điểm Tâm Sú Ky</title>
      </Head>

      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Dashboard
      </h2>
      <Dashboard />
    </>
  )
}

Admin.layout = 'admin'
export default Admin
