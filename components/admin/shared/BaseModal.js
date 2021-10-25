import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

export default function BaseModal({
  isOpen,
  onClose,
  nameModel,
  modalType,
  modalId,
  onConfirmCreate,
  onConfirmEdit,
  children,
}) {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      closeOnOverlayClick={false}
      size="3xl"
      motionPreset="scale"
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {(modalType === 'create' ? 'Thêm mới' : 'Cập nhật') + ` ${nameModel}`}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {React.cloneElement(children, {
            modalType,
            modalId,
            onConfirmCreate: () => onConfirmCreate(),
            onConfirmEdit: () => onConfirmEdit(),
          })}
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
