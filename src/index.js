import { createStore } from 'redux';

const ul = document.getElementById('list');
const form = document.querySelector('form');
const input = document.getElementById('txt');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

// 주의 !!
// 절대 기존의 state를 수정하지 말 것
// 기존의 state + 추가할 obj를 담은 새로운 arr를 return 할 것
const reducer = (state = [], action) => {
  // console.log(state);
  switch (action.type) {
    case ADD_TODO:
      return [...state, { text: action.text, id: Date.now() }];
    case DELETE_TODO:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const handleSubmit = (event) => {
  event.preventDefault();
  const value = input.value;
  input.value = '';
  store.dispatch({ type: ADD_TODO, text: value });
};

form.addEventListener('submit', handleSubmit);
