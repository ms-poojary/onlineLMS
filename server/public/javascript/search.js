// Frontend JavaScript code

// getting all required elements
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const icon = searchWrapper.querySelector(".icon");
let linkTag = searchWrapper.querySelector("a");
let webLink;

// function to fetch suggestions from the server
async function fetchSuggestions() {
    try {
        const response = await fetch('/courses'); // assuming your server is running on the same host
        if (!response.ok) {
            throw new Error('Error fetching suggestions');
        }
        const data = await response.json();
        return data;
        console.log("im searchjs and" +data[0])
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}

fetchSuggestions();
// function to display suggestions
async function showSuggestions() {
    const userData = inputBox.value.trim();
    if (userData) {
        const suggestions = await fetchSuggestions();
        const filteredSuggestions = suggestions.filter(suggestion =>
            suggestion.toLowerCase().startsWith(userData.toLowerCase())
        );
        const html = filteredSuggestions.map(suggestion =>
            `<li>${suggestion}</li>`
        ).join('');
        suggBox.innerHTML = html;
        searchWrapper.classList.add("active");
    } else {
        suggBox.innerHTML = '';
        searchWrapper.classList.remove("active");
    }
}

// event listener for input box keyup event
inputBox.addEventListener('keyup', showSuggestions);

// event listener for suggestion click
suggBox.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        inputBox.value = e.target.textContent;
        searchWrapper.classList.remove("active");
        handleSearch();
    }
});

// function to handle search
function handleSearch() {
    const userData = inputBox.value.trim();
    if (userData) {
       
        window.location.href = '/course?id=';
        linkTag.setAttribute("href", webLink);
        linkTag.click();
    }
}
