import { useRef, useState } from 'react'
import {
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
} from '@chakra-ui/react'

export default function DeleteAlertDialog({
  isOpen,
  onClose,
  isSubmitting,
  onConfirmDelete,
}) {
  const cancelRef = useRef()

  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />
      <AlertDialogContent>
        <AlertDialogHeader>Xác nhận xóa?</AlertDialogHeader>
        <AlertDialogCloseButton />
        <AlertDialogBody>
          Bạn có chắc chắn muốn xóa dữ liệu này? Dữ liệu đã xóa sẽ không khôi
          phục được.
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose}>
            Hủy
          </Button>
          <Button
            colorScheme="red"
            ml={3}
            onClick={() => onConfirmDelete()}
            isLoading={isSubmitting}
          >
            Xác nhận
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
