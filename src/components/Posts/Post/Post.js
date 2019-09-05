import React from 'react';
import './Post.css';

const Post = ({ restaurantName, image, time, description }) => {
    return (
        <div className="post-card" >
            <h1> {restaurantName} </h1>
            <img src={image} alt="post" />
            <p> {description} </p>
            <p>Posted at:{time}  </p>
        </div>
    )
};

export default Post;
