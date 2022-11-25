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

    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for(i=0; i< quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);

    }
    var addCart = document.getElementsByClassName("fa fa-shopping-cart");
    for(i=0; i< addCart.length; i++){
        var button = addCart[i];
        button.addEventListener("click", addcartClicked);

    }

    
}

//remove  cart items

function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove();
    updatetotal();

}
function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1;

    }
    updatetotal();
}

function addcartClicked(event){
    var button = event.target;
    var shopProduct = button.parentElement;
    var title = shopProduct.getElementsByClassName("product-title")[0].innerText;
    var price = shopProduct.getElementsByClassName("price")[0].innerText;
    var productImg = shopProduct.getElementsByClassName("product-img")[0].src;

    addProductToCart(title,price,productImg);

    updatetotal()

}
function addProductToCart(title,price,productImg){
    var cartShopBox = document.createElement('div');
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("cart-content")[0];
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for(var i=0; i < cartItemsNames.length; i++){
        if(cartItemsNames[i].innerText == title){
        alert("item already added to cart")
        return;
        }

       
    }
    
    var cartBoxContent = `
                            <img src="images/earbuds.png" alt="" class="cart-img">
                            <div class="detail-box">
                                <div class="cart-product-title">Earbuds</div>
                                <div class="cart-price">$70.24</div>
                                <input type="number" value="1" class="cart-quantity">

                            </div>
                            <i class="fa fa-trash" id="cart-remove" aria-hidden="true"></i>`;

cartShopBox.innerHTML = cartBoxContent
cartItems.append(cartShopBox)
cartShopBox.getElementsByClassName('fa fa-trash')[0].addEventListener('click', removeCartItem)
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged)
}




function updatetotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0]
    var cartBoxes = cartContent.getElementsByClassName('cart-box')
    
    var total=0;
    for(i=0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
        var price = parseFloat(priceElement.innerText.replace('$',""));
        var quantity = quantityElement.value;
        total = total + (price*quantity);
        total = Math.round(total *100) /100;

        document.getElementsByClassName('total-price')[0].innerText = '$' + total;




    }
}

