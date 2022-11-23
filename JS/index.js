let cartIcon = document.querySelector('#cart');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');


//open cart 
cartIcon.onclick = () =>{
    cart.classList.add("active");
};

//close cart
closeCart.onclick = () =>{
    cart.classList.remove("active");
};


