// // Get all popups
const popups = document.querySelectorAll('.popup');

// Hide all popups initially
popups.forEach(popup => {
    popup.style.display = 'none';
});

// Get all buttons
const buttons = document.querySelectorAll('.start-button');

// Attach click event listeners to buttons
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Show the corresponding popup when the button is clicked
        popups[index].style.display = 'flex';
    });
});

// Get all close buttons
const closeButtons = document.querySelectorAll('.close');

// Attach click event listeners to close buttons
closeButtons.forEach((closeButton, index) => {
    closeButton.addEventListener('click', () => {
        // Hide the corresponding popup when the close button is clicked
        popups[index].style.display = 'none';
    });
});
