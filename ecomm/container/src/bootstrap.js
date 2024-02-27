import { mount } from 'products/ProductsIndex';
import { mount } from 'cart/CartShow' 

console.log('container')

// just show the products list 


// make sure that we provide a reference to some HTML element that exists inside of the container
mount(document.querySelector('#my-products'));
mount(document.querySelector('#my-cart'));