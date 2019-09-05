import React, { Component } from 'react';
import axios from 'axios';
// internal components
import Posts from '../../components/Posts/Posts';
import Profile from '../../components/Profile/Profile';
import Restaurants from '../../components/Restaurants/Restaurants';
import { API_URL } from '../../constants/constants';
import './MyHomeContainer.css';

class MyHomeContainer extends Component {
    state = {
        user: {}
    }

    componentDidMount() {
        this.getUserInfo();
    };

    getUserInfo = () => {
        axios.get(`${API_URL}users/${this.props.currentUser}`)
            .then(response => this.setState({ user: response.data.data }))
            .catch(error => console.log(error.response));
    };

    render() {
        return (
            <div className="my-home">
                <Profile user={this.state.user} />
                <Posts />
                <Restaurants />
            </div>
        );
    };
};

export default MyHomeContainer;
