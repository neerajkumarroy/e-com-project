import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/');
    }
  }, [navigate]);

  const handleSignup = async () => {
    console.log(username, email, password);
    let result = await fetch('http://localhost:7070/api/signup', {
      method: 'post',
      body: JSON.stringify({ username, email, password }),
      headers: {
        'content-Type': 'application/json'
      },
    });

    result = await result.json();
    console.log(result);
    localStorage.setItem('user', JSON.stringify(result));
    if (result) {
      navigate('/');
    }
  };

  return (
    <div className='Register'>
      <h1 className='heading'>Register</h1>
      <input className='TextBox' type='text' placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)} />

      <input className='TextBox' type='text' placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)} />

      <input className='TextBox' type='password' placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
        {/* <Link className='signuplink' to='/login'>Login</Link> */}
        

      <button className='Signup-btn' type='button' onClick={handleSignup}>SignUp</button>
    </div>
  );
};

export default Signup;
