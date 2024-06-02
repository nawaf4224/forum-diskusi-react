import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add login logic here
    console.log('Login submitted:', email, password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>Email:</label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <br />
        <button type="submit">Login</button>
        <p>or continue with <a href="#">Google</a></p>
        <p>Don't have an account? <a href="#">Register</a></p>
      </form>
      <p>By clicking continue, you agree to our Terms of Service and Privacy Policy</p>
    </div>
  );
};

export default Login;