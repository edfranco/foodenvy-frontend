import React, { Component } from 'react';

class NewPostForm extends Component {
    state = {
        description: '',
        restaurantName: '',
        restaurant_slug: '',
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    };

    render() {
        return (
            <form className="new-post-form profile-form">
                <h5>New Post</h5>
                <label>Restaurant Name</label>
                <input type="text" placeholder="Where did you go?" name="restaurantName" value={this.state.restaurantName} onChange={this.handleChange} />
                <label>Description</label>
                <input type="text" placeholder="yummy food" name="description" value={this.state.description} onChange={this.handleChange} />
                <label>Image Url</label>
                <input name="image" value={this.state.image} onChange={this.handleChange} />
                <select name="restaurant_slug" onChange={this.handleChange} value={this.state.restaurant_slug}>
                    <option>
                        Select Restaurant
                    </option>
                    <option value="valla-sf">Taqueria Vallarta</option>
                    <option value="gordatorta">La Torta Gorda</option>
                </select>
                <button onClick={this.handleFormPost}>Post</button>
            </form>
        );
    }
}

export default NewPostForm;
