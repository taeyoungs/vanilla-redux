import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import ToDo from '../Components/ToDo';

const Home = ({ toDos, addToDo }) => {
  const [text, setText] = useState('');

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText('');
  };

  return (
    <>
      <h2>To Dos</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleInput} />
        <button>Add</button>
      </form>
      <ul>
        {toDos?.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  return { toDos: state };
}

// mapDispatchToProps로 인해서 Home에서도 props를 수정할 수 있게 됐다.
// 따라서, dispatch하는 새로운 prop을 만들어서 return
function mapDispatchToProps(dispatch) {
  const addToDo = (text) => dispatch(actionCreators.addToDo(text));
  return { addToDo };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
