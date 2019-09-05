import React from 'react';

const Register = ({ handleChange, handleSubmit, formInfo }) => {
    return (
        <form className="register-form">
            <h5>Register</h5>
            <label>Username</label>
            <input name="username" type="text" onChange={handleChange} value={formInfo.username} />
            <label>Email</label>
            <input name="email" type="text" onChange={handleChange} value={formInfo.email} />
            <label>Password</label>
            <input name="password" type="password" onChange={handleChange} value={formInfo.password} />
            <label>Confirm Password</label>
            <input name="password2" type="password" onChange={handleChange} value={formInfo.password2} />
            <button onClick={handleSubmit} >Register</button>
            <p>Come join our ever growing community of foodies. Be the envy of your friends' appetites</p>
        </form>
    );
};

export default Register;