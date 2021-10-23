import { useUser } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'
import Loading from '../components/admin/shared/Loading'

const PATH_ADMIN_LOGIN = '/admin/login'

export const ProtectRoute = ({ children }) => {
  const router = useRouter()
  const isWindow = typeof window !== 'undefined'

  const { user, error, isLoading } = useUser()
  if (isLoading) return <Loading />
  if (error) return <div>{error.message}</div>
  if (!user && isWindow && window.location.pathname !== PATH_ADMIN_LOGIN) {
    // Make sure we're in the browser
    if (isWindow) {
      router.push(PATH_ADMIN_LOGIN)
    }
    return <Loading />
  }

  return children
}
