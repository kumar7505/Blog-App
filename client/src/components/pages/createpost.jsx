import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './createpost.css';
import {Navigate, useNavigate} from 'react-router-dom';
import Editor from '../editor';

const createpost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
  const [redirect, setRedirect] = useState(false);

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };
  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];
  
  async function createNewPost(e) {
    e.preventDefault();

    // const cleanContent = content.replace(/<[^>]*>/g, '');

    if (!title || !summary || !content) {
      alert('Title, summary, and content are required.');
      return;
    }

    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    if(files)
      data.set('file', files[0]);
  
    console.log(data + 'karthi');
    const response = await fetch('http://localhost:8000/post', {
      method: 'POST',
      body: data,
      credentials: 'include'
    });

    if(response.ok){
      alert('Blog Created');
      return <Navigate to={'/'} />
    }else
      alert('Blog was not created');

  }

  return (
    <form action="" onSubmit={createNewPost}>
      <input type="text" placeholer='title' value={title} onChange={e => setTitle(e.target.value)}/>   
      <input type="summary" placeholer={'summary'} value={summary} onChange={e => setSummary(e.target.value)}/>  
      <input type="file"
              onChange={e => setFiles(e.target.files)} /> 
      {/* <ReactQuill value={content} onChange={newValue => setContent(newValue)} modules={modules} formats={formats}/> */}
      <Editor value={content} onChange={setContent}/>
      <button style={{marginTop:'5px'}} >Create Post</button>

      {redirect && <Navigate to={"/"} />};
    </form>
  );
}

export default createpost;