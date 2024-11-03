import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './page.css';

const loginpage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();

  async function login(e){
    e.preventDefault();
    
    const response = await fetch('http://localhost:8000/login', { 
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
    });
    if(response.ok){
      setRedirect(true);
    } else
      alert('Wrong Credentials');

      if(redirect){
        console.log(redirect);
        navigate('/');
      }
  }

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