import Orders from '../../components/admin/Orders'
import apiAdmin from '../../lib/apiAdmin'
import { Flex, Icon, Box } from '@chakra-ui/react'
import { FiShoppingBag } from 'react-icons/fi'

// Declare model props
const MODEL = 'orders'
const NAME_MODEL = 'đơn hàng'
const TITLE = 'Đơn hàng'

const AdminOrders = ({ data }) => {
  return (
    <>
      <Box py={2}>
        <Flex align="center">
          <Icon as={FiShoppingBag} w={6} h={6} />
          <h2 className="ml-1 text-3xl font-bold text-gray-800">{TITLE}</h2>
        </Flex>
        <h3 className="text-gray-500 text-sm">
          Quản lý đơn hàng book trên Zalo.
        </h3>
      </Box>
      <hr />

      <Box boxShadow="lg" p="6" rounded="lg" bg="white" overflowX="auto">
        <Orders data={data} model={MODEL} nameModel={NAME_MODEL} />
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

AdminOrders.title = TITLE
AdminOrders.layout = 'admin'
export default AdminOrders
