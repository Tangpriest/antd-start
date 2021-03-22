import { Layout, Menu, Breadcrumb } from 'antd'
import { Link, Route } from 'react-router-dom'
import './layout.css'

const { Header, Content, Footer } = Layout

export default function LayoutPage() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          {
            ['A', 'B', 'C', 'D'].map(item => <Menu.Item key={item}><Link to={`/dashboard/page${item}`}>{`page${item}`}</Link></Menu.Item>)
          }
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">

          <Route path='/dashboard/pageA' component={() => <h1>this is page A</h1>} />
          <Route path='/dashboard/pageB' component={() => <h1>this is page B</h1>} />
          <Route path='/dashboard/pageC' component={() => <h1>this is page C</h1>} />
          <Route path='/dashboard/pageD' component={() => <h1>this is page D</h1>} />


        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  )
}