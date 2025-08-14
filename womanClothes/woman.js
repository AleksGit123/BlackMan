"use strict"

import { getProducts } from "../constants/api.js";
import { burgerMenuAnimation } from "../constants/burgerMenu.js";
import { manProduct } from "../constants/createProduct.js";
import scrollFunction from "../constants/headerScroll.js";
let loading = document.querySelector(".loading");

let womenClothingDiv = document.querySelector(".woman_product_div");
 burgerMenuAnimation();
 scrollFunction();


loading.classList.remove("display");
getProducts().then(data =>{
    let products = data.filter(item => item.category === "women's clothing");
    console.log(products)
    products.forEach(element => {
        
        womenClothingDiv.innerHTML += manProduct(element.image,element.title,`$ ${element.price.toFixed(2)}`);
    })

}).catch(error => console.log(error)).finally(() => loading.classList.add("display"));

