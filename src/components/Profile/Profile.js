import React from 'react';
import './Profile.css';

const Profile = ({ user: { username, name, bio, profile_image } }) => {
    return (
        <div className="profile">
            <div className="profile-header">
                <img src={profile_image} alt={`${username}'s profile`} />
                <div className="user-info">
                    <h1>@{username}</h1>
                    <p>{name}</p>
                </div>
            </div>
            <div className="bio">
                <span>Bio:</span>
                <p> {bio} </p>
            </div>

        </div>
    );
};

export default Profile;
