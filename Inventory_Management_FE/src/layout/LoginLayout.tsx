import React from 'react'
import { useLocation } from 'react-router-dom'
import { AppHeader } from '../components/index'
import { AppFooter } from '../components/LayoutComponents/index.ts'

const LoginLayout = ({ children  } : any ) => {
  const location = useLocation()
  const isAllowed = location.pathname === '/login' || location.pathname ==='/register'

  return (
    <div className="wrapper d-flex flex-column min-vh-100">
      {isAllowed && <AppHeader />}
      <div className="body flex-grow-1">
        {children}
      </div>
      {isAllowed && <AppFooter />}
    </div>
  )
}

export default LoginLayout