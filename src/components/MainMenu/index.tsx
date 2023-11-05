import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
type MenuItem = Required<MenuProps>['items'][number]

/*
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem
}

const items: MenuItem[] = [
  getItem('栏目 1', '/page1', <PieChartOutlined />),
  getItem('栏目 2', '/page2', <DesktopOutlined />),
  getItem('User', 'page3', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'page4', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
]
*/

const items: MenuItem[] = [
  {
    label: '栏目 1',
    key: '/page1',
    icon: <PieChartOutlined />,
  },
  {
    label: '栏目 2',
    key: '/page2',
    icon: <DesktopOutlined />,
  },
  {
    label: '栏目 3',
    key: 'page3',
    icon: <UserOutlined />,
    children: [
      {
        label: '栏目 301',
        key: '/page3/page301',
      },
      {
        label: '栏目 302',
        key: '/page3/page302',
      },
    ],
  },
  {
    label: '栏目 4',
    key: 'page4',
    icon: <TeamOutlined />,
    children: [
      {
        label: '栏目 401',
        key: '/page4/page401',
      },
      {
        label: '栏目 402',
        key: '/page4/page402',
      },
    ],
  },
  {
    label: '栏目 5',
    key: '/page5',
    icon: <FileOutlined />,
  },
]

const MainMenu: React.FC = () => {
  // 左侧菜单展开项
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const navigateTo = useNavigate()

  // 菜单点击
  const menuClick = (e: { key: string }) => {
    // 编程式导航路由跳转
    navigateTo(e.key)
  }
  // 监听菜单展开
  const handleOpenChange = (keys: string[]) => {
    // 设置菜单展开项为最新的一项
    setOpenKeys([keys[keys.length - 1]])
  }
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={['/page1']}
      mode="inline"
      items={items}
      onClick={menuClick}
      onOpenChange={handleOpenChange}
      openKeys={openKeys}
    />
  )
}

export default MainMenu
