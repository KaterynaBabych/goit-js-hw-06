const numbersOfcategoriesEl = document.querySelector("ul");
console.log(`Number of categories: ${numbersOfcategoriesEl.children.length}`)

const titleEl = document.querySelector("#categories").children;
// console.log(titleEl);
for (const elem of titleEl) {
    const textItemEl = elem.firstElementChild.textContent;
    const numbersOfElements = elem.lastElementChild.children.length;
console.log(`Category: ${textItemEl}, Elements: ${numbersOfElements}`) 
}