// Check if the name is valid
function isValidName(name) {
    var regex = /^[\u0600-\u06FF\s\u0020a-zA-Z]+$/; // Allows only Arabic and English letters and spaces
    return regex.test(name);
}

// Function to increment the counter
function incrementCounter() {
    // Retrieve the current counter value from localStorage or set it to 0 if it doesn't exist
    let counter = parseInt(localStorage.getItem("counter")) || 0;
    // Increment the counter value
    counter++;
    // Update the counter value in localStorage
    localStorage.setItem("counter", counter);
    // Display the updated counter value
    document.getElementById("counter").textContent = counter;
}

// Print the user's name and display it on the card
function printUserName() {
    var userName = document.getElementById('name').value.trim();

    // If the entered name is not valid, show an alert
    if (!isValidName(userName)) {
        alert("الرجاء إدخال اسم صالح يحتوي فقط على الأحرف العربية والإنجليزية والمسافات.");
        return;
    }
    
    // Increment the counter
    incrementCounter();

    // Get the selected choice
    var selectedChoice = document.querySelector('input[name="choice"]:checked').value;

    // Create a URL with parameters
    var url = 'card-view.html?name=' + encodeURIComponent(userName) + '&choice=' + encodeURIComponent(selectedChoice);

    // Open the URL in a new window
    window.open(url, '_blank');
}

// Update the counter value when the page loads
window.onload = function() {
    document.getElementById("counter").textContent = localStorage.getItem("counter") || 0;
};
