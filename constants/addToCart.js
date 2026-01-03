export let addToCart = () =>{
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
}

