function showDetails(button){
    const card = button.closest('.product-card');
    const name = card.getAttribute('data-name');
    const price = card.getAttribute('data-price');
    alert(`Product: ${name}\nPrice: ${price}`);
}