import React from 'react';
import './page.css';

const loginpage = () => {
  return (
    <div>
        <form className='login'>
          <h1>Login</h1>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>LogIn</button>
        </form>
    </div>
  );
}

export default loginpage;