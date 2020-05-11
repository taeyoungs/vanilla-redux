import React from 'react';
import { connect } from 'react-redux';
import { remove } from '../store';
import { Link } from 'react-router-dom';

const ToDo = ({ text, deleteToDo, id }) => {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={deleteToDo}>DEL</button>{' '}
    </li>
  );
};

function mapDispatchToProps(dispatch, ownProps) {
  const deleteToDo = () => dispatch(remove(ownProps.id));
  return { deleteToDo };
}

export default connect(null, mapDispatchToProps)(ToDo);
