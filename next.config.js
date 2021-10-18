module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/shopeefood',
        destination:
          'https://shopeefood.vn/ho-chi-minh/diem-tam-su-ky-ha-cao-xiu-mai-au-co.gvrkd5',
        permanent: true,
      },
      {
        source: '/shopeefoodtp',
        destination:
          'https://shopeefood.vn/ho-chi-minh/diem-tam-su-ky-thuc-pham-dong-lanh-au-co',
        permanent: true,
      },
      {
        source: '/loship',
        destination: 'https://loship.vn/diemtamsuky',
        permanent: true,
      },
    ]
  },
}
