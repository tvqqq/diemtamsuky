import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Avatar,
  Text,
  Flex,
  Link,
  Icon,
} from '@chakra-ui/react'
import { useUser } from '@auth0/nextjs-auth0'
import { FiUser, FiLogOut } from 'react-icons/fi'

export default function Navbar(props) {
  const { user } = useUser()
  return (
    <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto">
        <button
          className="p-1 mr-5 -ml-1 rounded-md md:hidden focus:outline-none"
          aria-label="Menu"
          onClick={props.onOpen}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="justify-center flex-1 lg:mr-32 hidden md:flex">
          <div className="relative w-full max-w-xl mr-6">
            Phiên bản thử nghiệm...
          </div>
        </div>
        <ul className="flex items-center flex-shrink-0">
          {/* TODO: Notification */}
          {/* <li className="relative">
            <button
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-red"
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
              </svg>
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              ></span>
            </button>
          </li> */}

          <li className="">
            <Menu placement="top-end">
              <MenuButton>
                <Flex align="center">
                  <Icon as={FiUser} />
                  <Text fontSize="lg" mx="2">
                    <strong>{user.nickname}</strong>
                  </Text>
                  <Avatar name={user.nickname} src={user.picture} />
                </Flex>
              </MenuButton>
              <MenuList>
                <MenuItem>Thông tin</MenuItem>
                <MenuDivider />
                <MenuItem>
                  <Link
                    href="/api/auth/logout"
                    color="tomato"
                    className="flex items-center"
                    style={{ textDecoration: 'none' }}
                  >
                    <Icon as={FiLogOut} />
                    <Text ml="1">Đăng xuất</Text>
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </li>
        </ul>
      </div>
    </header>
  )
}
