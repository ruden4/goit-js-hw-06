const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listItms = ingredients.map((ingredient) => {
  const newItm = document.createElement("li");
  newItm.textContent = ingredient;
  newItm.classList.add("item");
  return newItm;
});
const list = document.querySelector("#ingredients");
list.append(...listItms);
