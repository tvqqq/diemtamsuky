import { ChakraProvider, useDisclosure } from '@chakra-ui/react'
import { UserProvider } from '@auth0/nextjs-auth0'
import { ProtectRoute } from '../contexts/auth'
import Sidebar from '../components/admin/shared/Sidebar'
import Navbar from '../components/admin/shared/Navbar'
import { Container } from '@chakra-ui/react'
import Head from 'next/head'

const AdminLayout = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <ChakraProvider>
      <UserProvider>
        <ProtectRoute>
          <Head>
            <title>{children.type.title} - Admin DTSK</title>
          </Head>
          <div className="flex h-screen bg-gray-50">
            <Sidebar isOpen={isOpen} onClose={onClose} />
            <Navbar onOpen={onOpen} />

            <main className="overflow-auto w-full h-full">
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
