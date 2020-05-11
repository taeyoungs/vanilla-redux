import { configureStore, createSlice } from '@reduxjs/toolkit';
// import { createStore } from 'redux';

// -- Redux Toolkit 사용 전
// const ADD = 'ADD';
// const DELETE = 'DELETE';

// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };

// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id,
//   };
// };

// -- Redux Toolkit 사용 후
// const addToDo = createAction('ADD');
// const deleteToDo = createAction('DELETE');

// console.log(addToDo(), deleteToDo());

// -- Redux Toolkit 사용 전

// reducer에서 return 하는 값이 state의 새로운 값으로 대체됨

// const reducer = (
//   state = JSON.parse(localStorage.getItem('toDos')) || [],
//   action,
// ) => {
//   // console.log(localStorage.getItem('toDos'));
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// -- Redux Toolkit 사용 후

// const reducer = createReducer(JSON.parse(localStorage.getItem('toDos')) || [], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter((toDo) => toDo.id !== action.payload),
// });

// -- Redux Toolkit ' createSlice '

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: JSON.parse(localStorage.getItem('toDos')) || [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

const store = configureStore({ reducer: toDos.reducer });

const updateLocalStorage = () => {
  localStorage.setItem('toDos', JSON.stringify(store.getState()));
};

store.subscribe(updateLocalStorage);

export const { add, remove } = toDos.actions;

export default store;
