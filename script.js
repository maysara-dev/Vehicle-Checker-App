const button = document.getElementById("search-button");

button.addEventListener("click", function (event) {
    event.preventDefault(); 

    const searchInput = document.getElementById("search-input"); 

    if (!searchInput.value.trim()) {
        alert("Please enter a number plate.");
        return;
    }

    // Redirect to results.html with the number plate as a URL parameter
    window.location.href = `results.html?numberplate=${encodeURIComponent(searchInput.value.trim())}`;
});