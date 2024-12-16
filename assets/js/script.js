document.addEventListener("DOMContentLoaded", function() {
    // Function to get a cookie by name
    function getCookie(name) {
        let cookieArr = document.cookie.split(";");
        for (let i = 0; i < cookieArr.length; i++) {
            let cookiePair = cookieArr[i].split("=");
            if (name === cookiePair[0].trim()) {
                return decodeURIComponent(cookiePair[1]);
            }
        }
        return null;
    }

    // Check if the cookie exists and show banner if not
    if (!getCookie("cookiesAccepted")) {
        document.getElementById("banner").style.display = "block"; // Show the banner
    }

    // Handle Accept button click
    document.getElementById("acceptButton").addEventListener("click", function() {
        document.cookie = "cookiesAccepted=true; max-age=" + 30 * 24 * 60 * 60 + "; path=/";
        document.getElementById("banner").style.display = "none"; // Hide the banner
    });

    // Handle Deny button click
    document.getElementById("denyButton").addEventListener("click", function() {
        document.cookie = "cookiesAccepted=false; max-age=" + 30 * 24 * 60 * 60 + "; path=/";
        document.getElementById("banner").style.display = "none"; // Hide the banner
    });

    // Handle form submission
    document.getElementById('nameForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        const name = document.getElementById('name').value;
        console.log('Name submitted:', name); // Log the name for debugging
        // Redirect to the calendar page and pass the name in the URL
        window.location.href = `calendar.html?name=${encodeURIComponent(name)}`;
    });
});