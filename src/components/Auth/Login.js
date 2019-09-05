import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const userInfo = this.state;
        axios.post(`http://localhost:4000/api/v1/auth/login`, userInfo, { withCredentials: true })
            .then(response => {
                this.props.setCurrentUser(response.data.id);
                this.props.history.push('/my_home');
            })
            .catch(error => {
                console.log(error.response);
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
