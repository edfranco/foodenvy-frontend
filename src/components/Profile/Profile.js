import React, { Component } from 'react';
import axios from 'axios';
import { API_URL } from '../../constants/constants';
import './Profile.css';

class Profile extends Component {
    state = {
        shouldDisplayNewPostForm: false,
        shouldDisplayNewPicForm: false,
        user: {},
        buttonText: 'New Post',
        image: '',
        description: '',
        restaurant_name: '',
        user_id: this.props.currentUser,
        restaurant_slug: 'valla-sf',
        profileImage: ''
    };

    componentDidMount() {
        this.getUserInfo();
    };

    getUserInfo = () => {
        axios.get(`${API_URL}users/${this.props.currentUser}`)
            .then(response => {
                this.setState({
                    user: response.data.data,
                    posts: response.data.data.posts,
                    profileImage: response.data.data.profile_image
                })
            })
            .catch(error => console.log(error.response));
    };

    changeProfilePic = () => {
        console.log(this.state.profileImage)
        axios.put(`${API_URL}users/${this.state.user._id}`, { profile_image: this.state.profileImage })
            .then()
            .catch(error => console.log(error));
    }

    submitPost = () => {
        const postInfo = {
            image: this.state.image,
            description: this.state.description,
            restaurant_name: this.state.restaurant_name,
            user_id: this.state.user_id,
            restaurant_slug: this.state.restaurant_slug
        }
        axios.post(`${API_URL}posts`, postInfo)
            .then()
            .catch(error => console.log(error))
    };

    handleProfileImageChange = (event) => {
        this.setState({ profileImage: event.target.value })
    };

    handleDisplayPostForm = () => {
        this.setState({ shouldDisplayNewPostForm: !this.state.shouldDisplayNewPostForm });
    };
    handleDisplayPicForm = () => {
        this.setState({ shouldDisplayNewPicForm: !this.state.shouldDisplayNewPicForm });
    };

    handleFormPost = (event) => {
        event.preventDefault();
        this.submitPost();
    };

    handlePicChange = (event) => {
        event.preventDefault();
        this.changeProfilePic();
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        console.log(this.state.profileImage)
        return (
            <div className="profile">
                <div className="profile-header">
                    <img src={this.state.profileImage} alt={`${this.state.user.username}'s profile`} />
                    <div className="user-info">
                        <h1>@{this.state.user.username}</h1>
                        <p>{this.state.user.name}</p>
                    </div>
                </div>
                <button onClick={this.handleDisplayPicForm}>Change Profile Pic</button>
                {this.state.shouldDisplayNewPicForm && <form>
                    <label>New Pic Url</label>
                    <input onChange={this.handleProfileImageChange} />
                    <button onClick={this.handlePicChange} >Submit</button>
                </form>}
                <div className="bio">
                    <span>Bio:</span>
                    <p> {this.state.user.bio} </p>
                </div>
                <button onClick={this.handleDisplayPostForm} >{this.state.buttonText}</button>

                {this.state.shouldDisplayNewPostForm &&
                    <form>
                        <h5>New Post</h5>
                        <label>Restaurant Name</label>
                        <input type="text" placeholder="Where did you go?" name="restaurant_name" value={this.state.restaurant_name} onChange={this.handleChange} />
                        <label>Description</label>
                        <input type="text" placeholder="yummy food" name="description" value={this.state.description} onChange={this.handleChange} />
                        <label>Image Url</label>
                        <input name="image" value={this.state.image} onChange={this.handleChange} />
                        <button onClick={this.handleFormPost}>Post</button>
                    </form>
                }

            </div>
        );
    };
};

export default Profile;
