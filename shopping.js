
if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    let viewBtn = document.querySelectorAll('.more_view')
    for (let i = 0; i < viewBtn.length; i++) {
        const viewButton = viewBtn[i];
        viewButton.addEventListener('click', showModalBox)
    }
    
    // ITEMS CARDS WITH OVERFLOW SLIDE
    let productContentHTML = document.getElementsByClassName("mainContainer")[0]

    let scrollTabs = []
    
    const initApp = () => {
        // get data from json
        fetch('products.json')
        .then(response => response.json())
        .then(data => {
            scrollTabs = data;
           addDataToHTML()
        })
    }

    initApp()

    const addDataToHTML = () => {
        productContentHTML.innerHTML = ''
        if (scrollTabs.length > 0) {
            scrollTabs.forEach(BundleScrollTab => {
                let newContainer = document.createElement('div')
                newContainer.classList.add('Scroll-container')
                if(BundleScrollTab.length > 0 ) {
                    for (let i = 0; i < BundleScrollTab.length; i++) {
                        const product = BundleScrollTab[i];
                        let newProduct = document.createElement('div')
                        newProduct.innerHTML= `
                        <div class="card">
                            <img class="image-setting" src="${product.image}">
                            <div class="info">
                                <h3>${product.name}</h3>
                                <h2>$${product.price}</h2>
                                <div class="title_btn">
                                    <p class="product_glance">${product.glance}</p>
                                    <div class="more_action">
                                        <button class="more_view" id="details"><i class="fa-solid fa-eye"></i></button>
                                        <button class="more_view" id="purchase"><i class="fa-solid fa-hand-holding-dollar"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        `
                        newContainer.append(newProduct)
                    }
                }
                productContentHTML.append(newContainer)
            });
        }
    }

}
