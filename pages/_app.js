import { useEffect } from 'react'
import { useRouter } from 'next/router'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import 'animate.css'
import * as ga from '../lib/ga'

import FrontLayout from '../layouts/front'
import AdminLayout from '../layouts/admin'
import AdminLoginLayout from '../layouts/admin-login'
const layouts = {
  front: FrontLayout,
  admin: AdminLayout,
  adminLogin: AdminLoginLayout,
}

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url)
    }
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const Layout = layouts[Component.layout] || ((children) => <>{children}</>)

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
