import {useEffect, useState} from "react";
import {Navigate, useParams} from "react-router-dom";
import React from 'react';
import Editor from "../editor";
const editpost = () => {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [cover, setCover] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState('');

    useEffect(() => {
        fetch(`http://localhost:8000/post/${id}`)
            .then(res => {
                res.json().then(postInfo => {
                    setTitle(postInfo.title);
                    setContent(postInfo.content);
                    setSummary(postInfo.summary);
                })
            })
    });

    async function updatePost(e) {
        e.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id);
        if(files?.[0])
            data.set('file', files?.[0]);
        await fetch('http://localhost:8000/post', {
            method: 'PUT',
            body: data,
            credentials: include,
        });
        return <Navigate to={`/post/${id}`} />
    }

    const modules = {
        toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
        ],
    };

    return (
        <form onSubmit={updatePost}>
            <input type="text" placeholer='title' value={title} onChange={e => setTitle(e.target.value)}/>   
            <input type="summary" placeholer={'summary'} value={summary} onChange={e => setSummary(e.target.value)}/>  
            <input type="file"
                    onChange={e => setFiles(e.target.files)} /> 
            <Editor onChange={setContent} value={content} />
            {/* <ReactQuill value={content} onChange={newValue => setContent(newValue)} modules={modules} /> */}
            <button style={{marginTop:'5px'}} >Update Post</button>

            {redirect && <Navigate to={"/"} />};
        </form>
    );
};

export default editpost;