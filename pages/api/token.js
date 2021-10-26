import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0'

export default withApiAuthRequired(async (req, res) => {
  try {
    const { accessToken } = await getAccessToken(req, res)
    res.status(200).json({ accessToken })
  } catch (error) {
    console.error(error)
    res.status(error.status || 500).end(error.message)
  }
})
