import faker from 'faker'

const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

// we'll put this text into HTML file div 
document.querySelector('#dev-cart').innerHTML = cartText;
