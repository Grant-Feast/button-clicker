//Function creates a random color and returns that value.
const randColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('.btn');

//Select each button independantly and pass in the colorize function when clicked.
for(let button of buttons) {
  button.addEventListener('click', colorize)
}

//function passes the ranColor function and applies it to the background and text of what the user clicks on.
function colorize() {
  this.style.backgroundColor = randColor();
  this.style.color = randColor();
}