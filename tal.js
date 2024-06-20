let productContentHTML = document.getElementsByClassName("ScrollTab")[0]
console.log(productContentHTML)

let scrollTabs = []

const initApp = () => {
    // get data from json
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        scrollTabs = data;
        console.log(scrollTabs)
    })
}
initApp()

function ready() {
    let closeModalBoxDisplay = document.getElementsByClassName('closeMe')
    closeModalBoxDisplay.forEach(thisCloseBtn => {
        thisCloseBtn.addEventListener('click', removeModalBox)
    });
}

function removeModalBox(event) {
    let buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.parentElement.remove()
}

// Responsive MenuBox
let menu = document.getElementsByClassName('navbar')[0];
let MenuBox = document.getElementsByClassName('menuBox')[0]
let MenuBtn = document.getElementById('menu-btn');
let closed = document.getElementById('close');

MenuBtn.onclick = () => {
    menu.style.display = "block";
    menu.style.padding = "1px";
    MenuBox.style.left = "0px";
    closed.style.display ="block";
    MenuBtn.style.display = "none";
}

closed.onclick = () => {
    menu.style.display = "none";
    closed.style.display ="none";
    MenuBox.style.left = "-150px";
    MenuBtn.style.display = "block";
}

// MODAL BOX DISPLAY OPERATION

// let viewBtn = document.getElementById('details')

// let purchaseBtn = document.getElementById('purchase')


// viewBtn.addEventListener('click', mobilePage)

// function mobilePage() {
//     let displayModalBox = document.createElement('div')
//     displayModalBox.classList.add('modalBoxForEachImage')

//     let Box = document.getElementsByClassName('rowOffIn')[0];
   
//    let myModalBox =`
//     <div id = "modalBox">
//         <div class="innerModalBox">
//             <span><i class="fa-solid fa-xmark closeMe"></i></span>
//             <div class="imageItem">
//                 <img src="talsingle/single couch.jpg" alt="">
//             </div>
//             <div class="actionDecision">
//                 <table>
//                     <tr>
//                         <td>Product Name:</td>
//                         <td>Single Couch</td>
//                     </tr>
//                     <tr>
//                         <td>Description:</td>
//                         <td class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor amet iusto ab ut repellat ipsum nostrum. Temporibus sapiente molestiae fuga neque nostrum provident dolores culpa! Delectus ut minus hic consectetur!</td>
//                     </tr>
//                     <tr>
//                         <td>Price:</td>
//                         <td>$200</td>
//                     </tr>
//                     <tr>
//                         <td></td>
//                         <td class="btnContainer">
//                             <button class="addToCart btn"> Add to Cart
//                             </button>
//                             <button class="purchaseNow btn">
//                                 Purchase Now
//                             </button>
//                         </td>
//                     </tr>
//                 </table>
//             </div>
//         </div>
//     </div>`;
//     Box.append(displayModalBox)
//     displayModalBox.innerHTML = myModalBox;

//     displayModalBox.getElementsByClassName('closeMe')[0].addEventListener('click', removeModalBox )
// }
