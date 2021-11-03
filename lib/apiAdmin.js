const apiAdmin = async ({ ctx, url, method, body }) => {
  const resToken = await fetch(process.env.NEXT_PUBLIC_APP_URL + '/api/token', {
    headers: ctx
      ? {
          Cookie: ctx.req.headers.cookie,
        }
      : {},
  })
  const dataToken = await resToken.json()

  const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + dataToken.accessToken,
    },
    body: JSON.stringify(body),
  })
  return response.json()
}

export default apiAdmin
