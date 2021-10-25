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
} from '@chakra-ui/react'
import { FiPlusCircle, FiEdit, FiTrash, FiSearch } from 'react-icons/fi'
import { useRouter } from 'next/router'
import BaseTable from '../shared/BaseTable'
import BaseModal from '../shared/BaseModal'
import DeleteAlertDialog from '../shared/DeleteAlertDialog'
import apiAdmin from '../../../lib/apiAdmin'
import toast from '../../../lib/toast'
import UserForm from './form'

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
  const users = useMemo(() => data.users, [data.users])
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
        Header: 'Avatar',
        accessor: 'picture',
        Cell: ({ value }) => {
          return (
            <Image
              src={value}
              alt={value}
              width={50}
              height={50}
              className="rounded-xl shadow-sm"
            />
          )
        },
      },
      {
        Header: 'Tên KH',
        accessor: 'name',
      },
      {
        Header: 'Số điện thoại',
        accessor: 'phone',
      },
      {
        Header: 'Địa chỉ',
        accessor: 'address',
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
              {/* <Button colorScheme="red" onClick={() => onDelete(value)}>
                <Icon as={FiTrash} />
              </Button> */}
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
      <Flex mb={2} justify="space-between" className="flex-col md:flex-row w-auto">
        <InputGroup className="w-100 md:w-80 mb-2">
          <InputLeftElement
            pointerEvents="none"
            children={<FiSearch color="gray.400" />}
          />
          <Input type="text" placeholder="Tên hoặc SĐT..." />
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

      <BaseTable columns={columns} data={users} isRefreshing={isRefreshing} />

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

      {/* <DeleteAlertDialog
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        isSubmitting={isSubmittingDelete}
        onConfirmDelete={onConfirmDelete}
      /> */}
    </>
  )
}

export default Users
