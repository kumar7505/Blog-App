import React, { useState, useEffect } from 'react';
import Post from '../post.jsx';

const indexpage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);

  return (
    <>
        {posts.length > 0 && posts.map(post => (
          <Post {...post} key={post.content} style={{marginBottom: '50px'}} /> 
        ))}
    </>
  );
}

export default indexpage;