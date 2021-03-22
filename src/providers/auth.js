import React, { createContext, useContext, useState } from 'react'

export const authContext = createContext()

/**
 * 模拟登陆、登出函数
 */
const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

/**
 * 定义用户登陆状态
 */
function useProvideAuth() {
  const [user, setUser] = useState(null)

  /**
   * request server api
   * @param {*} cb 
   */
  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser("user")
      cb()
    })
  }

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null)
      cb()
    })
  }

  return {
    user,
    signin,
    signout
  }
}

/**
 * 鉴权Provider
 * @param {*} params
 */
export const ProvideAuth = ({ children }) => {
  const auth = useProvideAuth()
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  )
}

export const useAuth = () => useContext(authContext)

