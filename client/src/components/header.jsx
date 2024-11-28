import React, { useContext } from 'react';
import {useState, useEffect} from 'react';
import './header.css';
import {Link, useNavigate} from 'react-router-dom'; 
import { UserContext } from '../UserContext';

const header = () => {

  const navigate = useNavigate();
  const {userInfo, setUserInfo} = useContext(UserContext);

  useEffect(() => {
    const fetchUserProfile = async () => {
      console.log('Fetching user kumar...');
      console.log('Before fetch call...'); // Added log
      try {
        console.log('Fetching user profile...');
        const response = await fetch('http://localhost:8000/profile', {
          credentials: 'include',
        });

        console.log('Response status:', response.status);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const userInfo = await response.json();
        console.log('User info:', userInfo.username);
        setUserInfo(userInfo);
      } catch (error) {
        console.error('Error fetching user profile:', error); 
      }
    };

    fetchUserProfile();
  }, []); // Empty dependency array to run only on mount

  function logout(){
    console.log(70000);
    fetch('http://localhost:8000/logout',{
      credentials: 'include',
      method: 'POST',
    })
    navigate('/login');
    setUserInfo(null);
    window.location.reload(); 
  }

  const username = userInfo?.username;

  return (
    <main>
        <header >
            <Link to="/" className="brand" >My Blog</Link>
            <nav>
              {username && (
                <>
                  <Link to='/create'>Create new post</Link>
                  <a onClick={logout}>Logout</a>
                </>
              )}
              {!username && 
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </>
              }
            </nav>
        </header>                       
    </main>
  )
}

export default header;