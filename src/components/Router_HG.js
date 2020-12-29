import React from 'react'
import Login from 'routers/Login'
import Signup from 'routers/Signup'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const AppRouter = () => {
  return (
    <Switch>
      <Router>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
      </Router>
    </Switch>
  )
}

export default AppRouter
