import React, { useState } from 'react';
import { connect } from 'react-redux';

const Home = (props) => {
  console.log(props);
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
      <ul></ul>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  return { state };
}

export default connect(mapStateToProps)(Home);
