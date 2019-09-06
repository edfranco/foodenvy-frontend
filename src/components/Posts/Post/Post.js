import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = ({ restaurantName, image, time, description, slug }) => {
    return (
        <div className="post-card" >
            <Link to={`/restaurant/${slug}`}> <h1> {restaurantName} </h1> </Link>
            <img src={image} alt="post" />
            <p> {description}</p>
            <p>Posted at: {time}</p>
        </div>
    );
};

export default Post;
