"use strict";
import {burgerMenuAnimation} from "../constants/burgerMenu.js"
import {getProducts} from "../constants/api.js"
import { manProduct } from "../constants/createProduct.js";
import { addToCart } from "../constants/addToCart.js";

burgerMenuAnimation();
let productDiv = document.querySelector(".jewelery_product_div");
let loading = document.querySelector(".loading");

loading.classList.remove("display"); 
getProducts().then(data =>{
    console.log(data)
    let products = data.filter(item => item.category === "jewelery");
    let allProductsHtml = '';
    products.forEach((item) => {
        allProductsHtml += manProduct(item.image,item.title,item.price);
    })
    productDiv.innerHTML = allProductsHtml
    addToCart()
}).catch(error => console.log(error)).finally(() => loading.classList.add("display"));
