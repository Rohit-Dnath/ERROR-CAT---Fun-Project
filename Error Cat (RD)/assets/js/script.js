// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function () {
// Fetching elements from the DOM
    const catImage = document.getElementById('catImage'); // Image element to display cat images
    const getCat = document.getElementById('getCat'); // Button to trigger cat image retrieval
    const errorCodeInput = document.getElementById('errorCodeInput'); // Input field for entering HTTP error code

// Function to retrieve and display a cat image based on the provided HTTP error code
    function getCatImage(statusCode) {
        // Constructing the URL for the http.cat API
        catImage.src = `https://http.cat/${statusCode}`; // Set the URL as the image source
    }

// Adding a click event listener to the 'Get Cat' button
    getCat.addEventListener('click', () => {
        const statusCode = parseInt(errorCodeInput.value); // Get the error code from the input field
        getCatImage(statusCode); // Retrieve and display the cat image
    });
});