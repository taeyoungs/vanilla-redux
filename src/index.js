const ul = document.getElementById('list');
const form = document.querySelector('form');
const input = document.getElementById('txt');

const addToDo = (value) => {
  const li = document.createElement('li');
  li.innerText = value;
  ul.appendChild(li);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const value = input.value;
  addToDo(value);
  input.value = '';
};

form.addEventListener('submit', handleSubmit);
