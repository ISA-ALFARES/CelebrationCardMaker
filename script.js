function printUserName() {
  // Get the value of the name input field
  var userName = document.getElementById('name').value;

  // Get the value of the selected choice
  var selectedChoice = document.querySelector('input[name="choice"]:checked').value;

  // Determine the corresponding image URL based on the selected choice
  var imageURL;
  if (selectedChoice === '1') {
    imageURL = 'images/card.jpeg';
  } else if (selectedChoice === '2') {
    imageURL = 'images/card-2.jpg';
  } else if (selectedChoice === '3') {
    imageURL = 'images/card-3.jpg';
  }

  // Open a new window
  var newWindow = window.open('', '_self');

  // Write the user's name and image to the new window
  var htmlContent = '<!DOCTYPE html>' +
                    '<html lang="en">' +
                    '<head>' +
                    '<meta charset="UTF-8">' +
                    '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
                    '<title>User Information</title>' +
                    '<style>' +
                    'body { font-family: Arial, sans-serif; text-align: center; background-color: #f2f2f2; }' +
                    'h1 { color: #333; margin-top: 20px; }' +
                    'img { max-width: 30%; height: auto; margin-top: 20px; border: 5px solid #ccc; border-radius: 10px; }' +
                    'a.button { display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px; }' +
                    'a.button:hover { background-color: #45a049; }' +
                    '</style>' +
                    '</head>' +
                    '<body>' +
                    '<h1>' + userName + '</h1>' +
                    '<img src="' + imageURL + '" alt="Selected card">' +
                    '<br>' +
                    '<a href="' + imageURL + '" download="selected_card.jpg" class="button">تحميل الصورة</a>' +
                    '</body>' +
                    '</html>';
  
  newWindow.document.write(htmlContent);
  newWindow.document.close(); // Close the document to prevent further writing
}
