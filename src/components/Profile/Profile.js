import React, { Component } from 'react';
import './Profile.css';

class Profile extends Component {
    render() {
        console.log(this.props.user);
        return (
            <div className="profile">
                <div className="profile-header">
                    <img src={this.props.user.profile_image} alt={`${this.props.user.username}'s profile`} />
                    <div className="user-info">
                        <h1>@{this.props.user.username}</h1>
                        <p>{this.props.user.name}</p>
                    </div>
                </div>
                <div className="bio">
                    <span>Bio:</span>
                    <p> {this.props.user.bio} </p>
                </div>

            </div>
        );
    };
};

export default Profile;
