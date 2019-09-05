import React, { Component } from 'react';
import axios from 'axios';
// internal components
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import './Home.css';

class Home extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: ''
    };

    registerUser = () => {
        const newUser = this.state;
        axios.post(`http://localhost:4000/api/v1/auth/register`, newUser)
            .then(response => {
                this.props.history.push('/login');
            })
            .catch(error => {
                console.log(error.response);
            });
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.registerUser();
    }



    render() {
        return (
            <div className="home">
                <div className="home-image">
                    <img src="https://static8.depositphotos.com/1273864/887/i/950/depositphotos_8878936-stock-photo-greek-salad-gourmet-food-white.jpg" alt="fruit salad" />
                </div>

                {this.props.login
                    ? <Login currentUser={this.props.currentUser} setCurrentUser={this.props.setCurrentUser} />
                    : <Register handleSubmit={this.handleSubmit} handleChange={this.handleChange} formInfo={this.state} />
                }
            </div>
        );
    }

};

export default Home;
