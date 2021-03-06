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
        this.setState({ buttonText: 'New Post', user: this.props.user });
        this.getUserInfo(this.state.user_id);
    };

    getUserInfo = (user) => {
        console.log('getting', user)
        axios.get(`${API_URL}users/${user}`)
            .then(response => {
                this.setState({
                    user: response.data.data,
                    bio: response.data.data.bio,
                    posts: response.data.data.posts,
                    profileImage: response.data.data.profile_image
                });
            })
            .catch(error => console.log(error));
    };

    changeProfilePic = () => {
        axios.put(`${API_URL}users/${this.state.user._id}`, { profile_image: this.state.profileImage })
            .then(response => console.log(response.data.data.profile_image))
            .catch(error => console.log(error));
    };

    handleDisplayPicForm = () => {
        this.setState({ shouldDisplayNewPicForm: !this.state.shouldDisplayNewPicForm });
    };

    handlePicChange = (event) => {
        event.preventDefault();
        this.changeProfilePic();
    };

    handleBioChange = (event) => {
        event.preventDefault();
        this.changeBio();
    }

    handleProfileImageChange = (event) => {
        this.setState({ profileImage: event.target.value });
    };

    render() {
        console.log(this.props.user._id)
        return (
            <div className="profile">
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
                <div className="bio-container">
                    <strong>Bio:</strong>
                    {this.state.shouldDisplayNewPicForm
                        ? <div className="new-pic">
                            <input name="bio" onChange={this.handleChange} />
                            <button>Submit</button>
                        </div>
                        : <p className="bio">{this.state.bio}</p>}
                    <button onClick={() => {
                        this.props.handleDisplayPostForm();
                        this.setState({ buttonText: this.state.buttonText === 'Cancel' ? 'New Post' : 'Cancel' });
                    }}
                    >{this.state.buttonText}</button>
                </div>

            </div>
        );
    };
};

export default Profile;
