console.log("hello world!");
//console.log("Kellyne was here ;)")
// add more code here!

// console.log(document);
// console.log(document.body)
// console.log(document.body.children);
// console.log(document.body.children[0]);

// returns the first p tag Element in the document
const firstP = document.querySelector('p');

// get the first Element belonging to the special-item class
const special = document.querySelector('.special-item');

// get the Element with the id main-list-heading
const heading = document.querySelector('#main-list-heading');

// get the first li Element inside the ol
const firstOrderedListItem = document.querySelector("ol > li:nth-child(1)")

const ul = document.querySelector('ul')

ul.innerHTML = 
  `  <li>coding</li>
    <li>basketball</li>
    <li>rowing</li>
`
// console.log(firstP.innerText);

firstP.innerText = 'Kellyne was here';
firstP.classList.add('special-item')
firstOrderedListItem.remove()


const newLi = document.createElement('li');

newLi.innerText = 'cooking';
newLi.classList.add ('special-item')
newLi.style.background = 'pink';