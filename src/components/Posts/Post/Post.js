import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = ({ deletePost, restaurantName, image, time, description, slug, id }) => {
    return (
        <div className="post-card" >
            <div className="post-header">
                <Link to={`/restaurant/${slug}`}> <h1> {restaurantName} </h1> </Link>
                <p style={{ cursor: 'pointer' }} onClick={() => deletePost(id)}>x</p>
            </div>
            <img src={image} alt="post" />
            <p> {description}</p>
            <p>Posted at: {time}</p>
        </div>
    );
};

export default Post;
