// let cart = JSON.parse(localStorage.getItem('cart')) || [];
// let total = parseFloat(localStorage.getItem('total')) || 0;

// function addToCart(item, price) {
//     cart.push({ item, price });
//     total += price;
//     updateCart();
//     saveCart();
// }

// function updateCart() {
//     const cartList = document.getElementById('cart');
//     cartList.innerHTML = '';
//     cart.forEach((product, index) => {
//         const li = document.createElement('li');
//         li.textContent = `${product.item} - R$ ${product.price} `;
        
        
//         const removeButton = document.createElement('button');
//         removeButton.textContent = 'Remover';
//         removeButton.onclick = () => removeFromCart(index);
        
//         li.appendChild(removeButton);
//         cartList.appendChild(li);
//     });
//     document.getElementById('total').textContent = total.toFixed(2);
// }

// function removeFromCart(index) {
//     total -= cart[index].price;
//     cart.splice(index, 1);
//     updateCart();
//     saveCart();
// }

// function clearCart() {
//     cart = [];
//     total = 0;
//     updateCart();
//     saveCart();
// }


// document.addEventListener('DOMContentLoaded', () => {
//     if (document.getElementById('cart')) {
//         updateCart();
//     }
// });




let cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = parseFloat(localStorage.getItem('total')) || 0;

function addToCart(item, price) {
    if (!item || price <= 0) {
        alert('Por favor, insira um item válido e um preço positivo.');
        return;
    }

    const existingProduct = cart.find(product => product.item === item);
    if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.price += price;
    } else {
        cart.push({ item, price, quantity: 1 });
    }

    total += price;
    updateCart();
    saveCart();
    alert(`${item} adicionado ao carrinho!`);
}

function updateCart() {
    const cartList = document.getElementById('cart');
    cartList.innerHTML = '';
    cart.forEach((product, index) => {
        const li = document.createElement('li');
        li.textContent = `${product.item} - R$ ${product.price.toFixed(2)} (Quantidade: ${product.quantity})`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => removeFromCart(index);

        li.appendChild(removeButton);
        cartList.appendChild(li);
    });
    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
    saveCart();
    alert('Produto removido do carrinho!');
}

function clearCart() {
    cart = [];
    total = 0;
    updateCart();
    saveCart();
    alert('Carrinho limpo!');
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('total', total);
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('cart')) {
        updateCart();
    }
});
