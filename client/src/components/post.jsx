import React from 'react'
import './post.css';
import {formatISO9075} from "date-fns";

const post = ({title, summary, cover, content, createdAt, author}) => {
  return (
    <div className='post'>
        <div className="image">
            <img src={`http://localhost:8000/uploads/${cover}`} alt="Post Cover" />
        </div>
        <div className="texts">
            <h2>{content}</h2>
            <p className="info">
                <a href="" className="author">{author.username}</a>
                <time dateTime="">{formatISO9075(new Date(createdAt))}</time>
            </p>
            <p className='summary'>{summary}</p>
        </div>
    </div>
  )
}

export default post