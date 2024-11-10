import React from 'react';
import ReactQuill from 'react-quill';

const editor = () => {
    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, 
            {'list': 'bullet'}, 
            {'indent': '-1'}, 
            {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
    };

    return (
        <div>
            <ReactQuill value="" onChange="" modules={modules} />
        </div>
    );
};

export default editor;