import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth} from './authcontext';
import './page.css';

const loginpage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setUsername: setAuthUsername } = useAuth(); 

  async function login(e){
    e.preventDefault();
    const response = await fetch('http://localhost:8000/login', { 
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
    }); 

    if(response.ok){
      const userInfo = await response.json();
      // setRedirect(true);
      alert("Login successful!, Welcome, " + userInfo);
      setAuthUsername(userInfo.username);  

      navigate('/');
      window.location.reload(); 
    } else
      alert('Wrong Credentials');

  }

  const fetchUserProfile = async () => {
    const response = await fetch('http://localhost:8000/profile', {
      credentials: 'include',
    });
  
    if (response.ok) {
      const userInfo = await response.json();
      console.log('User info:', userInfo);
      // You can set the user info in a global state or context if needed
    } else {
      console.error('Failed to fetch user profile');
    }
  };  

  return (
    <div>
        <form className='login' onSubmit={login}>
          <h1>Login</h1>
          <input type="text" 
          placeholder="Username" 
          value={username} 
          onChange={e => setUsername(e.target.value)}/>
          <input type="password" 
          placeholder="Password" 
          value={password} 
          onChange={e => setPassword(e.target.value)}/>
          <button>LogIn</button>
        </form>
    </div>
  );
}

export default loginpage;