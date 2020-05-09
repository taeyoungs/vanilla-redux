import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

const ToDo = ({ text, deleteToDo }) => {
  return (
    <li>
      {text} <button onClick={deleteToDo}>DEL</button>{' '}
    </li>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
  const deleteToDo = () => dispatch(actionCreators.deleteToDo(ownProps.id));
  return { deleteToDo };
}

export default connect(null, mapDispatchToProps)(ToDo);
