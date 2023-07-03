const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", onInputChange);
function onInputChange() {
  console.log(input.value);
  text.style.fontSize = input.value + "px";
}
