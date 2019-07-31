window.onload = function () {
// Get form, item, and wishlist
var addToWishList = document.querySelector('#add-to-wishlist');
var wishlistItem = document.querySelector('#wishlist-item');
var wishlist = document.querySelector('#wishlist');
var listItems = [['Money',20],['FIFA 19',30],['',0]];
var price = document.getElementById('price').value;
var quantity = document.getElementById('quantity').value;

addToWishList.addEventListener('submit', function (event) {
	//alert(quantity);
	// Don't submit the form
	event.preventDefault();

	// Ignore it if the wishlist item is empty
	if (wishlistItem.value.length < 1) return;

	// Add item to wishlist
	wishlist.innerHTML += '<li>' + wishlistItem.value + '</li>';
  if (wishlistItem.value != 'Money') {
    //alert(5);
    document.getElementById('extra1').style.visibility = 'visible';
    document.getElementById('extra2').style.visibility = 'visible';
    document.getElementById('price').style.visibility = 'visible';
		listItems.push([wishlistItem.value,quantity]);
		alert(listItems);
		random = Math.floor((Math.random() * 3) + 1);
    //alert(random);
    random.toString();
    //alert(wishlistItem.value);
    document.getElementById(random).value = wishlistItem.value;
  }

	// Clear input
	wishlistItem.value = '';

	// Save the list to localStorage
	localStorage.setItem('wishlistItems', wishlist.innerHTML);

}, false);

// Check for saved wishlist items
var saved = localStorage.getItem('wishlistItems');

// If there are any saved items, update our list
if (saved) {
	wishlist.innerHTML = saved;
}
//alert(saved);
}
