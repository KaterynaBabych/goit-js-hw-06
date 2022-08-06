const numbersOfcategoriesEl = document.querySelector("#categories");
console.log(`Number of categories: ${numbersOfcategoriesEl.children.length}`)

for (const elem of numbersOfcategoriesEl.children) {
    const textItemEl = elem.firstElementChild.textContent;
    const numbersOfElements = elem.lastElementChild.children.length;
console.log(`Category: ${textItemEl}, Elements: ${numbersOfElements}`) 
}