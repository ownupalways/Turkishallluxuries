function adjust() {
    let responseView = document.getElementById("View");
        if (responseView.className === "menubar") {
            responseView.className += " responsive";
        }else{
            responseView.className = "menubar";
    }
}