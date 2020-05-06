import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const span = document.querySelector('span');

const modifyCount = (state = 0, action) => {
  console.log(state, action);
  if (action.type === 'ADD') {
    return state + 1;
  } else if (action.type === 'MINUS') {
    return state - 1;
  } else {
    return state;
  }
};

const countStore = createStore(modifyCount);

countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'ADD' });
countStore.dispatch({ type: 'MINUS' });

console.log(countStore.getState());
