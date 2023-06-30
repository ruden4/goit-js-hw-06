const countCategories = () => {
  const allCategories = document.querySelectorAll(".item");
  console.log(`Number of categories: ${allCategories.length}`);
};
countCategories();
// 2
const allCategories = document.querySelectorAll(".item");
allCategories.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryItems = category.querySelectorAll("li").length;
  console.log(`Category : ${categoryName}`);
  console.log(`Elements: ${categoryItems}`);
});
