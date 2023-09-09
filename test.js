//------------------------------d.z.#1----------------------------------------------/

// const list = document.querySelector("#categories");


// const liCount = list.querySelectorAll('.item').length;

// console.log(`Number of categories: ${liCount}`);

// [...list.children].forEach(item => {

//     const titleName = item.firstElementChild.outerText
// ;
//     console.log(`Category: ${titleName}`);
//     //console.dir(item.firstElementChild);

//     const liliCount = item.lastElementChild.querySelectorAll('li').length
//     console.log(`Elements: ${liliCount}`);

// });

//-------------------------------------------------------------------------------/

//-----------------------------------d.z.#2---------------------------------------/

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];



// const list = document.querySelector("#ingredients")

// const ingredName = ingredients.map((ingredient) => {
//     const liElement = document.createElement("li");
//     liElement.textContent = ingredient;
//     console.dir(liElement)
//     return liElement;
// })
// list.append(ingredName);

//-----------------------------------------------------------------------------/
//--------------------------------------d.z.#3-----------------------------------------/

//   const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];

// const list = document.querySelector(".gallery");
// const markup = images
//   .map(({ url, alt }) =>
//   `<li class="item">
//   <img class="picture" src="${url}" alt="${alt}" /></li>`).join("");
// list.insertAdjacentHTML("beforeend", markup);
//-------------------------------------------------------------------------------------/
//---------------------------------------d.z.#4--------------------------------------/
