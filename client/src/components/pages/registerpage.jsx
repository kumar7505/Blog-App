import React from 'react';
import './page.css';

const registerpage = () => {
  return (
    <form className='register'>
        <h1>Register</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Register</button>
    </form>
  );
}

export default registerpage;