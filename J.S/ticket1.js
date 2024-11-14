// JavaScript for quantity update and calculating total
document.addEventListener("DOMContentLoaded", () => {
    let quantity = 2; // Example quantity value
    let ticketPrice = 100; // Example ticket price
    let totalAmount = document.querySelector(".total");

    // Update total
    const updateTotal = () => {
        totalAmount.textContent = `$${quantity * ticketPrice}`;
    };

    // Increase Quantity
    document.querySelector(".quantity-controls button:last-child").addEventListener("click", () => {
        quantity++;
        document.querySelector(".quantity").textContent = quantity;
        updateTotal();
    });

    // Decrease Quantity
    document.querySelector(".quantity-controls button:first-child").addEventListener("click", () => {
        if (quantity > 1) {
            quantity--;
            document.querySelector(".quantity").textContent = quantity;
            updateTotal();
        }
    });
});
