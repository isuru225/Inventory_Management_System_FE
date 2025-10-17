import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilUserPlus,
  cilTrash,
  cilReload,
  cibEventStore,
  cilPencil,
  cilClock,
  cilHistory,
  cilCheckCircle,
  cilHome
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

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
    href : "#/admin",
    icon: <CIcon icon={cilUserPlus}  customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  }
]

export default _nav
