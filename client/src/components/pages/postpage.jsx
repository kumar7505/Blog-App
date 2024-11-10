import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import './postpage.css';
import {formatISO9075} from "date-fns";
import {UserContext} from "../../UserContext.jsx";
import { FaRegEdit } from "react-icons/fa";

const postpage = () => {
    const id = useParams();
    const [postInfo, setPostInfo] = useState(null);

    const {userInfo} = useContext(UserContext);
    console.log('kumar');

    useEffect(() => {
        const ak = fetch(`http://localhost:8000/post/${id.id}`)
        .then(response => response.json())
        .then(postInfo => {
                setPostInfo(postInfo);
                console.log('Post data: ', postInfo);
        })
        .catch(error => {
            console.error('Error fetching post:', error);
        });
    }, [id]);

    if(!postInfo) 
        return <p>Loading..</p>;
    console.log(postInfo);
    return (
        <div className="post-page">
            <h1>{postInfo.title}</h1>
            <time dateTime='postInfo.createdAt'>{formatISO9075(new Date(postInfo.createdAt))}</time>
            <div className="author">by @{postInfo.author.username}</div>
            {userInfo.id === postInfo.author._id && (
                <div className="edit-row">
                    <Link className='edit-btn' to={`/edit/${postInfo._id}`}>
                        <FaRegEdit className='edit-icon' />
                        Edit this post
                    </Link>
                </div>
            )}
            <div className="image">
                <img src={`http://localhost:8000/${postInfo.cover}`} alt="Post Image" />
            </div>
            <div className='content' dangerouslySetInnerHTML={{__html:postInfo.content}}></div>
        </div>
    )
}

export default postpage;