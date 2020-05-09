import { createStore } from 'redux';

const ul = document.getElementById('list');
const form = document.querySelector('form');
const input = document.getElementById('txt');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const reducer = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case ADD_TODO:
      return [];
    case DELETE_TODO:
      return [];
    default:
      return state;
  }
};

const store = createStore(reducer);

const handleSubmit = (event) => {
  event.preventDefault();
  const value = input.value;
  input.value = '';
  store.dispatch({ type: ADD_TODO, text: value });
};

form.addEventListener('submit', handleSubmit);
