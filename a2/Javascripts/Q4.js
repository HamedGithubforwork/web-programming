document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculate').addEventListener('click', calculateOrder);
});

function calculateOrder() {
    const orders = document.querySelectorAll('.order-row');
    let summaryText = "";
    let totalCost = 0;
    let errorFound = false;

    orders.forEach(order => {
        const bookName = order.querySelector('.book').textContent;
        const quantityInput = order.querySelector('.quantity');
        const quantity = parseInt(quantityInput.value, 10);
        const price = parseFloat(order.querySelector('.price').textContent.replace('$', ''));

        if (quantityInput.value.trim() === '' || isNaN(quantity) || quantity < 0) {
            alert('Please enter a valid integer for quantity.');
            quantityInput.focus(); // Focus on the input field with the error
            errorFound = true;
            return; // Stop the function execution
        }

        if (quantity > 0) {
            const cost = price * quantity;
            totalCost += cost;
            summaryText += `${bookName} (Quantity = ${quantity}): $${cost.toFixed(2)}<br>`;
        }
    });

    if (!errorFound) {
        if (summaryText.length === 0) {
            summaryText = "No valid quantities entered.";
        }
        document.getElementById('summary').innerHTML = summaryText;
        document.getElementById('total').textContent = `Final Total: $${totalCost.toFixed(2)}`;
    }
}
