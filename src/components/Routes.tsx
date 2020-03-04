import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './Dashboard'
import LoginForm from './auth/Login'
import { SignForm } from './auth/SignUp'
import { ResetForm } from './auth/Reset'

export default function RouteMap() {
    return (
        <Router>
            <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/sign" component={SignForm} />
                <Route path="/reset" component={ResetForm} />
                <Route path="/" component={LoginForm} />
            </Switch>
        </Router>
    )
}
