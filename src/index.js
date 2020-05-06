import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const span = document.querySelector('span');

const modifyCount = (state = 0) => {
  return state;
};

const countStore = createStore(modifyCount);

console.log(countStore.getState());
