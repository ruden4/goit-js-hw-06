const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");

createBtn.addEventListener("click", onCreateHandler);
function onCreateHandler() {
  const newDiv = document.createElement("div");
  newDiv.style.width = 30 + "px";
  newDiv.style.height = 30 + "px";
  newDiv.style.backgroundColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  boxesEl.prepend(newDiv);
}

destroyBtn.addEventListener("click", onDestroyAll);
function onDestroyAll() {
  boxesEl.innerHTML = "";
}
// ЕСЛИ Я ПРАВИЛЬНО ПОНЯЛ ТО ЗДЕСЬ ОСТАЛОСЬ ДОБАВИТЬ ЦИКЛ FOR КОТОРЫЙ БУДЕТ создавать дивы принимая значениеинпута,
// и меняя размеры в зависимости от значений предыдущих значений + 10px?
