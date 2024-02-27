import faker from 'faker'

const mount = (el) => {
    const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;
    
    // we'll put this text into HTML file div 
    document.querySelector('#dev-cart').innerHTML = cartText;
}

// if we're running this project in development and in isolation 
if(process.env.NODE_ENV === 'development'){
    const el = document.querySelector('#dev-cart');

    if(el) {
        mount(el); 
    }
}

export { mount }; 
