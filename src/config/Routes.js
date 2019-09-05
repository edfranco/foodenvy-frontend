import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Register from '../components/Auth/Register';
import MyHomeContainer from '../containers/MyHomeContainer/MyHomeContainer';

const Routes = ({ currentUser, setCurrentUser }) => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" render={(props) => <Home {...props} login='login' setCurrentUser={setCurrentUser} currentUser={currentUser} />} />
            <Route path="/register" component={Register} />
            <Route path="/my_home" render={(props) => <MyHomeContainer {...props} currentUser={currentUser} />} />
        </Switch>
    )
}

export default withRouter(Routes);
