import React from 'react';
import {useState, useEffect} from 'react';
import './header.css';
import {Link} from 'react-router-dom'; 
import { useAuth } from './pages/authcontext'; 

const header = () => {

  const { username } = useAuth();
  const [userName, setUsername] = useState(null);

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
        setUsername(userInfo.username);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setUsername(null); // Reset username on error
      }
    };

    fetchUserProfile();
  }, []); // Empty dependency array to run only on mount

  return (
    <main>
        <header >
            <Link to="/" className="brand" >My Blog</Link>
            <nav>
              {userName && (
                <>
                  <Link to='/create'>Create new post</Link>
                </>
              )}
              {!userName && 
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
