import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
// internal components
import Nav from './components/Nav/Nav';
import Routes from './config/Routes';
import { API_URL } from './constants/constants';
import './App.css';

class App extends Component {
  state = {
    currentUser: localStorage.getItem('uid'),
  };

  setCurrentUser = (userId) => {
    localStorage.setItem('uid', userId)
    this.setState({ currentUser: userId });
  };

  handleLogout = () => {
    localStorage.removeItem('uid');
    axios.post(`${API_URL}auth/logout`, { withCredentials: true })
      .then(() => {
        this.setState({ currentUser: null });
        this.props.history.push('/login');
      })
      .catch(error => console.log(error.response));
  };

  render() {
    return (
      <div className="App">
        <Nav logout={this.handleLogout} currentUser={this.state.currentUser} />
        <Routes setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser} />
      </div>
    );
  }
}

export default withRouter(App);
