import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = ({ deletePost, restaurantName, image, time, description, slug, id, user }) => {
    return (
        <div className="post-card" >
            <div className="post-header">
                {user &&
                    <div className="post-author-info">
                        <img src={user.profile_image} alt={`${user.username} profile`} />
                        <div>
                            <h3>@{user.username}</h3>
                            <Link to={`/restaurant/${slug}`}> <p> {restaurantName} </p> </Link>
                        </div>

                    </div>
                }
                <p style={{ cursor: 'pointer' }} onClick={() => deletePost(id)}>x</p>
            </div>
            <div className="image-container">
                <img src={image} alt="post" />
            </div>

            <p> {description}</p>
            <p>Posted at: {time}</p>
        </div>
    );
};

export default Post;
