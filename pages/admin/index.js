import { useUser } from '@auth0/nextjs-auth0'
import { Box, Text } from '@chakra-ui/react'

const Admin = () => {
  // const { user, error, isLoading } = useUser()
  // if (isLoading) return <div>Loading...</div>
  // if (error) return <div>{error.message}</div>

  return <div>Admin Dashboard</div>
}

Admin.layout = 'admin'
export default Admin
