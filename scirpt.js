"use strict";

// imports
import {getProducts} from "./constants/api.js"
import {burgerMenuAnimation} from "./constants/burgerMenu.js"
import { manProduct } from "./constants/createProduct.js";
import scrollFunction from "./constants/headerScroll.js";
import checkRegexp from "./constants/regexp.js";

burgerMenuAnimation();
checkRegexp();

let productDiv = document.querySelector(".product_div");
let loading = document.querySelector(".loading");

// function for header scrolling
 scrollFunction();



// is loading
loading.classList.remove("display"); 
getProducts().then(data => {
 
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


    let otherProduct = document.querySelectorAll(".other_product");
    let productImg = document.querySelectorAll(".product_img");
    let productName = document.querySelectorAll(".product_name");
    let price = document.querySelectorAll(".price");

    otherProduct.forEach((element,index) => {
        element.addEventListener("click", () => {
       
            const productData = {
                src: productImg[index].src,
                name: productName[index].innerHTML,
                price: price[index].innerHTML,
                quantity:1,
            };


    
            const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

            
            let exictItem = cartItems.find(item => item.name === productData.name);
            if(exictItem){
                exictItem.quantity += 1;
                console.log(exictItem.quantity)
            }
            else{
                cartItems.push(productData);
            }


            localStorage.setItem("cartItems", JSON.stringify(cartItems));
     
            
        })
    })
    
    
    // loading complete
    // loading.classList.add("display"); 
    // console.log("Products loaded.");

}).catch(err =>{
    throw new Error(err);
}).finally(() => 
    loading.classList.add("display") 
);
