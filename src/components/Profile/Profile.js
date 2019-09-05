import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
    render() {
        console.log(this.props.user);
        return (
            <div className="profile">
                <div className="profile-header">
                    <img src={this.props.user.profile_image} alt={`${this.props.user.username}'s profile`} />
                    <h1>@{this.props.user.username}</h1>
                </div>

            </div>
        );
    };
};

export default Profile;
