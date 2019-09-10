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
        restaurant_slug: '',
        profileImage: '',
        bio: '',
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
        console.log(this.props.user);
        if (this.state.user) {
            console.log(true)
            this.getUserInfo(this.props.user);
            this.setPosts(this.props.user);
        } else {
            this.getUserInfo(this.props.currentUser);
            this.setPosts(this.props.currentUser);
        };
    };

    componentWillReceiveProps(prevProps) {
        console.log(prevProps)
        if (prevProps.user) {
            this.getUserInfo(prevProps.user);
            this.setPosts(prevProps.user);
        } else {
            this.getUserInfo(prevProps.currentUser);
            this.setPosts(prevProps.currentUser);
        };
    };

    setPosts = (user) => {
        console.log(user);
        axios.get(`${API_URL}users/${user}`)
            .then(response => this.setState({ posts: response.data.data.posts }))
            .catch(error => console.log(error));
    };

    deletePost = (id) => {
        this.setState({ posts: this.state.posts.filter(post => post._id !== id) })
        axios.delete(`${API_URL}posts/${id}`)
            .then()
            .catch();
    };

    getUserInfo = (user) => {
        console.log(user);
        axios.get(`${API_URL}users/${user}`)
            .then(response => {
                console.log(response)
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

    changeBio = () => {
        axios.put(`${API_URL}users/${this.state.user._id}`, { bio: this.state.bio })
            .then(response => console.log(response.data.data.bio))
            .catch(error => console.log(error));
    };

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
        });
        axios.post(`${API_URL}posts`, newPost)
            .then()
            .catch();
    };

    handleProfileImageChange = (event) => {
        this.setState({ profileImage: event.target.value });
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
    };

    handleBioChange = (event) => {
        event.preventDefault();
        this.changeBio();
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    };

    render() {
        return (
            <div className="my-home"
                style={this.props.restaurantName ? this.state.homeGridStyleWithRestaurant : this.state.defaultHomeGridStyle}>
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
                    <div >
                        <strong>Bio:</strong>
                        {this.state.shouldDisplayNewPicForm
                            ? <div>
                                <input name="bio" onChange={this.handleChange} />
                                <button>Submit</button>
                            </div>
                            : <p className="bio"> {this.state.bio} </p>}
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
                            <select name="restaurant_slug" onChange={this.handleChange} value={this.state.restaurant_slug}>
                                <option>
                                    Select Restaurant
                                </option>
                                <option value="valla-sf">Taqueria Vallarta</option>
                                <option value="gordatorta">La Torta Gorda</option>
                            </select>
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
