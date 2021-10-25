import React, { useEffect, useState } from 'react'
import {
  useToast,
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

const ProductForm = ({
  modalType,
  modalId,
  onConfirmCreate,
  onConfirmEdit,
}) => {
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(false)

  //#region Data
  const itemName = 'products'
  const [initialValues, setInitialValues] = useState({
    name: '',
    price: 0,
    description: '',
    image: '',
  })
  //#endregion

  // Get detail for modal content
  useEffect(() => {
    if (modalType !== 'edit') {
      return []
    }
    setIsLoading(true)
    const fetchData = async () => {
      const res = await apiAdmin({
        method: 'get',
        url: `/${itemName}/${modalId}`,
      })
      if (res.error !== 0) {
        toast(res.message, 'danger')
        setIsLoading(false)
        return []
      }
      setInitialValues(res.data.product)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validationSchema={Yup.object({
        name: Yup.string().required('Vui lòng nhập thông tin'),
        price: Yup.string().required('Vui lòng nhập thông tin'),
        description: Yup.string().required('Vui lòng nhập thông tin'),
        image: Yup.string().required('Vui lòng nhập thông tin'),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        const isCreate = modalType === 'create'
        const dataSend = {
          method: isCreate ? 'post' : 'put',
          url: `/${itemName}/${isCreate ? 'create' : modalId}`,
          body: values,
        }
        const res = await apiAdmin(dataSend)
        if (res.error !== 0) {
          toast(res.message, 'danger')
        }
        isCreate ? onConfirmCreate() : onConfirmEdit()
        setSubmitting(false)
      }}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        (props) => (
          <Form>
            <Field name="name">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.name && form.touched.name}
                  className="mb-4"
                >
                  <FormLabel htmlFor="name">Tên món</FormLabel>
                  <Input {...field} id="name" placeholder="Tên món" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="price">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.price && form.touched.price}
                  className="mb-4"
                >
                  <FormLabel htmlFor="price">Đơn giá</FormLabel>
                  {/* <NumberInput>
                  <NumberInputField
                    {...field}
                    id="price"
                    placeholder="Đơn giá"
                  />
                </NumberInput>*/}
                  <Input {...field} id="price" placeholder="Đơn giá" />
                  <FormErrorMessage>{form.errors.price}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="description">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.description && form.touched.description
                  }
                  className="mb-4"
                >
                  <FormLabel htmlFor="description">Ghi chú</FormLabel>
                  <Input {...field} id="description" placeholder="Ghi chú" />
                  <FormErrorMessage>{form.errors.description}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="image">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.image && form.touched.image}
                  className="mb-4"
                >
                  <FormLabel htmlFor="image">Hình ảnh</FormLabel>
                  <Input {...field} id="image" placeholder="URL hình ảnh" />
                  <FormHelperText>
                    Upload hình ảnh lên Cloudinary để lấy URL. Chỉ nhập path
                    file, ví dụ: hacao.png
                  </FormHelperText>
                  <FormErrorMessage>{form.errors.image}</FormErrorMessage>
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

export default ProductForm
