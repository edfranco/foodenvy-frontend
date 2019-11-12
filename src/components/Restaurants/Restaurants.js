import React, { Component } from 'react';
import axios from 'axios';

import Post from '../Posts/Post/Post';

import { API_URL } from '../../constants/constants';

import './Restaurants.css';

class Restaurants extends Component {
    state = {
        restaurant: {},
        posts: [],
        shouldDisplayMap: false,
        KEY: ''
    };

    componentDidMount() {
        this.setRestaurant()
        this.getKey();
    };

    setRestaurant = () => {
        axios.get(`${API_URL}restaurants/${this.props.name}`)
            .then(response => {
                this.setState({
                    restaurant: response.data.data,
                    posts: response.data.data.posts
                })
            })
            .catch(error => console.log(error));
    };

    getKey = () => {
        axios.get(`${API_URL}maps`)
            .then(response => this.setState({ KEY: response.data.key }));
    }

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
                    user={post.user_id}
                />
            );
        });
    };

    handleClick = () => {
        this.setState({ shouldDisplayMap: !this.state.shouldDisplayMap });
    }

    render() {
        return (
            <div className="restaurant">
                {this.state.restaurant && this.props.name &&
                    <div className="restaurants">
                        {this.state.restaurant.name}
                        <img className="restaurant-image" src={this.state.restaurant.image_url}
                            alt={`${this.state.restaurant.name} storefront`} />
                        <p> {this.state.restaurant.location} </p>
                        <button onClick={this.handleClick} >Show Location</button>
                    </div>}
                {!this.state.shouldDisplayMap && this.state.posts.length > 0
                    ? this.displayPosts()
                    : <div>
                        <iframe
                            title={`${this.state.restaurant.name} map`}
                            className="map"
                            src={`https://www.google.com/maps/embed/v1/place?key=${this.state.KEY}
                                &q=${this.state.restaurant.location}`} allowFullScreen>
                        </iframe>
                    </div>}
            </div>
        );
    };
};

export default Restaurants;
