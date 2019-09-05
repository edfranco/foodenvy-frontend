import React from 'react';
// internal component
import Post from './Post/Post';
import './Posts.css';

const Posts = ({ posts }) => {
    // console.log(props.posts[0]);
    const postsList = posts.map((post, i) => {
        return (
            <Post
                key={i}
                restaurantName={post.restaurant_name}
                image={post.image}
                time={post.time_posted}
                description={post.description} />
        );
    });

    return (
        <div className="posts">
            {posts.length && postsList}
        </div>
    );
};

export default Posts;