// Constructor function for the Item class
function item(id, name, price, image) {
  this.id = id
  this.name = name;
  this.price = price;
  this.image = image;
}

// Create instances of the Item class for your products
var product1 = new item('product1', 'Product 1', 10000, './images/product1.jpeg');
var product2 = new item('product2', 'Product 2', 8000, './images/product2.jpeg');
var product3 = new item('product3','Product 3', 6000, './images/product3.jpeg');
var product4 = new item('product4','Product 4', 14000, './images/product4.jpeg');

const cartItems = []

function addToCart(productid) {
    
    var cartElement = document.createElement('div');
    cartElement.className = 'cart';
    if(!cartItems.includes(productid)){
        
        cartElement.textContent = 'Added to cart: ' + productid.name;
        document.body.appendChild(cartElement);
        cartItems.push(productid)

        saveCartItems();
    }else{
        cartElement.textContent = 'Item already added to cart!';
        document.body.appendChild(cartElement);
    }

    // Show the cart
    cartElement.style.display = 'block';
  
    // Hide the cart after 3 seconds
    setTimeout(function() {
        cartElement.style.display = 'none';
    }, 2000);
}

// Function to save the cart items in localStorage
function saveCartItems() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function redirectToSignUp() {
    window.location.href = "signup.html";
}

function redirectToSignIn() {
  window.location.href = "signin.html";
}


  