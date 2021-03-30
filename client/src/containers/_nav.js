import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // }
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Workouts',
    route: '/workouts',
    icon: 'cil-puzzle',
    className: 'sidebar-test',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Workout',
        to: '/workouts/all-workouts',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Edit Workout',
        to: '/workouts/edit-workouts',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Coaches',
    route: '/coaches',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Coaches',
        to: '/coaches/all-coaches',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Edit Coach',
        to: '/coaches/edit-coach',
      }
    ],
  }
];

export default _nav
