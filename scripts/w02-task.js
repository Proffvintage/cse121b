/* W02-Task - Profile Home Page */


/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName='Samuel Markson';
let currentYear='2024';
let profilePic='images/pic.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imgElement= document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML= `<strong>${fullName} </strong>`;
yearElement.testContent= currentYear;
imgElement.setAttribute('src', profilePic);
imgElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
const favoriteFoods = ['Rice', 'Beans', 'Pasta', 'Chicken pie'];
foodElement.innerHTML=favoriteFoods
const favFood = ['Mango'];
favoriteFoods.push(favFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.shift(favFood);
foodElement.innerHTML += `<br>${favoriteFoods}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;