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


if(document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);
}
else{
    ready();
}

function ready(){
    //remove items from cart

    var removeCartButtons = document.getElementsId("cart-remove")
    console.log(removeCartButtons)
    for(i=0; i<removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener("click",removeCartItem)
    }
}

//remove  cart items

function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()

}

