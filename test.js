


//------------------------------d.z.#1----------------------------------------------/

const list = document.querySelector("#categories");


const liCount = list.querySelectorAll('.item').length;

console.log(`Number of categories: ${liCount}`);

[...list.children].forEach(item => {

    const titleName = item.firstElementChild.outerText
;
    console.log(`Category: ${titleName}`);
    //console.dir(item.firstElementChild);

    const liliCount = item.lastElementChild.querySelectorAll('li').length
    console.log(`Elements: ${liliCount}`);

});

//-------------------------------------------------------------------------------/

//-----------------------------------d.z.#2---------------------------------------/

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];



const listIngredients = document.querySelector("#ingredients")

const ingredName = ingredients.map((ingredient) => {
    const liElement = document.createElement("li");
    liElement.textContent = ingredient;
    // console.dir(liElement)
    return liElement;
})
listIngredients.append(...ingredName);

//-----------------------------------------------------------------------------/
//--------------------------------------d.z.#3-----------------------------------------/

  const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listGallery = document.querySelector(".gallery");
const markup = images
  .map(({ url, alt }) =>
  `<li class="item">
  <img class="picture" src="${url}" alt="${alt}" /></li>`).join("");
listGallery.insertAdjacentHTML("beforeend", markup);
//-------------------------------------------------------------------------------------/
//---------------------------------------d.z.#4--------------------------------------/

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const countSpan = document.querySelector('#value');

let counterValue = 0;

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
countSpan.textContent = counterValue;
    
});

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;

  countSpan.textContent = counterValue;
});

// -------------------------------------------------------------------------------------/
// ------------------------------------d.z.#5-------------------------------------------/

const fieldText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

fieldText.addEventListener("input", (evt) => {
  let input = evt.currentTarget.value.trim();
  if (input === "") {
    outputText.textContent = 'Anonymous';
  } else {
    outputText.textContent = input;
  }
  
});
// -------------------------------------------------------------------------------------/
// --------------------------------d.z.#6-----------------------------------------------/
// ????????????????????????????

const input = document.querySelector("#validation-input");
const dataLength = input.getAttribute("data-length");

input.addEventListener("blur", () => {
if (input.value.length === Number(dataLength)) {
  input.classList.remove('invalid');
  input.classList.add('valid');
  }
  else {console.dir(input)
  input.classList.remove('valid');
  input.classList.add('invalid');
  }

})


// -------------------------------d.z.#7--------------------------------/
// РЕШЕНИЕ 1 выводит числа
// const inputChange = document.querySelector('#font-size-control');
// const countSpan = document.querySelector('#text');

// inputChange.addEventListener("input",() => {
// countSpan.textContent = inputChange.value;
//   console.dir(inputChange);
// })

// РЕШЕНИЕ 2 увеличивает объект
const inputChange = document.querySelector('#font-size-control');
const countText = document.querySelector('#text');

inputChange.addEventListener('input', () => {
  countText.style.fontSize = `${inputChange.value}px`;
});

// --------------------------------d.z.#8----------------------------/

// ???????????????????????????????????????????????

// const formReg = document.querySelector(".login-form");
// const inputs = formReg.querySelectorAll('input');
 
// formReg.addEventListener("submit", (evt) => {
//   evt.preventDefault();
// //console.log(inputs);
//   for (let input of inputs) {

//     //console.log(input);
//     if (!input.value) {
//    alert('Всі поля повинні бути заповнені!');

// break;

//     } else {

//       const formData = {
//         elements: { email, password }
//       } = evt.currentTarget;

      
//       break;
//     }

//   }
//    console.log({ email: email.value, password: password.value } );
//   formReg.reset();
// })


const formReg = document.querySelector('.login-form')
  
  
  formReg.addEventListener('submit', function (event) {
  event.preventDefault();

  const emailInput = event.currentTarget.elements.email;
  const passwordInput = event.currentTarget.elements.password;

    if (!emailInput.value || !passwordInput.value) {
    
        alert('Всі поля повинні бути заповнені!');
        return;
    }
    
const formData = {
    email: emailInput.value,
    password: passwordInput.value
  };

  console.log(formData);

  formReg.reset();
    
});




// ---------------------------d.z.#9-----------------------------------/

const nameColor = document.querySelector(".color");
const btnClick = document.querySelector(".change-color");

btnClick.addEventListener('click', () => {
 
const randomCol = getRandomHexColor()
  nameColor.textContent = randomCol;
  document.body.style.backgroundColor = randomCol;
  // console.log(nameColor);

})


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// ---------------------------d.z.#10-----------------------------------/


const controls = document.querySelector("#controls");
const quantityDiv = controls.querySelector('input');

const btnCreate = controls.querySelector('[data-create]');
const btnDestroy = controls.querySelector('[data-destroy]');
const commonDiv = document.querySelector("#boxes");


btnCreate.addEventListener("click", () => {

  let n = quantityDiv.value;
  console.log(n);
  
  let side = 30;
  for (let i = 1; i <= n; i += 1) {

    const square = document.createElement('div');
    square.style.width += `${side}px`;
    square.style.height += `${side}px`;
    side += 10;
    commonDiv.appendChild(square);
    square.style.backgroundColor = getRandomHexColor();
        
}
})
  
btnDestroy.addEventListener("click", () => { 
  commonDiv.innerHTML = '';
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}