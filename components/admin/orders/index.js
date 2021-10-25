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
  Box,
  Text,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import {
  FiPlusCircle,
  FiEdit,
  FiTrash,
  FiSearch,
  FiTag,
  FiPhone,
  FiMapPin,
} from 'react-icons/fi'
import { useRouter } from 'next/router'
import BaseTable from '../shared/BaseTable'
import BaseModal from '../shared/BaseModal'
import DeleteAlertDialog from '../shared/DeleteAlertDialog'
import apiAdmin from '../../../lib/apiAdmin'
import toast from '../../../lib/toast'
import { formatPrice, formatDate } from '../../../lib/helper'
import UserForm from './form'

const Orders = ({ data, model, nameModel }) => {
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
  const orders = useMemo(() => data.orders, [data.orders])
  const columns = useMemo(
    () => [
      {
        Header: 'Thông tin đơn hàng',
        accessor: '',
        Cell: ({ row }) => {
          return (
            <Box>
              <Text className="my-1">
                <Badge
                  variant="outline"
                  className="cursor-pointer hover:bg-gray-200"
                  onClick={() => onEdit(row.original._id)}
                >
                  #{row.original._id}
                </Badge>
              </Text>
              <Text className="my-1" fontSize="sm">
                Tổng tiền: {formatPrice(row.original.total)}
              </Text>
            </Box>
          )
        },
      },
      {
        Header: 'Thông tin người đặt',
        accessor: '',
        Cell: ({ row }) => {
          return (
            <Box>
              <List spacing={2} my={2}>
                <ListItem>
                  <ListIcon as={FiTag} color="gray.500" />
                  {row.original.name}
                </ListItem>
                <ListItem>
                  <ListIcon as={FiPhone} color="gray.500" />
                  {row.original.phone}
                </ListItem>
                <ListItem>
                  <ListIcon as={FiMapPin} color="gray.500" />
                  {row.original.address}
                </ListItem>
              </List>
            </Box>
          )
        },
      },

      {
        Header: 'Trạng thái',
        accessor: 'status',
      },
      {
        Header: 'Thời gian đặt hàng',
        accessor: 'createdAt',
        Cell: ({ value }) => {
          return <span>{formatDate(value)}</span>
        },
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

  return (
    <>
      {/* Toolbox */}
      <Flex mb={4} justify="space-between">
        <InputGroup width="96">
          <InputLeftElement
            pointerEvents="none"
            children={<FiSearch color="gray.400" />}
          />
          <Input
            type="text"
            placeholder="Tìm kiếm nhanh theo tên khách hàng hoặc số điện thoại..."
          />
        </InputGroup>

        {/* <Button
          leftIcon={<FiPlusCircle />}
          colorScheme="twitter"
          variant="solid"
          onClick={() => onCreate()}
        >
          Thêm mới
        </Button> */}
      </Flex>

      <BaseTable columns={columns} data={orders} isRefreshing={isRefreshing} />

      <BaseModal
        isOpen={isOpenForm}
        onClose={onCloseForm}
        nameModel={nameModel}
        modalType={modalType}
        modalId={modalId}
        onConfirmCreate={onConfirmCreate}
        onConfirmEdit={onConfirmEdit}
      >
        <UserForm model={model} />
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

export default Orders
