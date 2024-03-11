
 const profile_icon=document.querySelector('.profile');

 const profiledetails = document.querySelector('.profile-details')
 
 // Add an event listener to the button
 profile_icon.addEventListener('click', function() {
    console.log("cliked on icon")
     // Toggle the 'active' class on the profile element
     profiledetails.classList.toggle('active');
 });

//  profile content
document.addEventListener("DOMContentLoaded", () => {
    console.log("hello world");
    const userContainer = document.querySelector('.user-container');
    const enrolledCoursesList = document.getElementById('enrolled');

    fetch('http://localhost:8006/profile')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Log the fetched data to inspect its structure

        const user = data.user;
        const courses = data.courses;

        // Update user profile data
        userContainer.innerHTML = `
            <h2>My Profile</h2>
            <h3>Username: <span>${user[0].USERNAME}</span></h3>
            <h3>Fullname: <span>${user[0].FULLNAME}</span></h3>
            <h3>Email Id: <span>${user[0].EMAIL}</span></h3>
        `;

        // Update enrolled courses list
        enrolledCoursesList.innerHTML = ''; // Clear existing list items
        courses.forEach(course => {
            const li = document.createElement('li');
            li.textContent = course.COURSE_NAME; // Assuming 'COURSE_NAME' is the property holding the course name
            enrolledCoursesList.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error); // Log any errors that occur during the fetch request
    });
});
