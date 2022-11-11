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
