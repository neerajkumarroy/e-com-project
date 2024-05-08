import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[error,setError]=useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogin = async () => {
    // console.log(email, password);
    if(!email || !password)
      {
        setError(true);
        return false;
      }
    let result = await fetch('http://localhost:7070/api/login', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'content-Type': 'application/json'
      }
    });

    result = await result.json();
    console.log(result);
    if (result.auth) {
      localStorage.setItem('user', JSON.stringify(result.user));
      localStorage.setItem("token",JSON.stringify(result.auth));
      navigate('/');
    } else {
      alert("Please enter valide username and password")
    }
  };

  return (
    <div className='User-Login'>
      <h1 className='heading'>Login</h1>

      <input className='TextBox' type='text' placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
        {error && !email && <span className='error1'>*Please Enter valide Email</span>}

      <input className='TextBox' type='password' placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)} />
        {error && !password && <span className='error1'>*Please Enter Valide Password</span>}

      <button className='Signup-btn' type='button' onClick={handleLogin} >Login</button>
    </div>
  );
};

export default Login;
