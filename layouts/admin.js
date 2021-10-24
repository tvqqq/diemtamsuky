import { ChakraProvider, useDisclosure } from '@chakra-ui/react'
import { UserProvider } from '@auth0/nextjs-auth0'
import { ProtectRoute } from '../contexts/auth'
import Sidebar from '../components/admin/shared/Sidebar'
import Navbar from '../components/admin/shared/Navbar'

const AdminLayout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <ChakraProvider>
      <UserProvider>
        <ProtectRoute>
          <div className="flex h-screen bg-gray-50">
            <Sidebar isOpen={isOpen} onClose={onClose} />

            <div className="flex flex-col flex-1 w-full">
              <Navbar onOpen={onOpen} />

              <main className="h-full overflow-y-auto">
                <div className="container px-6 mx-auto grid">{children}</div>
              </main>
            </div>
          </div>
        </ProtectRoute>
      </UserProvider>
    </ChakraProvider>
  )
}
export default AdminLayout
