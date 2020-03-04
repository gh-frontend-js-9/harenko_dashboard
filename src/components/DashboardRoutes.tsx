import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { Projects } from './projects/ProjectsTable'
import { Messenger } from './messenger/Inbox'

export default function DashboardRouteMap() {
    return (
        <Router>
            <Switch>
                <Route path="/dashboard/projects" component={Projects} />
                <Route path="/dashboard/messages" component={Messenger} />
            </Switch>
        </Router>
    )
}