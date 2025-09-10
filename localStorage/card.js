const addProduct=()=>{
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity= quantityField.value;
    productField.value='';
    quantityField.value='';
    console.log(product,quantity);
    displayProduct(product,quantity);
    saveProductToLocalStorage(product, quantity);
    
}

const displayProduct=(product,quantity)=>{
    const ul =document.getElementById('product-container');
    const li=document.createElement('li');
    li.innerText=`${product}: ${quantity}`
    ul.appendChild(li);
}
const geetStoredShoppingCart=()=>{
    const storeCart=localStorage.getItem('cart');
    let cart={};
    if(storeCart){
        cart = JSON.parse(storeCart);
    }
    return cart;
}
const saveProductToLocalStorage=(product, quantity)=>{
    const cart = geetStoredShoppingCart();
    cart[product]=quantity;
    console.log(cart);
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}

const displayProductsFromLocalStorage=()=>{
    const saveCart = geetStoredShoppingCart();
    console.log(saveCart);
    for(const product in saveCart){
        const quantity=saveCart[product];
        console.log(product,quantity);
        displayProduct(product,quantity);
    }
}
displayProductsFromLocalStorage();