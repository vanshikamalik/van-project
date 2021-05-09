import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Users from '../Components/UserList';
import UserDetails from '../Components/UserDetails';

const UserRoutes = (
    <Router>
        <Switch>
            <Route exact path="/Users" component={Users} />
            <Route exact path="/User/:UserID" component={UserDetails} />
        </Switch>
    </Router>
)

export default UserRoutes;