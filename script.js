// JavaScript

// Function to switch between tabs
// JavaScript

// Function to add a product to the cart
function addToCart(productName, price) {
    // Here you can implement the logic to add the product to the cart
    console.log("Added to cart: " + productName + " - Price: $" + price);
}

function openCategory(evt, categoryName) {
    var i, tabcontent, tablinks;

    // Hide all tabcontent
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Deactivate all tablinks
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Display the selected category
    document.getElementById(categoryName).style.display = "block";

    // Activate the clicked tablink
    evt.currentTarget.className += " active";
}

// Initially display the 'Men' category
document.getElementById("men").style.display = "block";
