import React, { useState } from 'react';

const Home = () => {
  const [text, setText] = useState('');

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
  };

  return (
    <>
      <h2>To Dos</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleInput} />
        <button>Add</button>
      </form>
    </>
  );
};

export default Home;
