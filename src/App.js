// App.js
import React from 'react'


import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Room from './Room'
import {AuthProvider} from './AuthService'
import LoggedInRoute from './LoggedInRoute'

const App = () => {
    
    return (
        <AuthProvider>
            <Router>
                <Switch>
                    <LoggedInRoute exact path='/' component={Room} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/signup' component={SignUp} />
                </Switch>
            </Router>
        </AuthProvider>
    )
    
}

export default App