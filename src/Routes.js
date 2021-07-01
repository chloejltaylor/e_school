import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Login from './Login'
import Home from './pages/Home'
import SignUp from './pages/SignUp'

function Routes() {
    return(
        <div>

      
            <Switch>
                <Route path="/e_school">
                <Home />
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