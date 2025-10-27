import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilUserPlus,
  cilReload,
  cibEventStore,
  cilHistory,
  cilCheckCircle,
  cilHome
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Home',
    to: '/home',
    href : "#/home",
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Components',
  },
  {
    component: CNavItem,
    name: 'Raw Drugs',
    to: '/theme/typography',
    href : "#/rawdrugs",
    icon: <CIcon icon={cilReload} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Finished Drugs',
    to: '/charts',
    href : "#/finisheddrugs",
    icon: <CIcon icon={cilCheckCircle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'General Store',
    to: '/charts',
    icon: <CIcon icon={cibEventStore} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'History',
    href : "#/history",
    icon: <CIcon icon={cilHistory} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Admin',
    href : "#/admin",
    icon: <CIcon icon={cilUserPlus}  customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  }
]

export default _nav
