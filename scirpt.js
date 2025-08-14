"use strict";

// imports
import {getProducts} from "./constants/api.js"
import {burgerMenuAnimation} from "./constants/burgerMenu.js"
import { manProduct } from "./constants/createProduct.js";
import scrollFunction from "./constants/headerScroll.js";
// import {getValues} from "./constants/regexp.js"
burgerMenuAnimation();
// getValues();
let productDiv = document.querySelector(".product_div");
let loading = document.querySelector(".loading");


// function for header scrolling
 scrollFunction();




// is loading
loading.classList.remove("display"); 
console.log("Loading products...");
getProducts().then(data => {
    // console.log(data)
    // get only men's clothes,accessories and women's producy
    let products = data.filter(item => item.category === "women's clothing" || item.category === "men's clothing" || item.category === "jewelery");

    // get only 8 products
    let allProductsHtml = '';
    const numberOfProductsToShow = 8;
    for(let i = 1; i <= Math.min(numberOfProductsToShow, products.length); i++) {
        allProductsHtml += manProduct(products[i].image, products[i].title, `$ ${products[i].price.toFixed(2)}`);
    }

    // show products
    productDiv.innerHTML = allProductsHtml;
    
    // loading complete
    // loading.classList.add("display"); 
    console.log("Products loaded.");

}).catch(err =>{
    throw new Error(err);
}).finally(() => 
    loading.classList.add("display") 
);



// title,img,price
