import { handleAuth, handleLogin, handleLogout } from '@auth0/nextjs-auth0'

export default handleAuth({
  async login(req, res) {
    await handleLogin(req, res, {
      authorizationParams: {
        audience: process.env.AUTH0_AUDIENCE,
        scope: 'openid profile email',
      },
      returnTo: '/admin',
    })
  },
  async logout(req, res) {
    await handleLogout(req, res, {
      returnTo: '/admin',
    })
  },
})
