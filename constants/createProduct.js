"use strict";
export let manProduct = (src,name,price) =>{

    // console.log(src,name,price);

    return `
        <article class="other_product" >
            <div class="product_img_div">
                <img class="product_img" src="${src}" alt="product img">
            </div>
            <h2 class="product_name font2">${name}</h2>
            <span class="price font2">Price: ${price}</span>
        </article>
    `
}