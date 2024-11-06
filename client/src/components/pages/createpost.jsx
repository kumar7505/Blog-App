import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './createpost.css';

const createpost = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [files, setFiles] = useState('');
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

    if (!title || !summary || !content) {
      alert('Title, summary, and content are required.');
      return;
    }

    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    if(files)
      data.set('files', files[0]);
  
    console.log(data);
    const response = await fetch('http://localhost:8000/post', {
      method: 'POST',
      body: data,
      credentials: 'include'
    });
    console.log(await response.json());
  }

  return (
     <form action="" onSubmit={createNewPost}>
      <input type="text" placeholer='title' value={title} onChange={e => setTitle(e.target.value)}/>   
      <input type="summary" placeholer={'summary'} value={summary} onChange={e => setSummary(e.target.value)}/>  
      <input type="file"
              onChange={e => setFiles(e.target.files)} /> 
      <ReactQuill value={content} onChange={newValue => setContent(newValue)} modules={modules} formats={formats}/>
      <button style={{marginTop:'5px'}} >Create Post</button>
     </form>
  );
}

export default createpost;