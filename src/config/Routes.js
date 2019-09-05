import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Register from '../components/Auth/Register';

const Routes = ({ currentUser, setCurrentUser }) => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" render={(props) => <Home {...props} login='login' setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
            <Route exact path="/register" component={Register} />
        </Switch>
    )
}

export default withRouter(Routes);
