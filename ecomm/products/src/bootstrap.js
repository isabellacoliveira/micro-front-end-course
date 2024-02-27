// were going to generate a list of products and show it in the screen 
import faker from 'faker';

// fake product names 
let products = '';

for(let i = 0; i < 5; i++){
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`

}

document.querySelector('#dev-products').innerHTML = products;