import React from 'react'
import { Layout } from 'antd'
import { StyleSheet, css } from 'aphrodite'
import { useAuth } from '../../../providers/auth'

const { Header } = Layout

export default function HeaderLayout() {

  const auth = useAuth()


  return (
    <Header className={css(styles.header)} >
      <div className={css(styles.logo)}>
        <img className={css(styles.logoImg)} src='http://preview.pro.ant.design/static/logo.f0355d39.svg' />
        <div>Antd-Start</div>
      </div>
      <div className={css(styles.user)}>
        {auth.user}
      </div>
    </Header>
  )
}

const styles = StyleSheet.create({
  header: {
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#292b32'
  },
  logoImg: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  logo: {
    width: 200,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    fontSize: 18
  },
  user: {
    paddingRight: 24,
    color: '#ffffff'
  }
})

