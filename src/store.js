import { createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id,
  };
};

// reducer에서 return 하는 값이 state의 새로운 값으로 대체됨
const reducer = (
  state = JSON.parse(localStorage.getItem('toDos')) || [],
  action,
) => {
  // console.log(localStorage.getItem('toDos'));
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};

const store = createStore(reducer);

const updateLocalStorage = () => {
  localStorage.setItem('toDos', JSON.stringify(store.getState()));
};

store.subscribe(updateLocalStorage);

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;
