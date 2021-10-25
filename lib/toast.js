import { createStandaloneToast } from '@chakra-ui/react'

const toast = (title = '', status = 'success') => {
  const toastInstance = createStandaloneToast()
  // Default error toast
  if (status === 'error') {
    toastInstance({
      position: 'top-right',
      status: 'error',
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
