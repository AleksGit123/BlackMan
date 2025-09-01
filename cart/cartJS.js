"use strict";

const cartSection = document.querySelector(".cart_section");
const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

if (cartItems.length > 0) {
    const allCartHtml = cartItems.map((productData, index) => {
        return `
            <div class="cart_div">
                <div class="image_div">
                    <img src="${productData.src}" alt="cart_image" class="cart_product">
                </div>
                <div class="product_info">
                    <h2 class="cart_product_name font1">${productData.name}</h2>
                    <p class="cart_product_price font1">${productData.price}</p>
                    <p class="product_quanty font1">Quantity: ${productData.quantity}</p>
                </div>
                <button class="remove_btn font1" data-index="${index}">Remove</button>
            </div>
        `;
    }).join(''); 
    cartSection.innerHTML = allCartHtml; 

    cartSection.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove_btn")) {
            const index = Number(e.target.dataset.index);

            if (cartItems[index]) {
                if (cartItems[index].quantity > 1) {
                    cartItems[index].quantity -= 1;
                } else {
                    cartItems.splice(index, 1);
                }
            }

            localStorage.setItem("cartItems", JSON.stringify(cartItems));
            location.reload(); // გადატვირთეთ გვერდი
        }
    });

} else {
    cartSection.innerHTML = "<p class='empty font1'>Cart is empty</p>";
}