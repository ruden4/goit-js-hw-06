const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
  const createItem = document.createElement("li");
  ingredientsList.append(createItem);
  createItem.classList.add("item");
  createItem.textContent = ingredient;
  console.log(ingredientsList);
});
