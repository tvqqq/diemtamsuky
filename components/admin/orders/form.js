import React, { useEffect, useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  NumberInput,
  NumberInputField,
  Button,
  Spinner,
  Box,
  Heading,
  Divider,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  List,
  ListItem,
  ListIcon,
  Badge,
} from '@chakra-ui/react'
import {
  FiCheckCircle,
  FiTag,
  FiPhone,
  FiMapPin,
  FiMessageCircle,
} from 'react-icons/fi'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import apiAdmin from '../../../lib/apiAdmin'
import toast from '../../../lib/toast'
import { formatPrice } from '../../../lib/helper'

const UserForm = ({
  modalType,
  modalId,
  model,
  onConfirmCreate,
  onConfirmEdit,
}) => {
  //#region Data
  const [initialValues, setInitialValues] = useState({
    _id: '',
    user: '',
    cart: [],
    total: 0,
    name: '',
    phone: '',
    address: '',
    note: '',
    status: 0,
  })
  const validationSchema = Yup.object({
    name: Yup.string().required('Vui lòng nhập thông tin'),
    address: Yup.string().required('Vui lòng nhập thông tin'),
    phone: Yup.string().required('Vui lòng nhập thông tin'),
    status: Yup.string().required('Vui lòng nhập thông tin'),
  })
  //#endregion

  // Get detail for modal content
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    if (modalType !== 'edit') {
      return []
    }
    setIsLoading(true)
    const fetchData = async () => {
      const res = await apiAdmin({
        method: 'get',
        url: `/${model}/${modalId}`,
      })
      if (res.error !== 0) {
        toast(res.message, 'error')
        setIsLoading(false)
        return []
      }
      setInitialValues(res.data.order)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        const isCreate = modalType === 'create'
        const dataSend = {
          method: isCreate ? 'post' : 'put',
          url: `/${model}/${isCreate ? 'create' : modalId}`,
          body: values,
        }
        const res = await apiAdmin(dataSend)
        setSubmitting(false)
        if (res.error !== 0) {
          toast(res.message, 'error')
          return false
        }
        isCreate ? onConfirmCreate() : onConfirmEdit()
      }}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <Box mb={3}>
            <div className="mb-3 text-3xl">
              <Badge variant="outline">#{initialValues._id}</Badge>
            </div>
            <Heading
              size="md"
              className="uppercase text-logo font-bold tracking-wide"
            >
              Thông tin khách hàng
            </Heading>
            <List spacing={2} my={2}>
              <ListItem>
                <ListIcon as={FiTag} color="gray.500" />
                <strong>Tên KH:</strong> {initialValues.name}
              </ListItem>
              <ListItem>
                <ListIcon as={FiPhone} color="gray.500" />
                <strong>SĐT:</strong> {initialValues.phone}
              </ListItem>
              <ListItem>
                <ListIcon as={FiMapPin} color="gray.500" />
                <strong>Địa chỉ:</strong> {initialValues.address}
              </ListItem>
            </List>
          </Box>

          <Divider />

          <Box my={3}>
            <Heading
              size="md"
              className="uppercase text-logo font-bold tracking-wide"
            >
              Chi tiết đơn hàng
            </Heading>
            <List spacing={2} my={2}>
              <ListItem>
                <ListIcon as={FiMessageCircle} color="red.500" />
                <strong>NOTE:</strong> {initialValues.note}
              </ListItem>
            </List>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Số lượng</Th>
                  <Th>Món</Th>
                  <Th>Thành tiền</Th>
                </Tr>
              </Thead>
              <Tbody>
                {initialValues.cart.map((item) => (
                  <Tr>
                    <Td>{item.quantity}</Td>
                    <Td>{item.product.name}</Td>
                    <Td>{formatPrice(item.subtotal)}</Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>
                    {initialValues.cart.reduce(
                      (result, item) => result + item.quantity,
                      0
                    )}{' '}
                  </Th>
                  <Th>Tổng cộng:</Th>
                  <Th>
                    <span className="text-red-600 font-bold text-lg">
                      {formatPrice(initialValues.total)}
                    </span>
                  </Th>
                </Tr>
              </Tfoot>
            </Table>
          </Box>
        </>

        // (props) => (
        //   <Form>
        //     <Field name="zaloId">
        //       {({ field, form }) => (
        //         <FormControl
        //           isDisabled={true}
        //           isInvalid={form.errors.zaloId && form.touched.zaloId}
        //           className="mb-4"
        //         >
        //           <FormLabel htmlFor="zaloId">Zalo ID</FormLabel>
        //           <Input {...field} id="zaloId" placeholder="Zalo ID" />
        //           <FormErrorMessage>{form.errors.zaloId}</FormErrorMessage>
        //         </FormControl>
        //       )}
        //     </Field>
        //     <Field name="name">
        //       {({ field, form }) => (
        //         <FormControl
        //           isReadOnly={true}
        //           isInvalid={form.errors.name && form.touched.name}
        //           className="mb-4"
        //         >
        //           <FormLabel htmlFor="name">Tên KH</FormLabel>
        //           <Input {...field} id="name" placeholder="Tên KH" />
        //           <FormErrorMessage>{form.errors.name}</FormErrorMessage>
        //         </FormControl>
        //       )}
        //     </Field>
        //     <Field name="phone">
        //       {({ field, form }) => (
        //         <FormControl
        //           isInvalid={form.errors.phone && form.touched.phone}
        //           className="mb-4"
        //         >
        //           <FormLabel htmlFor="phone">Số điện thoại</FormLabel>
        //           <Input {...field} id="phone" placeholder="Số điện thoại" />
        //           <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
        //         </FormControl>
        //       )}
        //     </Field>
        //     <Field name="address">
        //       {({ field, form }) => (
        //         <FormControl
        //           isReadOnly={true}
        //           isInvalid={form.errors.address && form.touched.address}
        //           className="mb-4"
        //         >
        //           <FormLabel htmlFor="address">Địa chỉ</FormLabel>
        //           <Input {...field} id="address" placeholder="Địa chỉ" />
        //           <FormErrorMessage>{form.errors.address}</FormErrorMessage>
        //         </FormControl>
        //       )}
        //     </Field>

        //     <Button
        //       my={4}
        //       leftIcon={<FiCheckCircle />}
        //       colorScheme="pink"
        //       isLoading={props.isSubmitting}
        //       type="submit"
        //     >
        //       Save
        //     </Button>
        //   </Form>
        // )
      )}
    </Formik>
  )
}

export default UserForm
