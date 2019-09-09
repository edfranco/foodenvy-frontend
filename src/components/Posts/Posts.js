import React, { Component } from 'react';
// internal component
import Post from './Post/Post';

import './Posts.css';

class Posts extends Component {
    displayPosts = () => {
        return this.props.posts.map((post, i) => {
            return (
                <Post
                    key={i}
                    id={post._id}
                    restaurantName={post.restaurant_name}
                    image={post.image}
                    time={post.time_posted}
                    description={post.description}
                    slug={post.restaurant_slug}
                    deletePost={this.props.deletePost}
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
