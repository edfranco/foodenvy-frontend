import React, { Component } from 'react';
import axios from 'axios';
// internal components
import Profile from '../../components/Profile/Profile';
import Posts from '../../components/Posts/Posts';
import Restaurants from '../../components/Restaurants/Restaurants';
import NewPostForm from '../../components/forms/NewPost/NewPost';
import { API_URL } from '../../constants/constants';
import './MyHomeContainer.css';


class MyHomeContainer extends Component {
    state = {
        shouldDisplayNewPostForm: false,
        shouldDisplayNewPicForm: false,
        user: {},
        image: '',
        user_id: this.props.currentUser,
        profileImage: '',
        bio: '',
        posts: [],
    };

    homeGridStyleWithRestaurant = {
        display: 'grid',
        gridTemplateColumns: '25% 40% 45%',
    };

    defaultHomeGridStyle = {
        display: 'grid',
        gridTemplateColumns: '40% 60%',
    };

    componentDidMount() {
        if (this.props.path === "/profile/:user") {
            this.setState({ user_id: this.props.match.params.user });
        } else {
            this.getUserInfo(this.props.currentUser);
        };
    };

    componentWillReceiveProps(prevProps) {
        if (prevProps.user) {
            this.getUserInfo(prevProps.user);
            this.setPosts(prevProps.user);
        } else {
            this.getUserInfo(prevProps.currentUser);
            this.setPosts(prevProps.currentUser);
        };
    };

    setPosts = (user) => {
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
        axios.get(`${API_URL}users/${user}`)
            .then(response => {
                this.setState({
                    user: response.data.data,
                    bio: response.data.data.bio,
                    posts: response.data.data.posts,
                    profileImage: response.data.data.profile_image
                });
            });
    };

    changeBio = () => {
        axios.put(`${API_URL}users/${this.state.user._id}`, { bio: this.state.bio })
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

    handleDisplayPostForm = () => {
        this.setState({ shouldDisplayNewPostForm: !this.state.shouldDisplayNewPostForm });
    };


    handleFormPost = (event) => {
        event.preventDefault();
        this.submitPost();
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    };

    render() {
        return (
            <div className="my-home"
                style={this.props.restaurantName ? this.homeGridStyleWithRestaurant : this.defaultHomeGridStyle}>
                <Profile currentUser={this.props.currentUser} user={this.state.user} handleDisplayPostForm={this.handleDisplayPostForm} path={this.props.match.path} />
                {this.state.shouldDisplayNewPostForm && <NewPostForm restaurantName={this.state.restaurant_name} handleChange={this.handleChange} />}
                <Posts posts={this.state.posts} currentUser={this.props.currentUser} deletePost={this.deletePost} />
                {this.props.restaurantName && <Restaurants name={this.props.restaurantName} deletePost={this.deletePost} />}
            </div>
        );
    };
};

export default MyHomeContainer;
