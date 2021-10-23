import { Box, Text } from '@chakra-ui/react'

export default function Login() {
  return (
    <>
      <Box bg="tomato">
        <div>Admin Dashboard</div>
      </Box>
      <Box w="100%" h="200px" bgGradient="linear(to-r, green.200, pink.500)" />
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
      >
        Welcome to Chakra UI
      </Text>
    </>
  )
}
