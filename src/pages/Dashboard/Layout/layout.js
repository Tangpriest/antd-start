import { Link, Route } from 'react-router-dom'
import './layout.css'
import { Layout, Breadcrumb } from 'antd';
import Menu from '../../../components/Layout/Menu/Menu'
import Header from '../../../components/Layout/Header/Header'

import Welcome from '../Welcome/Welcome'
import TablePage from '../Table/Table'

const { Content, Sider } = Layout;

export default function LayoutPage() {
  return (
    <Layout style={{
      height: '100vh'
    }}>
      <Header />
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu />
        </Sider>
        <Layout style={{ padding: '24px 24px 24px' }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Route path='/dashboard/welcome' component={Welcome} />
            <Route path='/dashboard/table' component={TablePage} />
          </Content>
        </Layout>
      </Layout>
    </Layout>





  )
}