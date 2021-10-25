import { useState, useEffect } from 'react'
import {
  Flex,
  Text,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Avatar,
  Link,
  Box,
} from '@chakra-ui/react'
import { FiHome, FiList, FiUser, FiLogOut } from 'react-icons/fi'
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0'

const MenuContent = () => {
  const router = useRouter()
  const { user } = useUser()
  const isActive = (page) => router.asPath === page.url

  const pages = [
    {
      name: 'Dashboard',
      url: '/admin',
      icon: FiHome,
    },
    {
      name: 'Menu món ăn',
      url: '/admin/products',
      icon: FiList,
    },
  ]

  return (
    <>
      <div className="py-4">
        <a className="ml-6 text-lg font-bold text-gray-800" href="#">
          <Text
            as={'span'}
            bgGradient="linear(to-r, red.400,pink.400)"
            bgClip="text"
            fontSize="2xl"
          >
            Điểm tâm Sú Ky
          </Text>
        </a>
        <div className="mt-6 border-t-2 border-gray-100">
          <ul>
            {pages.map((page) => (
              <li key={page.url} className="relative ">
                {isActive(page) && (
                  <span
                    className="absolute inset-y-0 left-0 w-1 bg-red-400 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                )}
                <a
                  className={`inline-flex items-center w-full font-semibold transition-colors duration-150 hover:text-gray-900 p-3 ${
                    isActive(page) ? 'bg-red-100' : ''
                  }`}
                  href={page.url}
                >
                  <Icon as={page.icon} />
                  <Text className="ml-4">{page.name}</Text>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-6 my-6">
          <button className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-logo border border-transparent rounded-lg active:bg-logo hover:bg-red-700 focus:outline-none focus:shadow-outline-red">
            Mở Zalo OA (TODO)
            <span className="ml-2" aria-hidden="true">
              +
            </span>
          </button>
        </div>

        <div className="absolute bottom-0 border-t-2 p-4 block w-full md:w-64">
          <Flex align="center" justify="space-between">
            <Avatar name={user.nickname} src={user.picture} />
            <Box>
              <Text fontSize="lg">
                <strong>{user.nickname}</strong>
              </Text>
              <Text fontSize="xs">{user.email}</Text>
            </Box>
            <Link
              href="/api/auth/logout"
              color="tomato"
              className="flex items-center"
              style={{ textDecoration: 'none' }}
            >
              <Icon as={FiLogOut} />
            </Link>
          </Flex>
        </div>
      </div>
    </>
  )
}

export default function Sidebar(props) {
  const [width, setWidth] = useState(window.innerWidth)
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])
  const isMobile = width <= 767

  return (
    <aside className="z-20 hidden w-64 overflow-y-auto md:block flex-shrink-0 bg-white shadow-lg">
      {!isMobile ? (
        <MenuContent />
      ) : (
        <Drawer placement="left" onClose={props.onClose} isOpen={props.isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <MenuContent />
          </DrawerContent>
        </Drawer>
      )}
    </aside>
  )
}
