import { Link, Route } from 'react-router-dom'
import './layout.css'

import { Layout, Breadcrumb } from 'antd';

import Menu from '../../../components/Layout/Menu/Menu'

const { Header, Content, Sider } = Layout;


export default function LayoutPage() {
  return (
    <Layout style={{
      height: '100vh'
    }}>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Route path='/dashboard/pageA' component={() => <h1>this is page A</h1>} />
            <Route path='/dashboard/pageB' component={() => <h1>this is page B</h1>} />
            <Route path='/dashboard/pageC' component={() => <h1>this is page C</h1>} />
            <Route path='/dashboard/pageD' component={() => <h1>this is page D</h1>} />
          </Content>
        </Layout>
      </Layout>
    </Layout>





  )
}