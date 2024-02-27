// were going to generate a list of products and show it in the screen 
import faker from 'faker';



const mount = (element) => {
    // take a refference for HTML element 
    // do all required to start up our app 
    // produce an HTML and render it or display it 
    // fake product names 
    let products = '';
    
    for(let i = 0; i < 5; i++){
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`
        
    }

    element.innerHTML = products;
    // rather this , we can use
    ReactDOM.render(<App />, element)
}; 

if(process.env.NODE_ENV === 'development'){
    // environment variable by webpack = mode: 'development' 
    // process.env.NODE_ENV = mode 
    // we need another condition here to decide that we're running products in isolation 
    //  verify that you're running products by itself
    const el = document.querySelector('#dev-products');

    // assuming our container doesnt have an element with id 'dev-products' 
    if(el) {
        // we're problably running in isolation 
        mount(el); 
    }
}

// our container can import the mount function 
export { mount }; 