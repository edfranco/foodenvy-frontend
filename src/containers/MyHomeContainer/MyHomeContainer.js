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
        posts: [],
        restaurant: {},
    };

    render() {
        return (
            <div className="my-home">
                <Profile currentUser={this.props.currentUser} />
                <Posts currentUser={this.props.currentUser} />
                <Restaurants name={this.props.restaurantName} />
            </div>
        );
    };
};

export default MyHomeContainer;
