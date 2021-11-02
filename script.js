"use strict";

document.addEventListener('DOMContentLoaded',init);

function init() {
    
    // 🍖1102-4
   for (let i = 0; i < shopItemBtnAll.length; i++) {
    shopItemBtnAll[i].addEventListener('click',addToCartClicked);
   }
}

  /* 🍄
    🦄1102-4. e.target의 특정 자식노드찾기 : for loop + querySelector

    (내가 한 다른 방식 if(classList.contains('~'))) 
    10 for loop 로 클릭한 위치 찾아냄
    20 찾아낸 위치의 e.target으로  parent element 지정
    30 parent element안의 clas 찾아내서, innerText, src 찾아냄
*/

/* 🍀1102-4 addToCartClicked*/
function addToCartClicked(e){
    console.log(e)  

    // 🦄parentElement
    // 🦄querySelector
    // 🦄src
    let shopItem = e.target.parentElement.parentElement;
    console.log(shopItem);
    let title = shopItem.querySelector('.shop_item-title').innerText;
    let price = shopItem.querySelector('.shop_item-price').innerText;
    let imgSrc = shopItem.querySelector('.shop_item-img').src;
    console.log(title)
    console.log(price)
    console.log(imgSrc)

    addItemToCart(title,price,imgSrc);

    updateCartTotal()

}

// addItemToCart
function addItemToCart(title,price,imgSrc) {

    let cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')


    let cartRowContents =  `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imgSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`

        cartRow.innerHTML = cartRowContents;

        // 🍉            
        let cartItems = document.querySelector(".cart-items");
        // let cartItemsNames = cartItems.querySelector('.cart-item-title')
        
        cartItems.append(cartRow)

        // 🍖
        cartRow.querySelector('btn-danger').addEventListener('click',removeCartItem)

        // 🍖
        cartRow.querySelector('cart-quantity-input').addEventListener('click',quantityChanged)
        
    }

// updateCartTotal
function updateCartTotal(params) {
    
}

// removeCartItem
function removeCartItem(params) {
    
}

// quantityChanged
function quantityChanged(params) {
    
}