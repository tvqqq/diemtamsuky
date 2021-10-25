import { ChakraProvider, useDisclosure } from '@chakra-ui/react'
import { UserProvider } from '@auth0/nextjs-auth0'
import { ProtectRoute } from '../contexts/auth'
import Sidebar from '../components/admin/shared/Sidebar'
import Navbar from '../components/admin/shared/Navbar'
import { Container } from '@chakra-ui/react'

const AdminLayout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <ChakraProvider>
      <UserProvider>
        <ProtectRoute>
          <div className="flex h-screen bg-gray-50">
            <Sidebar isOpen={isOpen} onClose={onClose} />
            <Navbar onOpen={onOpen} />

            <main className="w-full h-full overflow-auto">
              <Container maxW="container.xl" className="my-1 md:my-6">
                {children}
              </Container>
            </main>
          </div>
        </ProtectRoute>
      </UserProvider>
    </ChakraProvider>
  )
}
export default AdminLayout
