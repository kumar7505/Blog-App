import React from 'react';
import {useState} from 'react';
import './header.css';
import {Link} from 'react-router-dom'

const header = () => {
  return (
    <main>
        <header >
            <Link to="/" className="brand" >My Blog</Link>
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </header>                       
    </main>
  )
}

export default header;
