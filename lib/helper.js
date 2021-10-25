const dayjs = require('dayjs')

const formatDate = (date, format = 'DD-MM-YYYY HH:mm:ss') => {
  return dayjs(date).format(format)
}

const formatPrice = (price) => {
  return price.toLocaleString() + 'đ'
}

export { formatDate, formatPrice }
