import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './page.css';
import { UserContext } from '../../UserContext';

const loginpage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const {setUserInfo} = useContext(UserContext);

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
      setUserInfo(userInfo);  

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