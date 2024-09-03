import React, { useState } from 'react';
import axios from 'axios';

const AddNewsPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/news/add', { title, content });
      console.log(response.data);
      alert('News post added successfully');
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('There was an error adding the News post!', error);
    }
  };

  return (
    <div>
      <h2>Add News Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default AddNewsPost;
