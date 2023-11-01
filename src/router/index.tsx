// import React, { lazy } from 'react'
// Navigate重定向组件
import { Navigate } from 'react-router-dom'

import Home from '../views/Home'

// const withLoadingComponenet = (comp: JSX.Element) => (
//   <React.Suspense fallback={<div>Loading...</div>}>{comp}</React.Suspense>
// )

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: <Home />,
  },
]

export default routes
