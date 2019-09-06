import React, { Component } from 'react';
import axios from 'axios';

import { API_URL } from '../../constants/constants';

class Restaurants extends Component {
    state = {
        restaurant: {}
    };
    componentDidMount() {
        this.setRestaurant()
    };

    setRestaurant = () => {
        axios.get(`${API_URL}restaurants/${this.props.name}`)
            .then(response => this.setState({ restaurant: response.data.data }))
            .catch(error => console.log(error));
    };


    // shouldComponentUpdate(prevProps, prevState) {
    //     if (prevState.restaurant !== this.state.restaurant) {
    //         return true;
    //     } else {
    //         return false;
    //     };
    // };



    render() {
        console.log('render')
        return (
            <>
                {this.state.restaurant && this.props.name && <div className="restaurants">
                    {this.state.restaurant.name}
                    <img src={this.state.restaurant.image_url}
                        alt={`${this.state.restaurant.name} storefront`} />
                    <p> {this.state.restaurant.location} </p>
                </div>}
            </>
        );
    };
};

export default Restaurants;
