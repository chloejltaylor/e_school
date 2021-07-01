import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login'
import Welcome from './pages/Welcome'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'

function Routes() {
    return(
        <div>
            <Switch>
                <Route exact path="/">
                  <Redirect to="/login" />
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/welcome">
                  <Welcome />
                </Route>
                <Route exact path="/signup">
                  <SignUp />
                </Route>
                <Route>
                  <NotFound />
                </Route>
            </Switch>
        </div>
    )
}


export default Routes
