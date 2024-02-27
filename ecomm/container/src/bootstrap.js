import { mount as productsMount } from 'products/ProductsIndex';
import { mount as cartMount } from 'cart/CartShow' 

console.log('container')

// just show the products list 


// make sure that we provide a reference to some HTML element that exists inside of the container
productsMount(document.querySelector('#my-products'));
cartMount(document.querySelector('#my-cart'));