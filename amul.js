// Create an array to store cart items
let cart = [];

// Function to handle "Add to Cart" click
function addToCart(productName, price) {
    // Create a product object to add to cart
    const product = {
        name: productName,
        price: price
    };

    // Add the product to the cart
    cart.push(product);

    // Display a confirmation message
    alert(`${productName} has been added to your cart!`);
    console.log(cart); // For debugging: view the cart items in the console
}

// Function to handle "Click Contact" button click
function handleContactClick() {
    alert("You can contact us at contact@ Open edx(contact us page).");
}

// Attach event listeners to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('button');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Check if the button is for "Add to Cart"
        if (button.innerText.includes('Add to Cart')) {
            const productElement = button.closest('.product');
            const productName = productElement.querySelector('h2').innerText;
            const price = productElement.querySelector('h4').innerText.replace('₹', '');
            
            addToCart(productName, price);
        } 
        // If it's the contact button
        else if (button.innerText === 'Click to Contact') {
            handleContactClick();
        }
    });
});
