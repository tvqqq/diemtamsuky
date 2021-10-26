import Users from '../../components/admin/users'
import apiAdmin from '../../lib/apiAdmin'
import { Flex, Icon, Box } from '@chakra-ui/react'
import { FiUsers } from 'react-icons/fi'

// Declare model props
const MODEL = 'users'
const NAME_MODEL = 'khách hàng'
const TITLE = 'Khách hàng'

const AdminUsers = ({ data }) => {
  return (
    <>
      <Box py={2}>
        <Flex align="center">
          <Icon as={FiUsers} w={6} h={6} />
          <h2 className="ml-1 text-3xl font-bold text-gray-800">{TITLE}</h2>
        </Flex>
        <h3 className="text-gray-500 text-sm">
          Quản lý danh sách khách hàng Zalo dùng app.
        </h3>
      </Box>
      <hr />

      <Box boxShadow="lg" p="6" rounded="lg" bg="white" overflowX="auto">
        <Users data={data} model={MODEL} nameModel={NAME_MODEL} />
      </Box>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const res = await apiAdmin({
    ctx,
    method: 'get',
    url: `/${MODEL}/list`,
  })

  return {
    props: {
      data: res.data,
    },
  }
}

AdminUsers.title = TITLE
AdminUsers.layout = 'admin'
export default AdminUsers
