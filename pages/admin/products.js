import Head from 'next/head'
import Products from '../../components/admin/products'
import apiAdmin from '../../lib/apiAdmin'
import { Flex, Icon, Box } from '@chakra-ui/react'
import { FiList } from 'react-icons/fi'

const AdminProducts = ({ data }) => {
  return (
    <>
      <Head>
        <title>Menu món ăn - Điểm Tâm Sú Ky</title>
      </Head>

      <Box py={2}>
        <Flex align="center">
          <Icon as={FiList} w={6} h={6} />
          <h2 className="ml-1 text-3xl font-bold text-gray-800">Menu món ăn</h2>
        </Flex>
        <h3 className="text-gray-500 text-sm">Quản lý danh sách các món ăn.</h3>
      </Box>
      <hr />

      <Box boxShadow="lg" p="6" rounded="lg" bg="white" overflowX="auto">
        <Products data={data} />
      </Box>
    </>
  )
}

export async function getServerSideProps(ctx) {
  const res = await apiAdmin({
    ctx,
    method: 'get',
    url: '/products/list',
  })

  // Pass response data to the page via props
  return {
    props: {
      data: res.data,
    },
  }
}

AdminProducts.layout = 'admin'
export default AdminProducts
