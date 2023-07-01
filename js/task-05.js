const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", inputChange);

function inputChange() {
  if (refs.input.value === "") {
    refs.output.textContent = "Anonymous";
  } else {
    refs.output.textContent = refs.input.value;
  }
}
