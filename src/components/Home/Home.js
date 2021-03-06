import React, { Component } from 'react';
import axios from 'axios';
// internal components
import Register from '../Auth/Register/Register';
import Login from '../Auth/Login';
import { API_URL } from '../../constants/constants';
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
        axios.post(`${API_URL}auth/register`, newUser)
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

                {this.props.register
                    ? <Register handleSubmit={this.handleSubmit} handleChange={this.handleChange} formInfo={this.state} />
                    : <Login history={this.props.history} currentUser={this.props.currentUser} setCurrentUser={this.props.setCurrentUser} />
                }
            </div>
        );
    }

};

export default Home;
