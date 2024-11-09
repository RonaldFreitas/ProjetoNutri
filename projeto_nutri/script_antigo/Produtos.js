// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let total = 0;

    // Seleciona todos os botões de adicionar ao carrinho
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Previne o comportamento padrão do link
            const productCard = e.target.closest('.product-card');
            const productName = productCard.getAttribute('data-name');
            const productPrice = parseFloat(productCard.getAttribute('data-price'));

            // Cria um item de lista para o carrinho
            const listItem = document.createElement('li');
            listItem.textContent = `${productName} - R$${productPrice.toFixed(2)}`;

            // Cria um botão para remover o item
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.className = 'remove-button';
            removeButton.addEventListener('click', () => {
                // Remove o item da lista e atualiza o total
                cartItems.removeChild(listItem);
                total -= productPrice; // Subtrai o preço do total
                totalElement.textContent = total.toFixed(2); // Atualiza o total
            });

            listItem.appendChild(removeButton); // Adiciona o botão de remover ao item
            cartItems.appendChild(listItem); // Adiciona o item à lista do carrinho

            // Atualiza o total
            total += productPrice;
            totalElement.textContent = total.toFixed(2);

            // Animação de scroll suave para o carrinho
            document.querySelector('.cart').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Adiciona um evento de clique para o botão de finalizar compra
    document.getElementById('checkout').addEventListener('click', () => {
        alert(`Total da compra: R$${total.toFixed(2)}`);
    });
});