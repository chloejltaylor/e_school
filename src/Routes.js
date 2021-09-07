import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './Login'
import Welcome from './pages/Welcome'
import Library from './pages/Library'
import Schedule from './pages/Schedule'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import Subjects from './pages/Subjects'

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
                <Route exact path="/e_school">
                  <Welcome />
                </Route>
                <Route exact path="/signup">
                  <SignUp />
                </Route>
                <div>
                  <Route exact path='/:page' component={Navbar} />
                  <Route exact path='/library'component={Library} />
                  <Route exact path='/subjects' component={Subjects} />
                  <Route exact path='/schedule' component={Schedule} />
                </div>

                <Route>
                  <NotFound />
                </Route>
            </Switch>
        </div>
    )
}


export default Routes
