import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  useColorModes,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilContrast,
  cilMenu,
  cilMoon,
  cilSun,
} from '@coreui/icons'
import { connect, ConnectedProps } from 'react-redux';

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { JWTDecoder } from './Home/Functions/Functions.tsx'
import logo from "../assets/images/TN2.png"

const AppHeader = () => {
  const headerRef = useRef()
  const { colorMode, setColorMode } = useColorModes('coreui-free-react-admin-template-theme');
  const [userName, setUserName] = useState(null);

  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow);
  const navigate = useNavigate();

  //const loginStatus = useSelector((state) => state.LoginReducer.tokenInfo);
  //console.log("hons",loginStatus);
  //const registerStatus = useSelector((state) => state.RegisterReducer.isRegistered);


  useEffect(() => {
    const encodedValue = localStorage.getItem('token');
    if (encodedValue !== null) {
      const decodedPayload = JWTDecoder(encodedValue);
      const { fullName, exp } = decodedPayload;
      //check the expiration time of the token
      if (exp !== null) {
        const currentTime = Math.floor(Date.now() / 1000);
        if (currentTime < exp) {
          if (fullName !== null) {
            setUserName(fullName);
          } else {
            setUserName(null);
          }
        } else {
          setUserName(null);
        }
      } else {
        setUserName(null);
      }
    } else {
      setUserName(null);
      navigate('/login')
    }

  }, [])


  useEffect(() => {

    document.addEventListener('scroll', () => {
      headerRef.current &&
        headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
    })
  }, [])

  return (
    <CHeader position="sticky" className="mb-4 p-1" ref={headerRef}>
      <CContainer className="border-bottom px-4" fluid>
        {/* <CHeaderToggler
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          style={{ marginInlineStart: '-14px' }}
        > */}
        {/* <CIcon icon={cilMenu} size="lg" /> */}
        <CHeaderNav className="d-none d-md-flex">
          <CNavItem >
            <CNavLink href="/" to="/dashboard" component={NavLink}>
              <img src={logo} className="main-logo" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        {/* //</CHeaderToggler> */}
        <CHeaderNav className="d-none d-md-flex">
          <CNavItem>
            <CNavLink href="#/home" component={NavLink}>
              Home
            </CNavLink>
          </CNavItem>
          {/* <CNavItem>
            <CNavLink href="#/movie-browser" component={NavLink}>Movies</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#/locations" component={NavLink}>
              Locations
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#/admin" component={NavLink}>
              Admin
            </CNavLink>
          </CNavItem> */}
        </CHeaderNav>
        <CHeaderNav className="ms-auto">
          {userName && <CNavItem>
            <CNavLink>
              {`Hi ${userName}, Welcome to Task Nest.`}
            </CNavLink>
          </CNavItem>}
          {!userName && <CNavItem>
            <CNavLink href="#/login">Login</CNavLink>
          </CNavItem>}
        </CHeaderNav>
        <CHeaderNav>
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          <CDropdown variant="nav-item" placement="bottom-end">
            <CDropdownToggle caret={false}>
              {colorMode === 'dark' ? (
                <CIcon icon={cilMoon} size="lg" />
              ) : colorMode === 'auto' ? (
                <CIcon icon={cilContrast} size="lg" />
              ) : (
                <CIcon icon={cilSun} size="lg" />
              )}
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem
                active={colorMode === 'light'}
                className="d-flex align-items-center"
                component="button"
                type="button"
                onClick={() => setColorMode('light')}
              >
                <CIcon className="me-2" icon={cilSun} size="lg" /> Light
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === 'dark'}
                className="d-flex align-items-center"
                component="button"
                type="button"
                onClick={() => setColorMode('dark')}
              >
                <CIcon className="me-2" icon={cilMoon} size="lg" /> Dark
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === 'auto'}
                className="d-flex align-items-center"
                component="button"
                type="button"
                onClick={() => setColorMode('auto')}
              >
                <CIcon className="me-2" icon={cilContrast} size="lg" /> Auto
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          {userName && <AppHeaderDropdown logoutHandler={() => { setUserName(null) }} />}
        </CHeaderNav>
      </CContainer>
      {/* <CContainer className="px-4 appBreadcrumb-container" fluid>
        <AppBreadcrumb />
      </CContainer> */}
    </CHeader>
  )
}


export default AppHeader;