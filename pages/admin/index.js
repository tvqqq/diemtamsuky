import Dashboard from '../../components/admin/Dashboard'

const Admin = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-800">{Admin.title}</h2>
      <Dashboard />
    </>
  )
}

Admin.title = 'Dashboard'
Admin.layout = 'admin'
export default Admin
