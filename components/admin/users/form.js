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
} from '@chakra-ui/react'
import { FiCheckCircle } from 'react-icons/fi'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import apiAdmin from '../../../lib/apiAdmin'
import toast from '../../../lib/toast'

const UserForm = ({
  modalType,
  modalId,
  model,
  onConfirmCreate,
  onConfirmEdit,
}) => {
  //#region Data
  const [initialValues, setInitialValues] = useState({
    zaloId: '',
    birthday: '',
    name: '',
    picture: '',
    status: 0,
    address: '',
    phone: '',
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
      setInitialValues(res.data.user)
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
        (props) => (
          <Form>
            <Field name="zaloId">
              {({ field, form }) => (
                <FormControl
                  isDisabled={true}
                  isInvalid={form.errors.zaloId && form.touched.zaloId}
                  className="mb-4"
                >
                  <FormLabel htmlFor="zaloId">Zalo ID</FormLabel>
                  <Input {...field} id="zaloId" placeholder="Zalo ID" />
                  <FormErrorMessage>{form.errors.zaloId}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="name">
              {({ field, form }) => (
                <FormControl
                  isReadOnly={true}
                  isInvalid={form.errors.name && form.touched.name}
                  className="mb-4"
                >
                  <FormLabel htmlFor="name">Tên KH</FormLabel>
                  <Input {...field} id="name" placeholder="Tên KH" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="phone">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.phone && form.touched.phone}
                  className="mb-4"
                >
                  <FormLabel htmlFor="phone">Số điện thoại</FormLabel>
                  <Input {...field} id="phone" placeholder="Số điện thoại" />
                  <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="address">
              {({ field, form }) => (
                <FormControl
                  isReadOnly={true}
                  isInvalid={form.errors.address && form.touched.address}
                  className="mb-4"
                >
                  <FormLabel htmlFor="address">Địa chỉ</FormLabel>
                  <Input {...field} id="address" placeholder="Địa chỉ" />
                  <FormErrorMessage>{form.errors.address}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Button
              my={4}
              leftIcon={<FiCheckCircle />}
              colorScheme="pink"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Save
            </Button>
          </Form>
        )
      )}
    </Formik>
  )
}

export default UserForm
