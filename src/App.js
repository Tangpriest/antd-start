import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"
import { ProvideAuth } from './providers/auth'
import PrivateRoute from './pages/Auth/index'
import LoginPage from './pages/User/Login/login'
import PublicPage from './pages/Public/public'

export default function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route path='/public'>
            <PublicPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <PrivateRoute path='/dashboard' />
          <Route path='/'>
            <Redirect to='/dashboard'></Redirect>
          </Route>
        </Switch>
      </Router>
    </ProvideAuth>
  )
}


