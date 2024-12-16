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
        setTimeout(function() {
            var banner = document.getElementById("banner");
            banner.style.display = "block"; // Show the banner
            banner.style.opacity = 1; // Fade in effect
        }, 5000); // 5000 milliseconds = 5 seconds
    }

    // Handle form submission
    document.getElementById('nameForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        const name = document.getElementById('name').value;
        console.log('Name submitted:', name);
        // Add your logic for what to do after submission, e.g., redirect or display a message
    });

    // Handle the submit button click for navigation
    document.getElementById("submitButton").addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default form submission
        window.location.href = "calendar.html"; // Navigate to calendar.html
    });

    // Handle Accept button click
    document.getElementById("acceptButton").addEventListener("click", function() {
        document.cookie = "cookiesAccepted=true; max-age=" + 30 * 24 * 60 * 60 + "; path=/";
        console.log("Cookies accepted");
        var banner = document.getElementById("banner");
        banner.style.display = "none"; // Hide the banner
    });

    // Handle Deny button click
    document.getElementById("denyButton").addEventListener("click", function() {
        document.cookie = "cookiesAccepted=false; max-age=" + 30 * 24 * 60 * 60 + "; path=/";
        console.log("Cookies denied");
        var banner = document.getElementById("banner");
        banner.style.display = "none"; // Hide the banner
    });
});

document.querySelectorAll('.social-media a').forEach(link => {
    link.addEventListener('click', () => {
        console.log(`Navigating to: ${link.href}`);
    });
});