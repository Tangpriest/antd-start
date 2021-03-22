import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { useAuth } from '../../../providers/auth'
import { Button } from 'antd'

export default function LoginPage() {
  let history = useHistory()
  let location = useLocation()
  let auth = useAuth()

  let { from } = location.state || { from: { pathname: "/" } }
  const login = () => {
    auth.signin(() => {
      history.replace(from)
    })
  }


  return (
    <>
      <h1>登陆</h1>
      <Button type='primary' onClick={login}>登陆</Button>
    </>
  )
}