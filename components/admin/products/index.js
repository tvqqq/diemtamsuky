import { useState, useMemo } from 'react'
import {
  useDisclosure,
  Image,
  Button,
  Icon,
  ButtonGroup,
  Badge,
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Stack,
  Switch,
} from '@chakra-ui/react'
import { FiPlusCircle, FiEdit, FiTrash, FiSearch } from 'react-icons/fi'
import { useRouter } from 'next/router'
import BaseTable from '../shared/BaseTable'
import BaseModal from '../shared/BaseModal'
import DeleteAlertDialog from '../shared/DeleteAlertDialog'
import apiAdmin from '../../../lib/apiAdmin'
import toast from '../../../lib/toast'
import ProductForm from './form'
import { formatPrice, formatDate } from '../../../lib/helper'

const Users = ({ data, model, nameModel }) => {
  //#region Init
  const {isOpen: isOpenForm, onOpen: onOpenForm, onClose: onCloseForm} = useDisclosure() // prettier-ignore
  const {isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete} = useDisclosure() // prettier-ignore
  const [modalId, setmodalId] = useState('')
  const [modalType, setModalType] = useState('create')
  const router = useRouter()
  const [isRefreshing, setIsRefreshing] = useState(false)
  const refreshData = () => {
    setIsRefreshing(true)
    router.replace(router.asPath)
    setIsRefreshing(false)
  }
  //#endregion

  //#region Data
  const products = useMemo(() => data.products, [data.products])
  const columns = useMemo(
    () => [
      {
        Header: '#',
        accessor: '',
        Cell: ({ row }) => {
          return <Badge variant="outline">#{parseInt(row.id) + 1}</Badge>
        },
      },
      {
        Header: 'Hình ảnh',
        accessor: 'image',
        Cell: ({ value }) => {
          return (
            <Image
              src={data.cloudinaryUrl + value}
              alt={value}
              width={50}
              height={50}
              className="rounded-xl shadow-sm"
            />
          )
        },
      },
      {
        Header: 'Bật / Tắt',
        accessor: 'status',
        Cell: ({ row, value }) => {
          return (
            <Stack direction="row">
              <Switch
                size="lg"
                colorScheme="teal"
                isChecked={value}
                onChange={() => onStatusChange(row.original._id, value)}
              />
            </Stack>
          )
        },
      },
      {
        Header: 'Tên món',
        accessor: 'name',
      },
      {
        Header: 'Đơn giá',
        accessor: 'price',
        Cell: ({ value }) => {
          return formatPrice(value)
        },
      },
      {
        Header: 'Ghi chú',
        accessor: 'description',
      },
      {
        Header: 'Actions',
        accessor: '_id',
        Cell: ({ value }) => {
          return (
            <ButtonGroup size="sm" variant="outline" spacing="2">
              <Button colorScheme="teal" onClick={() => onEdit(value)}>
                <Icon as={FiEdit} />
              </Button>
              <Button colorScheme="red" onClick={() => onDelete(value)}>
                <Icon as={FiTrash} />
              </Button>
            </ButtonGroup>
          )
        },
      },
    ],
    []
  )
  //#endregion

  //#region Create
  const onCreate = () => {
    setModalType('create')
    onOpenForm()
  }
  const onConfirmCreate = () => {
    toast(`Thêm ${nameModel} thành công!`)
    onCloseForm()
    refreshData()
  }
  //#endregion Create

  //#region Edit
  const onEdit = (value) => {
    setModalType('edit')
    setmodalId(value)
    onOpenForm()
  }
  const onConfirmEdit = () => {
    toast(`Cập nhật ${nameModel} thành công!`)
    onCloseForm()
    refreshData()
  }
  //#endregion Edit

  //#region Delete
  const onDelete = (id) => {
    setmodalId(id)
    onOpenDelete()
  }
  const [isSubmittingDelete, setIsSubmittingDelete] = useState(false)
  const onConfirmDelete = async () => {
    setIsSubmittingDelete(true)
    const res = await apiAdmin({
      method: 'delete',
      url: `/${model}/${modalId}`,
    })
    setIsSubmittingDelete(false)
    if (res.error !== 0) {
      toast(res.message, 'error')
      return false
    }
    toast(`Xóa ${nameModel} thành công!`)
    onCloseDelete()
    refreshData()
  }
  //#endregion Delete

  const onStatusChange = async (id, status) => {
    const res = await apiAdmin({
      method: 'put',
      url: `/${model}/${id}`,
      body: {
        status: !status,
      },
    })
    if (res.error !== 0) {
      toast(res.message, 'error')
      return false
    }
    refreshData()
  }

  return (
    <>
      {/* Toolbox */}
      <Flex
        mb={2}
        justify="space-between"
        className="flex-col md:flex-row w-auto"
      >
        <InputGroup className="w-100 md:w-80 mb-2">
          <InputLeftElement
            pointerEvents="none"
            children={<FiSearch color="gray.400" />}
          />
          <Input type="text" placeholder="Tên món..." />
        </InputGroup>

        <Button
          leftIcon={<FiPlusCircle />}
          colorScheme="twitter"
          variant="solid"
          onClick={() => onCreate()}
        >
          Thêm mới
        </Button>
      </Flex>

      <BaseTable
        columns={columns}
        data={products}
        isRefreshing={isRefreshing}
      />

      <BaseModal
        isOpen={isOpenForm}
        onClose={onCloseForm}
        nameModel={nameModel}
        modalType={modalType}
        modalId={modalId}
        onConfirmCreate={onConfirmCreate}
        onConfirmEdit={onConfirmEdit}
      >
        <ProductForm model={model} />
      </BaseModal>

      <DeleteAlertDialog
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        isSubmitting={isSubmittingDelete}
        onConfirmDelete={onConfirmDelete}
      />
    </>
  )
}

export default Users
