import { createStore } from 'redux';

const ul = document.getElementById('list');
const form = document.querySelector('form');
const input = document.getElementById('txt');

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';

const addToDo = (text) => {
  return {
    type: ADD_TODO,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

// 주의 !!
// 절대 기존의 state를 수정하지 말 것
// 기존의 state + 추가할 obj를 담은 새로운 arr를 return 할 것
const reducer = (state = [], action) => {
  // console.log(state);
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE_TODO:
      return state.filter((toDo) => String(toDo.id) !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchDeleteToDo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch(deleteToDo(id));
  toDoPainting();
};

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const toDoPainting = () => {
  const toDos = store.getState();
  ul.innerHTML = '';
  toDos.forEach((toDo) => {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    li.id = toDo.id;
    li.innerText = toDo.text;
    btn.innerText = 'X';
    btn.addEventListener('click', dispatchDeleteToDo);
    li.appendChild(btn);
    ul.appendChild(li);
  });
};

store.subscribe(toDoPainting);

const handleSubmit = (event) => {
  event.preventDefault();
  const value = input.value;
  input.value = '';
  dispatchAddToDo(value);
};

form.addEventListener('submit', handleSubmit);
