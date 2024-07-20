
if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    // let viewBtn = document.querySelectorAll('.more_view')
    // for (let i = 0; i < viewBtn.length; i++) {
    //     const viewButton = viewBtn[i];
    //     viewButton.addEventListener('click', showModalBox)
    // }
    
    // ITEMS CARDS WITH OVERFLOW SLIDE
    let productContentHTML = document.getElementsByClassName("mainContainer")[0]
    let cartListItems = document.querySelector('.cartListItems')
    let IconCartLabel = document.querySelector('.icon-cart span')

    let scrollTabs = []
    let carts = []
    
    // CART INCREASING AND DECREASING ITEM QUANTITY
    cartListItems.addEventListener('click', (event) => {
        let Btn = event.target
        if(Btn.classList.contains('minus') || Btn.classList.contains('plus')) {
            let product_id = Btn.parentElement.parentElement.dataset.id;
           let type = 'minus'
           if(Btn.classList.contains('plus')) {
            type = 'plus'
           }

           changeQuantity(product_id, type)
           addCartToHTML()
        }
    })

    const changeQuantity = (product_id, type) => {
        let positionItemInCart = carts.findIndex((value) => value.product_id == product_id)
        if(positionItemInCart >= 0 ){
            switch (type) {
                case 'plus':
                    carts[positionItemInCart].quantity =  carts[positionItemInCart].quantity + 1;
                    break;
            
                default:
                    let valueChange =   carts[positionItemInCart].quantity - 1;
                    if(valueChange > 0){
                        carts[positionItemInCart].quantity = valueChange;
                    } else {
                        carts.splice( positionItemInCart, 1)
                    }
                    break;
            }
        }
        addCartToMemory()
        addCartToHTML()
    }
    // LOADING PRODUCT ITEM FROM PRODUCT.JSON FILE AND CHECKING CART MEMORY
    const initApp = () => {
        // get data from json
        fetch('products.json')
        .then(response => response.json())
        .then(data => {
            scrollTabs = data;
           addDataToHTML()

            //get cart item in Memory

            if(localStorage.getItem('cart')) {
                carts = JSON.parse(localStorage.getItem('cart'))
                addCartToHTML()
            }
        })
    }

    initApp()

    const addDataToHTML = () => {
        productContentHTML.innerHTML = ''
        if (scrollTabs.length > 0) {
            scrollTabs.forEach(product => {
                    let newProduct = document.createElement('div')
                    newProduct.classList.add('card')
                    newProduct.dataset.id = product.id
                    newProduct.innerHTML= `
                    <img class="image-setting" src="${product.image}">
                    <div class="info">
                        <h3>${product.name}</h3>
                        <h2>$${product.price}</h2>
                        <div class="title_btn">
                            <p class="product_glance">${product.glance}</p>
                            <div class="more_action">
                                <i class="fa-solid fa-eye" id="details" title="view more details"></i>
                                <i class="fas fa-shopping-cart" id="purchase" title="make payment here"></i>
                            </div>
                        </div>
                    </div>
                    `
                    productContentHTML.append(newProduct) 
            })
        }
    }


    productContentHTML.addEventListener('click', (event) => {
        let positionClicked = event.target;
        if(positionClicked.classList.contains('fa-shopping-cart')) {
           let product_id = positionClicked.parentElement.parentElement.parentElement.parentElement.dataset.id
           addToCart(product_id)
           addCartToHTML()
        }
    })

    const addToCart = (product_id) => {
        let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id)
        if(carts.length <= 0 ){
            carts = [{
                product_id: product_id,
                quantity: 1
            }]
        }else if(positionThisProductInCart < 0) {
            carts.push({
                product_id: product_id,
                quantity: 1
            })
        }else {
            carts[positionThisProductInCart].quantity =  carts[positionThisProductInCart].quantity + 1;
        }
        addCartToHTML()
        addCartToMemory()
    }

    const addCartToMemory = () => {
        localStorage.setItem('cart', JSON.stringify(carts));
    }

     const addCartToHTML = () => {
        cartListItems.innerHTML = ''
        totalQuantity = 0;
        if(carts.length > 0) {
            carts.forEach(cart => {
                totalQuantity = totalQuantity + cart.quantity;
                let newCart = document.createElement('div')
                newCart.classList.add('item')
                newCart.dataset.id = cart.product_id
                let positionProduct = scrollTabs.findIndex((value) => value.id == cart.product_id)
                let info = scrollTabs[positionProduct]
                newCart.innerHTML = `
                    <div class="cart-image">
                        <img src="${info.image}" alt="">
                    </div>
                    <div class="cart-item-name">
                    ${info.name}
                    </div>
                    <div class="totalPrice">
                    ${info.price * cart.quantity}
                    </div>
                    <div class="cart-item-quantity">
                        <span class="minus"></span>
                        <span>${cart.quantity}</span>
                        <span class="plus "></span>
                    </div>`;
                cartListItems.appendChild(newCart)

                if (totalQuantity > 0) {
                    IconCartLabel.style.display = "flex"
                    IconCartLabel.innerText = totalQuantity;
                } else {
                    IconCartLabel.style.display = "none"
                     IconCartLabel.innerText = totalQuantity;
                }
               
            })
           
        }
     }

}



// SHOPPING CART DISPLAY/DISAPPEAR OPERATION
let iconCart = document.getElementsByClassName('fa-shopping-cart')[0]
let closeCart = document.getElementsByClassName('cart-closeBtn')[0]
let body = document.getElementsByTagName('body')[0]

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
})

closeCart.addEventListener('click', closeCartBox)

function closeCartBox() {
    body.classList.toggle('showCart')
}
