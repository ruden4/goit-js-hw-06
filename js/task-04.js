const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const result = document.querySelector("#value");

decrementBtn.addEventListener("click", decrease);
let counter = 0;
function decrease() {
  result.textContent = counter -= 1;
}

incrementBtn.addEventListener("click", increase);
function increase() {
  result.textContent = counter += 1;
}
