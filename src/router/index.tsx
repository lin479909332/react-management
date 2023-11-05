import React, { lazy } from 'react'
// Navigate重定向组件
import { Navigate } from 'react-router-dom'

import Home from '../views/Home'

const Page1: React.LazyExoticComponent<React.ComponentType<any>> = lazy(
  () => import('../views/Page1'),
)
const Page2: React.LazyExoticComponent<React.ComponentType<any>> = lazy(
  () => import('../views/Page2'),
)

const withLoadingComponenet = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>Loading...</div>}>{comp}</React.Suspense>
)

const routes = [
  {
    path: '/',
    element: <Navigate to="/page1" />,
  },
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/page1',
        element: withLoadingComponenet(<Page1 />),
      },
      {
        path: '/page2',
        element: withLoadingComponenet(<Page2 />),
      },
    ],
  },
]

export default routes
