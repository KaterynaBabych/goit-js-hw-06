const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

console.log(list);

const newListLi = ingredients.map(ingredient => {
  const newListItem = document.createElement("li");
  newListItem.classList.add("item");
  newListItem.textContent = ingredient;

  return newListItem;
});

list.append(...newListLi);
console.log(newListLi)

