import React, { useState, useEffect } from 'react';

function Card({ title, body, onClick }) {
  return (
    <div style={{ border: '1px solid gray', padding: '16px', margin: '16px', borderRadius: '8px' }}>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={onClick}>Click Here!</button>
    </div>
  );
}

function Fake() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  const handleClick = (title) => {
    alert(`You clicked ${title}`);
  }

  return (
    <div>
      {posts.map(post => (
        <Card
          key={post.id}
          title={post.title}
          body={post.body}
          onClick={() => handleClick(post.title)}
        />
      ))}
    </div>
  );
}

export default Fake;
