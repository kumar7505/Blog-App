import React from 'react';
import {useState} from 'react';
import './header.css';

const header = () => {
  return (
    <main>
        <header >
            <a href="" classname="brand" style={{fontWeight: 'bold', fontSize: '1.5rem'}}>My Blog</a>
            <nav>
                <a href="">Login</a>
                <a href="">Register</a>
            </nav>
        </header>                       
    </main>
  )
}

export default header;
