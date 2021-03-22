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

// This example has 3 pages: a public page, a protected
// page, and a login screen. In order to see the protected
// page, you must first login. Pretty standard stuff.
//
// First, visit the public page. Then, visit the protected
// page. You're not yet logged in, so you are redirected
// to the login page. After you login, you are redirected
// back to the protected page.
//
// Notice the URL change each time. If you click the back
// button at this point, would you expect to go back to the
// login page? No! You're already logged in. Try it out,
// and you'll see you go back to the page you visited
// just *before* logging in, the public page.

export default function AuthExample() {
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






function PublicPage() {
  return <h3>Public</h3>
}


