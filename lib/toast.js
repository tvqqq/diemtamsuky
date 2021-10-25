import { createStandaloneToast } from '@chakra-ui/react'

const toast = (title = '', status = 'success') => {
  const toastInstance = createStandaloneToast()
  // Default error toast
  if (status === 'danger') {
    toastInstance({
      position: 'top-right',
      status: 'danger',
      title: 'Đã xảy ra lỗi!',
      description: title,
    })
  } else {
    toastInstance({
      position: 'top-right',
      status,
      title,
    })
  }
}

export default toast
