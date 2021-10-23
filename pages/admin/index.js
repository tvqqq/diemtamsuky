import { useUser } from '@auth0/nextjs-auth0'
import { Box, Text } from '@chakra-ui/react'

export default function Admin() {
  const { user, error, isLoading } = useUser()
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  if (user) {
    return (
      <div>
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
      </div>
    )
  }

  return <a href="/api/auth/login">Login</a>
  // return (
  //   <>
  //     <Box bg="tomato">
  //       <div>Admin Dashboard</div>
  //     </Box>
  //     <Box w="100%" h="200px" bgGradient="linear(to-r, green.200, pink.500)" />
  //     <Text
  //       bgGradient="linear(to-l, #7928CA, #FF0080)"
  //       bgClip="text"
  //       fontSize="6xl"
  //       fontWeight="extrabold"
  //     >
  //       Welcome to Chakra UI
  //     </Text>
  //   </>
  // )
}
