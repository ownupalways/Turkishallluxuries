/*function adjust() {
    let responseView = document.getElementById("View");
        if (responseView.className === "menubar") {
            responseView.className += " responsive";
        }else{
            responseView.className = "menubar";
    }
}*/

if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready()
}


function ready() {
    let removeCartItemButtons = document.getElementsByClassName('btn-danger');
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem)
    }

    var addToCartButton = document.getElementsByClassName('cart-btn');
    for(var i = 0; i < addToCartButton.length; i++) {
    var button = addToCartButton[i];
    button.addEventListener('click', addToCartClicked);
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (let i = 0; i < quantityInputs.length; i++) {
        const input = quantityInputs[i];
        input.addEventListener('change', quantityChanged)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert("Thank you for your patronage")
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName("cart-price")[0]
        var quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal();
}

function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <=0){
        input.value = 1 
    }
    updateCartTotal()
}
function addToCartClicked(event) {
    var button = event.target;
    var shopItems = button.parentElement.parentElement;
    var title = shopItems.getElementsByClassName('clear')[0].innerText;
    var price = shopItems.getElementsByClassName('price')[0].innerText;
    var imageSrc = shopItems.getElementsByClassName('image-setting')[0].src;
    addItemCart(title, price, imageSrc);
    updateCartTotal();
}

function addItemCart(title, price, imageSrc) {
    var cartRow = document.createElement('div');
    var cartItem = document.getElementsByClassName('cart-items')[0];
    let cartItemNames = cartItem.getElementsByClassName('cart-item-title');
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert("This item is already added to your cart")
            return
        }
    }
    cartRowContents = `
        <div class="cart-row">
            <div class="cart-item cart-column">
              <img  class="cart-item-image" src="${imageSrc}" width="60">
              <span class="cart-item-title">${title}</span>
            </div>
            <div class="cart-price">${price}</div>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="1">
                <button class="btn-danger btn" type="button">Remove</button>
            </div>
        </div>`
    cartRow.innerHTML = cartRowContents;
    cartItem.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('click', quantityChanged)
}


//Navigation handle 

let searchFrom = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchFrom.classList.toggle('active');
    cartPage.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let cartPage = document.querySelector('.cart-container');
document.querySelector('#cart-btn').onclick = () => {
    cartPage.classList.toggle('active');
    searchFrom.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login')
document.querySelector('#user-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchFrom.classList.remove('active');
    cartPage.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar')
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchFrom.classList.remove('active');
    cartPage.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchFrom.classList.remove('active');
    cartPage.classList.remove('active');
    loginForm.classList.remove('active');
}



