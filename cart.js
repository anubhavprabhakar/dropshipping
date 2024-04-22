document.addEventListener("DOMContentLoaded", function() {
    // Retrieve cart items from localStorage
    var cartItems = JSON.parse(localStorage.getItem('cartItems'));
  
    // Display cart items on the page
    var cartItemsContainer = document.getElementById('cartItems');
  
    if (cartItems && cartItems.length > 0) {
      var cartItemsHTML = '';
  
      for (var i = 0; i < cartItems.length; i++) {
        var item = cartItems[i];
        cartItemsHTML += '<div class="cartItem">' +
                          '<img src="' + item.image + '" alt="' + item.name + '">' +
                          '<div class="itemDetails">' +
                            '<h3>' + item.name + '</h3>' +
                            '<p>Price: Rs. ' + item.price + '</p>' +
                          '</div>' +
                        '</div>';
      }
  
      cartItemsContainer.innerHTML = cartItemsHTML;
    } else {
      cartItemsContainer.innerHTML = '<p>No items in cart</p>';
    }
  });