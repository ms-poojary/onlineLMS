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


  // Assuming you're using jQuery for AJAX
  $(document).ready(function() {
    $(".enrollButton").click(function() {
      // Get the courseId from the data attribute
      const urlParams = new URLSearchParams(window.location.search);
    const domainId = urlParams.get('id'); // Get the domain ID from the query parameter
      var courseId = $(this).data("course-id");
      console.log("hello world")
      console.log(domainId+"course "+courseId)
      // Assuming you have the domainId available in your client-side JavaScript

      // Make an AJAX POST request
      $.ajax({
        type: "POST",
        url: "/enroll", // Your server-side endpoint
        data: {
          courseId: courseId,
          domainId: domainId // Assuming you have the domainId available
        },
        success: function(response) {
          // Handle success response from the server
          console.log(response);
          alert("Enrollment successful!"); // You can show a success message to the user
        },
        error: function(xhr, status, error) {
          // Handle error response from the server
          console.error(error);
          alert("Error occurred while enrolling."); // You can show an error message to the user
        }
      });
    });
  });

// document.getElementById('enrollButton').addEventListener('click', function() {
//     // Retrieve course ID and domain ID from query parameters
//     const urlParams = new URLSearchParams(window.location.search);
//     const domainId = urlParams.get('id'); // Get the domain ID from the query parameter
// console.log("enroll clicked");
// console.log("course id "+courseId)
// console.log("domain "+domainId);
//     // Send an AJAX request to the server
//     fetch('/enroll', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ courseId, domainId })
//     })
//     .then(response => {
//         if (response.ok) {
//             console.log('Enrollment successful');
//         } else {
//             console.error('Enrollment failed');
//         }
//     })
//     .catch(error => {
//         console.error('Error enrolling:', error);
//     });
// });
