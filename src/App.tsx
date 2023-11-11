import { useEffect } from 'react'
import { useRoutes, useLocation, useNavigate } from 'react-router-dom'
import { message } from 'antd'
import router from './router'

const navigateTo = useNavigate()
// 去往登录页
function ToLogin() {
  useEffect(() => {
    navigateTo('/login')
    message.warning('您还没有登录，请先登录后再访问！')
  }, [])
  return <div></div>
}
// 去往首页
function ToPage1() {
  useEffect(() => {
    navigateTo('/page1')
    message.warning('您已经登录过了！')
  }, [])
  return <div></div>
}

function BeforeRouteEnter() {
  const outlet = useRoutes(router)
  const token = localStorage.getItem('react-management-token')
  const location = useLocation()
  // 登录过了有token 想跳转到登录页 => 让用户跳转到首页
  if (location.pathname === '/login' && token) {
    return <ToPage1 />
  }
  // 还没登录没有token 想跳转到首页 => 让用户跳转到登录页
  if (location.pathname === '/page1' && !token) {
    return <ToLogin />
  }
  return outlet
}

function App() {
  return (
    <div className="App">
      {/* 顶级组件 */}
      <BeforeRouteEnter />
    </div>
  )
}

export default App
