import React from 'react'
import { Menu } from 'antd'
import { UserOutlined, LaptopOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'


export default function MenuLayout() {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['welcome']}
      style={{ height: '100%', borderRight: 0 }}
    >
      <Menu.Item icon={<UserOutlined />} key="welcome"><Link to='/dashboard/welcome'>欢迎</Link></Menu.Item>
      <Menu.Item icon={<LaptopOutlined />} key="table"><Link to='/dashboard/table'>表格</Link></Menu.Item>
    </Menu>
  )
}