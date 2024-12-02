import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilUserPlus,
  cilTrash,
  cilUser,
  cilList,
  cilPencil,
  cilClock,
  cilSpeedometer,
  cilCheckCircle,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
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
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Finished Drugs',
    to: '/charts',
    icon: <CIcon icon={cilCheckCircle} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'General Store',
    to: '/charts',
    icon: <CIcon icon={cilClock} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'History',
    to: '/charts',
    icon: <CIcon icon={cilList} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavItem,
  //   name: 'Team',
  //   to: '/charts',
  //   icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   name: 'Trash',
  //   to: '/charts',
  //   icon: <CIcon icon={cilTrash} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Notifications',
  //   icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Toasts',
  //       to: '/notifications/toasts',
  //     },
  //   ],
  // },
  {
    component: CNavItem,
    name: 'Admin',
    to: '/widgets',
    icon: <CIcon icon={cilUserPlus}  customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  }
]

export default _nav
