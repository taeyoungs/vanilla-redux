import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const num = document.querySelector('span');

num.innerText = 0;

const ADD = 'ADD';
const MINUS = 'MINUS';

const modifyCount = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};

const countStore = createStore(modifyCount);

const onChange = () => {
  num.innerText = countStore.getState();
};

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
