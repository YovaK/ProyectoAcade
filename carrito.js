let cart =[];
let total = 0;

function addToCart(button) {
    const card = button.closest('.product-card');
    const name = card.getAttribute('data-name');
    const price = parseFloat(card.getAttribute('data-price'));

    cart.push({name,price});
    total +=  price;

    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');

    //clear
    cartItems.innerHTML = '';

    //add
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
        ${item.name} - $${item.price.toFixed(2)}
        <button onclick="removeFromCart(${index})">Eliminar</button>
        `;
        cartItems.appendChild(li);
    });

    // update
    totalPrice.textContent = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('tu carrito esta Vacio!');
        return;
    }

    alert(`Graciospor tu compra! Total: $${total.toFixed(2)}`);
    cart = [];
    total = 0;
    updateCart();
}