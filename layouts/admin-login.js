import { ChakraProvider } from '@chakra-ui/react'
import { UserProvider } from '@auth0/nextjs-auth0'
import { ProtectRoute } from '../contexts/auth'

const AdminLoginLayout = ({ children }) => {
  return (
    <ChakraProvider>
      <UserProvider>
        <ProtectRoute>{children}</ProtectRoute>
      </UserProvider>
    </ChakraProvider>
  )
}
export default AdminLoginLayout
