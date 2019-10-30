import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants/constants';
import './Profile.css';

class Profile extends Component {
    state = {
        user: {},
        buttonText: '',
        image: '',
        description: '',
        user_id: this.props.currentUser,
        profileImage: '',
        bio: '',
    };

    componentDidMount() {
        this.setState({ buttonText: 'New Post' });
        if (this.state.user) {
            this.getUserInfo(this.props.user);
        } else {
            this.getUserInfo(this.props.currentUser);
        };
    };

    getUserInfo = (user) => {
        axios.get(`${API_URL}users/${user}`)
            .then(response => {
                console.log(response);
                this.setState({
                    user: response.data.data,
                    bio: response.data.data.bio,
                    posts: response.data.data.posts,
                    profileImage: response.data.data.profile_image
                });
            })
            .catch(error => console.log(error));
    };

    render() {
        return (
            <>
                <div className="profile-header">
                    <div className="image-container">
                        <i style={{ cursor: 'pointer' }} onClick={this.handleDisplayPicForm} className="far fa-edit"></i>
                        <img src={this.state.profileImage} alt={`${this.state.user.username}'s profile`} />
                    </div>
                    <div className="user-info">
                        <strong><p>@{this.state.user.username}</p></strong>
                        <p>{this.state.user.name}</p>
                    </div>
                </div>
                {this.state.shouldDisplayNewPicForm &&
                    <div className="new-pic">
                        <label>New Pic Url</label>
                        <input onChange={this.handleProfileImageChange} />
                        <button onClick={this.handlePicChange} >Submit</button>
                    </div>
                }
                <div className="bio">
                    <strong>Bio:</strong>
                    {this.state.shouldDisplayNewPicForm
                        ? <div>
                            <input name="bio" onChange={this.handleChange} />
                            <button>Submit</button>
                        </div>
                        : <p className="bio"> {this.state.bio} </p>}
                </div>
                <button onClick={() => {
                    this.props.handleDisplayPostForm();
                    this.setState({ buttonText: this.state.buttonText == 'Cancel' ? 'New Post' : 'Cancel' });
                }}
                >{this.state.buttonText}</button>
            </>
        );
    };
};

export default Profile;
