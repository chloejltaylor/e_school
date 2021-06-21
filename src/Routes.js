import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Login from './Login'
import Welcome from './pages/Welcome'
import SignUp from './pages/SignUp'

function Routes() {
    return(
        <div>

            <Switch>
                <Route exact path="/e_school">
                <Login />
                </Route>
            </Switch>
       
            <Switch>
                <Route path="/Welcome">
                <Welcome />
                </Route>
            </Switch>

            <Switch>
                <Route path="/SignUp">
                <SignUp />
                </Route>
            </Switch>

            <Switch>
                <Route exact path="/">
                <Login />
                </Route>
            </Switch>

        </div>
    )
}


export default Routes