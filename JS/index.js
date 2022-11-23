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

    var removeCartButtons = document.getElementsByClassName('fa fa-trash')
    console.log(removeCartButtons)
    for(i=0; i< removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener("click", removeCartItem)
    }
}

//remove  cart items

function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove();
    updatetotal();

}

function updatetotal(){
    var cartContent = document.getElementsByClassName("cart-content")[0];
    var cartBoxes = document.getElementsByClassName("cart-box");
    var total = 0;

    for(i=0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("cart-price")[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("$",""));

        var quantity = quantityElement.value;
        total = total + price*quantity;


    }
}

