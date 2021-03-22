import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../../providers/auth'
import DashboardLayoutPage from '../Dashboard/Layout/layout'

/**
 * 需要鉴权的页面
 * @param {*} param 
 * 判断用户状态 ? 加载子页面 : 跳转到登陆页面
 */
export default function PrivateRoute({ children, ...rest }) {
  let auth = useAuth()
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          <DashboardLayoutPage />
        ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location }
              }}
            />
          )
      }
    />
  )
}