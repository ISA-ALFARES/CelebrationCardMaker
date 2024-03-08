// Check if the name is valid
function isValidName(name) {
    var regex = /^[\u0600-\u06FF\s\u0020a-zA-Z]+$/; // Allows only Arabic and English letters and spaces
    return regex.test(name);
}
// Print the user's name and display it on the card
function printUserName() {

    var textBox = document.getElementById("text");
    textBox.value++;
    var userName = document.getElementById('name').value.trim();

    // If the entered name is not valid, show an alert
    if (!isValidName(userName)) {
        alert("Please enter a valid name containing only Arabic and English letters and spaces.");
        return;
    }

    
    // Get the selected choice
    var selectedChoice = document.querySelector('input[name="choice"]:checked').value;

    // Create a URL with parameters
    var url = 'card-view.html?name=' + encodeURIComponent(userName) + '&choice=' + encodeURIComponent(selectedChoice);

    // Open the URL in a new window
    window.open(url, '_blank');
}
