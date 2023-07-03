const refs = {
  bodyEl: document.querySelector("body"),
  widgetEl: document.querySelector(".widget"),
  colorNumber: document.querySelector(".color"),
  btnEl: document.querySelector(".change-color"),
};

refs.btnEl.addEventListener("click", onColorChange);

function onColorChange() {
  refs.bodyEl.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  refs.colorNumber.textContent = refs.bodyEl.style.backgroundColor;
}
