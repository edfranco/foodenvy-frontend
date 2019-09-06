import React, { Component } from 'react';
import axios from 'axios';
// internal component
import Post from './Post/Post';

import { API_URL } from '../../constants/constants';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: [],
        postsToDisplay: []
    };

    componentDidMount() {
        this.setPosts();
    };

    setPosts = () => {
        axios.get(`${API_URL}users/${this.props.currentUser}`)
            .then(response => this.setState({ posts: response.data.data.posts }))
            .catch(error => console.log(error));
    };


    displayPosts = () => {
        return this.state.posts.map((post, i) => {
            return (
                <Post
                    key={i}
                    restaurantName={post.restaurant_name}
                    image={post.image}
                    time={post.time_posted}
                    description={post.description}
                    slug={post.restaurant_slug}
                />
            );
        });

    };




    render() {
        return (
            <div className="posts">
                {this.displayPosts()}
            </div>
        );
    }




};

export default Posts;