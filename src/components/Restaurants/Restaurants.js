import React, { Component } from 'react';
import axios from 'axios';

import Post from '../Posts/Post/Post';

import { API_URL } from '../../constants/constants';

import './Restaurants.css';

class Restaurants extends Component {
    state = {
        restaurant: {},
        posts: []
    };

    componentDidMount() {
        this.setRestaurant()
    };

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.name !== this.props.name) {
            this.setRestaurant();
            return true;
        } else {
            return false;
        };
    };

    setRestaurant = () => {
        axios.get(`${API_URL}restaurants/${this.props.name}`)
            .then(response => {
                console.log(response);
                this.setState({
                    restaurant: response.data.data,
                    posts: response.data.data.posts
                })
            })
            .catch(error => console.log(error));
    };

    displayPosts = () => {
        return this.state.posts.map((post, i) => {
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
            <div className="restaurant">
                {this.state.restaurant && this.props.name &&

                    <div className="restaurants">
                        {this.state.restaurant.name}
                        <img src={this.state.restaurant.image_url}
                            alt={`${this.state.restaurant.name} storefront`} />
                        <p> {this.state.restaurant.location} </p>
                    </div>}

                {this.state.posts && this.displayPosts()}


            </div>
        );
    };
};

export default Restaurants;
