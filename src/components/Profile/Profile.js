import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants/constants';
import './Profile.css';

class Profile extends Component {
    state = {
        shouldDisplayNewPostForm: false,
        user: {},
    };

    componentDidMount() {
        this.getUserInfo();
    };

    getUserInfo = () => {
        axios.get(`${API_URL}users/${this.props.currentUser}`)
            .then(response => this.setState({ user: response.data.data, posts: response.data.data.posts }))
            .catch(error => console.log(error.response));
    };

    handleDisplayPostForm = () => {
        this.setState({ shouldDisplayNewPostForm: !this.state.shouldDisplayNewPostForm });
    };

    render() {
        return (
            <div className="profile">
                <div className="profile-header">
                    <img src={this.state.user.profile_image} alt={`${this.state.user.username}'s profile`} />
                    <div className="user-info">
                        <h1>@{this.state.user.username}</h1>
                        <p>{this.state.user.name}</p>
                    </div>
                </div>
                <div className="bio">
                    <span>Bio:</span>
                    <p> {this.state.user.bio} </p>
                </div>
                <button onClick={this.handleDisplayPostForm} >New Post</button>

                {this.state.shouldDisplayNewPostForm &&
                    <form>
                        <h5>New Post</h5>
                        <label>Description</label>
                    </form>
                }

            </div>
        );
    };
};

export default Profile;
