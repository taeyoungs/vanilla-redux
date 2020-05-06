const add = document.getElementById('add');
const minus = document.getElementById('minus');
const span = document.querySelector('span');

let count = 0;

span.innerText = count;

const changeText = () => {
  span.innerText = count;
};

const handleAdd = () => {
  count += 1;
  changeText();
};

const handleMinus = () => {
  count -= 1;
  changeText();
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
