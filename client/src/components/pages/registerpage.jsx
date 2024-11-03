import React from 'react';
import { useState } from 'react';
import './page.css';

const registerpage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  async function register(e){
    e.preventDefault();
    await fetch('http://localhost:8000/register', { 
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type': 'application/json'}
    })
  }
  return (
    <form className='register' onSubmit={register}>
        <h1>Register</h1>
        <input type="text" 
          placeholder="Username" 
          value={username}
          onChange={e => setUsername(e.target.value)}/>
        <input type="password" 
          placeholder="Password" 
          value={password}
          onChange={e => setPassword(e.target.value)}/>
        <button>Register</button>
    </form>
  );
}

export default registerpage;