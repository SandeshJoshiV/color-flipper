const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const group = 6;

const generateRandomNumber = function () {
  return Math.floor(Math.random() * hex.length);
};

btn.addEventListener('click', function () {
  let hexValue = '#';
  for (let i = 0; i < group; i++) {
    hexValue += hex[generateRandomNumber()];
  }
  document.body.style.backgroundColor = hexValue;
  color.textContent = hexValue;
});
