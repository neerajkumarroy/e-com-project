import React, { useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogin = async () => {
    console.log(email, password);
    let result = await fetch('http://localhost:7070/api/login', {
      method: 'post',
      body: JSON.stringify({email, password }),
      headers: {
        'content-Type': 'application/json'
      },
    });

    result = await result.json();
    console.log(result);
    localStorage.setItem('user', JSON.stringify(result));
    if (result.username) {
      navigate('/');
    }else
    {
        alert("Please enter valide username and password")
    }
  };

  return (
    <div className='User-Login'>
      <h1 className='heading'>Login</h1>    

      <input className='TextBox' type='text' placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)} />

      <input className='TextBox' type='password' placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)} />

      <button className='Signup-btn' type='button' onClick={handleLogin} >Login</button>
    </div>
  );
};

export default Login;