import React, { Component } from 'react';
import { API_URL } from '../../constants/constants';
import axios from 'axios';

class Login extends Component {
    state = {
        email: 'test@test.com',
        password: '12345'
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const userInfo = this.state;
        axios.post(`${API_URL}auth/login`, userInfo, { withCredentials: false })
            .then(response => {
                console.log(response)
                this.props.setCurrentUser(response.data.id);
                this.props.history.push('/my_home');
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <form className="register-form">
                <h5>Log In</h5>
                <label>Email</label>
                <input name="email" type="text" onChange={this.handleChange} value={this.state.email} />
                <label>Password</label>
                <input name="password" type="password" onChange={this.handleChange} value={this.state.password} />
                <button onClick={this.handleSubmit} >Log In</button>
            </form>
        );
    };
};

export default Login;
