import React from 'react'
import './post.css';

const post = () => {
  return (
    <div className='post'>
        <div className="image">
            <img src="../public/lawnmower-Large.webp" alt="kum" />
        </div>
        <div className="texts">
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <p className="info">
                <a href="" className="author">Kumar Dos </a>
                <time dateTime="">05-11-2012 13:06</time>
            </p>
            <p className='summary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis ex cupiditate earum ipsam veritatis mollitia omnis </p>
        </div>
    </div>
  )
}

export default post