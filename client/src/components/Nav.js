import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();
  const auth = localStorage.getItem('user');
  console.log("neeraj",auth);

  const logout = () => {
    localStorage.clear();
    navigate('/login');
  }


  return (
    <div>
      {
        auth ?

          <ul className='Navbar-ul'>
            <li><Link to='/'>products</Link></li>
            <li><Link to='/add'>Add Products</Link></li>
            <li><Link to='/update'></Link></li>
            <li><Link to='/profile'>Profile</Link></li>
            <li><Link onClick={logout} to='/login' >Logout ({JSON.parse(auth).username})</Link></li>         
          </ul>
          :
          <ul className='Navbar-ul right'>
            <li><Link to='/signup'>Signup</Link></li>
            <li><Link to='/login'>Login</Link></li>
          </ul>
      }
    </div>
  )
}
export default Nav;
