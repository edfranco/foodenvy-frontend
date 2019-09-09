import React, { Component } from 'react';
import axios from 'axios';
// internal components
import Posts from '../../components/Posts/Posts';
import Restaurants from '../../components/Restaurants/Restaurants';
import { API_URL } from '../../constants/constants';
import './MyHomeContainer.css';

class MyHomeContainer extends Component {
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
        profileImage: '',
        posts: [],
        homeGridStyleWithRestaurant: {
            display: 'grid',
            gridTemplateColumns: '25% 40% 45%',
        },
        defaultHomeGridStyle: {
            display: 'grid',
            gridTemplateColumns: '40% 60%',
        }
    };

    componentDidMount() {
        this.getUserInfo();
        this.setPosts();
    };

    setPosts = () => {
        axios.get(`${API_URL}users/${this.props.currentUser}`)
            .then(response => this.setState({ posts: response.data.data.posts }))
            .catch(error => console.log(error));
    };

    deletePost = (id) => {
        this.setState({ posts: this.state.posts.filter(post => post._id !== id) })
        axios.delete(`${API_URL}posts/${id}`)
            .then()
            .catch();
    }

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
        axios.put(`${API_URL}users/${this.state.user._id}`, { profile_image: this.state.profileImage })
            .then(response => console.log(response.data.data.profile_image))
            .catch(error => console.log(error));
    }

    submitPost = () => {
        const newPost = {
            image: this.state.image,
            description: this.state.description,
            restaurant_name: this.state.restaurant_name,
            user_id: this.props.currentUser,
            restaurant_slug: this.state.restaurant_slug
        };

        this.setState({
            posts: [...this.state.posts, newPost],
            shouldDisplayNewPostForm: false,
            image: '',
            description: '',
            restaurantName: '',
        })
        axios.post(`${API_URL}posts`, newPost)
            .then()
            .catch();
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
        return (
            <div className="my-home"
                style={this.props.restaurantName ? this.state.homeGridStyleWithRestaurant : this.state.defaultHomeGridStyle}>
                <div className="profile">
                    <div className="profile-header">
                        <img src={this.state.profileImage} alt={`${this.state.user.username}'s profile`} />
                        <div className="user-info">
                            <h1>@{this.state.user.username}</h1>
                            <p>{this.state.user.name}</p>
                        </div>
                    </div>
                    <button onClick={this.handleDisplayPicForm}>Change Profile Pic</button>
                    {this.state.shouldDisplayNewPicForm &&
                        <form className="profile-form">
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
                        <form className="new-post-form profile-form">
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

                <Posts posts={this.state.posts} currentUser={this.props.currentUser} deletePost={this.deletePost} />
                {this.props.restaurantName && <Restaurants name={this.props.restaurantName} deletePost={this.deletePost} />}
            </div>
        );
    };
};

export default MyHomeContainer;
