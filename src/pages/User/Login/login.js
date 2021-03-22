import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { useAuth } from '../../../providers/auth'
import { StyleSheet, css } from 'aphrodite'
import { Form, Input, Button, Tabs } from 'antd'
import Footer from '../../../components/Layout/Footer'

const { TabPane } = Tabs

export default function LoginPage() {
  const history = useHistory()
  const location = useLocation()
  const auth = useAuth()

  const { from } = location.state || { from: { pathname: "/" } }

  const onFinish = (values) => {
    console.log('Success:', values)

    auth.signin(() => {
      history.replace(from)
    })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }



  return (
    <div className={css(styles.loginPage)}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div className={css(styles.logo)}>
          <img className={css(styles.logoImg)} src='http://preview.pro.ant.design/static/logo.f0355d39.svg' />
          <h1>Antd-Start</h1>
        </div>
        <div className={css(styles.desc)}>初始化基于create-react-app eject,路由基于react-router-dom,完全自定义开发。</div>
        <div style={{
          width: 800,
          display: 'flex',
          justifyContent: 'center',
          marginTop: 50
        }}>
          <Tabs defaultActiveKey="1" centered>
            <TabPane tab='账号密码登陆'>
              <Form
                // {...layout}
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: '请输入正确的用户名!',
                    },
                  ]}
                >
                  <Input size='large' style={{ width: 300, fontSize: 14 }} placeholder='请输入用户名' />
                </Form.Item>
                <Form.Item
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: '请输入正确的密码!',
                    },
                  ]}
                >
                  <Input.Password className={css(styles.input)} placeholder='请输入密码' style={{
                    height: 37
                  }} />
                </Form.Item>
                <Form.Item >
                  <Button type="primary" htmlType="submit" className={css(styles.input)} size='large' >
                    登陆
                </Button>
                </Form.Item>
              </Form>
            </TabPane>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  )
}


const styles = StyleSheet.create({
  loginPage: {
    width: '100%',
    height: '100vh',
    backgroundImage: `url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg')`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  logo: {
    display: 'flex'
  },
  logoImg: {
    width: 50,
    height: 50,
    marginLeft: -20,
    marginRight: 10
  },
  desc: {
    fontSize: 14,
    color: '#666'
  },
  input: {
    width: 300,
    fontSize: '14px !important'
  }
})
