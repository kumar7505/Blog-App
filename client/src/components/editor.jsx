import React from 'react';
import ReactQuill from 'react-quill';

const editor = ({value, onChange}) => {
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
          {console.log('kumar')}
            <ReactQuill value={value} onChange={onChange} modules={modules} />
        </div>
    );
};

export default editor;