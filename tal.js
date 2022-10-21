//Navigation handle 

// let searchFrom = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = () => {
//     searchFrom.classList.toggle('active');
//     cartPage.classList.remove('active');
//     loginForm.classList.remove('active');
//     navbar.classList.remove('active');
// }

// let navbar = document.querySelector('.navbar')
// document.querySelector('#menu-btn').onclick = () => {
//     navbar.classList.toggle('active');
//     searchFrom.classList.remove('active');
//     cartPage.classList.remove('active');
//     loginForm.classList.remove('active');
// }

// window.onscroll = () => {
//     navbar.classList.remove('active');
//     searchFrom.classList.remove('active');
//     cartPage.classList.remove('active');
//     loginForm.classList.remove('active');
// }

// let arrowMove = document.getElementsByClassName('arrowMove')
// let info = document.getElementsByClassName('info')

let menu = document.getElementsByClassName('menuBox')[0];
let MenuBtn = document.getElementById('menu-btn');
let CLOSE = document.getElementById('close')

menu.onclick = () => {
    parentElementSibling.childNode[1].style.display = "block";
}

// MenuBtn.addEventListener('click', showUp)
// function showUp() {
//     if (MenuBtn.style.display === "none") {
//         // MenuBox = menu.parentElement.nextSiblingElement
//         // console.log(MenuBox)
//         // MenuBox.style.display = "block"
//         MenuBtn.style.display = "block"
//         CLOSE.style.display = "none"
//     }else {
//         MenuBtn.style.display = "none"
//         CLOSE.style.display = "block"
//         // MenuBox.style.display = "none"
//     }
// }

// search functionality On maxWidth
// let SearchBlock = document.getElementsByClassName('search-form');
// let inputTab = document.getElementsByTagName("input")

// function openSearch(){
//     SearchBlock.style.width = "25rem"
// }